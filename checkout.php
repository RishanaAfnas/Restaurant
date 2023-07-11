<?php
include('connection.php');

session_start();
$userId = $_SESSION['user_id'];

// Use the user ID for further processing
// echo "User ID: " . $userId;


$sql2="SELECT id FROM users WHERE user_id='$userId'";
$result=mysqli_query($conn,$sql2);
if(mysqli_num_rows($result) > 0)
{
  while($row=mysqli_fetch_assoc($result)){

    $userID=$row['id'];
    // echo $userId;
  }
}


// echo $userID;

if ($_SESSION['order_completed']) {
  header("Location: thankyou.php");
  exit;
}
$_SESSION['order_completed'] = false;

if (isset($_POST['submit'])) {
  $selectedOption = $_POST['selectedOption'];
  $total = $_POST['itotal2'];

  $gtotal = number_format($total, 2);

  // Check if an existing order exists for the user
  $orderQuery="SELECT * FROM `order` WHERE user_id='$userID'";

  $orderResult=mysqli_query($conn,$orderQuery);

  if (mysqli_num_rows($orderResult) > 0) {
     // An existing order exists, update the products and total
     $row=mysqli_fetch_assoc($orderResult);
     $id=$row['id'];
    $userID= $row['user_id'];
    $total=$row['total'] ;
    $updatedTotal=$total + ($gtotal - $total);
   
    $updateQuery="UPDATE `order` SET user_id='$userID',total='$updatedTotal' WHERE id='$id'";
    $updatedResult=mysqli_query($conn,$updateQuery);

     
  }
  else{

     $sql="INSERT INTO `order` (user_id,total) VALUES ('$userID','$gtotal')";
     mysqli_query($conn, $sql);
  }


  $quantity=$_POST['quantity'];
  $price=$_POST['price'];
  $productId=$_POST['productId'];
  $quantity = [$quantity];
  $price = [$price];
  $productId = [$productId];
  

  

  
 
 

 
  //fetching id of order table
  $query="SELECT id FROM `order` WHERE user_id='$userID'  ORDER BY id DESC LIMIT 1";
  $result=mysqli_query($conn,$query);
  mysqli_autocommit($conn, true);

  if(mysqli_num_rows($result) > 0)
  {
     $row=mysqli_fetch_assoc($result);
     $order_id=$row['id'];
    
     $productId = array($_POST['productId']);
     $productIds = $productId[0];
     print_r($productIds);
     echo "hi";
     echo count($productIds);
     echo "hi";
   print_r($_POST);
    // Insert each product into the order_lines table
    for ($i = 0; $i < count($productIds); $i++) {
     
     
      $currentProductId = $_POST['productId'][$i];
    $currentPrice = $_POST['price'][$i];
    $currentQuantity = $_POST['quantity'][$i];
    
     // Convert array values to strings if needed
  if (is_array($currentProductId)) {
    $currentProductId = implode(",", $currentProductId);
  }

  if (is_array($currentPrice)) {
    $currentPrice = implode(",", $currentPrice);
  }

  if (is_array($currentQuantity)) {
    $currentQuantity = implode(",", $currentQuantity);
  }   

     echo "<pre>";
      print_r($currentQuantity);
      echo "<pre>";
      print_r($currentPrice);

      echo "<pre>";      print_r($currentProductId);


      $sqlQuery = "INSERT INTO order_lines (order_id, product_id, price, quantity) VALUES ('$order_id', '$currentProductId', '$currentPrice', '$currentQuantity')";
      $result=mysqli_query($conn, $sqlQuery);
      if ($result) {
        echo "Insertion successful<br>";
      } else {
        echo "Error in query: " . mysqli_error($conn) . "<br>";
      }
      
      
    }
   
  }
  else
  {
     echo "no existing order found";

  } 
 

  

  


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
                <input type="radio"  name="paymentOption" value="CashOndelivery">
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