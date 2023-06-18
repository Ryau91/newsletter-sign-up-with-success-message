/*
1. Find the element we want to click (subscribe)
2. Apply a click event to that element
3. Alert a message to the user when the element is clicked
*/
const form = document.querySelector("#email-box");
const email = document.querySelector("#email");
const emailErrorMessage = document.querySelector("#email-error-message");
const submittedEmailAddress = document.querySelector("#submitted-email-address");

const re = /^(.+)@(.+)$/;

const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-dismiss-button]');
const overlay = document.getElementById('overlay');


openModalButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        // test if email address is valid
        if (!(re.test(email.value))) {
            // let error styling be added
            emailErrorMessage.classList.add('invalid');
            email.classList.add('invalid');
        } else {
            // update the email address in the pop-up
            emailErrorMessage.classList.remove('invalid');
            email.classList.remove('invalid');
            submittedEmailAddress.innerHTML = email.value;

            // open modal
            const modal = document.querySelector(button.dataset.modalTarget)
            openModal(modal)
        }
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})


function openModal(modal) {
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    modal.classList.remove('active')
    overlay.classList.remove('active')
}