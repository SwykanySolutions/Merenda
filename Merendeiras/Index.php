<?php
    session_start();
    if (!isset($_SESSION["user"])){
        header("location: /Merenda/Merendeiras/login/");
    }
?>
<?php $page = "home" ?>
<!DOCTYPE html>
<html lang="pt-br" data-mode="dark">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <?php 
            include "./Components/html/scripts-head.php";
        ?>
        <link rel="stylesheet" href="/Merenda/Merendeiras/global.css">
        <title>Merendas Etec</title>
    </head>
    
    <body class="bg-white dark:bg-black">
        <?php 
            require "./Components/html/Navbar.php";
        ?>

        <?php
            
            // Scripts end body
            require "./Components/html/scripts-body.php";
       
        ?>

    </body>
</html>