
    let score = document.getElementsByClassName("sc-val");
    let cr = document.getElementById("cr");
    let crVal = Number(cr.innerHTML);
    let mph = document.getElementById("score-mph");
    
        if(crVal >= 0 && crVal <= 20){
            mph.style.color = "#EF4444";
        }else if(crVal >= 21 && crVal <= 50){
            mph.style.color = "#EF9644";
        }else if(crVal >= 51 && crVal <= 80){
            mph.style.color = "#7EF025";
        }else if(crVal >= 81 && crVal <= 100){
            mph.style.color = "#A541FF";
        }else{
        }
    

        for(let i=0; i< score.length; i++){
            let numScore = Number(score[i].innerHTML)
            if(numScore >= 0 && numScore <= 20){
                score[i].classList.add("red");
            }else if(numScore >= 21 && numScore <= 50){
                score[i].classList.add("orange");
            }else if(numScore >= 51 && numScore <= 80){
                score[i].classList.add("green");
            }else if(numScore >= 81 && numScore <= 100){
                score[i].classList.add("purple");
            }else{   
                score[i].classList.add("gray");
            }
        }
    let bar = document.getElementsByClassName("bar");
    
        for(let j=0; j< bar.length; j++){
            let scoreB = document.getElementsByClassName("score-board"); 
            let barScore = Number(scoreB[j].innerHTML);
            if(barScore >= 0 && barScore <= 20){
                bar[j].classList.add("red-bar");
            }else if(barScore >= 21 && barScore <= 50){
                bar[j].classList.add("orange-bar");
            }else if(barScore >= 51 && barScore <= 80){
                bar[j].classList.add("green-bar");
            }else if(barScore >= 81 && barScore <= 100){
                bar[j].classList.add("purple-bar");
            }else{
            }
                       
        }

        

    
    

