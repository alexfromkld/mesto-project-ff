(()=>{"use strict";function e(e,t,n,r){var c=A.querySelector(".card").cloneNode(!0);return c.querySelector(".card__image").src=e.link,c.querySelector(".card__title").textContent=e.name,c.querySelector(".card__image").alt="Фото города ".concat(e.name),c.querySelector(".card__delete-button").addEventListener("click",t),c.querySelector(".card__like-button").addEventListener("click",n),c.querySelector(".card__image").addEventListener("click",(function(){return r(e.link,e.name)})),c}function t(e){e.target.closest(".card").remove()}function n(e){e.target.classList.contains("card__like-button_is-active")?e.target.classList.remove("card__like-button_is-active"):e.target.classList.add("card__like-button_is-active")}var r=document.querySelector(".profile__edit-button"),c=document.querySelector(".profile__add-button"),o=document.querySelector(".popup_type_edit"),i=document.querySelector(".popup_type_new-card");function a(e){e&&(e.classList.add("popup_is-opened"),e.addEventListener("click",l),document.addEventListener("keyup",s))}function u(e){e&&(e.classList.remove("popup_is-opened"),e.removeEventListener("click",l),document.removeEventListener("keyup",s))}function l(e){e.target===e.currentTarget&&u(e.target)}function s(e){"Escape"===e.key&&u(document.querySelector(".popup_is-opened"))}document.querySelector(".popup_is-opened");var d=document.forms.new_place,p=document.forms.edit_profile,m=document.querySelector(".profile__title"),_=document.querySelector(".profile__description"),f=document.querySelector(".popup_type_new-card"),v=document.querySelector(".popup_type_edit"),y=function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent=""},q=function(e){return e.some((function(e){return!e.validity.valid}))},S=function(e,t){var n=e.querySelector(".".concat(t.submitButtonSelector)),r=Array.from(e.querySelectorAll(".".concat(t.inputSelector)));q(r)?(n.disabled=!0,n.classList.add(t.inactiveButtonClass)):(n.disabled=!1,n.classList.remove(t.inactiveButtonClass))},g=function(e,t){var n=Array.from(e.querySelectorAll(".".concat(t.inputSelector)));q(n)||n.forEach((function(n){y(e,n,t)})),S(e,t)},k=document.querySelectorAll(".popup"),b=document.querySelector(".popup_type_image"),L=b.querySelector(".popup__image"),h=b.querySelector(".popup__caption"),C={formSelector:"popup__form",inputSelector:"popup__input",submitButtonSelector:"popup__button",inactiveButtonClass:"popup__button_inactive",inputErrorClass:"popup__input_type_error",errorClass:"popup__form-error_message_active"};function E(e,t){L.src=e,L.alt=t,h.textContent="Фото города ".concat(t),a(b)}k.forEach((function(e){e.classList.add("popup_is-animated"),e.querySelector(".popup__close").addEventListener("click",(function(){return u(e)}))}));var A=document.querySelector("#card-template").content,x=document.querySelector(".places__list");[{name:"Калининград",link:"https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTjWpLEAGsDe-f-HWQhCdhG7IC4ljIKRDTl9AwkKceIYbO2Eq8ukVph8WQQjm-DR-2XlBAwg0A3TM_ZXdH0covl95BpDZC_sGGTzPJfuw"},{name:"Ашдод",link:"https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcTi_y3cMuQF2dFYMliYMfl3-hOkMqj8SaZHaWP-EfiXBvDhrO8SGF2IfobpgoQv6RjCPAPimQKXYfzqsc7Yf_KkBfM708dhOr-2Nn21kg"},{name:"Хайфа",link:"https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTrvyGxWDS2qYKCFtGH9qjAPuRJs7JmtbXHbTYj3pquS8PDgoMwwqm4TgxnKIXH09LIx1nC2MflFpT1-rwtO8f8xGfB5o93zqpTUshcUA"},{name:"Каунас",link:"https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRKivKlMZXcsZxPWvkD89v0CsNuPZdxBL9d4PJz77012baK4IELt0cGKhbGSbWZQVgeNN0B2g1xuJ_HrkmfsNCHYAqtu4GwbnsxBYPYgg"},{name:"Бат-ям",link:"https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQXiIMOaU1oI9LR31dKVKutK2vpgklfIih9h30X9MXAYjhuHDN9FTokFLhKWTh15hqsWR4ZeAF6Raaq9-IzyyxKeD2OUJhGaZhofq-75ts"},{name:"Тель-Авив",link:"https://lh5.googleusercontent.com/p/AF1QipOppRB87fzikkJN5SV6l3ZXSbAicMtBMaPO8Zfc=w1080-h624-n-k-no"}].forEach((function(r){return x.append(e(r,t,n,E))})),d.addEventListener("submit",(function(r){!function(r){r.preventDefault();var c=e({name:d.elements.place_name.value,link:d.elements.link.value},t,n,E);d.reset(),x.prepend(c),u(f)}(r),g(r.srcElement,C)})),p.addEventListener("submit",(function(e){return function(e){e.preventDefault(),m.textContent=p.elements.name.value,_.textContent=p.elements.description.value,u(v)}(e)})),r.addEventListener("click",(function(){var e;(e=p)&&(e.name.value=m.textContent,e.description.value=_.textContent,a(o),g(e,C))})),c.addEventListener("click",(function(){return a(i)})),function(e){Array.from(document.querySelectorAll(".".concat(e.formSelector))).forEach((function(t){(function(e,t){Array.from(e.querySelectorAll(".".concat(t.inputSelector))).forEach((function(n){n.addEventListener("input",(function(){!function(e,t,n){var r=e.querySelector(".".concat(n.submitButtonSelector));t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?y(e,t,n):(r.disabled=!0,r.classList.add(n.inactiveButtonClass),function(e,t,n,r){var c=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),c.textContent=n,c.classList.add(r.errorClass)}(e,t,t.validationMessage,n))}(e,n,t),S(e,t)}))}))})(t,e),S(t,e)}))}(C)})();