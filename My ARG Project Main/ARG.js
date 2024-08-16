// script.js

// Função para validar o formulário
function validateForm() {
    const nameInput = document.getElementById('nome');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('mensagem');
    const messageOutput = document.getElementById('messageOutput');
    
    let isValid = true;
    let errorMessage = '';

    // Validação do nome
    if (nameInput.value.trim() === '') {
        errorMessage += 'Por favor, insira seu nome.\n';
        isValid = false;
    }

    // Validação do email
    if (!validateEmail(emailInput.value)) {
        errorMessage += 'Por favor, insira um email válido.\n';
        isValid = false;
    }

    // Validação da mensagem
    if (messageInput.value.trim() === '') {
        errorMessage += 'Por favor, insira uma mensagem.\n';
        isValid = false;
    }

    // Exibir mensagem de erro
    if (!isValid) {
        messageOutput.textContent = errorMessage;
        messageOutput.style.color = 'red';
    } else {
        messageOutput.textContent = 'Formulário enviado com sucesso!';
        messageOutput.style.color = 'green';
    }

    return isValid;
}

// Função para validar o formato do email
function validateEmail(email) {
    // Expressão regular para validar emails
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
}

// Adicionar evento de envio ao formulário
document.getElementById('contactForm').addEventListener('submit', function(event) {
    if (!validateForm()) {
        event.preventDefault(); // Impedir envio se inválido
    }
});

// Adicionar máscara de input para o nome (exemplo simples)
document.getElementById('nome').addEventListener('input', function(event) {
    // Limitar a entrada a caracteres alfabéticos
    event.target.value = event.target.value.replace(/[^a-zA-Z ]/g, '');
});

// Função para exibir o jumpscare
function showJumpscare() {
    const jumpscare = document.getElementById('jumpscare');
    const screamAudio = document.getElementById('scream-audio');
    
    // Tornar o jumpscare visível
    jumpscare.classList.add('jumpscare-visible');
    
    // Tocar o som de grito
    screamAudio.play();

    // Fechar o jumpscare após alguns segundos
    setTimeout(() => {
        jumpscare.classList.remove('jumpscare-visible');
    }, 3000); // Fecha após 3 segundos
}

// Ativar o jumpscare após 10 segundos na página
setTimeout(showJumpscare, 10000);

// Alternativamente, você pode ativar o jumpscare em resposta a uma ação do usuário
document.getElementById('home').addEventListener('click', showJumpscare);