// script.js

// Função para validar o formulário
function validateForm() {
    const nameInput = document.getElementById('nome');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('mensagem');
    const messageOutput = document.getElementById('messageOutput');
    
    let isValid = true;  // Variável para rastrear se o formulário é válido
    let errorMessage = '';  // String para armazenar mensagens de erro

    // Validação do nome
    if (nameInput.value.trim() === '') {
        errorMessage += 'Por favor, insira seu nome.\n'; // Adiciona mensagem de erro se o nome estiver vazio
        isValid = false;  // Define o formulário como inválido
    }

    // Validação do email usando expressão regular
    if (!validateEmail(emailInput.value)) {
        errorMessage += 'Por favor, insira um email válido.\n'; // Mensagem de erro se o email for inválido
        isValid = false;  // Define o formulário como inválido
    }

    // Validação da mensagem
    if (messageInput.value.trim() === '') {
        errorMessage += 'Por favor, insira uma mensagem.\n'; // Adiciona mensagem de erro se a mensagem estiver vazia
        isValid = false;  // Define o formulário como inválido
    }

    // Exibir mensagem de erro ou sucesso
    messageOutput.textContent = errorMessage || 'Formulário enviado com sucesso!'; // Mostra mensagem apropriada
    messageOutput.style.color = isValid ? 'green' : 'red';  // Define a cor do texto com base na validade

    return isValid;  // Retorna a validade do formulário
}

// Função para validar o formato do email
function validateEmail(email) {
    // Expressão regular para validar emails
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);  // Retorna verdadeiro se o email for válido
}

// Adicionar evento de envio ao formulário
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            if (!validateForm()) {
                event.preventDefault(); // Impedir envio se o formulário for inválido
            }
        });
    }

    // Adicionar máscara de input para o nome (exemplo simples)
    const nameInput = document.getElementById('nome');
    if (nameInput) {
        nameInput.addEventListener('input', function(event) {
            // Limitar a entrada a caracteres alfabéticos
            event.target.value = event.target.value.replace(/[^a-zA-Z ]/g, '');  // Remove caracteres não alfabéticos
        });
    }

    // Função para exibir o jumpscare em vídeo
    function showJumpscare() {
        const jumpscare = document.getElementById('jumpscare');
        const jumpscareVideo = document.getElementById('jumpscareVideo');

        // Tornar o jumpscare visível
        jumpscare.classList.add('jumpscare-visible');

        // Reproduzir o vídeo
        jumpscareVideo.play();

        // Fechar o jumpscare após 5 segundos
        setTimeout(() => {
            jumpscare.classList.remove('jumpscare-visible');
            jumpscareVideo.pause(); // Para o vídeo quando o jumpscare é ocultado
            jumpscareVideo.currentTime = 0; // Reinicia o vídeo para o início
        }, 5000); // 5000 milissegundos = 5 segundos
    }

    // Ativar o jumpscare ao clicar no botão
    const jumpscareButton = document.getElementById('jumpscareButton');
    if (jumpscareButton) {
        jumpscareButton.addEventListener('click', showJumpscare);
    }
});

// Função para mostrar o código oculto ao clicar nas palavras corretas
document.addEventListener('DOMContentLoaded', function() {
    const hiddenLinks = document.querySelectorAll('.hidden-link');
    const codeOutput = document.getElementById('codeOutput');
    let codeSequence = '';

    hiddenLinks.forEach(link => {
        link.addEventListener('click', function() {
            const code = link.getAttribute('data-code');
            codeSequence += code;
            codeOutput.textContent = `Código parcial: ${codeSequence}`;
        });
    });
});

// Função para verificar o código completo inserido pelo usuário
function checkCode() {
    const codeInput = document.getElementById('codeInput').value;
    const correctCode = '3795'; // Código correto a ser descoberto pelo usuário
    const codeMessage = document.getElementById('codeMessage');

    if (codeInput === correctCode) {
        codeMessage.textContent = 'Você desbloqueou o segredo!';
        codeMessage.style.color = 'green';
    } else {
        codeMessage.textContent = 'Código incorreto. Tente novamente.';
        codeMessage.style.color = 'red';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const audioElement = new Audio(media/Carente.mp3); // Certifique-se de que o caminho para o áudio está correto
    audioElement.loop = true; // Define para o áudio se repetir
    audioElement.volume = 0.3; // Volume ajustado para ser apenas uma presença de fundo
    audioElement.play();

    // Função para mudar o áudio após certo tempo
    setTimeout(() => {
        audioElement.src = media/Nidere.mp3; // Troca para um áudio mais assustador
        audioElement.play();
    }, 30000); // Troca o som após 30 segundos
});