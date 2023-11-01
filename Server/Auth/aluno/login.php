<?php
if ($_SERVER["REQUEST_METHOD"] != "POST") {
    header("Location: /Merenda/");
}
require_once "./Server/Database/_connection.php";

$login = filter_input(INPUT_POST, "login", FILTER_DEFAULT);
$password = filter_input(INPUT_POST, "senha", PASSWORD_DEFAULT);

try {

    if (filter_var($login, FILTER_VALIDATE_EMAIL)) {
        $sql = $conexao->prepare("SELECT * FROM aluno WHERE email=:email");
        $sql->bindParam(":email", $login);
    } else {
        $sql = $conexao->prepare("SELECT * FROM aluno WHERE ra=:ra");
        $sql->bindParam(":ra", $password);
    }
    $sql->execute();
    $result = $sql->fetch(PDO::FETCH_ASSOC);
    if (!password_verify($password, $result["senha"])) {
        echo json_encode(["status" => false, "info" => [ "code" => 2, "msg" => "senha inválida", "type"=>"error" ]]);
    }
    session_start();
    $_SESSION["nome"] = $result["nome"];
    $_SESSION["sobrenome"] = $result["sobrenome"];
    $_SESSION["data_de_nascimento"] = $result["data_de_nascimento"];
    $_SESSION["user"] = $result["user"];
    $_SESSION["ra"] = $result["ra"];
    $_SESSION["email"] = $result["email"];
    echo json_encode(["status" => true, "info" => [ "code" => 1, "msg" => "senha correta", "type"=>"sucess" ]]);

} catch (\Throwable $th ) {
    //throw $th;
    echo json_encode(["status" => false, "info" => [ "code"=> 3, "msg" => $th, "type"=>"error" ]]);
}