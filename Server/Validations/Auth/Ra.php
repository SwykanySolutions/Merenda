<?php
// Vendor start
require '../../../vendor/autoload.php';
// Dotenv Start
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__."/../../.env/");
$dotenv->load();
// Request db_conection
require_once "../../Database/_connection.php";

function VerifyRaExists(\PDO $conexao) : string {
    $ra = filter_input(INPUT_POST, "ra", FILTER_SANITIZE_NUMBER_INT);
    
    try {
        $sql = $conexao->prepare("SELECT * FROM aluno WHERE ra=:ra");
        $sql->bindParam(":ra", $ra);
        $sql->execute();
        $result = $sql->fetch(PDO::FETCH_ASSOC);
        if($result){
            return json_encode(["status" => false, "info" => [ "code"=> 02, "type"=>"request_response", "number_users" => count($result) ]]);
        }
        return json_encode(["status" => true, "info" => [ "code"=> 01, "type"=>"request_response" ]]);
    
    } catch (\Throwable $th) {
        //throw $th;
        return json_encode(["status" => false, "info" => [ "code"=> 01, "msg"=>$th, "type"=>"error"]]);
    }
    
}

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo json_encode(["status"=> false, "info" => [ "code"=> 04, "type"=>"error" ]]);
    header("Location: /Merenda/");
} else {
    echo VerifyRaExists($conexao);
}

?>