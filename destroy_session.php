<?php
// destroy_session.php

include('connection.php');

session_start();


//   $sql2 = "SELECT id FROM users WHERE user_id='$userId'";
// $result = mysqli_query($conn, $sql2);
// if (mysqli_num_rows($result) > 0) {
//     while ($row = mysqli_fetch_assoc($result)) {

//         $userID = $row['id'];
//         // echo $userId;
//     }
// }

  // Delete cart data for the given user
//   $sql = "DELETE FROM carts WHERE user_id = '$userID'";
//   $result =mysqli_query($conn, $sql);

  // if ($result) {
    // Clear the cart successfully, now destroy the session
    
    $userId =$_SESSION['userId'];
    unset($_SESSION['userId']);
    session_unset();
    session_destroy();
    setcookie("cookie_name", "", time() - 1, "/");
    echo "Cart cleared and session destroyed successfully";
  
  // } else {
  //   echo "Error deleting cart: " . mysqli_error($conn);
  // }
// } else {
//   echo "User session not found";
// }
?>
