
// Execute event listener once

element.addEventListerner('click', () => console.log('I run only once'), {
    once: true
})