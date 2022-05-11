const name = document.getElementById('nome')
const nascDt = document.getElementById('nasc')
const cpf = document.getElementById('cpf')
const email = document.getElementById('email')
const logradouro = document.getElementById('logradouro')
const bairro = document.getElementById('bairro')
const number = document.getElementById('numero')
const cep = document.getElementById('cep')
const comp_end = document.getElementById('comp-endereco')
const cert_crim = document.getElementById('cert-crim')
const est_civ = document.getElementsByName('est-civ')
const save = document.getElementById('save')
const cancel = document.getElementById('cancel')
const form = [name, nascDt,cpf, email, logradouro, bairro, number, cep, comp_end, cert_crim, est_civ]


save.addEventListener('click', () => {
    for (let i = 0; i < form.length; i++) {
        if (form[i].value == ""){
            form[i].style.borderColor = 'red'
            form[i].setCustomValidity('Campo obrigatório')
        } else {
            form[i].style.borderColor = 'green'
            form[i].required = 'false'
        }
    }
})

cancel.addEventListener('click', () => {
    window.close()
})

