// Event: Button click + double-click
const ctaBtn = document.getElementById('ctaBtn');
const secretMsg = document.getElementById('secret-message');

ctaBtn.addEventListener('click', () => {
  ctaBtn.textContent = "Thanks for joining!";
  ctaBtn.style.backgroundColor = "#28a745";
});

ctaBtn.addEventListener('dblclick', () => {
  secretMsg.style.display = 'block';
});

// Tabs
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    tabContents.forEach(content => content.classList.remove('active'));
    document.getElementById(tab.dataset.tab).classList.add('active');
  });
});

// Keypress detection: 'd' = dark mode toggle
document.addEventListener('keydown', (e) => {
  if (e.key.toLowerCase() === 'd') {
    document.body.classList.toggle('dark');
  }
});

// Form validation
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailFeedback = document.getElementById('emailFeedback');
const passwordFeedback = document.getElementById('passwordFeedback');

emailInput.addEventListener('input', () => {
  const valid = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(emailInput.value);
  emailFeedback.textContent = valid ? '✅ Valid email' : '❌ Invalid email';
  emailFeedback.className = valid ? 'feedback valid' : 'feedback invalid';
});

passwordInput.addEventListener('input', () => {
  const valid = passwordInput.value.length >= 8;
  passwordFeedback.textContent = valid ? '✅ Strong password' : '❌ Too short';
  passwordFeedback.className = valid ? 'feedback valid' : 'feedback invalid';
});

document.getElementById('signupForm').addEventListener('submit', (e) => {
  if (!emailInput.value || passwordInput.value.length < 8) {
    e.preventDefault();
    alert('Please fix the form errors before submitting.');
  }
});
