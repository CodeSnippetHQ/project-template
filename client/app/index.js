async function sendRequest(e) {
    e.preventDefault();
    const textInput = document.getElementById('text');
    const text = document.getElementById('text').value;
    const response = await fetch('/api/request', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
    });

    textInput.value = '';
    const { data } = await response.json();
    alert(data);
}

document.getElementById('form').addEventListener('submit', sendRequest);
