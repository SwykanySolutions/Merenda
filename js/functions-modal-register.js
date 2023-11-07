// Formulário de Registro
const form_registro = document.getElementById("register-aluno");

// Inputs formulário registro

/**
 * @type HTMLInputElement | null
 */
const input_registro_nome = document.getElementById("nome");

/**
 * @type HTMLInputElement | null
 */
const input_registro_sobrenome = document.getElementById("sobrenome");

/**
 * @type HTMLInputElement | null
 */
const input_registro_data_de_nascimento = document.getElementById("data-de-nascimento");

/**
 * @type HTMLInputElement | null
 */
const input_registro_user = document.getElementById("user");

/**
 * @type HTMLInputElement | null
 */
const input_registro_ra = document.getElementById("ra");

/**
 * @type HTMLInputElement | null
 */
const input_registro_email = document.getElementById("email");

/**
 * @type HTMLInputElement | null
 */
const input_registro_confirm_email = document.getElementById("confirm-email");

/**
 * @type HTMLInputElement | null
 */
const input_registro_senha = document.getElementById("register-password");

/**
 * @type HTMLInputElement | null
 */
const input_registro_confirm_senha = document.getElementById("confirm-register-password");

/**
 * @type HTMLInputElement | null
 */
const input_registro_terms_checkbox = document.getElementById("terms-checkbox");


// Links 
const link_open_terms = document.getElementById("link-terms");
    
// Buttons
const btn_accept_terms = document.getElementById("btn-accept-terms");
const btn_decline_terms = document.getElementById("btn-decline-terms");

// Select curso
const select_curso = document.getElementById("select-curso");

//Modals 
const Modal_registro = document.getElementById("registration-modal");
const Modal_login = document.getElementById("authentication-modal");
const Modal_terms = document.getElementById("terms-modal");

// Alert 

const Alert_sucess_registro = document.getElementById("alert-sucess-registro");
const Alert_error_registro = document.getElementById("alert-error-registro");

// componentes puros 
const infoNome = document.getElementById("infoNome");
const infoSobrenome = document.getElementById("infoSobrenome");
const infoDataDeNascimento = document.getElementById("infoDataDeNascimento");
const infoUser = document.getElementById("infoUser");
const infoCurso = document.getElementById("info-select-curso");
const component_nivel_senha = document.getElementById("component-nivel-senha");
const infoEmail = document.getElementById("infoEmail");
const infoConfirmEmail = document.getElementById("infoConfirmEmail");
const nivel_senha = document.getElementById("nivel-senha");
const infoConfimPassword = document.getElementById("infoConfimPassword");
const info_senha = document.getElementById("info-senha");
const info_ra = document.getElementById("infoRA");

// Variaveis

// Validação de campos
const validation = [];

/**
 *  Função caucula o nível de força de uma senha e retorna a porgemtagem dele em formato numérico
 * 
 * @param {string} password 
 * @returns {number} 
 */
