<?php
include ('connection.php');

session_start();
if ($_SESSION['order_completed']) {
    header("Location: thankyou.php");
    exit;
  }
if (isset($_POST['submit'])) {
    $selectedOption = $_POST['selectedOption'];
  
   
    if($selectedOption == 'CashOndelivery'){
        header("Location:thankyou.php");
        exit();
    }
    else{

    }
    
  }
 

require 'config.php';
require 'vendor/autoload.php';

use Razorpay\Api\Api;

if (!empty($_POST['total'])) {
    $name = $_POST['name'];
    // $email = $_POST['email'];
    $amount = $_POST['total'];
    $mobile=$_POST['mobile'];
   
    $api = new Api(API_KEY, API_SECRET);// creates an instance of Api class from Razorpay SDk
    
    $receiptNumber = time(); // Generates a unique timestamp-based receipt number
    $res = $api->order->create([     //order->create method is used to create a new order in razorpay,it accept various parameters
        'receipt' => $receiptNumber,
        'amount' => $amount . '00',
        'currency' => 'INR',
        'notes' => ['key1' => 'value3', 'key2' => 'value2']
    ]);
    // print_r($res);

    if (!empty($res['id'])) {
        $_SESSION['order_id'] = $res['id'];
?>

        <form id="paymentForm" action="<?php echo BASE_URL ?>success.php" method="POST">
            <script src="https://checkout.razorpay.com/v1/checkout.js"></script> <!--- to load the Razorpay Checkout JavaScript library (checkout.js) from the Razorpay CDN.-->
            
            <!----creating new instance of a razorpay class-->
            <script>
                var options = {
                    "key": "<?php echo API_KEY ?>",
                    "amount": "<?php echo $amount . '00'; ?>",
                    "currency": "INR",
                    "order_id": "<?php echo $res['id']; ?>",
                    "name": "<?php echo COMPANY_NAME; ?>",
                    "handler": function(response) { //handler function is invoked when the payment is successful
                        document.getElementsByName('razorpay_payment_id')[0].value = response.razorpay_payment_id;
                        document.getElementsByName('razorpay_order_id')[0].value = response.razorpay_order_id;
                        document.getElementsByName('razorpay_signature')[0].value = response.razorpay_signature;

                        // Submit the form
                        document.getElementById('paymentForm').submit();
                    }
                };
                var rzp = new Razorpay(options);
                rzp.open();
            </script>
            <input type="hidden" name="razorpay_order_id" value="">
            <input type="hidden" name="razorpay_signature" value="">
            <input type="hidden" name="razorpay_payment_id" value="">
            <input type="hidden" name="hidden" value="">
        </form>

<?php
    }
}
?>
