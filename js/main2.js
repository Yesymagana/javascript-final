const userName = prompt('Hi Friend, what is your name?')
console.log(userName);

if (userName == null || userName == '') {
  txt = 'Click on the button below to ask me anything';
} else {
  txt = 'Hello, ' + userName + '! Click on the button below to ask me anything';
}
alert(txt);

// let eightBall = '';
// let randomNumber = Math.floor(Math.random () * 20);

// if (randomNumber === 0) {
//   eightBall = 'It is certain'
// } else if (randomNumber === 1) {
//   eightBall = 'It is decidedly so'
// } else if (randomNumber === 2) {
//   eightBall = 'Without a doubt'
// } else if (randomNumber === 3) {
//   eightBall = 'Yes, definitely'
// } else if (randomNumber === 4) {
//   eightBall = 'You may rely on it'
// } else if (randomNumber === 5) {
//   eightBall = 'As I see it, yes'
// } else if (randomNumber === 6) {
//   eightBall = 'Most likely'
// } else if (randomNumber === 7) {
//   eightBall = 'Outlook good'
// } else if (randomNumber === 8) {
//   eightBall = 'Yes'
// } else if (randomNumber === 9) {
//   eightBall = 'Signs point to yes'
// } else if (randomNumber === 10) {
//   eightBall = 'Reply hazy, try again'
// } else if (randomNumber === 11) {
//   eightBall = 'Ask again later'
// } else if (randomNumber === 12) {
//   eightBall = 'Better not tell you now'
// } else if (randomNumber === 13) {
//   eightBall = 'Cannot predict now'
// } else if (randomNumber === 14) {
//   eightBall = 'Concentrate and ask again'
// } else if (randomNumber === 15) {
//   eightBall = 'Do not count on it'
// } else if (randomNumber === 16) {
//   eightBall = 'My reply is no'
// } else if (randomNumber === 17) {
//   eightBall = 'My sources say no'
// } else if (randomNumber === 18) {
//   eightBall = 'Outlook not so good'
// } else if (randomNumber === 19) {
//   eightBall = 'Very doubtful'
// } else {
//   console.log('Something is broken');
// }


function shake() {
  const pooh = document.getElementById('hunnypot')
  const messageText = document.getElementById('message')

  if (messageText != null) {
    messageText.parentNode.removeChild(messageText)
  }

  pooh.classList.add('shake')

  setTimeout(function(){pooh.classList.remove('shake');}, 1000)
  setTimeout(function(){getFortune;}, 1000)
}

function getFortune() {
  const fortunes = ['It is certain', 'It is decidedly so', 'Without a doubt', 'Yes, definitely', 'You may rely on it', 'As I see it, yes', 'Most likely', 'Outlook good', 'Yes', 'Signs point to yes', 'Reply hazy, try again', 'Ask again later', 'Better not tell you now', 'Cannot predict now', 'Concentrate and ask again', 'Do not count on it', 'My reply is no', 'My sources say no', 'Outlook not so good', 'Very doubtful']

  let fortune = fortunes[Math.floor(Math.random() * fortunes.length)]

  let parent = document.getElementById('fortune')
  let newMessage = document.createElement('div')
  newMessage.setAttribute('id', 'message')
  newMessage.innerHTML = '\'' + fortune + '\''
  parent.appendChild(newMessage)

}