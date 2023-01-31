async function handleSayHello(e) {
    e.preventDefault();
    const nameInput = document.getElementById('name');
    const name = document.getElementById('name').value;
    const response = await fetch('/api/hello', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
    });

    nameInput.value = '';
    const { data } = await response.json();
    alert(data);
}

document.getElementById('name-form').addEventListener('submit', handleSayHello);