function calculatePasswordStrength(password) {

    // Inicializa variáveis para acompanhar os critérios atendidos
    let lengthRequirement = false;
    let hasUppercase = false;
    let hasLowercase = false;
    let hasNumber = false;
    let hasSpecialCharacter = false;

    // Verifica cada critério individualmente
    for (let char of password) {
        if (/[A-Z]/.test(char)) {
            hasUppercase = true;
        } else if (/[a-z]/.test(char)) {
            hasLowercase = true;
        } else if (/[0-9]/.test(char)) {
            hasNumber = true;
        } else if (/[!@#$%^&*]/.test(char)) {
            hasSpecialCharacter = true;
        }
    }

    if (password.length >= 8) {
        lengthRequirement = true;
    }

    // Calcula a pontuação com base nos critérios atendidos
    return  ( ( hasUppercase + hasLowercase + hasNumber + hasSpecialCharacter + lengthRequirement ) / 5 ) * 100;
}

/**
 * Função que atualiza os valores das progress bars
 * 
 * @param {string | HTMLElement} id 
 * @param {...string} classes 
 * @returns 
 */
function AtualizarProgressbar(id,...classes) {
    const progressbar = (typeof id === 'string') ? document.getElementById(id) : id;
    if (!progressbar.classList.contains(classes[0])) {
        if (progressbar.classList.contains("w-[0%]")) {
            progressbar.classList.remove("w-[0%]", "bg-red-600", "dark:bg-red-500");
            progressbar.classList.add(...classes);
        } else if (progressbar.classList.contains("w-1/5")) {
            progressbar.classList.remove("w-1/5", "bg-red-600", "dark:bg-red-500");
            progressbar.classList.add(...classes);
        } else if (progressbar.classList.contains("w-2/5")) {
            progressbar.classList.remove("w-2/5", "bg-red-600", "dark:bg-red-500");
            progressbar.classList.add(...classes);
            return;
        } else if (progressbar.classList.contains("w-3/5")) {
            progressbar.classList.remove("w-3/5", "bg-orange-600", "dark:bg-orange-500");
            progressbar.classList.add(...classes);
            return;
        } else if (progressbar.classList.contains("w-4/5")) {
            progressbar.classList.remove("w-4/5", "bg-yellow-600", "dark:bg-yellow-500");
            progressbar.classList.add(...classes);
            return;
        } else if (progressbar.classList.contains("w-full")) {
            progressbar.classList.remove("w-full", "bg-green-600", "dark:bg-green-500");
            progressbar.classList.add(...classes);
            return;
        } else {
            progressbar.classList.add(...classes);
        }
    }

}

/**
 * Calcula a força da senha da usuario
 * 
 * @param {Event} e 
 */
function ProgressBarPasswordStrength(e) {
    if (component_nivel_senha.classList.contains("hidden")) {
        component_nivel_senha.classList.remove("hidden");
        
    }
    if (info_senha.classList.contains("hidden")) {
        info_senha.classList.remove("hidden");
    }
    const value_password = e.target.value;
    const nivel = calculatePasswordStrength(value_password);
    password_is_secure = false;
    switch (nivel) {
        case 20:
            info_senha.style.color = "red";
            info_senha.innerText = "A senha muito fraca";
            AtualizarProgressbar(nivel_senha, "w-1/5","bg-red-600", "dark:bg-red-500");
            break;
        case 40:
            info_senha.style.color = "red";
            info_senha.innerText = "A senha fraca";
            AtualizarProgressbar(nivel_senha, "w-2/5","bg-red-600", "dark:bg-red-500");
            break;
            case 60:
            info_senha.style.color = "orange";
            info_senha.innerText = "A senha media";
            AtualizarProgressbar(nivel_senha, "w-3/5", "bg-orange-600", "dark:bg-orange-500");
            break;
        case 80:
            info_senha.style.color = "yellow";
            info_senha.innerText = "A senha um pouco forte";
            AtualizarProgressbar(nivel_senha, "w-4/5", "bg-yellow-600", "dark:bg-yellow-500");  
            break;
        case 100:
            info_senha.style.color = "green";
            info_senha.innerText = "A senha forte";
            password_is_secure = true;
            AtualizarProgressbar(nivel_senha, "w-full", "bg-green-600", "dark:bg-green-500");
            break;
    
        default:
            info_senha.style.color = "red";
            info_senha.innerText = "A senha não pode ter menos que 8 digitos";
            AtualizarProgressbar(nivel_senha, "w-[0%]", "bg-red-500");
            break;
    }
    return;
}

// function nome
input_registro_nome.addEventListener("input", () => {   
    if (input_registro_nome.value == "") {
        if (!infoNome.classList.contains("text-red-600")) {
            infoNome.classList.add("text-red-600");
        }
        if (infoNome.classList.contains("text-green-600")) {
            infoNome.classList.remove("text-green-600");
        }
        infoNome.textContent = "O nome não pode ser vazio.";
        validation[0] = false;
        return;
    } else {
        if (infoNome.classList.contains("text-red-600")) {
            infoNome.classList.remove("text-red-600");
        }
        if (!infoNome.classList.contains("text-green-600")) {
            infoNome.classList.add("text-green-600");
        }
        validation[0] = true;
        infoNome.textContent = "Nome válido!";
    }
});

// function sobrenome
input_registro_sobrenome.addEventListener("input", () => {   
    if (input_registro_sobrenome.value == "") {
        if (!infoSobrenome.classList.contains("text-red-600")) {
            infoSobrenome.classList.add("text-red-600");
        }
        if (infoSobrenome.classList.contains("text-green-600")) {
            infoSobrenome.classList.remove("text-green-600");
        }
        infoSobrenome.textContent = "O sobrenome não pode ser vazio.";
        validation[1] = false;
        return;
    } else {
        if (infoSobrenome.classList.contains("text-red-600")) {
            infoSobrenome.classList.remove("text-red-600");
        }
        if (!infoSobrenome.classList.contains("text-green-600")) {
            infoSobrenome.classList.add("text-green-600");
        }
        validation[1] = true;
        infoSobrenome.textContent = "Sobrenome válido!";
        return;
    }
});

// function data de nascimento
input_registro_data_de_nascimento.addEventListener("blur", (e) => {
    const data = new Date(e.target.value);
    const data_min = new Date(e.target.getAttribute("min"));
    validation[2] = false;
    if (data_min > data) {
        e.target.value = e.target.getAttribute("min");
        if (!infoDataDeNascimento.classList.contains("text-red-600")) {
            infoDataDeNascimento.classList.add("text-red-600");
        }
        if (infoDataDeNascimento.classList.contains("text-green-600")) {
            infoDataDeNascimento.classList.remove("text-green-600");
        }
        infoDataDeNascimento.textContent = "A data de nascimento não pode ser abaixo de 01/01/1900.";
        validation[2] = false;
        return;  
    } else if (e.target.value == "" ){
        if (!infoDataDeNascimento.classList.contains("text-red-600")) {
            infoDataDeNascimento.classList.add("text-red-600");
        }
        if (infoDataDeNascimento.classList.contains("text-green-600")) {
            infoDataDeNascimento.classList.remove("text-green-600");
        }
        infoDataDeNascimento.textContent = "A data de nascimento não pode ser vazia.";
        return;
    } else {
        if (infoDataDeNascimento.classList.contains("text-red-600")) {
            infoDataDeNascimento.classList.remove("text-red-600");
        }
        if (!infoDataDeNascimento.classList.contains("text-green-600")) {
            infoDataDeNascimento.classList.add("text-green-600");
        }
        validation[2] = true;
        infoDataDeNascimento.textContent = "Data de nascimento válida!";
        return;
    }
    
});

// function validation username
input_registro_user.addEventListener("input", async (e) => {
    
    if (e.target.value == "") {
        infoUser.classList.remove("text-green-600");
        infoUser.classList.add("text-red-600");
        infoUser.textContent = "Usuário não pode estar vazio";
        validation[3] = false;
        return
    }
    
    const requestData = { user: e.target.value };
    
    const query = Object.keys(requestData)
    .map(key => `${key}=${encodeURIComponent(requestData[key])}`)
    .join('&');
    try {
        const response = await fetch("/Merenda/Server/Validations/Auth/User.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded", // Defina o tipo de conteúdo apropriado
            },
            body: query,
        });
        
        if (response.ok) {
            const result = await response.json();
            const infoUser = document.getElementById("infoUser");
            if (!result.status) {
                infoUser.classList.remove("text-green-600");
                infoUser.classList.add("text-red-600");
                infoUser.textContent = "Usuário não disponível";
                validation[3] = false;
                return;
            } else {
                infoUser.classList.add("text-green-600");
                infoUser.classList.remove("text-red-600");
                infoUser.textContent = "Usuário disponível";
                validation[3] = true;
                return
            }
        } else {
            infoUser.classList.remove("text-green-600");
            infoUser.classList.add("text-red-600");
            infoUser.textContent = "Usuário não disponível";
            validation[3] = false;
            throw new Error("Network response was not ok.");
        }
    } catch (error) {
        if (typeof error === "string") {
            console.error(error);
            infoUser.classList.remove("text-green-600");
            infoUser.classList.add("text-red-600");
            infoUser.textContent = "Usuário não disponível";
            validation[3] = false;
            return
        } else {
            console.log(error);
            infoUser.classList.remove("text-green-600");
            infoUser.classList.add("text-red-600");
            infoUser.textContent = "Usuário não disponível";
            validation[3] = false;
            return
        }
        
    }
});

