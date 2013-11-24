document.addEventListener("deviceready", onDeviceReady, false);
var onDeviceReady = function() {
 	navigator.camera.getPicture( onSuccess, onFail, { quality: 50,
    destinationType: Camera.DestinationType.DATA_URL
	});
 		var onSuccess = function(imageData) {
    	var image = document.getElementById('myImage');
    		image.src = "data:image/jpeg;base64," + imageData;
		};

		var onFail = function(message) {
    	alert('Failed because: ' + message);
		}
};
