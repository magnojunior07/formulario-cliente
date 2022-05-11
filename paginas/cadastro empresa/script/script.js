const name = document.getElementById('nome')
const fund = document.getElementById('nasc')
const cnpj = document.getElementById('cnpj')
const cnae = document.getElementById('cnae')
const email = document.getElementById('email')
const endereco = document.getElementById('endereco')
const setor_jur = document.getElementById('setor-jur')
const cep = document.getElementById('cep')
const comp_end = document.getElementById('comp-endereco')
const comp_renda = document.getElementById('comp-renda')
const save = document.getElementById('save')
const cancel = document.getElementById('cancel')
const form = [name, fund,cnpj, cnae, email, endereco, setor_jur, cep, comp_end, comp_renda]


save.addEventListener('click', () => {
    for (let i = 0; i < form.length; i++) {
        if (form[i].value == ""){
            form[i].style.borderColor = 'red'
            form[i].setCustomValidity('Campo obrigatório')
        } else {
            form[i].style.borderColor = 'green'
        }
    }
})

cancel.addEventListener('click', () => {
    window.close()
})
