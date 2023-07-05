<?php
include('connection.php');
session_start();

if (isset($_POST['submit'])) {
  $selectedOption = $_POST['selectedOption'];
  $total = $_POST['itotal2'];
  $gtotal = number_format($total, 2);


  if ($selectedOption == 'takeaway' || $selectedOption == 'dine_in') {
    header("Location: checkout2.php?param=" . urlencode($total));
    exit();
  } else {
  }
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
    <div class="col-50">
      <div class="container">

        <form action="razorpayCheckout.php" method="post">


          <div class="row">
            <div class="col-50">

              <h3></h3>
              <label for="fname"><i class="fa fa-user"></i> Full Name</label>
              <input type="text" id="fname" name="name" placeholder="">
              <label for="email"><i class="fa fa-envelope"></i> Email</label>
              <input type="text" id="email" name="email" placeholder="">
              <label for="adr"><i class="fa fa-address-card-o"></i> Address</label>
              <input type="text" id="adr" name="address" placeholder="">
              <div class="row">
                <div class="col-50">
                  <label for="total">City</label>

                  <input type="text" id="state" name="city" value="">


                </div>
                <div class="col-50">
                  <label for="zip">Mobile</label>
                  <input type="tel" id="zip" name="mobile" placeholder="">
                </div>
              </div>

              <div class="row">
                <div class="col-50">
                  <label for="total">Grand Total</label>
                  <input type="text" id="state" name="total" value="<?php echo $total ?>" readonly>
                </div>

              </div>
              <label for="fname" style="margin-bottom:25px;"><i class="fa fa-money" aria-hidden="true"></i> Select Payment Method</label>
              <label class="containers">Cash On Delivery
                <input type="radio" checked="checked" name="paymentOption" value="CashOndelivery">
                <span class="checkmark"></span>
              </label>
              <label class="containers">Online Payment
                <input type="radio" name="paymentOption" value="Online" >
                <span class="checkmark"></span>
              </label>

            </div>



          </div>

          <!-- <label>
          <input type="checkbox" checked="checked" name="sameadr"> Shipping address same as billing
        </label> -->
        <input type="hidden" name="selectedOption" id="selectedOption" value="" />
          <input type="submit" value="Continue to checkout"name="submit" class="btn" onclick="return validateForm()">
        </form>
      </div>
    </div>

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
 </body>

</html>