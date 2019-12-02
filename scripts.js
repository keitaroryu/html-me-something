window.addEventListener("load", function() {
    let muteButton = document.getElementById("mute");

    muteButton.addEventListener("click", function(){
        let video=document.getElementById("vid");

        if(video.muted){
            video.muted = false;
        } else {
            video.muted = true;
        };
    });

});