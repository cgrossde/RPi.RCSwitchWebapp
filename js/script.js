$(document).ready(function() {
	// Serverstatus 
	$.serverObserver.enable({
		url: "http://172.20.180.236",
		frequency: 2000,
		onServerOnline: function() {
			$('.navbar-status').html('<span class="badge badge-success">online</span>');
		},
		onServerOffline: function() {
			$('.navbar-status').html('<span class="badge badge-important">offline</span>');
			console.log('OFFLINE');
		}
	});


	// Buttons
	$('.switchButton').each(function(index, button) {
		button = $(button);
		// Get letter
		var regexSwitchID = /switch-([a-d])/;
		var switchID = regexSwitchID.exec(button.attr('class'))[1];
		
		if(button.hasClass('on')) {
			button.click(function() {
				turnOn(switchID);
			});
		} else if(button.hasClass('off')) {
			button.click(function() {
				turnOff(switchID);
			});
		}
	});
});

function turnOn(switchID) {
	callSwitchControl(switchID, 1);
}

function turnOff(switchID) {
	callSwitchControl(switchID, 0);
}

function callSwitchControl(switchID, state) {
	$.get( 'switchcontrol.php', {
			'switch': switchID,
			state: state
		});
}