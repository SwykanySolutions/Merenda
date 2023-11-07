<?php $page = "home" ?>
<!DOCTYPE html>
<html lang="pt-br" data-mode="dark">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <?php 
            include "./Components/html/scripts-head.php";
        ?>
        <link rel="stylesheet" href="/Merenda/global.css">
        <title>Merendas Etec</title>
    </head>
    
    <body class="bg-white dark:bg-black">
        <?php 
            require "./Components/html/Navbar.php";
        ?>

        <?php
            // Componets Modal
            require "./Components/Modals/Register.php";
            require "./Components/Modals/Login.php";
            require "./Components/Modals/Termos.php";
            
            // Scripts end body
            require "./Components/html/scripts-body.php";
       
        ?>

        

    </body>
</html>