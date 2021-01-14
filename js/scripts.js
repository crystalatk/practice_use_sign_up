'use strict'

function letWhereTextboxAppear () {
    const radioOther = document.querySelector('.radioOther');
    console.log(radioOther)
    radioOther.addEventListener('onclick', function () {
        const inputWhereBox = document.querySelector('#inputWhere');
        console.log(inputWhereBox)
        inputWhereBox.removeAttribute('class', 'is-hidden')

        inputWhereBox.setAttribute('class', 'textarea')
    })
}

letWhereTextboxAppear()