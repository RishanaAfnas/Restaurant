<?php
include('connection.php');

session_start();
header("Cache-Control: no-cache, no-store, must-revalidate");
header("Pragma: no-cache");
header("Expires: 0");

if (isset($_SESSION['order_completed']) && $_SESSION['order_completed']) {
  header("Location: thankyouu.php");
  exit;
}
$_SESSION['order_completed'] = false;

// if(isset($_POST['submit'])){
//   $selectedOption = $_POST['selectedOption'];
//   $total=$_POST['itotal'];
//   echo $total;
//   if($selectedOption == 'takeaway' || $selectedOption == 'dine_in')
//   {
//     echo "hi";
//   }
//   else{
//     echo "no";
//   }

// }
if (isset($_GET['param'])) {
    $total = $_GET['param'];
}
?>



<!DOCTYPE html>
<html>

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="stylesheet" href="checkout.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

</head>

<body>

    <h3 class="header" style="margin-bottom: 25px;"> Checkout </h3>

    <div class="row">
        <div class="col-75">
            <div class="container">

                <form action="razorpayCheckout.php" method="post">


                    <div class="row">
                        <div class="col-50">

                            <h3></h3>
                            <label for="fname"><i class="fa fa-user"></i> Full Name</label>
                            <input type="text" id="fname" name="name" placeholder="">
                            <label for="mobile"><i class="fa fa-mobile" aria-hidden="true"></i></i> Mobile</label>
                            <input type="tel" id="mobile" name="mobile" placeholder="">
                            <label for="fname"><i class="fa fa-user"></i> Amount</label>
                            <input type="text" id="fname" name="total" placeholder="" value="<?php echo $total; ?>">
                            <label for="fname" style="margin-bottom:25px;"><i class="fa fa-money" aria-hidden="true"></i> Select Payment Method</label>
                            <label class="containers">Cash On Delivery
                                <input type="radio"  name="paymentOption" value="CashOndelivery">
                                <span class="checkmark"></span>
                            </label>
                            <label class="containers">Online Payment
                                <input type="radio" name="paymentOption" value="online">
                                <span class="checkmark"></span>
                            </label>


                        </div>



                    </div>

                    <!-- <label>
          <input type="checkbox" checked="checked" name="sameadr"> Shipping address same as billing
        </label> -->
        <input type="hidden" name="selectedOption" id="selectedOption" value="" />
          <input type="submit" value="Confirm Order"name="submit" class="btn" onclick="return validateForm()">
                    
                </form>
            </div>
        </div>
        <!-- <div class="col-25">
    <div class="container">
      <h4>Cart
        <span class="price" style="color:black">
          <i class="fa fa-shopping-cart"></i>
          <b>4</b>
        </span>
      </h4>
      <p><a href="#">Product 1</a> <span class="price">$15</span></p>
      <p><a href="#">Product 2</a> <span class="price">$5</span></p>
      <p><a href="#">Product 3</a> <span class="price">$8</span></p>
      <p><a href="#">Product 4</a> <span class="price">$2</span></p>
      <hr>
      <p>Total <span class="price" style="color:black"><b>$30</b></span></p>
    </div>
  </div> -->

    </div>
    <script type="text/javascript">
    function validateForm() {
  var radios = document.getElementsByName("paymentOption");
  var selectedValue = "";

  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      selectedValue = radios[i].value;
     
      break;
    }
  }

  if (selectedValue === "") {
    alert("Please select a payment option.");
    return false;
  }

  // Set the value of the hidden input field
  document.getElementById("selectedOption").value = selectedValue;

  return true;
}

  </script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
</body>

</html>