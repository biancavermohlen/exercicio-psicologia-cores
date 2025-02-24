document.addEventListener('DOMContentLoaded', function() {
    alert("Página carregada com sucesso!");
});



/* Validação do formulário de login com mensagem de erro na página */
const formLogin = document.getElementById('form-login');
formLogin?.addEventListener('submit', (e) => {
e.preventDefault();
const usuario = document.getElementById('usuario');
const senha = document.getElementById('senha');
const errorDiv = document.getElementById('login-error');
let loginValido = true;
// Valida o campo Usuário
if (usuario.value.trim() === "") {
usuario.style.borderColor = 'red';
loginValido = false;
} else {
usuario.style.borderColor = 'green';
}
// Valida o campo Senha
if (senha.value.trim() === "") {
senha.style.borderColor = 'red';
loginValido = false;
} else {
senha.style.borderColor = 'green';
}

if (!loginValido) {
errorDiv.textContent = 'Preencha todos os campos de login!';
} else {
errorDiv.textContent = '';
alert('Login efetuado com sucesso!');
}
});