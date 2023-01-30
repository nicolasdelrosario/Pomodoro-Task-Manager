export const iconEmail = document.querySelector('.form-email-confirmation');
export const iconSubject = document.querySelector('.form-subject-confirmation');
export const iconMessage = document.querySelector('.form-message-confirmation');

export const emailInput = document.querySelector('.email');
export const subjectInput = document.querySelector('.subject');
export const messageInput = document.querySelector('.message');
export const submitButton = document.querySelector('.submit-button');


function isValidEmail(email) {
  return email.includes('@') && email.includes('.com');
}

export function validateField(field, icon, minLength) {
  if (field.value.length >= minLength && (field !== emailInput || isValidEmail(field.value))) {
    icon.classList.remove("bi-x-circle-fill");
    icon.classList.remove("bi-circle-fill");
    icon.classList.add("bi-check-circle-fill");
  } else {
    event.preventDefault();
    icon.classList.remove("bi-circle-fill");
    icon.classList.remove("bi-check-circle-fill");
    icon.classList.add("bi-x-circle-fill");
  }
}