<?php
// Vendor start
require '../../vendor/autoload.php';
// Dotenv Start
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__."/../.env/");
$dotenv->load();
// Request db_conection
require_once "../Database/_connection.php";
function Agendar(\PDO $conexao) : string {

    $data_de_hoje = filter_input(INPUT_POST, "data_de_hoje", FILTER_DEFAULT);
    $vai_comer = filter_input(INPUT_POST, "vai_comer", FILTER_VALIDATE_BOOLEAN);
    $sql = "SELECT * FROM agendamento WHERE dataAg=:data_de_hoje";

    try {
        $stmt = $conexao->prepare($sql);
        $stmt->bindValue(":data_de_hoje", $data_de_hoje);
        $stmt->execute();
        if(!$result = $stmt->fetch(PDO::FETCH_ASSOC)){
            $sql = "INSERT INTO agendamento ( data_agendamento, quantidade_de_alunos) VALUES ( :data_de_hoje, :quantidade_de_alunos)";
            $stmt = $conexao->prepare($sql);
            $stmt->bindValue(":data_de_hoje", $data_de_hoje);
            $stmt->bindValue(":qtdAlunos", $vai_comer);
            $stmt->execute();
        } else {
            $sql = "UPDATE agendamento SET quantidade_de_alunos=:quantidade_de_alunos WHERE data_agendamento=:data_de_hoje";
            $stmt = $conexao->prepare($sql);
            $stmt->bindValue(":data_de_hoje", $data_de_hoje);
            $stmt->bindValue(":quantidade_de_alunos", $result["qtdAlunos"] + $vai_comer);
            $stmt->execute();
        }
        return json_encode([ "status"=> true, "info" => [ "code"=> "01", "msg"=> "agendamento realizado com sucesso" ]]);
    } catch (\Throwable $th) {
        //throw $th;
        return json_encode([ "status"=> false, "info" => [ "code"=> "01", "msg"=> "erro ao realizar o agendamento", "error" => $th, "data" => $data_de_hoje ]]);
    }
}

if ($_SERVER["REQUEST_METHOD"] != "POST") {
    header("Location: /Merenda/");
    echo json_encode([ "status"=> false, "info" => [ "code"=> "03", "msg"=> "erro no tipo de requisição." ]]);
} else {
    if(session_status() != 2){
        session_start();
    }
    if(isset($_SESSION["user"])){
        echo Agendar($conexao);
    } else {
        echo json_encode([ "status"=> false, "info" => [ "code"=> "02", "msg"=> "não é possível realizar o agendamento sem que o usuário esteja logado" ]]);
    }
}
?>