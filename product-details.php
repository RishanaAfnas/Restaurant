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

    $userId=$row['id'];
    // echo $userId;
  }
}


echo $userId;


$_SESSION['order_completed'] = false;
$sql = "SELECT COUNT(*) as count FROM carts";
$result = mysqli_query($conn, $sql);

if ($result) {
    $row = mysqli_fetch_assoc($result);
    $cartItemCount = $row['count'];
} else {
    $cartItemCount = 0;
}


?><!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>All Products-RedStore</title>
    <link rel="stylesheet" href="style.css">
    <link rel="icon" href="RedStore_Img/images/logo.png" type="image/gif" sizes="200x300">

    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,500;0,600;0,700;1,600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
</head>
<body>
 
        <div class="container back">
    <div class="navbar">
        <div class="logo">
        <a href="index.php" class="btn"><i class="far fa-long-arrow-alt-left"></i></a>
        </div>
      
  </div>
  </div>

  <!-------single product details-->
  
    <div class="small-container single-product ">
        <div class="row">
            <div class="col-2">
            <?php 
     if(isset($_GET['product_id'])){
      $product_id=$_GET['product_id'];

      $sql="SELECT * FROM products WHERE id=$product_id";
      $result=mysqli_query($conn,$sql);
      if (mysqli_num_rows($result) > 0){
        while ( $row=mysqli_fetch_assoc($result)){
            $id=$row['id'];
            $name=$row['name'];
            $price=$row['price'];
            $image=$row['image'];
            

        }

      }
   
}


?>
              <img src="data:image/jpeg;base64,<?php echo base64_encode($image); ?>" width="100%"  id="productImg"> 
              
            </div>
            <div class="col-2">
              
                <h1><?php echo $name;?></h1>
                <h4 class="price"><i class="fas fa-rupee-sign" style="color:#555;"></i> <?php echo $price;?> </h4>
                <form  action="cart.php" method="post">
                <input type="hidden" name="product_id" value="<?php echo $id; ?>">
                <input type="hidden" name="user_id" value="<?php echo $userId; ?>">
                <input type="submit"  name="submit" class="btn" value="Add To Cart" style="width: 50%";>
                </form>
                
                <h3> Details <i class="fas fa-indent"></i></h3><br>
                <p>  <?php echo $name;?> </p>
              
            </div>
        </div>
    </div>
    <div class="footer">
  <div class="cart-icon">
    <i class="fas fa-shopping-cart"></i>
    <span class="cart-count"><?php echo $cartItemCount; ?></span>
  </div>
</div>

    
    <!-----title-->
    
<!-------scroll button------>
<button onclick="topFunction()" id="myBtn" title="Go to top">&#8657;</button>
<!--------js for toggle menu-->
<script>
    var MenuItems=document.getElementById("menuitems");

      MenuItems.style.maxHeight="0px";
      function menutoggle(){
          if( MenuItems.style.maxHeight=="0px")
          {
            MenuItems.style.maxHeight="200px";
          }
          else
          {
            MenuItems.style.maxHeight="0px";
          }

          
      }
</script>
<!------js for product gallery----->

<script>

    var productImg =document.getElementById("productImg");
    var smallImg =document.getElementsByClassName("small-img");

        smallImg[0].onclick =function(){
            productImg.src=smallImg[0].src;
        }
        smallImg[1].onclick =function(){
            productImg.src=smallImg[1].src;
        }
        smallImg[2].onclick =function(){
            productImg.src=smallImg[2].src;
        }
        smallImg[3].onclick =function(){
            productImg.src=smallImg[3].src;
        }



</script>
<!-----js for scroll top-->
<script>
    //Get the button
    var mybutton = document.getElementById("myBtn");
    
    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};
    
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




    
</body>
</html>