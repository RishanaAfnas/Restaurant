<?php
include('connection.php');

session_start();

// $userId = $_SESSION['user_id'];
$userId =$_SESSION['userId'];
 echo $userId;

// Use the user ID for further processing
// echo "User ID: " . $userId;


$_SESSION['order_completed'] = false;

$sql2="SELECT id FROM users WHERE user_id='$userId'";
$result=mysqli_query($conn,$sql2);
if(mysqli_num_rows($result) > 0)
{
  while($row=mysqli_fetch_assoc($result)){

    $userId=$row['id'];
    echo $userId;
  }
}



echo $userId;

if(isset($_POST['submit']))
{
   $product_id=$_POST['product_id'];

 
//    $sql="INSERT INTO carts (product_id,user_id) VALUES ('$product_id','$userId')";
$sql = "INSERT IGNORE INTO carts (product_id, user_id) VALUES ('$product_id', '$userId')";
   if (mysqli_query($conn, $sql)) {
    // Insertion successful
   
    echo '<script> window.location.href = "cart.php";</script>';
} else {
    // Error occurred
    echo "Error adding product to cart: " . mysqli_error($conn);
}
}

if(isset($_GET['removeId'])){
    $removeId=$_GET['removeId'];
    echo $removeId;
    // $sql="DELETE FROM order WHERE cart_id='$removeId'";
    // $result = mysqli_query($conn, $sql);

    $sql="DELETE FROM carts WHERE id='$removeId'";
    $result = mysqli_query($conn, $sql);
    
    if ($result) {
        // Deletion successful
        echo '<script> window.location.href = "cart.php";</script>';
    } else {
        // Error occurred
        echo "Error removing product from cart: " . mysqli_error($conn);
        // You can also check the actual SQL query being executed
        echo "SQL Query: " . $sql;
    }
}
$sql = "SELECT COUNT(*) as count FROM carts WHERE user_id='$userId'";
$result = mysqli_query($conn, $sql);

if ($result) {
    $row = mysqli_fetch_assoc($result);
    $cartItemCount = $row['count'];
} else {
    $cartItemCount = 0;
} 



?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>All Products-RedStore</title>
    <link rel="stylesheet" href="style.css">
    <link rel="icon" href="RedStore_Img/images/logo.png" type="image/gif" sizes="200x300">

    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,500;0,600;0,700;1,600&display=swap" rel="stylesheet">
    
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />
    
</head>

<body>

    <div class="container">
        
    </div>
    
    <div class="container deliverymode" >
        
  <label class="label_delivery" ><i class="fa fa-truck" ></i> Service Mode</label>
  <div class="delivery-options"  style="margin-top: 8px;">
  <form class="cartButton" action="checkout.php" method="post" id="myForm">
    <input type="radio" id="deliver" name="delivery_option" value="delivery"  style="margin-right: 5px;" >
    <label for="delivery" style="margin-right: 10px;">Delivery</label>
    <input type="radio" id="takeaway" name="delivery_option" value="takeaway" style="margin-right: 5px;">
    <label for="takeaway" style="margin-right: 10px;">Takeaway</label>
    <input type="radio" id="dine_in" name="delivery_option" value="dine_in" style="margin-right: 5px;">
    <label for="dine_in" style="margin-right: 10px;">Dine In</label>

  </div>
</div>
    <!-------cart items details------>
    <div class="small-container  cart-page">
        <table>
            <tr class="header">
                <th>Product</th>
                <th>Quantity</th>
                <th>Subtotal</th>
            </tr>
            <?php 
     $sql = "SELECT carts.id,carts.product_id, products.name, products.price, products.image, COUNT(carts.product_id) AS quantity
     FROM carts 
     INNER JOIN products ON carts.product_id = products.id
     WHERE carts.user_id='$userId'
     GROUP BY carts.product_id";

