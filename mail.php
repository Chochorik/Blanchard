<?php
// файлы phpmailer

require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

$title = "Тема письма";

$title = "Заголовок письма";
foreach ( $_POST as $key => $value ) {
  if ( $value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject") {
    $body .= "
    " . ( ( $c = !$c) ? '<tr>':'tr style="background-color: #f8f8f8;"') . "
    <td style='padding: 10px; border: 1px solid #e9e9e9;'><b>$key</b></td>
    <td style='padding: 10px; border: 1px solid #e9e9e9;'>$value</td>
    </tr>
    ";
  }
}

$body = "<table style='width: 100%;'>$body</table>";


// Настройка phpmailer
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
  $mail->isSMTP();
  $mail->CharSet = "UTF-8";
  $mail->SMTPAuth = true;

  $mail->Host = 'smtp.gmail.com';
  $mail->Username = 'dr.nikitamedvedev2018@gmail.com';
  $mail->Password = 'pmuzwlhigziwydgy';
  $mail->SMTPSecure = 'ssl';
  $mail->Port = 465;

  $mail->setFrom('dr.nikitamedvedev2018@gmail.com', 'Заявка с вашего сайта');

  $mail->addAddress('dr.nikitamedvedev2020@gmail.com');
  $mail->addAddress('dr.nikitanikitosik2016@yandex.ru');

  $mail->isHTML(true);
  $mail->Subject = $title;
  $mail->Body = $body;

  $mail->send();

} catch (Exception $e) {
  $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