// function validation curso selecionado
select_curso.addEventListener("blur", (e) => {  
    if (select_curso.value == "") {
        if (!infoCurso.classList.contains("text-red-600")) {
            infoCurso.classList.add("text-red-600");
        }
        if (infoCurso.classList.contains("text-green-600")) {
            infoCurso.classList.remove("text-green-600");
        }
        infoCurso.textContent = "Você deve estar cursando algum curso de Etec para se cadastrar.";
        validation[4] = false;
        return;
    } else {
        if (infoCurso.classList.contains("text-red-600")) {
            infoCurso.classList.remove("text-red-600");
        }
        if (!infoCurso.classList.contains("text-green-600")) {
            infoCurso.classList.add("text-green-600");
        }
        infoCurso.textContent = "Obrigado por informar seu curso.";
        validation[4] = true;
        return;
    }
})

/**
 * Função de validação de RA (Registro do Aluno)
 * 
 * @param {HTMLInputElement} input 
 */
async function validarRA(input) {
    // Substitua todos os caracteres que não são números ou traços por uma string vazia
    input.value = input.value.replace(/[^0-9-]/g, '');

    const retorno = await fetch("/Merenda/Server/Validations/Auth/Ra.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `ra=${encodeURIComponent(input.value)}`
    })
    .then( async (retorno) => { return retorno })
    .catch((err) =>{ console.error(err); });
    
    if (retorno.ok) {
        const result = await retorno.json();
        if (!result.status) {
            if (!info_ra.classList.contains("text-red-600")) {
                info_ra.classList.add("text-red-600");
            }
            if (info_ra.classList.contains("text-green-600")) {
                info_ra.classList.remove("text-green-600");
            }
            if (info_ra.classList.contains("hidden")) {
                info_ra.classList.remove("hidden");
            }
            info_ra.textContent = "O RA já existe!";
            validation[5] = false;
            return;
        }
    }
    
    // Você pode adicionar validações adicionais aqui, se necessário.
    
    // Exemplo de validação de tamanho máximo do RA (15 caracteres):
    if (input.value.length > 15) {
        if (info_ra.classList.contains("text-green-600")) {
            info_ra.classList.remove("text-gree-600");
        }
        if (!info_ra.classList.contains("text-red-600")) {
            info_ra.classList.add("text-red-600");
        }
        if (info_ra.classList.contains("hidden")) {
            info_ra.classList.remove("hidden");
        }
        validation[5] = false;
        info_ra.textContent = "RA deve ter no máximo 15 caracteres.";
        return;
    } else if (input.value.length < 1) {
        if (info_ra.classList.contains("text-green-600")) {
            info_ra.classList.remove("text-green-600");
        }
        if (!info_ra.classList.contains("text-red-600")) {
            info_ra.classList.add("text-red-600");
        }
        if (info_ra.classList.contains("hidden")) {
            info_ra.classList.remove("hidden");
        }
        validation[5] = false;
        info_ra.textContent = "Não é permitido letras ou deixar o ra em branco";
        return;
    } else {
        if (info_ra.classList.contains("text-red-600")) {
            info_ra.classList.remove("text-red-600");
        }
        if (!info_ra.classList.contains("text-green-600")) {
            info_ra.classList.add("text-green-600");
        }
        if (info_ra.classList.contains("hidden")) {
            info_ra.classList.remove("hidden");
        }
        info_ra.textContent = "O RA está correto!";
        validation[5] = true;
        return;
    }
}

