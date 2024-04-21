<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Include PHPMailer autoloader
require 'vendor/autoload.php';

// Check if the form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Extract form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    // Email setup
    $mail = new PHPMailer(true);
    try {
        //Server settings
        $mail->isSMTP();                                      
        $mail->Host = 'smtp.gmail.com';  // Gmail SMTP server
        $mail->SMTPAuth = true;                               
        $mail->Username = 'jennymorgan0712@gmail.com';        // Your Gmail email address
        $mail->Password = 'Poderosa12';               // Your Gmail password                           
        $mail->SMTPSecure = 'tls';                            
        $mail->Port = 587;                                    

        //Recipients
        $mail->setFrom('jennymorgan0712@gmail.com', 'Your Name'); // Sender's email address and name
        $mail->addAddress('jennymorgan0712@gmail.com');          // Your email address

        // Content
        $mail->isHTML(false);                              
        $mail->Subject = $subject;
        $mail->Body    = "Name: $name\nEmail: $email\nPhone: $phone\n\n$message";

        $mail->send();
        echo 'Message has been sent';
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
?>
