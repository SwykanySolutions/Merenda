if (document.getElementById("form-merendas") != null) {
    const date = new Date();
    const dia = (date.getDate() < 10 ) ? "0"+date.getDate() : date.getDate();
    const mes = (date.getMonth() + 1) < 10? "0" + (date.getMonth() + 1) : (date.getMonth() + 1);
    const ano = date.getFullYear(); const hora = date.getHours();
    const Alert_error_agendamento = document.getElementById("alert-error-agendamento");
    const Alert_sucess_agendamento = document.getElementById("alert-sucess-agendamento");
    
    if (!(date.getDay() >= 1 && date.getDay() <= 5)) {
        document.getElementById("info-msg-agendamento-off").classList.remove("hidden");
    } else {
        if (!(hora >= 7 && hora <= 23)) {
            document.getElementById("info-msg-agendamento-off").classList.remove("hidden");
        } else {
            document.getElementById("form-merendas").classList.remove("hidden");
        }
    }
    
    const data_de_hoje = document.getElementById('data-de-hoje');
    const vai_comer = document.getElementById('vai-comer');
    data_de_hoje.value = `${ano}-${mes}-${dia}`;

    const form = document.getElementById("form-confirmar-merenda");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        /***
         * @typedef { { vai_comer: boolean; data_de_hoje: string } } parameters
         * @type parameters
         */
        const params = {
            vai_comer: vai_comer.checked,
            data_de_hoje: data_de_hoje.value
        }
        const query = Object.keys(params)
        .map(key => `${key}=${encodeURIComponent(params[key])}`)
        .join('&');
        try {
            const response = await fetch("/Merenda/Server/Requests/agendamentos.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded", // Defina o tipo de conteúdo apropriado
                },
                body: query,
            });

            if (response.ok) {

                // Converte a resposta para o formato desejado (por exemplo, JSON)
                const result = await response.json();

                if (result.status) {
                    Alert_sucess_agendamento.show();
                }
            } else {
                console.error("Erro na solicitação: " + response.status);
                Alert_error_agendamento.show();   
            }
        } catch (error) {
            console.error("Erro na solicitação: " + error);
            Alert_error_agendamento.show();
        }
        

        // Realiza uma solicitação POST com os valores do formulário
    });

}