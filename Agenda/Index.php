<?php $page = "agenda" ?>
<!DOCTYPE html>
<html lang="pt-br" data-mode="dark">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <?php 
            include "../Components/html/scripts-head.php";
        ?>
        <link rel="stylesheet" href="/Merenda/global.css">
        <title>Merendas Etec</title>
    </head>
    
    <body class="bg-white dark:bg-black">
        <?php 
            require "../Components/html/Navbar.php";
            echo `<h2 class="text-gray-900 dark:text-gray-100 text-center mt-[3rem] mb-[3rem] text-[2rem]">Boas vindas ao agendamento do nosso sistema Etec merendas</h2>`;
            if (isset($_SESSION["data_ultimo_agendamento"])) {
                $data_ultimo_agendamento = $_SESSION["data_ultimo_agendamento"];
                $data_hoje = date("Y-m-d");
                if(strtotime($data_ultimo_agendamento) <= strtotime($data_hoje) && $_SESSION["agendamentos_diarios"] < 2) {
                    require_once "../Components/Alerts/Agendamentos.php";
                    require_once "../Components/html/agenda/agendamento.php";
                } else {
                    echo `<p class="text-center text-gray-900 dark:text-gray-100" >O número máximo de agendamentos ja foi realizado hoje por favor volte amanhã para realizar outro agendamento.</p>`;
                }
            }

            if (isset($_SESSION["data_ultimo_agendamento"])) { 
                if(strtotime($data_ultimo_agendamento) < strtotime($data_hoje) ) {
                    
                } else if ($_SESSION["agendamentos_diarios"] < 2 && strtotime($data_ultimo_agendamento) == strtotime($data_hoje)) {
                    require_once "../Components/html/agenda/agendamento.php";
                }
            ?>
            <p id="info-msg-agendamento-off" class="hidden text-center text-red-900 dark:text-red-500" >Não é possivel fazer o agendamento em dias não semanais (sábado e domingo) ou fora dos horários de funcionamento 7:00 as 23:00.</p>
        <?php } else { ?>
            <div class="w-full flex justify-center">
                <div class="w-[65%]" >
                    <p class="text-center text-[1.5rem] text-gray-900 dark:text-gray-100 mt-10" >Para realizar um agendamento é necessário fazer o login em nosso sistema</p>
                    <p class="text-center text-[1.5rem] text-gray-900 dark:text-gray-100 mt-10" >Para fazer o login clique em login no menu superior ou <span class="text-blue-600 dark:text-blue-500 cursor-pointer" data-modal-target="authentication-modal" data-modal-toggle="authentication-modal">clique aqui</span></p>    
                    <p class="text-center text-[1.5rem] text-gray-900 dark:text-gray-100 mt-10" >Se não for cadastrado, para fazer o seu registroclique em registro seu menusuperiorno botão registre-se em azul ou <span class="text-blue-600 dark:text-blue-500 cursor-pointer" data-modal-target="registration-modal" data-modal-toggle="registration-modal" >clique aqui</span>.</p> 
                </div>
            </div>
              
        <?php 
            }

            // Componets Modal
            require "../Components/Modals/Login.php";
            require "../Components/Modals/Register.php";
            require "../Components/Modals/Termos.php";
            
            // Scripts end body
            require "../Components/html/scripts-body.php";

        ?>
        <script src="/Merenda/js/functions-agendamentos.js"></script>
    </body>
</html>