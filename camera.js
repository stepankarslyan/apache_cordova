document.addEventListener("deviceready", onDeviceReady, false);
var onDeviceReady = function() {
	var pictureSource = navigator.camera.PictureSourceType;
 	var destinationType = navigator.camera.DestinationType;
 	 var onPhotoDataSuccess = function(imageURI) {
      
      var smallImage = document.getElementById('smallImage');
      smallImage.style.display = 'block';
      smallImage.src = imageData;
    };
    var capturePhoto = function() {
      navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
        destinationType: destinationType.DATA_URL });
    };

    var capturePhotoEdit = function() {
      navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 20, allowEdit: true,
        destinationType: destinationType.DATA_URL });
    };

    var getPhoto = function(source) {
      navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50,
        destinationType: destinationType.FILE_URI,
        sourceType: source });
    };

    var onFail = function(message) {
      alert('Չստացվեց, որովհետև: ' + message);
    }
};
