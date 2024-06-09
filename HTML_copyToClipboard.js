// `Clipboard` API to create the “Copy to clipboard” functionality

const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
}