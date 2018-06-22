$(document).ready(function() {
 //Global variables
    var randomReset;
    var win = 0;
    var losses = 0;
    var resultPar= 0;
    var buttonClicked = false;
    
    //Starting the game and setting how it is supposed to be displayed
    function startGame() {
        randomReset= [Math.floor(Math.random() * 101) + 19];
        resultPar= 0;
        buttonClicked = false;

        $("#image1").attr("value", Math.floor(Math.random()* 11) + 1 );
        $("#image2").attr("value", Math.floor(Math.random()* 11) + 1 );
        $("#image3").attr("value", Math.floor(Math.random()* 11) + 1 );
        $("#image4").attr("value", Math.floor(Math.random()* 11) + 1 );
        
        $("#randomchoice").text(randomReset);
        $("#win").text(win);
        $("#losses").text(losses);
        $("#result").text(resultPar);
    }
    
    $(".crystal").on("click", function() {
        resultPar += parseInt($(this).attr("value"));
        $("#result").text(resultPar);
        
        console.log($(this).attr("value"));
        if (resultPar == randomReset) {
            win++;
            startGame();

        }
        else if (resultPar > randomReset){
            losses ++;
            startGame();
        }
        
    });
    
    // crystalValue = Math.floor(Math.random() * 11) + 1;
        // console.log(crystalValue + "-----" +"Crystal Value");
        // $("#result").text(crystalValue);
        // if("#image1" != "#image2" != "#image3" != "#image4") {
            
        // }
        //Loop needs to be created for 4 times and if statement along with another loop needs to be
        //in order to avoid the duplicate value assignment.
    
    
    
    
    //adding the values after each clicks and displaying in your score area
    // $("button").on("click", function() {
    //     buttonClicked= true;
    //     $("#image1, #image2, #image3, #image4").mouseup(function() {
    //         $("#result").add("#image1" + "#image2" + "#image3"+ "#image4");
                
            
    //     });
    //     console.log(buttonClicked);
    // });
    
    
    // Win and losses statement
    
    //every function fullfilled restart the game 
    
    startGame();
    console.log(randomReset + "-----" +"Random Reset");
    
    // console.log(buttonClicked);
    console.log(win + "-----" +"Wins");
    console.log(losses + "-----" +"Losses");
    
});