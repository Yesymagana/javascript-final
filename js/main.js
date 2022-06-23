$(document).ready(function(){
  
    var magic8Ball = {};
    magic8Ball.listofanswers = ["It is certain.", "It is decidedly so.", "Without a doubt.", "Yes, definitely.", "You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.", "Reply hazy, try again.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", "Don't count on it.", "My reply is no.", "My sources say no.", "Outlook not so good.", "Very doubtful."];
   
    magic8Ball.getAnswer = function(question)
    {
      var randomNumber = Math.random();
      var randomAnswer = Math.floor(randomNumber * this.listofanswers.length);
      var answer = this.listofanswers[randomAnswer];
      
      $("#8ball").effect( "shake" );
      $("#answer").text( answer );
      $("#answer").fadeIn(3000);
    //   $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
      $("#8ball").attr("src", "https://www.pngitem.com/pimgs/m/185-1856555_winnie-the-pooh-clipart-png-winnie-the-pooh.png");
  
      console.log(question);
      console.log(answer);
    };
    $("#answer").hide();
  
    var onClick = function()
    {
      $("#answer").hide();
      $("#8ball").attr("src", "https://www.pngitem.com/pimgs/m/531-5319393_disney-winnie-the-pooh-clip-winnie-the-pooh.png");
      var question = prompt("Hi Friend! What would you like to know?");
      magic8Ball.getAnswer(question);
    };
    
    $("#questionButton").click( onClick );
  });