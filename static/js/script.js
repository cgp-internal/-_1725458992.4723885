const submitForm = async () => {
    const formData = new FormData(document.getElementById('message-form'));
    const response = await fetch('/process-message', {
        method: 'POST',
        body: formData
    });
    const result = await response.json();
    displayResult(result);
};

const displayResult = (result) => {
    const resultElement = document.getElementById('result');
    resultElement.innerText = result.processedMessage;
};

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('message-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        submitForm();
    });
});