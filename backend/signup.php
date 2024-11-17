<?php

require_once __DIR__ . '/common.php';

$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];
$address = $_POST['address'];
$gender = $_POST['gender'];

$query = "INSERT INTO players(username, email, passwd, `address`, gender) 
            VALUES
                ('$username', '$email', '$password', '$address', '$gender')";

if ($mysqli->query($query)) {
    jsonresponse(['T', 'success']);
} else {
    jsonresponse(['F', 'failed']);
}