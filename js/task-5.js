console.log('Task-5');
const refs = {
    input: document.querySelector('#name-input'),
    content: document.querySelector('#name-output')
}

const onInputChange = (event) => {
    event.currentTarget.value.length > 0
        ? (refs.content.textContent = event.currentTarget.value)
        : (refs.content.textContent = 'Незнакомец')
}
refs.input.addEventListener('input', onInputChange)