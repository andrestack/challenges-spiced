console.clear();

const input = document.querySelector('[data-js="toUpperCase"]');

input.addEventListener('input', (e) =>{
    input.value = e.target.value.toUppercase();
}) 
