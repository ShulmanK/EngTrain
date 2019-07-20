const btnCheck = document.getElementById('btn-check');
const rightAnswer = document.querySelector('.rightAnswer');
const manAnswer = document.querySelector('.manAnswer');
const winLose = document.querySelector('.win-lose');
const quizWord = document.querySelector('.quiz-word');
const newGame = document.querySelector('.new-game')

let rightWord;
let userWord;
let count = 0;

class Words {
    async getWords(){
        try {
        let response = await fetch('words.json');
        let data = await response.json()
       data = data.words
        return data
    } catch (error){
        console.log(error);
    }
    }
}

class UI {
    showWords(words){
        console.log(words);
    }

}

class Logic {
    getRandomWord(words){
        let amountWords = words.length;
        const random = Math.floor(Math.random() * amountWords) + 1;
        let randomObject = words.find(word => word.id === random);
        let randomWord = randomObject.eng

        quizWord.innerHTML = randomWord
        rightWord = randomObject.rus;
        
    }
    getValue(){
        btnCheck.addEventListener('click', ()=>{
            let userWord = document.getElementById('word').value;
            manAnswer.innerHTML = userWord;

            if(rightWord === userWord){
                rightAnswer.innerHTML = rightWord;
                winLose.innerHTML = "You are right"
                count = count + 1;
                document.getElementById('word').value = ""

            } else {
                rightAnswer.innerHTML = rightWord;
                winLose.innerHTML = "You are lose";
                count = count;
                document.getElementById('word').value = ""
            }
            console.log(count)
        })
    }
    newGame(){
        newGame.addEventListener('click',  kl)
        for(i=0; i<10; i++){
            this.random
        }
    }

}



document.addEventListener('DOMContentLoaded', ()=>{
    let words = new Words();
    let ui = new UI();
    let logic = new Logic();

    words.getWords()
    .then((words)=>{
        ui.showWords(words);
        logic.getRandomWord(words)
    })
    .then(()=>{
        logic.getValue();
        
    })
})