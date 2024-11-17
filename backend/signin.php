<?php

require_once __DIR__ . '/common.php';

$username = $_POST['username'];
$password = $_POST['password'];

$flag = 0;

$query = "SELECT 1 as flag FROM players WHERE username = '$username' AND passwd = '$password' AND active = '1'";
// jsonresponse([$query]);

$result = $mysqli->query($query);
while ($row = $result->fetch_assoc()) {
    // $flag = $row['flag'];
    $flag++;
}

if ($flag > 0) {
    jsonresponse(['T', 'success']);
} else {
    jsonresponse(['F', 'failed']);
}
