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

// Collect product info from POST
$product_name = $_POST['product_name'];
$price = $_POST['price'];

// Insert into cart table
$sql = "INSERT INTO cart (product_name, price, quantity) VALUES ('$product_name', '$price', 1)";

if ($conn->query($sql) === TRUE) {
  echo "Item added to cart successfully!";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
