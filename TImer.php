<?php

header('Content-Type: application/json');

function square($num)
{
    return $num * $num;
}
echo json_encode(square(4));
?>