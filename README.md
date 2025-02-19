# GitLingo-Translator

Instantly translate foreign language text on GitHub repositories to English with a simple click. Perfect for developers working with international codebases and documentation. Makes global code collaboration seamless and accessible.

## Features

- 🔍 One-click translation of selected text on GitHub
- 🔄 Toggle between original and translated text
- 💡 Visual indicators for translated content
- 🔒 Secure API key storage
- ⚡ Powered by Google's Gemini API

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/GitLingo-Translator.git
   ```

2. Get a Gemini API key:
   - Visit [Google AI Studio](https://ai.google.dev/)
   - Create an account if you don't have one
   - Generate an API key

3. Load the extension in Chrome:
   - Open Chrome and go to `chrome://extensions/`
   - Enable "Developer mode" in the top right
   - Click "Load unpacked" and select the GitLingo-Translator directory

4. Configure the extension:
   - Click the extension icon in Chrome's toolbar
   - Enter your Gemini API key in the popup
   - Click "Save API Key"

## Usage

1. Visit any GitHub repository
2. Select any foreign language text you want to translate
3. The text will be automatically translated to English
4. Click the translated text to toggle between original and translated versions
5. Look for the dotted underline indicating translated text

## Project Structure

- `manifest.json`: Extension configuration and permissions
- `content.js`: Handles text selection and translation UI
- `background.js`: Manages Gemini API communication
- `popup.html`: API key configuration interface
- `popup.js`: Popup functionality and API key management

## Technical Details

### Content Script (`content.js`)
- Listens for text selection events on GitHub pages
- Manages the translation UI and text toggle functionality
- Communicates with the background script for translations

### Background Script (`background.js`)
- Handles Gemini API integration
- Manages API key storage
- Processes translation requests

### Popup Interface
- Provides user interface for API key configuration
- Securely stores API key in Chrome's storage
- Shows success/error status messages

## Security

- API keys are stored securely using Chrome's storage sync API
- No data is stored except for the API key
- Only works on GitHub domains
- HTTPS-only communication with Gemini API

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Powered by [Google Gemini API](https://ai.google.dev/)
- Built for the GitHub community
