const form_login = document.getElementById('form-login-merendeiras');
const manter_conectado = document.getElementById("manter_conectado");
const Alert_sucesso = document.getElementById("alert-sucess-login-merendeiras");
const Alert_erro = document.getElementById("alert-error-login-merendeiras");
const  Message_alert_error_merendeiras = document.getElementById("mssage-alert-error-merendeiras");


manter_conectado.addEventListener('input', async (e) => {
    manter_conectado.value = e.target.checked;
});

form_login.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form_login);
    const response = await fetch("/Merenda/Server/Auth/Merendeiras/login.php",{
        method: "POST",
        body: formData,
    })
    console.log("response",response);
    if (response.ok) {
        const result = await response.json();
        if (result.status) {
            Alert_sucesso.addEventListener("hide", () => {
                window.location.href = "/Merenda/Merendeiras/index.php";
            })
            Alert_sucesso.show();
        }
        if (typeof result.info.msg == "object") {
            Message_alert_error_merendeiras.textContent = result.info.msg.errorInfo[2];
        } else {
            Message_alert_error_merendeiras.textContent = result.info.msg;
        }
        Alert_erro.show();
        setTimeout(() => { Alert_erro.hide(); }, 2000);
    };
});