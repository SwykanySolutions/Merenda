<?php
// Vendor start
require '../../../vendor/autoload.php';
// Dotenv Start
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__."/../../.env/");
$dotenv->load();
// Request db_conection
require_once "../../Database/_connection.php";

function VerifyEmailExists(\PDO $conexao) : string {
    $email = filter_input(INPUT_POST, "email", FILTER_SANITIZE_EMAIL);
    
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(["status"=> false, "info" => [ "code"=> 03, "type"=>"error" ]]);
    }

    try {
        $sql = $conexao->prepare("SELECT * FROM aluno WHERE email=:email");
        $sql->bindParam(":email", $email);
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
    echo VerifyEmailExists($conexao);
}

?>