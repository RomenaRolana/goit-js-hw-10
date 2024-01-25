const feedbackForm = document.querySelector('.feedback-form');

// Завантаження даних з локального сховища при завантаженні сторінки
document.addEventListener('DOMContentLoaded', () => {
    const savedData = localStorage.getItem('feedback-form-state');
    if (savedData) {
        const { email, message } = JSON.parse(savedData);
        feedbackForm.elements.email.value = email || '';
        feedbackForm.elements.message.value = message || '';
    }
});

feedbackForm.addEventListener('input', e => {
    const email = feedbackForm.elements.email.value.trim();
    const message = feedbackForm.elements.message.value.trim();

    const formData = { email, message };
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

feedbackForm.addEventListener('submit', e => {
    e.preventDefault();

    const email = feedbackForm.elements.email.value.trim();
    const message = feedbackForm.elements.message.value.trim();

    // Перевірка заповненості полів
    if (!email || !message) {
        alert('Будь ласка, заповніть усі поля!');
        return;
    }

    console.log({ email, message });

    // Очищення форми та сховища
    feedbackForm.reset();
    localStorage.removeItem('feedback-form-state');
});