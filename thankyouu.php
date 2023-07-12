<?php
include('connection.php');

session_start();
$userId =$_SESSION['userId'];
 echo $userId;

// Store the user ID in a session variable

$_SESSION['order_completed'] = true;

?>

<!-- Your existing HTML code -->

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<script>
$(document).ready(function() {
  // Display the success message using SweetAlert
  Swal.fire({
    title: "Success!",
    text: "Thank you for your order.",
    icon: "success",
    showCancelButton: false,
    confirmButtonText: "OK",
  }).then((result) => {
    if (result.isConfirmed) {
      // Redirect to index.php
      var userId = "<?php echo $userId; ?>";
      $.ajax({
        url: 'destroy_session.php', // Replace with the actual PHP file that destroys the session and clears the cart
        type: 'POST',
        success: function(response) {
          console.log(response);
          // Redirect to index.php
          window.location.href = "home.php";
        
        },
        error: function() {
          Swal.fire({
            title: "Error",
            text: "Failed to destroy the session.",
            icon: "error",
            showCancelButton: false,
            confirmButtonText: "OK",
          });
        }
      });
    }
  });
});


</script>
