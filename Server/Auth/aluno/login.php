<?php
// Vendor start
require '../../../vendor/autoload.php';
// Dotenv Start
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__."/../../.env/");
$dotenv->load();
// Request db_conection
require_once "../../Database/_connection.php";

function login_aluno(\PDO $conexao) : string {

    $login = filter_input(INPUT_POST, "login", FILTER_DEFAULT);
    $password = filter_input(INPUT_POST, "senha", FILTER_DEFAULT);

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
        if ($result == null) {
            return json_encode(["status" => false, "info" => [ "code" => 1, "msg" => "usuário não existe", "type"=>"error" ]]);
        }
        
        if (!password_verify($password, $result["senha"])) {
            return json_encode(["status" => false, "info" => [ "code" => 2, "msg" => "senha inválida", "type"=>"error", "senhas"=> [ "1"=>$password, "2"=>$result["senha"], "3"=>password_hash($password, PASSWORD_DEFAULT) ] ]]);
        }
        session_start();
        $_SESSION["nome"] = $result["nome"];
        $_SESSION["sobrenome"] = $result["sobrenome"];
        $_SESSION["data_de_nascimento"] = $result["data_de_nascimento"];
        $_SESSION["user"] = $result["user"];
        $_SESSION["ra"] = $result["ra"];
        $_SESSION["email"] = $result["email"];
        $_SESSION["data_ultimo_agendamento"] = $result["data_ultimo_agendamento"];
        $_SESSION["agendamentos_diarios"] = $result["agendamentos_diarios"];
        return json_encode(["status" => true, "info" => [ "code" => 1, "msg" => "senha correta", "type"=>"sucess" ]]);

    } catch (\Throwable $th ) {
        //throw $th;
        return json_encode(["status" => false, "info" => [ "code"=> 3, "msg" => $th, "type"=>"error" ]]);
    }
}

if ($_SERVER["REQUEST_METHOD"] != "POST") {
    header("Location: /Merenda/");
} else {
    echo login_aluno($conexao);
}