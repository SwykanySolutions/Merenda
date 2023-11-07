<?php
// Vendor start
require '../../../vendor/autoload.php';
// Dotenv Start
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__."/../../.env/");
$dotenv->load();
// Request db_conection
require_once "../../Database/_connection.php";

function login_merendeiras_e_administradores(\PDO $conexao) : string {

    $login = filter_input(INPUT_POST, "login", FILTER_DEFAULT);
    $password = filter_input(INPUT_POST, "senha", FILTER_DEFAULT);
    $nivel = filter_input(INPUT_POST, "nivel_acesso", FILTER_SANITIZE_NUMBER_INT);
    $manter_sessao = (filter_input(INPUT_POST, "manter_conectado", FILTER_DEFAULT) == "true") ? true : false;
    
    try {
        if ($nivel == 1) {
            $sql = $conexao->prepare("SELECT * FROM merendeira WHERE user=:user");
            $sql->bindParam(":user", $login);
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
            $_SESSION["email"] = $result["email"];
            $_SESSION["nivel_de_acesso"] = $nivel;
            $_SESSION["manter_sessao"] = $manter_sessao;
            return json_encode(["status" => true, "info" => [ "code" => 1, "msg" => "senha correta", "type"=>"sucess" ]]);
        } else if ($nivel == 2) {
            $sql = $conexao->prepare("SELECT * FROM administrador WHERE user=:user");
            $sql->bindParam(":user", $login);
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
            $_SESSION["email"] = $result["email"];
            $_SESSION["nivel_de_acesso"] = $nivel;
            $_SESSION["manter_sessao"] = $manter_sessao;
            return json_encode(["status" => true, "info" => [ "code" => 1, "msg" => "senha correta", "type"=>"sucess" ]]);
        } else {
            return json_encode(["status" => false, "info" => [ "code" => 1, "msg" => "O nível de acesso é inválido", "type"=>"error" ]]);
        }
    } catch (\Throwable $th ) {
        //throw $th;
        return json_encode(["status" => false, "info" => [ "code"=> 2, "msg" => $th, "type"=>"error" ]]);
    }
}

if ($_SERVER["REQUEST_METHOD"] != "POST") {
    echo json_encode(["status" => false, "info" => [ "code"=>"", "msg"=> "Metodo de requisição inválido", "type"=>"error" ]]);
    header("Location: /Merenda/");
} else {
    echo login_merendeiras_e_administradores($conexao);
}