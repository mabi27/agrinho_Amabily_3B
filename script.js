// Aguarda o DOM estar completamente carregado para executar os scripts
document.addEventListener("DOMContentLoaded", () => {
    
    /* ==========================================================================
       1. FUNCIONALIDADE: MODO ESCURO (DARK MODE)
       ========================================================================== */
    const themeToggleBtn = document.getElementById("theme-toggle");
    
    // Ouvinte de evento de clique para alternar o tema
    themeToggleBtn.addEventListener("click", () => {
        // Alterna a classe '.dark-mode' no elemento body do HTML
        document.body.classList.toggle("dark-mode");
        
        // Altera visualmente o texto/ícone do botão baseado no estado atual
        if (document.body.classList.contains("dark-mode")) {
            themeToggleBtn.textContent = "☀️ Modo Claro";
        } else {
            themeToggleBtn.textContent = "🌙 Modo Escuro";
        }
    });

    /* ==========================================================================
       2. FUNCIONALIDADE: MENSAGEM DINÂMICA (AÇÃO DO USUÁRIO)
       ========================================================================== */
    const saibaMaisBtn = document.getElementById("btn-saiba-mais");
    const dynamicMessageDiv = document.getElementById("dynamic-message");

    // Array com mensagens dinâmicas que alternam a cada clique
    const mensagensAgro = [
        "💡 Sabia que a agricultura de precisão pode reduzir em até 30% o consumo de água na irrigação?",
        "🌱 O Brasil lidera o uso de tecnologias de controle biológico, reduzindo a dependência de defensivos químicos.",
        "🚜 A Integração Lavoura-Pecuária-Floresta (ILPF) já recuperou milhões de hectares de pastagens degradadas.",
        "☀️ Mais de 80% da energia consumida em fazendas tecnológicas atuais já provém de fontes renováveis próprias!"
    ];
    
    let indiceMensagem = 0;

    saibaMaisBtn.addEventListener("click", () => {
        // Insere o texto dinamicamente no DOM
        dynamicMessageDiv.textContent = mensagensAgro[indiceMensagem];
        
        // Adiciona a classe CSS que lida com a animação de opacidade/transição
        dynamicMessageDiv.classList.add("show");

        // Alterna o índice do array para a próxima mensagem no próximo clique
        indiceMensagem = (indiceMensagem + 1) % mensagensAgro.length;
    });

    /* ==========================================================================
       3. FUNCIONALIDADE: VALIDAÇÃO SIMPLES DE FORMULÁRIO
       ========================================================================== */
    const contactForm = document.getElementById("contact-form");
    const formFeedback = document.getElementById("form-feedback");

    contactForm.addEventListener("submit", (event) => {
        // Impede o envio padrão do formulário (recarregar a página)
        event.preventDefault();

        // Captura os valores dos inputs de forma limpa (sem espaços extras nas pontas)
        const nameValue = document.getElementById("name").value.trim();
        const emailValue = document.getElementById("email").value.trim();

        // Limpa classes de feedback anteriores
        formFeedback.className = "form-feedback";
        formFeedback.textContent = "";

        // Validação Simples: Verifica se os campos estão em branco
        if (nameValue === "" || emailValue === "") {
            formFeedback.textContent = "⚠️ Por favor, preencha todos os campos antes de enviar.";
            formFeedback.classList.add("error-msg");
            return; // Interrompe a execução da função
        }

        // Validação Regex Simples para conferir estrutura do E-mail
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailValue)) {
            formFeedback.textContent = "❌ Por favor, insira um e-mail válido (ex: nome@dominio.com).";
            formFeedback.classList.add("error-msg");
            return;
        }

        // Se passar por todas as validações, exibe mensagem de sucesso
        formFeedback.textContent = `🎉 Sucesso! Obrigado por se inscrever, ${nameValue}. Entraremos em contato!`;
        formFeedback.classList.add("success-msg");

        // Reseta o formulário limpando os campos digitados
        contactForm.reset();
    });
});