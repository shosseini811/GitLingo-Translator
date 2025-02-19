// Initialize Gemini API
let API_KEY = '';

// Load API key from storage
chrome.storage.sync.get(['geminiApiKey'], function(result) {
    API_KEY = result.geminiApiKey;
});

// Listen for messages from content script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'translate') {
        translateText(request.text)
            .then(translatedText => {
                sendResponse({ translatedText: translatedText });
            })
            .catch(error => {
                console.error('Translation error:', error);
                sendResponse({ error: 'Translation failed' });
            });
        return true; // Required for async response
    }
});

async function translateText(text) {
    if (!API_KEY) {
        throw new Error('API key not set');
    }

    const url = 'https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent';
    
    const response = await fetch(`${url}?key=${API_KEY}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            contents: [{
                parts: [{
                    text: `Translate the following text to English: "${text}"`
                }]
            }]
        })
    });

    if (!response.ok) {
        throw new Error('Translation request failed');
    }

    const data = await response.json();
    return data.candidates[0].content.parts[0].text;
}
