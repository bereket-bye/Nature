document.getElementById('greetBtn').addEventListener('click', function() {
    const messages = [
        "Hello from Ato Tibebesilesie!",
        "Hi! Sifen Dula says hello!",
        "Keep learning IT, the sky's the limit!",
        "Coding is fun! 🚀"
    ];

    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById('greetingMessage').textContent = randomMessage;
});
