document.addEventListener('DOMContentLoaded', () => {
    "use strict";

    const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const regUsername = /^(?=[a-z0-9.]{3,16}$)[a-z0-9]+\.?[a-z0-9]+$|^.*@\w+\.[\w.]+$/
    const regPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
    const form = document.querySelector('.form')
    let isValidation = true

    const submit = () => {
        if (window.location.pathname.indexOf('/forgot.html/')) {
            alert('Reset is successful')
        } else {
            alert('Login is successful')
        }
    }

    const validateElement = (element) => {
        switch(element.name) {
            case 'username':
                if(!/\@/.test(element.value)) {
                    if (!regUsername.test(element.value) && element.value !== '') {
                        element.nextElementSibling.textContent = 'Plese enter username or email correct!'
                        isValidation = false
                    } else {
                        element.nextElementSibling.textContent = ''
                        isValidation = true
                    }
                } else {
                    if (!regEmail.test(element.value) && element.value !== '') {
                        element.nextElementSibling.textContent = 'Plese enter email correct!'
                        isValidation = false
                    } else {
                        element.nextElementSibling.textContent = ''
                        isValidation = true
                    }
                }
                
                break
            case 'password':
                if (!regPassword.test(element.value) && element.value !== '') {
                    element.nextElementSibling.textContent = 'Plese enter password correct!'
                    isValidation = false
                } else {
                    element.nextElementSibling.textContent = ''
                    isValidation = true
                }
                break
            default:
                break
        }
    }

    for (let element of form.elements) {
        if (element.tagName !== 'BUTTON') {
            element.addEventListener('blur', () => {
                validateElement(element)
            })
        }
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        
        for (let element of form.elements) {
            if (element.tagName !== 'BUTTON') {
                if (element.value === '') {
                    element.nextElementSibling.textContent = 'Please type empty fields!'
                    isValidation = false
                } else {
                    element.nextElementSibling.textContent = ''
                    isValidation = true
                }
            }
        }
        if (isValidation) {
            submit()
            form.reset()
        }
    })
})  