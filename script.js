const btn = document.getElementById('btn');
const panel = document.querySelector('.container');
const feedback = document.querySelectorAll('.feedback');

let selectedFeedback = 'Neutral';

feedback.forEach(el => {
    el.addEventListener('click', () => {
        removeActive();
        el.classList.toggle('active');
        selectedFeedback = el.id;
    })
});

function removeActive() {
    for (let i = 0; i < feedback.length; i++) {
        feedback[i].classList.remove('active');
    }
}

btn.addEventListener('click', () => {
    panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank you!</strong>
        <br>
        <strong>Feedback: ${selectedFeedback} </strong>
        <p>We'll use your feedback to improve our customer support</p>
    `;

})
