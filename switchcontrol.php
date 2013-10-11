<?php
// Systemcode
$systemCode = "01110";

// Get parameter
$getSwitch = $_GET['switch'];
$getTargetState = $_GET['state'];


// Make it safe
switch($getSwitch) {
	case "a":
		$switch = 1;
		break;
	case "b":
		$switch = 2;
		break;
	case "c":
		$switch = 3;
		break;
	case "d":
		$switch = 4;
		break;
	default:
		die("ERROR");
}

// Call rcswitch
if($getTargetState === '1') {
	shell_exec('sudo /home/pi/div/rcswitch-pi/send '.$systemCode.' '.$switch.' 1');
	echo "SUCCESS";
} elseif ($getTargetState === '0') {
	shell_exec('sudo /home/pi/div/rcswitch-pi/send '.$systemCode.' '.$switch.' 0');
	echo "SUCCESS";
} else {
	die("ERROR");
}


?>