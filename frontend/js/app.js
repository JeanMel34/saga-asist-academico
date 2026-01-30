document.getElementById('btnTest').addEventListener('click', async () => {
  const res = await fetch('http://localhost:3000/health');
  const data = await res.json();
  document.getElementById('resultado').textContent =
    JSON.stringify(data, null, 2);
});
