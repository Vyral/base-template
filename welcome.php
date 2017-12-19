<?php
// Authentication Variables
$account_id = "1808590";
$public_api_key = "13ce4d0e43aa22f28c9c";
$private_api_key = "fc36793623f9bee1ae46";

// Form variable(s)
$email = $_POST['email'];
$first_name = $_POST['first_name'];
$last_name = $_POST['last_name'];
$groups = array(123456, 654321);

// Member data other than email should be passed in an array called "fields"
$member_data = array(
    "email" => $email,
    "fields" => array(
        "first_name" => $first_name,
        "last_name" => $last_name
    ),
    "group_ids" => $groups
);

// Set URL
$url = "https://api.e2ma.net/".$account_id."/members/add";

// Open connection
$ch = curl_init();

// Set the url, number of POST vars, POST data
curl_setopt($ch, CURLOPT_USERPWD, $public_api_key . ":" . $private_api_key);
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_POST, count($member_data));
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($member_data));
curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-type: application/json'));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
$head = curl_exec($ch);
$http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

//execute post
if($http_code > 200) {
    $app_message = "Error sending subscription request";
    print_r($head);
} else {
    print_r($head);
    $app_message = "Success!";
}

echo $app_message;
?>
