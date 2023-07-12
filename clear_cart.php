<?php
include('connection.php');
session_start();

// Check if the user is logged in

// Get the user ID from the session
$userId = $_SESSION['user_id'];
$sql2 = "SELECT id FROM users WHERE user_id='$userId'";
$result = mysqli_query($conn, $sql2);
if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {

        $userID = $row['id'];
        // echo $userId;
    }
}


// Delete the cart items for the user
$sql = "DELETE FROM carts WHERE user_id = '$userID'";
$result = mysqli_query($conn, $sql);

if ($result) {
  // Cart items deleted successfully
  echo "Cart items deleted";
} else {
  // Error deleting cart items
  echo "Error deleting cart items: " . mysqli_error($conn);
}
?>
