const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  guess: null,
  getGuess: function() {
    this.guess = parseInt(prompt (`Enter a guess between ${this.smallestNum} & ${this.biggestNum} (your previous guesses -- ${game.prevGuesses}):`))
    game.prevGuesses.push(this.guess)
    this.render()
  },
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
    game.getGuess()
},
render: function() {
  if (this.guess === this.secretNum) {
    alert(`Congrats! You got the correct number in ${this.prevGuesses.length} times`)

}else if (this.guess < this.secretNum) {
  alert(`Your guess is too low. Your previous guesses: ${this.prevGuesses}`)

this.getGuess()}
else if (this.guess > this.secretNum) {
    alert (`Your guess is too high. Your previous guesses: ${this.prevGuesses}`)

this.getGuess()
  }else if (this.guess === NaN){
    game.prevGuesses.pop()
    alert(`You did not use a number`)
    this.getGuess()
  } else if (this.guess === null) {
    this.getGuess()
  } else {
    return this.guess
  }  
}
}

  game.play()









