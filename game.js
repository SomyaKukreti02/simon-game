let gamePattern=[];
let buttonColours=["red","blue","green","yellow"];
let randomNumber=-1;
let level=0;

let userClickedPattern=[];
$(".btn").click(function(){
    userChosenColour=this.id;
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
    playSound(userChosenColour);
    animatePress(this);
    checkAnswer(level);
});
function isEqual(a,b){
    return a.join()==b.join();
}
function checkAnswer(currentLevel){
    if(userClickedPattern.length==currentLevel){
        if(isEqual(userClickedPattern,gamePattern)) {
            setTimeout(nextSequence,1000);
        }
        else {
            let a= $("head");
            document.body.classList.add("game-over");    
            setTimeout(function(){
                document.body.classList.remove("game-over");
            },200);
           
            let a1= new Audio("sounds/wrong.mp3");
            a1.play();
            $("h1").text("Game Over, Press Any Key to Restart");
            gamePattern=[];
            level=0;
            $("body").one("keypress",function(){
                location.reload();
            })
        }
    }
    
}
function animatePress(currentColour){
    currentColour.classList.add("pressed");
    setTimeout(function(){
        currentColour.classList.remove("pressed");
    },100);
}
$("body").one("keypress",nextSequence);

function nextSequence(){

    randomNumber=(Math.floor(Math.random()*4));
    let randomChosenColour= buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    console.log(gamePattern);
    playSound(randomChosenColour);
    level++;
    userClickedPattern=[];
    $("h1").text("Level "+level);
}
function playSound(name){
    switch(name){
        case ("green"):{
            var audio1= new Audio("sounds/green.mp3");
            audio1.play();
            $("#green").fadeOut(100).fadeIn(100);

            break;
        }
        case ("yellow"):{
            var audio1= new Audio("sounds/yellow.mp3");
            audio1.play();
            $("#yellow").fadeOut(100).fadeIn(100);
            break;
        }
        case ("blue"):{
            var audio1= new Audio("sounds/blue.mp3");
            audio1.play();
            $("#blue").fadeOut(100).fadeIn(100);
            break;
        }
        case ("red"):{
            var audio1= new Audio("sounds/red.mp3");
            audio1.play();
            $("#red").fadeOut(100).fadeIn(100);
            break;
        }
    }
}

