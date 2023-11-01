<?php

// Vendor start
require '../../../vendor/autoload.php';
// Dotenv Start
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__."/../../.env/");
$dotenv->load();
// Request db_conection
require_once "../../Database/_connection.php";

function CadastrarAluno(\PDO $conexao) : string {
    $nome = filter_input(INPUT_POST, "nome", FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $sobrenome = filter_input(INPUT_POST, "sobrenome", FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $data_de_nascimento = filter_input(INPUT_POST, "data-de-nascimento", FILTER_DEFAULT);
    $user = filter_input(INPUT_POST, "user", FILTER_DEFAULT);
    $curso = filter_input(INPUT_POST, "curso", FILTER_DEFAULT);
    $ra = filter_input(INPUT_POST, "ra", FILTER_DEFAULT);
    if (!filter_input(INPUT_POST, "email", FILTER_VALIDATE_EMAIL)) {
        return json_encode(["status"=>false, "info" => [ "code"=> 02, "msg"=>"email inválido", "type"=>"error" ]]);
    }
    $email = filter_input(INPUT_POST, "email", FILTER_SANITIZE_EMAIL);
    $senha = password_hash(filter_input(INPUT_POST, "data_de_nascimento", FILTER_DEFAULT), PASSWORD_DEFAULT);

    try {
        
        $sql = $conexao->prepare("INSERT into aluno (nome, sobrenome, data_de_nascimento, user, curso, ra, email, senha) VALUES ( :nome, :sobrenome, :data_de_nascimento, :user, :curso, :ra, :email, :senha)");
        $sql->bindParam(":nome", $nome); 
        $sql->bindParam(":sobrenome", $sobrenome); 
        $sql->bindParam(":data_de_nascimento", $data_de_nascimento); 
        $sql->bindParam(":user", $user); 
        $sql->bindParam(":curso", $curso);
        $sql->bindParam(":ra", $ra);
        $sql->bindParam(":email", $email);
        $sql->bindParam(":senha", $senha);
        if (!$sql->execute()) {
            return json_encode(["status" => false, "info" => [ "code" => 01, "msg" => "não foi possivel realizar o cadastro", "type"=>"error" ]]);
        }
        return json_encode(["status" => true, "info" => [ "code" => 01, "msg" => "Cadastro realizado com sucesso", "type"=>"sucess" ]]);
    } catch (\Throwable $th) {
        //throw $th;
        return json_encode(["status" => false, "info" => [ "code" => 03, "msg" => $th, "type" => "error" ]]);
    }
}
if ($_SERVER["REQUEST_METHOD"] != "POST") {
    header("Location: /Merenda/");
    echo json_encode(["status"=>false, "info" => [ "code"=> 04, "msg"=>"requisição inválida", "type"=>"error" ]]);
} else {
    echo CadastrarAluno($conexao);
}
?>