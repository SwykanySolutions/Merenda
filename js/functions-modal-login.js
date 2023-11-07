const form_login = document.getElementById('form-login');
const Alert_error_login = document.getElementById('alert-error-login');
const Alert_sucess_login = document.getElementById('alert-sucess-login');


form_login.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(form_login);
    // Realiza uma solicitação POST com os valores do formulário
    try {
        // Realiza uma solicitação POST com os valores do formulário
        const response = await fetch("/Merenda/Server/Auth/aluno/login.php", {
            method: "POST",
            body: formData
        });
        if (response.ok) {
            // Converte a resposta para o formato desejado (por exemplo, JSON)
            const result = await response.json();
            console.log(result);
            if (result.status) {
                Modal_login.hide();
                Alert_sucess_login.addEventListener("hide", () => {
                    window.location.href = "/Merenda/Agenda/";
                });
                Alert_sucess_login.show();
            } else {
                Modal_login.hide();
                Alert_error_login.addEventListener("hide", () => {
                    Modal_login.show();
                });
                Alert_error_login.show();
            }
        } else {
            console.error("Erro na solicitação: " + response.status);
            Modal_login.hide();
            Alert_error_login.addEventListener("hide", () => {
                Modal_login.show();
            });
            Alert_error_login.show();
        }
    } catch (error) {
        console.error("Erro na solicitação:", error);
        Modal_login.hide();
        Alert_error_login.addEventListener("hide", () => {
            Modal_login.show();
        });
        Alert_error_login.show();
    }
})