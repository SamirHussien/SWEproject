var storedName = localStorage.getItem('name');
document.getElementById("hello").innerHTML="userName : "+storedName;

       var storedGender = localStorage.getItem('gender');
       console.log(storedGender);

      switch (storedGender) {
        case "male":
          document.body.style.background = "#87CEFA";
          break;

        case "female":
          document.body.style.background = "#FFB6C1";
          break;
      
        default:
          break;
      }


   
       var duration=1800;
  
        var timer = duration, minutes, seconds;

        var interVal = setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            document.getElementById('count').innerHTML=("<b>" + minutes +':' + seconds + "</b>");
            // $(display).html("<b>" + minutes + "m : " + seconds + "s" + "</b>");
            if (--timer < 0) {
                timer = duration;
                document.getElementById('count').innerHTML='TIME OUT!';
                showResults();
                clearInterval(interVal);
                document.getElementsByClassName("answers")[0].innerHTML="";
                document.getElementsByClassName("question")[0].innerHTML="";

                document.getElementsByClassName("btns")[0].innerHTML="";
               
            
            }
        }, 1000);