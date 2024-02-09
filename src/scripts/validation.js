export const validationConfig = {
  formSelector: 'popup__form',
  inputSelector: 'popup__input',
  submitButtonSelector: 'popup__button',
  inactiveButtonClass: 'popup__button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__form-error_message_active'
}

//выводит ошибку на конкретной форме и на конкретном инпуте

const showInputError = (formElement, inputElement, errorMessage, validationConfig) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`)
  inputElement.classList.add(validationConfig.inputErrorClass)
  errorElement.textContent = errorMessage;
  errorElement.classList.add(validationConfig.errorClass);
};

//убирает ошибку с конкретных элементов

const hideInputError = (formElement, inputElement, validationConfig) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`)
  inputElement.classList.remove(validationConfig.inputErrorClass);
  errorElement.classList.remove(validationConfig.errorClass);
  errorElement.textContent = '';
}

//проверка инпута на валидность если не прошло -> покажи ошибку, если прошло -> убери

export const isValid = (formElement, inputElement, validationConfig) => {
  const buttonElement = formElement.querySelector(`.${validationConfig.submitButtonSelector}`);

  if (inputElement.validity.patternMismatch) {
    inputElement.setCustomValidity(inputElement.dataset.errorMessage)
  } else {
    inputElement.setCustomValidity("")
  }

  if (!inputElement.validity.valid) {
    buttonElement.disabled = true;
    buttonElement.classList.add(validationConfig.inactiveButtonClass);
    showInputError(formElement, inputElement, inputElement.validationMessage, validationConfig);
  } else {
    hideInputError(formElement, inputElement, validationConfig)
  }
};

//добавляет инпутам конкретной формы слушатели на изменения значения и сразу проверяет валидность

const setEventListeners = (formElement, validationConfig) => {
  const inputList = Array.from(formElement.querySelectorAll(`.${validationConfig.inputSelector}`))
  inputList.forEach(inputElement => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement, validationConfig);
      toggleButtonState(formElement, validationConfig);
    })
  })
}

//подключает валидацию

export const enableValidation = (validationConfig) => {
  const formList = Array.from(document.querySelectorAll(`.${validationConfig.formSelector}`));
  formList.forEach(formElement => {
    setEventListeners(formElement, validationConfig);
    toggleButtonState(formElement, validationConfig);
  })
}

//проверка инпута на валидность

const hasInvalidInput = inputList => {
  return inputList.some(inputElement => {
    return !inputElement.validity.valid;
  })
}

//проверка валидности инпутов в случае положительной проверки кнопка активна, в противном - нет

const toggleButtonState = (formElement, validationConfig) => {
  const buttonElement = formElement.querySelector(`.${validationConfig.submitButtonSelector}`);
  const inputList = Array.from(formElement.querySelectorAll(`.${validationConfig.inputSelector}`));

  if(hasInvalidInput(inputList)) {
    buttonElement.disabled = true;
    buttonElement.classList.add(validationConfig.inactiveButtonClass)
  } else {
    buttonElement.disabled = false;
    buttonElement.classList.remove(validationConfig.inactiveButtonClass);
  }
}

//очищает ошибки у конкретной формы

export const clearValidation = (formElement, validationConfig) => {
  const inputList = Array.from(formElement.querySelectorAll(`.${validationConfig.inputSelector}`));
  const buttonElement = formElement.querySelector(`.${validationConfig.submitButtonSelector}`);
  inputList.forEach(inputElement => {
    inputElement.setCustomValidity('');
    hideInputError(formElement, inputElement, validationConfig);
  })
  buttonElement.disabled = true;
  buttonElement.classList.add(validationConfig.inactiveButtonClass);
}
