<?php
$servername = "localhost";
$username = "root"; // Default for XAMPP
$password = "";     // Default for XAMPP (no password)
$dbname = "bakeryshop";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Collect product info from POST (sanitize inputs to avoid XSS or other issues)
$product_name = mysqli_real_escape_string($conn, $_POST['product_name']);
$price = mysqli_real_escape_string($conn, $_POST['price']);

// Prepare the SQL statement to prevent SQL injection
$stmt = $conn->prepare("INSERT INTO cart (product_name, price, quantity) VALUES (?, ?, ?)");
$stmt->bind_param("ssi", $product_name, $price, $quantity);

// Set quantity to 1 (since it's always added as 1 in your code)
$quantity = 1;

// Execute the statement
if ($stmt->execute()) {
    echo "Item added to cart successfully!";
} else {
    echo "Error: " . $stmt->error;
}

// Close the statement and connection
$stmt->close();
$conn->close();
?>
