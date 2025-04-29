<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Connect to your database
    $conn = new mysqli('localhost', 'root', '', 'bakery_shop');

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Collect form data
    $fullname = $_POST['signupName'];
    $email = $_POST['signupEmail'];
    $password = $_POST['signupPassword'];
    $confirmPassword = $_POST['signupConfirmPassword'];

    // Check if passwords match
    if ($password !== $confirmPassword) {
        echo "Passwords do not match.";
        exit();
    }

    // Insert into database
    $sql = "INSERT INTO users (name, email, password) VALUES ('$fullname', '$email', '$password')";

    if ($conn->query($sql) === TRUE) {
        echo "Signup successful!";
    } else {
        echo "Error: " . $conn->error;
    }

    $conn->close();
} else {
    // If not POST request
    echo "405 Method Not Allowed";
    http_response_code(405);
}
?>
