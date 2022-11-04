var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	video.load()
	video.autoplay = false
	video.loop = false
});

document.querySelector("#play").addEventListener("click", function() {
	video.play()
	video.volume = (document.querySelector("#slider").value/100)
	document.querySelector("#volume").innerHTML = video.volume*100 + "%"
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause()
})

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate -= .10
	console.log(video.playbackRate)
})

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate += .10
	console.log(video.playbackRate)
})

document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime += 10
	if (video.currentTime == video.duration) {
		video.currentTime = "0"
	}
	console.log(video.currentTime)
})

document.querySelector("#mute").addEventListener("click", function() {
	text = document.querySelector("#mute")
	if (video.muted == false) {
		video.muted = true
		text.innerHTML = "Unmute"
	}
	else if (video.muted == true) {
		video.muted = false
		text.innerHTML = "Mute"
	}

})

document.querySelector("#slider").addEventListener("input", function() {
	document.querySelector("#volume").innerHTML = document.querySelector("#slider").value + "%"
	video.volume = document.querySelector("#slider").value/100
})

document.querySelector("#vintage").addEventListener("click", function() {
	video.className = "oldSchool"
})

document.querySelector("#orig").addEventListener("click", function() {
	video.className = "video"
})

