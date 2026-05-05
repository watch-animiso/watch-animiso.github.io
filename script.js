// ── Starfield ──
const starsEl = document.getElementById('stars');
for (let i = 0; i < 140; i++) {
  const s = document.createElement('div');
  s.className = 'star';
  const size = Math.random() * 3 + 0.5;
  s.style.cssText = `
    left: ${Math.random() * 100}%;
    top: ${Math.random() * 80}%;
    width: ${size}px;
    height: ${size}px;
    --d: ${(Math.random() * 3 + 1.5).toFixed(1)}s;
    animation-delay: ${(Math.random() * 4).toFixed(1)}s;
    opacity: ${Math.random() * 0.6 + 0.1};
  `;
  starsEl.appendChild(s);
}

// Add to waitlist
function addToWaitlist(email) {
  const URL = "https://discord.com/api/webhooks/1501221397504983243/w4kd8sEvWfIvUQIr6vJgG5MgHXpCrfurw7c7TVSY9XVlRDymZqSvRC54rvGbwPEHw2Rs";
  const PAYLOAD = { username: "WAITLIST-TRACKER", content: `A user is interested, their E-mail: ${email}` };
  fetch(URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(PAYLOAD)
  })
}

// ── Notify Button ──
function notifyMe(btn) {
  const input = btn.previousElementSibling;
  if (!input.value.includes('@')) {
    input.style.borderRight = '2px solid #C0392B';
    input.placeholder = 'Enter a valid email!';
    return;
  }
  addToWaitlist(input.value);
  btn.textContent = '⚓ ANCHORED!';
  btn.style.background = '#27AE60';
  btn.style.color = 'white';
  input.value = '';
  input.placeholder = "You're on the crew list! 🍖";
  input.disabled = true;
  btn.disabled = true;
}