// function validation email
input_registro_email.addEventListener("blur", async (e) => {

    /**
     * @type string
     */
    const email = e.target.value;

    const retorno = await fetch("/Merenda/Server/Validations/Auth/Email.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded", // Defina o tipo de conteúdo apropriado
        },
        body: `email=${encodeURIComponent(email)}`,
    })
    .then(async (resp) => { if(resp.ok){ return await resp.json(); } })
    .catch((err) => { console.error(err); throw err;});

    if (!retorno.status) {
        if (!infoEmail.classList.contains("text-red-600")) {
            infoEmail.classList.add("text-red-600");
        }
        if (infoEmail.classList.contains("text-green-600")) {
            infoEmail.classList.remove("text-green-600");
        }
        infoEmail.textContent = "E-mail já cadastrado";
        validation[6] = false;
        return;
    }

    if (!email.includes("@etec.sp.gov.br")) {
        if (!infoEmail.classList.contains("text-red-600")) {
            infoEmail.classList.add("text-red-600");
        }
        if (infoEmail.classList.contains("text-green-600")) {
            infoEmail.classList.remove("text-green-600");
        }
        validation[6] = false;
        infoEmail.textContent = "E-mail inválido";
        return;
    } else {
        if (infoEmail.classList.contains("text-red-600")) {
            infoEmail.classList.remove("text-red-600");
        }
        if (!infoEmail.classList.contains("text-green-600")) {
            infoEmail.classList.add("text-green-600");
        }
        infoEmail.textContent = "E-mail válido";
        validation[6] = true;
        return;
    }
});


