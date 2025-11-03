document.addEventListener("DOMContentLoaded", () => {
  const greetBtn = document.getElementById('greetBtn');
  if (greetBtn) {
    greetBtn.addEventListener('click', () => {
      const messages = [
        "Hi there! Sifen says: Keep going and dreaming big!",
        "Remember — creativity + curiosity = innovation!",
        "You’re doing amazing things, keep it up!"
      ];
      const randomMessage = messages[Math.floor(Math.random() * messages.length)];
      document.getElementById('greetingMessage').textContent = randomMessage;
    });
  }
});
