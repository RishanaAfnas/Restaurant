<?php
include('connection.php');
session_start();

// Assuming you have established a database connection

// Retrieve the count of rows from the cart table
$sql = "SELECT COUNT(*) as count FROM cart";
$result = mysqli_query($conn, $sql);

if ($result) {
    $row = mysqli_fetch_assoc($result);
    $cartItemCount = $row['count'];
} else {
    $cartItemCount = 0;
}

// Display the cart icon with the item count
?>




<DOCTYPE html>
    <html lang="en-US">

    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="google" content="notranslate" />
        <title>Silver Thalashery Restaurant | Tijara Smart Menu v3.0.8</title>
        <meta name="description" content="Silver Thalashery Restaurant Musaffah Shabiya ME10, Abu Dhabi - United Arab Emirates,  WhatsApp : 056 422 5432 , Tel : 02 444 6702, 02 555 6702">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
        <link rel="icon" type="image/png" href="images/favicon.png">

        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
        <meta name="theme-color" content="#000">

        <link rel="apple-touch-icon" href="/images/icon.png" sizes="256x256">
        <link rel="apple-touch-icon" href="/images/icon192.png" sizes="192x192">
        <link rel="apple-touch-icon" sizes="512x512" href="/images/icon512.png">

        <link href="/images/splash1125.png" sizes="1125x2436" rel="apple-touch-startup-image" />
        <link href="/images/splash1242.png" sizes="1242x2208" rel="apple-touch-startup-image" />
        <link href="/images/splash750.png" sizes="750x1334" rel="apple-touch-startup-image" />
        <link href="/images/splash640.png" sizes="640x1136" rel="apple-touch-startup-image" />


        <!-- STYLESHEETS -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@300;500;700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="css/owl.carousel.min.css" type="text/css" media="all">
        <link rel="stylesheet" href="css/owl.theme.default.min.css" type="text/css" media="all">
        <link rel="stylesheet" href="css/font-awesome.min.css">


        <!-- 
    <link rel="stylesheet" href="css/font-awesome.min.css"> -->

        <link rel="stylesheet" href="css/themify-icons.css">

        <link rel="stylesheet" href="main.css" type="text/css" media="all">
        <link rel="stylesheet" href="css/stepper.css" type="text/css" media="all">

        <script src="js/plugin.js"></script>
        <script src="js/main.js"></script>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" integrity="sha512-5A8nwdMOWrSz20fDsjczgUidUBR8liPYU+WymTZP1lmY9G6Oc7HlZv156XqnsgNUzTyMefFTcsFH/tnJE/+xBg==" crossorigin="anonymous" referrerpolicy="no-referrer" />


        <link rel="manifest" href="/manifest.webmanifest">
        <script>
            var taxValue = 5;
            var deliveryFee = 5;
            var minOrder = 200;
            var serviceCharge = 0;
            var taxMode = 'INCLUSIVE';
            var taxName = 'VAT';
            var tijaraCurCartID = 'STRCart';
        </script>


    </head>

    <body class="loader" id="topID">

        <!-- main wrapper container-maxwidth -->
        <div id="perspective" class="perspective effect-airbnb modalview mob-container">
            <div class="main-wrapper ">
                <div class="main-content ">

                    <!-- header wrapper -->
                    <header class="bg-white style2 pt-2 bg-home">
                        <div class="row">
                            <div class="col-sm-4 text-left pos-top">
                                <a href="#" class="menu-btn mt-0" id="sidebar-right"><span></span></a>
                            </div>
                            <div class="col-sm-4 text-center  pos-top" style="padding-top: 6px;">
                                <a href="#" class="logo d-block mt-2 cat_link_menu"><img src="images/logo.png" alt=""></a>
                            </div>

                            <div class="col-sm-12 text-left pos-top">

                            </div>
                            <div class="col-sm-12 text-left mt-1 mb-2 pos-top">
                                <div class="form-content style1">
                                    <form action="index.php" method="get">
                                        <div class="input-group">
                                            <input type="text" id="search-input" class="form-control bg-white" name="search" placeholder="Search...">
                                            <div class="input-group-append">
                                                <button class="btn btn-primary" id="search-button" type="submit">
                                                    <i class="fa fa-search"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </form>




                                </div>
                                <div id="search-title" class="item-header fw-600 text-white mt-2 mb-0"><a href="#" class="more-btn cat_link_menu text-white ">

                                        back to home </a>
                                    <h5 class="">

                                        Search Result </h5>
                                </div>

                            </div>

                        </div>
                    </header>
                    <!-- header wrapper -->


                    <!-- loader wrapper -->
                    <div class="preloader-wrap p-3">
                        <div class="box shimmer">
                            <div class="lines">
                                <div class="line s_shimmer"></div>
                                <div class="line s_shimmer"></div>
                                <div class="line s_shimmer"></div>
                                <div class="line s_shimmer"></div>
                            </div>
                        </div>
                        <div class="box shimmer mb-3">
                            <div class="lines">
                                <div class="line s_shimmer"></div>
                                <div class="line s_shimmer"></div>
                                <div class="line s_shimmer"></div>
                                <div class="line s_shimmer"></div>
                            </div>
                        </div>
                    </div>
                    <!-- loader wrapper -->

                    <div class="app-body p-4 bg-danish">


                        <div class="row" id="ajaxMain">

                            <div class="col-sm-12 mb-2">


                                <div id="all_cat_title" class="item-header fw-600 text-black mt-0 mb-0">
                                    <h4 class=" ">
                                        Categories </h4><a href="#" class="more-btn cat_link_menu  "><i class="ti-arrow-left"></i>
                                        All Items </a>
                                </div>
                                <div id="parent_cat" class="owl-carousel owl-theme shop-categoris vis-slider" style="width:120%;">



                                    <?php $sql = "SELECT * FROM category";
                                    $result = mysqli_query($conn, $sql);
                                    if (mysqli_num_rows($result) > 0) {
                                        while ($row = mysqli_fetch_assoc($result)) {
                                            $id = $row['id'];
                                            $name = $row['name'];
                                            $image = $row['image'];


                                    ?> <div class="item"><a href="index.php?category_id=<?php echo $id; ?>" class="cat_link menu-spl-cat"> <?php echo '<img src="data:image/jpeg;base64,' . base64_encode($image) . '" class="cat_img">' ?><h4 class=" "><?php echo $name; ?></h4></a></div>

                                    <?php }
                                    }
                                    ?>
                                </div>
                            </div>


                            <div class="col-sm-12 mb-2">


                                <h6 style="color: #000;">All Items</h6>



                            </div>



                            <div class="col-sm-12">

                                <ul class="shop-item    grocer-item  pl-0">

                                    <div id="ajax">


                                        <div id="response">


                                            <?php
                                            if (isset($_GET['search'])) {
                                                $search = $_GET['search'];

                                                $sql = "SELECT * FROM products WHERE name LIKE '%$search%'";
                                                $result = mysqli_query($conn, $sql);
                                                if (mysqli_num_rows($result) > 0) {

                                                    while ($row = mysqli_fetch_assoc($result)) {
                                                        $id = $row['id'];
                                                        $category_id = $row['category_id'];
                                                        $name = $row['name'];
                                                        $price = $row['price'];

                                                        $image = $row['image']; ?>
                                                        <h6 style="color: #000;">All Item</h6>
                                                        <li class="product text-center" data-image="uploads/products/thumb_image-not-found.png" data-name="Wayanadan pothu varattiyath" data-price="18.00" data-id="396">
                                                            <a data-id="396" class="showProductInfo">
                                                                <div class="item list-item-full  pl-0 pr-0" id="search-results">
                                                                <figure class="mb-0"> <img src="data:image/jpeg;base64,<?php echo base64_encode($image); ?>"></figure>
                                                               <div class="content-div">
                                                                        <h5 class="fw-600 text-white pull-left mb-1"></h5>
                                                                    </div><i class="ti-heart   bg-price price">Rs <span><?php echo $price; ?></span></i>
                                                                </div>
                                                            </a>
                                                            <h4 class=""><?php echo $name; ?></h4>
                                                            <div class="hCid hcId396">
                                                                <input type="hidden" class="count cId396" value="1" onchange="cart.updateCartItem(396, this.value);" />
                                                            </div>

                                                        </li>
                                                        <?php }
                                                } else {
                                                    echo "<h3 class='text-danger text-center'>No search Results</h3>";
                                                }
                                            } else {


                                                if (isset($_GET['category_id'])) {
                                                    $unique_id = $_GET['category_id'];


                                                    $sql = "SELECT * FROM products WHERE category_id=$unique_id";
                                                    $result = mysqli_query($conn, $sql);
                                                    if (mysqli_num_rows($result) > 0) {

                                                        while ($row = mysqli_fetch_assoc($result)) {
                                                            $id = $row['id'];
                                                            $category_id = $row['category_id'];
                                                            $name = $row['name'];
                                                            $price = $row['price'];

                                                            $image = $row['image']; ?>
                                                            <li class="product text-center" data-image="uploads/products/thumb_image-not-found.png" data-name="Wayanadan pothu varattiyath" data-price="18.00" data-id="396">
                                                                <a data-id="396" class="showProductInfo">
                                                                   
                                                                    <div class="item list-item-full  pl-0 pr-0">
                                                                    <figure class="mb-0">  <a href="product-details.php?product_id=<?php echo $id; ?>"><img src="data:image/jpeg;base64,<?php echo base64_encode($image); ?>"></a></figure>
                                                      <div class="content-div">
                                                                            <h5 class="fw-600 text-white pull-left mb-1"></h5>
                                                                        </div><i class="ti-heart   bg-price price">Rs <span><?php echo $price; ?></span></i>
                                                                    </div>
                                                                
                                                                <h4 class=""><?php echo $name; ?></h4>
                                                                <div class="hCid hcId396">
                                                                    <input type="hidden" class="count cId396" value="1" onchange="cart.updateCartItem(396, this.value);" />
                                                                </div>

                                                            </li>
                                                    <?php }
                                                    } else {
                                                        echo "<h3 class='text-danger text-center'>No search Results</h3>";
                                                    }
                                                } else { ?>
                                                    <?php $sql = "SELECT * FROM products";
                                                    $result = mysqli_query($conn, $sql);
                                                    if (mysqli_num_rows($result) > 0) {
                                                        while ($row = mysqli_fetch_assoc($result)) {
                                                            $id = $row['id'];
                                                            $category_id = $row['category_id'];
                                                            $name = $row['name'];
                                                            $price = $row['price'];

                                                            $image = $row['image']; ?>
                                                            <li class="product text-center" data-image="uploads/products/thumb_image-not-found.png" data-name="Wayanadan pothu varattiyath" data-price="18.00" data-id="396">
                                                                <a data-id="396" class="showProductInfo">
                                                                    <div class="item list-item-full  pl-0 pr-0">
                                                                        <figure class="mb-0"> <a href="product-details.php?product_id=<?php echo $id; ?>"> <img src="data:image/jpeg;base64,<?php echo base64_encode($image); ?>"></a></figure>
                                                                        <div class="content-div">
                                                                            <h5 class="fw-600 text-white pull-left mb-1"></h5>
                                                                        </div><i class="ti-heart   bg-price price"><i class="fa fa-inr" aria-hidden="true"></i> <span><?php echo $price; ?></span></i>
                                                                    </div>
                                                                </a>
                                                                <h4 class=""><?php echo $name; ?></h4>
                                                                <div class="hCid hcId396">
                                                                    <input type="hidden" class="count cId396" value="1" onchange="cart.updateCartItem(396, this.value);" />
                                                                </div>

                                                            </li>
                                            <?php }
                                                    }
                                                }
                                            } ?>

                                        </div>


                                        <input type="hidden" id="pageno" value="1">
                                        <input type="hidden" id="cat" value="0">
                                        <input type="hidden" id="spl_filter" value="">
                                        <div class="clearfix"></div>
                                        <div class="text-center">
                                            <img id="loader" src="loader.svg">
                                        </div>


                                    </div>






                                </ul>

                            </div>
                        </div>
                    </div>
                </div>



                <nav class="navigation style7 style1">
                    <div class="container pl-0 pr-0">
                        <div class="nav-content">
                            <ul>
                                <!-- <li><a href="#" class=" nav-content-bttn cat_link_menu"  ><i class="ti-home"></i>Home</a></li> -->
                                <li><a href="0" class="nav-content-bttn  allCat"><i class="fa fa-th-large" aria-hidden="true"></i>
                                        Categories
                                    </a></li>

                                <li><a href="tel:02 444 6702" class="nav-content-bttn"><i class="fa fa-phone" aria-hidden="true"></i>
                                        Call
                                    </a></li>

                                <li class="shopping-cart"><a href="cart.php" class=" cart-count mt-1 nav-content-bttn nav-center showCartInfo"><i class="fa fa-shopping-cart" aria-hidden="true"></i><span id="cartStat"><?php echo $cartItemCount; ?></span></a></li>
                                <li><a href="https://api.whatsapp.com/send?phone=971564225432" class="nav-content-bttn" data-tab="favorites"><i class="fa fa-whatsapp "></i>
                                        Whatsapp
                                    </a></li>

                                <li><a href="https://goo.gl/maps/5PjkkjsggjuxXWwT9" class=" nav-content-bttn"><i class="fa fa-map" aria-hidden="true"></i>
                                        Location
                                    </a></li>
                            </ul>
                        </div>
                    </div>
                </nav>


            </div>



            <nav class="outer-nav left vertical ">
                <header class="bg-tranparent style2 mt-3 pb-0 bg-home">
                    <div class="row">
                        <div class="col-sm-4 text-left pos-top">
                            <a href="" class="menu-btn mt-0" id="close-sidebar"></a>
                        </div>
                        <div class="col-sm-4 text-center pos-top">
                            <a href="#" class="logo d-block mt-1"><img src="images/logo-light-text.png" class="img-fluid"></a>
                        </div>
                        <!-- <div class="col-sm-4 text-right pos-top">
						<a href="#" class="cart-btn mt-1"><i class="ti-pen"></i><span>1</span></a>
	                </div> -->
                    </div>
                </header>
                <ul class="nav-item ">
                    <!-- <li class="menu-text text-left">
	        		<img src="images/client_logo.png" alt="user">

	        	</li> -->

                    <li ><a href="index.php" class=" cat_link_menu"><i class="fa fa-home" aria-hidden="true"></i>
                            Home </a></li>

                    <li><a href="best" class=" spl_link_menu"><i class="ti-face-smile"></i>
                            Popular </a></li>

                    <li><a href="special" class=" spl_link_menu"><i class="ti-star"></i>
                            Featured </a></li>

                    <li><a href="0" class="allCat"><i class="ti-layout-grid2 "></i>
                            Categories </a></li>

                    <li><a href="#" class="feedbackNav"><i class="ti-comment-alt"></i>
                            Feedback </a></li>

                    <li><a href="#storeInfo" class="xxxshowstoreInfo"><i class="ti-layout-media-center-alt "></i>
                            About Us </a></li>


                </ul>
            </nav>



        </div>
        <!-- main wrapper -->
        <!-- </div> -->

        <div id="desktop-view">
            <div class="container" style="flex-direction: column;">

                <div class="divider" style="border-color: rgb(74, 65, 42);"></div>
                <div style="text-align: right; margin-right :30px">
                    <img src="images/1.png" width="250">
                </div>
            </div>
        </div>
    </body>

    </html>