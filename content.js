// Listen for text selection on GitHub
document.addEventListener('mouseup', async function(event) {
    const selectedText = window.getSelection().toString().trim();
    if (!selectedText) return;

    // Check if we're on GitHub and the text is not in English
    if (!window.location.hostname.includes('github.com')) return;
    
    // Get the selected element
    const selectedElement = window.getSelection().anchorNode.parentElement;
    
    // Create a unique ID for this translation request
    const translationId = Math.random().toString(36).substring(7);
    selectedElement.dataset.translationId = translationId;

    // Send message to background script for translation
    chrome.runtime.sendMessage({
        action: 'translate',
        text: selectedText,
        translationId: translationId
    }, response => {
        if (response && response.translatedText) {
            // Store original text for toggle functionality
            selectedElement.dataset.originalText = selectedElement.textContent;
            selectedElement.textContent = response.translatedText;
            
            // Add translation indicator
            selectedElement.style.borderBottom = '2px dotted #0366d6';
            selectedElement.title = 'Click to toggle between original and translated text';
            
            // Add click handler for toggling
            selectedElement.onclick = function(e) {
                if (this.dataset.showingTranslation === 'true') {
                    this.textContent = this.dataset.originalText;
                    this.dataset.showingTranslation = 'false';
                } else {
                    this.textContent = response.translatedText;
                    this.dataset.showingTranslation = 'true';
                }
            };
        }
    });
});
