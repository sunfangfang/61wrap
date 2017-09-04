$(function() {
	var speed = 25;
//	var audio = document.getElementById("shakemusic");
//	var openAudio = document.getElementById("openmusic");
	var audio = new Audio();
	audio.preload = 'auto';
	audio.src = 'music/red-01.mp3';
	var openAudio = new Audio();
	openAudio.preload = 'auto';
	openAudio.src = 'music/red-02.mp3';
	audio.load();
    openAudio.load();
	document.body.addEventListener('touchstart', function(){
	    audio.load();
	    openAudio.load();
	});
	var x = t = z = lastX = lastY = lastZ = 0;
	if (window.DeviceMotionEvent){
		window.addEventListener('devicemotion',
			function () {
				var acceleration = event.accelerationIncludingGravity;
				x = acceleration.x;
				y = acceleration.y;
				if (Math.abs(x - lastX) > speed || Math.abs(y - lastY) > speed) {
					audio.play();
					$('.red-ss').addClass('shake_bag');
					setTimeout(function(){
						audio.pause();
						openAudio.play();
						$('.red-tc').css('display', 'block');
					}, 1500);
				};
				lastX = x;
				lastY = y;
			},false);
	};
});