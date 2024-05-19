<?php 
if ($_SERVER["REQUEST_METHOD"] == "POST") {
	// Collect form data and sanitize it
    $requestType = htmlspecialchars($_POST['RequestType']);
    $basePrice = htmlspecialchars($_POST['basePrice']);
    $questCompatibility = isset($_POST['Quest_Compatability']) ? "Yes" : "No";
    $complexDesign = isset($_POST['Complex_Design']) ? "Yes" : "No";
    $outfitsAccessories = isset($_POST['outfits_Accessories']) ? "Yes" : "No";
    $gogoorAnimations = isset($_POST['GoGoorAnimations']) ? "Yes" : "No";
    $nsfw = isset($_POST['NSFW']) ? "Yes" : "No";
    $materialSwaps = htmlspecialchars($_POST['MaterialSwaps']);
    $colorChangeWheels = htmlspecialchars($_POST['ColorChangeWheels']);
    $totalPrice = htmlspecialchars($_POST['ARtotalPrice']);
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);

    // Email details
    $to = "emilymelo121@gmail.com"; // Replace with zenimustail@gmail.com
    $subject = "New Commission Request";
	
	// Email body
    $body = "Request Type: $requestType\n";
    $body .= "Base Price: $$basePrice\n\n";
    $body .= "Avatar Details:\n";
    $body .= "Quest Compatibility: $questCompatibility\n";
    $body .= "Complex Design: $complexDesign\n\n";
    $body .= "Add-ons:\n";
    $body .= "> Two Outfits/Accessories: $outfitsAccessories\n";
    $body .= "GoGo or Animation Set-Ups: $gogoorAnimations\n";
    $body .= "NSFW: $nsfw\n";
    $body .= "Material Swaps: $materialSwaps\n";
    $body .= "Color Change Wheels: $colorChangeWheels\n\n";
    $body .= "Commission Cost: $totalPrice\n\n";
    $body .= "Requester Info:\n";
    $body .= "Name: $name\n";
    $body .= "Email: $email\n";
	
	// Send the email
    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully.";
    } else {
        echo "Failed to send message.";
    }
}
else {
    echo "Invalid request.";
}
?>