$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
 while ($row = mysqli_fetch_assoc($result)) {
     $cartId = $row['id'];
     $productId = $row['product_id'];
     $productName = $row['name'];
     $productPrice = $row['price'];
     $productImage = $row['image'];
     $quantity = $row['quantity'];
     echo '<input type="hidden" name="cartId" value="' . $cartId . '">';

     echo '<input type="hidden" name="productId[]" value="' . $productId . '">';
    //  echo '<input type="hidden" name="quantity[]" value="' . $quantity . '">';
     echo '<input type="hidden" name="price[]" value="' . $productPrice . '">';?>

     

     <input type="hidden"   value="<?php echo $productId; ?>">
     
 
          
                        <tr>
                            <td>
                                <div class="cart-info">
                                    <!-- <img src=""> -->
                                    <img src="data:image/jpeg;base64,<?php echo base64_encode($productImage); ?>" width="100%"  id="productImg"> 
                                    <div>
                                        <p><?php echo $productName; ?></p>
                                        <p>Price: $<?php echo $productPrice; ?> <input type="hidden" class="iprice" name="iprice" value="<?php echo $productPrice; ?>"></p>
                                        <br>
                                        <a href="cart.php?removeId=<?php echo $cartId ?>" style="color:red";>Remove</a>
                                    </div>
                                </div>
                           </td>
                          
 
                            <td><input type="number" class="iquantity" name="quantity[]" onchange="subTotal()" value='<?php echo $quantity?>' min='1'></td>

                            <td class="itotal" name="itotal"></td>
                            
                                                
                           

                        </tr>
                      
                        <?php }}?>
            <tr>
           
                <td></td>
                <td></td>
                
                <td id="sum" style="border: 1px solid #5cb85c"></td>
            </tr>
        </table>
    </div>
    </div>
    <a href="index.php" class="btn" style="margin-left:30px;">continue shopping</a>
    <input type="hidden" id="subTot" name="itotal2" value="">
    <input type="hidden" name="selectedOption" id="selectedOption" value=" " />
    <input type="hidden" id="cartItemCount" value="<?php echo $cartItemCount; ?>">

   <!-- <a href="" id="checkoutButton" class="btn" style="margin-left:30px;"> <input type="submit" value="check" > </a> -->
    <input class="btn btnCheckout" name="submit" type="submit" value="Checkout" style="border: none;font-size: 17px;font: bold;" onclick="return validateForm()">
    
 </form>
 <div class="footer">
  <div class="cart-icon">
    <i class="fas fa-shopping-cart"></i>
    <span class="cart-count" ><?php echo $cartItemCount; ?></span>
  </div>
</div>
   
   
    <!-----upadating price---->

    <script>
     var iquantity=document.getElementsByClassName('iquantity');
     var iprice=document.getElementsByClassName('iprice');
     var itotal=document.getElementsByClassName('itotal');
     var gtotal=document.getElementById('sum');
     
     
     function subTotal()
     {
        gt=0;
        for(i=0;i<iprice.length;i++)

        {
            // itotal[i].innerText='$'+(iprice[i].value)*(iquantity[i].value);
            itotal[i].innerHTML = '<i class="fas fa-rupee-sign"></i> ' + (iprice[i].value) * (iquantity[i].value);
            gt=gt+(iprice[i].value)*(iquantity[i].value);
        }
       
        gtotal.innerHTML='<i class="fas fa-rupee-sign"></i> ' + gt;
        var subTot=document.getElementById('subTot');
        subTot.value=gt;
         // Pass gtotal value to form.php
    var checkoutUrl = "form.php?amount=" + gt;
    var checkoutButton = document.getElementById('checkoutButton');
    checkoutButton.href = checkoutUrl;
        
     }
     subTotal();
    
    </script>



    <!-------scroll button------>
    <button onclick="topFunction()" id="myBtn" title="Go to top">&#8657;</button>

    <!------->
    
    </script>
    <!--------js for toggle menu-->
    <script>
        var MenuItems = document.getElementById("menuitems");

        MenuItems.style.maxHeight = "0px";

        function menutoggle() {
            if (MenuItems.style.maxHeight == "0px") {
                MenuItems.style.maxHeight = "200px";
            } else {
                MenuItems.style.maxHeight = "0px";
            }


        }
    </script>
    <!-----js for scroll top-->
    <script>
        //Get the button
        var mybutton = document.getElementById("myBtn");

        // When the user scrolls down 20px from the top of the document, show the button
        window.onscroll = function() {
            scrollFunction()
        };

        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                mybutton.style.display = "block";
            } else {
                mybutton.style.display = "none";
            }
        }

        // When the user clicks on the button, scroll to the top of the document
        function topFunction() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
    </script>
<script type="text/javascript">
    function validateForm() {
      
        
  var radios = document.getElementsByName("delivery_option");
  var selectedValue = "";

  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      selectedValue = radios[i].value;
      break;
    }
  }

  if (selectedValue === "") {
    alert("Please select a delivery option.");
    return false;
  }
  // Get the number of items in the cart.
  var cartItemCount = document.getElementById("cartItemCount").value;

  // If the cart is empty, show an alert.
  if (cartItemCount == 0) {
    alert("Cart is empty.");
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