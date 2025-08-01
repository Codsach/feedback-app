window.onload = () => {
  fetchMessages();

  document.getElementById('feedbackForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    await fetch('http://localhost:3000/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, message })
    });

    document.getElementById('feedbackForm').reset();
    fetchMessages();
  });
};

async function fetchMessages() {
  const res = await fetch('http://localhost:3000/messages');
  const data = await res.json();

  const list = document.getElementById('messageList');
  list.innerHTML = '';

  data.forEach(msg => {
    const li = document.createElement('li');
    li.textContent = `${msg.name}: ${msg.message}`;
    list.appendChild(li);
  });
}
