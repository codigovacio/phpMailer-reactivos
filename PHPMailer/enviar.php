<?php
//Librerías para el envío de mail
include_once('class.phpmailer.php');
include_once('class.smtp.php');



//Este bloque es importante
$mail = new PHPMailer();
$mail->IsSMTP();
$mail->SMTPAuth = true;
$mail->Host = 'smtp.gmail.com';
$mail->Port = 465;
$mail->SMTPSecure = 'ssl';
$mail->SMTPDebug = 2;    // Enable verbose debug output

//Nuestra cuenta
$mail->Username ='usuario@gmail.com';
$mail->Password = 'contraseña';


//Recibir todos los parámetros del formulario
$nombre = $_POST['name'];
$correo = $_POST['mail'];
$phone = $_POST['phone'];
$ubicacion = $_POST['ubicacion'];
$mensaje = $_POST['mensaje'];
//$archivo = $_FILES['hugo'];
$asunto = "Mensaje del portal reactivosdelvalle";

//Agregar destinatario
$mail->setFrom('inforeactivosvalle@gmail.com', 'Reactivos del valle');
$mail->AddAddress($correo);
$mail->Subject = $asunto;
$mail->Body ="
Name: $nombre
Email: $correo
Telephone: $phone
Comments: $mensaje";
//$mail->AltBody = $message;
//Para adjuntar archivo
//$mail->AddAttachment($archivo['tmp_name'], $archivo['name']);
//$mail->MsgHTML($mensaje);

//Avisar si fue enviado o no y dirigir al index
if($mail->Send())
{
	echo'<script type="text/javascript">
			alert("Enviado Correctamente");
			window.location="http://laboratoriowp.com/react/"
		 </script>';
}
else{
	echo'<script type="text/javascript">
			alert("NO ENVIADO, intentar de nuevo");
			window.location="http://laboratoriowp.com/react/"
		 </script>';
}
?>

