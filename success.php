<?php
include('connection.php');

error_reporting(E_ALL);
ini_set('display_errors', 1);
require 'config.php';

session_start();
if (!empty($_POST)) //$_POST superglobal array is not empty, indicating that it has received a response from Razorpay.

{
    $order_id= $_SESSION['order_id'];
    echo $order_id;
    $userId = $_SESSION['user_id'];
    
    $sql2 = "SELECT id FROM users WHERE user_id='$userId'";
    $result = mysqli_query($conn, $sql2);
    if (mysqli_num_rows($result) > 0) {
        while ($row = mysqli_fetch_assoc($result)) {

            $userID = $row['id'];
            // echo $userId;
        }
    }
    $sql = "SELECT id FROM `order` WHERE user_id='$userID' ORDER BY id DESC LIMIT 1 ";
    $orderResult = mysqli_query($conn, $sql);
    if (mysqli_num_rows($orderResult) > 0) {
        $row = mysqli_fetch_assoc($orderResult);
        $orderId = $row['id'];
    }

    //response from razorpay

    $razorpay_order_id = $_POST['razorpay_order_id'];
    // print_r($razorpay_order_id);
    $razorpay_signature = $_POST['razorpay_signature'];
    // print_r($razorpay_signature);
    $razorpay_payment_id = $_POST['razorpay_payment_id'];
    // print_r($razorpay_payment_id);

    //Generate Server side Signature
    $generated_signature = hash_hmac('sha256', $order_id . "|" . $razorpay_payment_id, API_SECRET);
    if ($generated_signature == $razorpay_signature) {

        $updateQuery = "UPDATE payment SET payment_status='completed' WHERE order_id='$orderId'";
        mysqli_query($conn,$updateQuery);
        header("Location:thankyouu.php");
        exit();
    } else {
        echo "Invalid payment";
    }
}
