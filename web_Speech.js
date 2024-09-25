// Use Web Speech API to create a Text-to-Speech functionality.

let text = 'Hello friends!';
let utterance = new SpeechSynthesisUtterance(text);
speechSynthesis.speak(utterance);
