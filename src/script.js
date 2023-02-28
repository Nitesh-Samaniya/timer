(function(){
    var hours = document.querySelector(".hours");
    let mins = document.querySelector(".mins");
    let secs = document.querySelector(".secs");

    let start_btn = document.querySelector(".container_start-btn");
    let stop_btn = document.querySelector(".container_stop-btn");
    let reset_btn = document.querySelector(".container_reset-btn");

    let countDownTimer = null;

    //start timer button start
    start_btn.addEventListener("click", ()=>{
        if(hours.value==0 && mins.value==0 && secs.value==0)
            return;
        
        document.querySelector(".container_heading").innerText = "Timer Stated";

        function startInterval(){
            start_btn.style.display = "none";
            stop_btn.style.display = "block"

            countDownTimer = setInterval(function(){
                timer();
            },1000);
        }
        startInterval();
    })
    //start timer button end

    function timer(){
        if(secs.value > 60){
            mins.value++;
            secs.value = parseInt(secs.value) - 59;
        }

        if(mins.value > 60){
            hours.value++;
            mins.value = mins.value - 59;
        }

        mins.value = mins.value>60 ? 60 : mins.value;

        if(hours.value==0 && mins.value==0 && secs.value==0){
            hours.value = 0;
            mins.value = 0;
            secs.value = 0;
            
        }else if(secs.value != 0){
            secs.value = `${secs.value<=10 ? "0" : ""}${secs.value-1}`
        }else if(mins.value != 0 && secs.value == 0){
            secs.value = 59;
            mins.value = `${mins.value<=10 ? "0" : ""}${mins.value-1}`
        }else if(hours.value != 0 && mins.value == 0){
            secs.value = 59;
            hours.value = `${hours.value<=10 ? "0" : ""}${hours.value-1}`
        }
        return;
    }

    function stopInterval(state){
        start_btn.innerHTML = state === "pause" ? "Continue" : "Start";
    
        stop_btn.style.display = "none";
        start_btn.style.display = "block";
    
        clearInterval(countDownTimer);
    }

    stop_btn.addEventListener("click", ()=>{
        stopInterval("pause");
    })


    reset_btn.addEventListener("click", function(){
        hours.value = "";
        mins.value = "";
        secs.value = "";

        stopInterval();
    })

})()