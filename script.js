function playPause(btn,vid){
	var vid = document.getElementById(vid);
  playbtn = document.getElementById("playpausebtn");
  playbtn.addEventListener("click",playPause);
	if(vid.paused){
		vid.play();
		btn.innerHTML = " ";
    playbtn.style.background = "url(https://image.flaticon.com/icons/svg/189/189889.svg) no-repeat";
	} else {
		vid.pause();
		btn.innerHTML = " ";
    playbtn.style.background = "url(https://image.flaticon.com/icons/svg/148/148744.svg) no-repeat";
	   
	}
}