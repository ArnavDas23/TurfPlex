<?php

function jsonresponse($data)
{
    ob_start();
    ob_clean();
    header_remove();
    header("Content-type: application/json; charset=utf-8");
    http_response_code('200');
    echo json_encode($data);
    die();
}

function conn()
{
    // Create connection
    $conn = new mysqli(
        '127.0.0.1',
        'turfplex',
        'secret',
        'turfplex'
    );

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    } else {
        // echo 'Connection successful';
    }

    return $conn;
}

$mysqli = conn();
