# UniDevBox - VS Code Extension

<div align="center">

![UniDevBox Logo](https://via.placeholder.com/128x128/4A90E2/FFFFFF?text=UniDevBox)

**Essential developer tools for formatting, encoding, and transforming code directly in VS Code**

[![Version](https://img.shields.io/visual-studio-marketplace/v/unidevbox.unidevbox?color=blue&label=VS%20Code%20Marketplace)](https://marketplace.visualstudio.com/items?itemName=unidevbox.unidevbox)
[![Installs](https://img.shields.io/visual-studio-marketplace/i/unidevbox.unidevbox)](https://marketplace.visualstudio.com/items?itemName=unidevbox.unidevbox)
[![Rating](https://img.shields.io/visual-studio-marketplace/r/unidevbox.unidevbox)](https://marketplace.visualstudio.com/items?itemName=unidevbox.unidevbox)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

[Website](https://unidevbox.com) • [Report Bug](https://github.com/yourusername/unidevbox-vscode/issues) • [Request Feature](https://github.com/yourusername/unidevbox-vscode/issues)

</div>

---

## ✨ Features

Transform your code without leaving VS Code! UniDevBox brings powerful formatting and encoding tools directly into your editor.

### 🎨 Code Formatters
- **JSON** - Format or minify JSON with proper indentation
- **HTML** - Beautify or compress HTML markup
- **CSS** - Format or minify stylesheets
- **JavaScript** - Beautify or compress JS code

### 🔐 Encoders & Decoders
- **Base64** - Encode/decode text to Base64
- **URL** - Encode/decode URL strings

---

## 🚀 Quick Start

### Installation

1. Open VS Code
2. Press `Ctrl+Shift+X` (or `Cmd+Shift+X` on Mac)
3. Search for "UniDevBox"
4. Click **Install**

### Usage

1. **Select** the text you want to format/encode
2. **Open Command Palette** (`Ctrl+Shift+P` or `Cmd+Shift+P`)
3. **Type** "UniDevBox" to see all commands
4. **Choose** your desired command

---

## 📋 Available Commands

| Command | Description | Shortcut |
|---------|-------------|----------|
| `UniDevBox: Format JSON` | Format JSON with 2-space indentation | - |
| `UniDevBox: Minify JSON` | Compress JSON to single line | - |
| `UniDevBox: Format HTML` | Beautify HTML code | - |
| `UniDevBox: Minify HTML` | Compress HTML markup | - |
| `UniDevBox: Format CSS` | Beautify CSS stylesheets | - |
| `UniDevBox: Minify CSS` | Compress CSS code | - |
| `UniDevBox: Format JavaScript` | Beautify JavaScript code | - |
| `UniDevBox: Minify JavaScript` | Compress JS code | - |
| `UniDevBox: Base64 Encode` | Encode text to Base64 | - |
| `UniDevBox: Base64 Decode` | Decode Base64 to text | - |
| `UniDevBox: URL Encode` | Encode text for URLs | - |
| `UniDevBox: URL Decode` | Decode URL-encoded text | - |

---

## 💡 Examples

### Format JSON

**Before:**
```json
{"name":"John","age":30,"city":"New York"}
```

**After:**
```json
{
  "name": "John",
  "age": 30,
  "city": "New York"
}
```

### Base64 Encode

**Before:**
```
Hello, World!
```

**After:**
```
SGVsbG8sIFdvcmxkIQ==
```

---

## 🛠️ Development

### Prerequisites
- Node.js 18+
- VS Code 1.80+

### Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/unidevbox-vscode.git
cd unidevbox-vscode

# Install dependencies
npm install

# Compile TypeScript
npm run compile

# Watch for changes
npm run watch
```

### Testing

1. Press `F5` to open Extension Development Host
2. Test commands in the new VS Code window
3. Check Debug Console for logs

### Building

```bash
# Package extension
npm run package

# This creates: unidevbox-0.1.0.vsix
```

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 Changelog

### [0.1.0] - 2025-12-12

#### Added
- Initial release with 6 core developer tools
- JSON Formatter (format/minify)
- HTML Formatter (format/minify)
- CSS Formatter (format/minify)
- JavaScript Formatter (format/minify)
- Base64 Encoder/Decoder
- URL Encoder/Decoder

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🔗 Links

- **Website:** [unidevbox.com](https://unidevbox.com)
- **VS Code Marketplace:** [UniDevBox Extension](https://marketplace.visualstudio.com/items?itemName=unidevbox.unidevbox)
- **Report Issues:** [GitHub Issues](https://github.com/yourusername/unidevbox-vscode/issues)
- **Request Features:** [GitHub Issues](https://github.com/yourusername/unidevbox-vscode/issues)

---

## 💬 Support

- 📧 Email: support@unidevbox.com
- 🐛 Bug Reports: [GitHub Issues](https://github.com/yourusername/unidevbox-vscode/issues)
- 💡 Feature Requests: [GitHub Issues](https://github.com/yourusername/unidevbox-vscode/issues)

---

<div align="center">

**Made with ❤️ by the UniDevBox Team**

⭐ Star us on GitHub if you find this useful!

</div>
