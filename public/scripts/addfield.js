// Procurar o botão
document.querySelector("#add-time")
.addEventListener('click', clonefield)
// Quando clicar no botão

// Executar uma ação
function clonefield() {
// duplicar os campos. Que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) // boolean: true or false

    const fields= newFieldContainer.querySelectorAll('input')

    fields.forEach(function(field) {
        field.value = ""
    }
    
    
    )
// colocar na pagina: onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}


