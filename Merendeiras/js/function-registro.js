const cpf = document.getElementById('cpf');
const text_cpf = document.getElementById('msg-cpf');

function validarCPF(inputCPF) {
    const cpfLimpo = inputCPF.replace(/\D/g, ''); // Remove caracteres não numéricos

    if (cpfLimpo.length !== 11 || cpfLimpo.match(/(\d)\1{10}/)) {
        return false;
    }

    // Verifica o primeiro dígito verificador
    let sum = 0;
    for (let i = 0; i < 9; i++) {
        sum += parseInt(cpfLimpo.charAt(i)) * (10 - i);
    }
    let digit = 11 - (sum % 11);
    if (digit > 9) {
        digit = 0;
    }
    if (parseInt(cpfLimpo.charAt(9)) !== digit) {
        return false;
    }

    // Verifica o segundo dígito verificador
    sum = 0;
    for (let i = 0; i < 10; i++) {
        sum += parseInt(cpfLimpo.charAt(i)) * (11 - i);
    }
    digit = 11 - (sum % 11);
    if (digit > 9) {
        digit = 0;
    }
    if (parseInt(cpfLimpo.charAt(10)) !== digit) {
        return false;
    }

    return true; // CPF válido
}

cpf.addEventListener('input', () => {
    const inputCPF = cpf.value;
    
    if (!validarCPF(inputCPF)) {
        text_cpf.classList.remove("hidden");
        text_cpf.textContent = "CPF inválido";
    }
});
