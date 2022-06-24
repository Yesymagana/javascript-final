const userName = prompt('Hi Friend, what is your name?')
console.log(userName);

if (userName == null || userName == '') {
  txt = 'Click on the button below to ask me anything';
} else {
  txt = 'Hello, ' + userName + '! Click on the button below to ask me anything';
}
alert(txt);

function shake() {
  const pooh = document.getElementById('hunnypot')
  const messageText = document.getElementById('message')

  if (messageText != null) {
    messageText.parentNode.removeChild(messageText)
  }

  pooh.classList.add('shake');

  setTimeout(function(){pooh.classList.remove('shake');}, 1000);
  setTimeout(function(){getFortune();}, 1000);
}

function getFortune() {
  const fortunes = ['It is certain', 'It is decidedly so', 'Without a doubt', 'Yes, definitely', 'You may rely on it', 'As I see it, yes', 'Most likely', 'Outlook good', 'Yes', 'Signs point to yes', 'Reply hazy, try again', 'Ask again later', 'Better not tell you now', 'Cannot predict now', 'Concentrate and ask again', 'Do not count on it', 'My reply is no', 'My sources say no', 'Outlook not so good', 'Very doubtful']

  let fortune = fortunes[Math.floor(Math.random() * fortunes.length)];

  let parent = document.getElementById("fortune");
  let newMessage = document.createElement("div");
  newMessage.setAttribute('id', "message");
  newMessage.innerHTML = "\"" + fortune + "\"";
  parent.appendChild(newMessage);
}