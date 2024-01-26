import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

document.getElementById('promise-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const delay = event.target.elements['delay'].value;
    const state = event.target.elements['state'].value;

    createPromise(delay, state)
        .then(() => {
            iziToast.success({ 
                title: 'Success',
                message: `✅ Fulfilled promise in ${delay}ms` 
            });
        })
        .catch(() => {
            iziToast.error({ 
                title: 'Error',
                message: `❌ Rejected promise in ${delay}ms` 
            });
        });
});

function createPromise(delay, state) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state === 'fulfilled') {
                resolve();
            } else {
                reject();
            }
        }, delay);
    });
}