// Functiom Confirm Email
input_registro_confirm_email.addEventListener("blur", (e) => {
    
    /**
     * @type string
     */
    const confirm_email = e.target.value;;
    validation[7] = false;
    if (!confirm_email.includes("@etec.sp.gov.br")) {
        if (!infoConfirmEmail.classList.contains("text-red-600")) {
            infoConfirmEmail.classList.add("text-red-600");
        }
        if (infoConfirmEmail.classList.contains("text-green-600")) {
            infoConfirmEmail.classList.remove("text-green-600");
        }
        validation[7] = false;
        infoConfirmEmail.textContent = "E-mail inválido";
        return;
    } else if (confirm_email != email.value ) {
        if (!infoConfirmEmail.classList.contains("text-red-600")) {
            infoConfirmEmail.classList.add("text-red-600");
        }
        if (infoConfirmEmail.classList.contains("text-green-600")) {
            infoConfirmEmail.classList.remove("text-green-600");
        }
        validation[7] = false;
        infoConfirmEmail.textContent = "E-mails divergentes";
        return;
    } else {
        if (!infoConfirmEmail.classList.contains("text-green-600")) {
            infoConfirmEmail.classList.add("text-green-600");
        }
        if (infoConfirmEmail.classList.contains("text-red-600")) {
            infoConfirmEmail.classList.remove("text-red-600");
        }
        validation[7] = true;
        infoConfirmEmail.textContent = "E-mails iguais";
        return;
    }
});

// function validation password
input_registro_senha.addEventListener("change", (e) => {
    ProgressBarPasswordStrength(e);
})

// function validation confirm password
input_registro_confirm_senha.addEventListener("blur", (e) =>{
    if (!e.target.value === input_registro_senha.value) {
        if (!infoConfimPassword.classList.contains("text-red-600")) {
            infoConfimPassword.classList.add("text-red-600");
        }
        if (infoConfimPassword.classList.contains("text-green-600")) {
            infoConfimPassword.classList.remove("text-gree-600");
        }
        infoConfimPassword.textContent = "Senhas divergentes";
        validation[8] = false;
        return;
    } else {
        if (!infoConfimPassword.classList.contains("text-green-600")) {
            infoConfimPassword.classList.add("text-green-600");
        }
        if (infoConfimPassword.classList.contains("text-red-600")) {
            infoConfimPassword.classList.remove("text-red-600");
        }
        infoConfimPassword.textContent = "Senhas iguais";
        validation[8] = true;
        return;
    }
})

btn_accept_terms.addEventListener("click", async () => {
    Modal_terms.hide();
    Modal_registro.show();
    input_registro_terms_checkbox.checked = true;
    validation[9] = true;
});

link_open_terms.addEventListener("click", () => {
    Modal_registro.hide();
    Modal_terms.show();
});

btn_decline_terms.addEventListener("click", () => {
    Modal_terms.hide();
    Modal_registro.show();
    input_registro_terms_checkbox.checked = false;
    validation[9] = false;
});

input_registro_terms_checkbox.addEventListener("input", (e) => {
    Modal_registro.hide();
    Modal_terms.show();
});

// Function Register 
form_registro.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!validation[0]) {
        input_registro_nome.focus();
        return;
    }

    if (!validation[1]) {
        input_registro_sobrenome.focus();
        return;
    }

    if (!validation[2]) {
        input_registro_data_de_nascimento.focus();
        return;
    }
    if (!validation[3]) {
        select_curso.focus();
        return;
    }

    if (!validation[4]) {
        input_registro_user.focus();
        return;
    }

    if (!validation[5]) {
        input_registro_email.focus();
        return;
    }

    if (!validation[6]) {
        input_registro_email.focus();
        return;
    }
   
    if (!validation[7]) {
        input_registro_senha.focus();
        return;
    }
    
    if (!validation[8]) {
        infoConfimPassword.focus();
        return;
    }
    if (!validation[9]) {
        input_registro_terms_checkbox.focus();
        return;
    }

    const formData = new FormData(e.target);

    try {
        // Realiza uma solicitação POST com os valores do formulário
        const response = await fetch("/Merenda/Server/Auth/aluno/register.php", {
            method: "POST",
            body: formData
        });

        if (response.ok) {
            // Converte a resposta para o formato desejado (por exemplo, JSON)
            const result = await response.json();
            if (result.status) {
                Modal_registro.toggle();
                Alert_sucess_registro.addEventListener("hide", () => {
                    Modal_login.toggle();
                });
                Alert_sucess_registro.show();
            }
        } else {
            console.error("Erro na solicitação: " + response.status);
            Modal_registro.toggle();
            Alert_error_registro.addEventListener("hide", () => {
                Modal_registro.toggle();
            });
            Alert_error_registro.show();
        }
    } catch (error) {
        console.error("Erro na solicitação:", error);
        Modal_registro.toggle();
        Alert_error_registro.addEventListener("hide", () => {
            Modal_registro.toggle();
        });
        Alert_error_registro.show();   
    }
});