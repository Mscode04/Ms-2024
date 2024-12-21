
function sendReaction(emoji) {
    const modal = document.getElementById('modal');
    const overlay = document.getElementById('overlay');
    const modalMessage = document.getElementById('modalMessage');

    modalMessage.innerText = `Thank you for your reaction: ${emoji} - MsDev`;
    modal.classList.add('show');
    overlay.classList.add('show');
}

function closeModal() {
    const modal = document.getElementById('modal');
    const overlay = document.getElementById('overlay');

    modal.classList.remove('show');
    overlay.classList.remove('show');
}