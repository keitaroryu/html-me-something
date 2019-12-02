window.addEventListener("load", function() {

    let muteButton = document.getElementById("mute");

    muteButton.addEventListener("click", function(){
        let video=document.getElementById("vid");

        if(video.muted){
            video.muted = false;
            muteButton.innerHTML = "STOP ME NYA~!!!!!!";
        } else {
            video.muted = true;
            muteButton.innerHTML = "Listen to the call of my people!";
        };
    });

    muteButton.addEventListener("mouseover", function(){
        muteButton.style.color = "white";
    });

    muteButton.addEventListener("mouseout", function(){
        muteButton.style.color = "#c3c3c3";
    });

});