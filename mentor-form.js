const volunteeringTextArea = document.querySelector('#volunteering')
const volunteeringWordLength = document.querySelector('.volunteering-word-length')
const mentorExpectationTextArea = document.querySelector('#mentorExpectation')
const mentorExpectationWordLength = document.querySelector('.mentorExpectation-word-length')
const skillAndHobbiesTextArea = document.querySelector('#skills_hobbies_specialInterest')
const skillAndHobbiesWordLength = document.querySelector('.skillAndHobbies-word-length')
const specialNeedsTextArea = document.querySelector('#skills_hobbies_specialNeeds')
const specialNeedsWordLength = document.querySelector('.specialNeeds-word-length')
const finalNoteTextArea = document.querySelector('#finalNote')
const finalNoteWordLength = document.querySelector('.finalNote-word-length')





const countAndRestrictWords = (textArea,wordLength)=>{

textArea.addEventListener('input',()=>{

let textAreaValue =  textArea.value
let txt = textAreaValue;
let words = txt.split(/\s+/).filter((item) => item)
//txt.split(/\s+/) code will split the full classname of an element into an array containing every class
   wordLength.textContent = words.length;
   




  let clearExtraWords = ()=>{


let allowedWords = words.slice(0,100)
textArea.value = allowedWords.join(' ')
wordLength.textContent = allowedWords.length;
}

 if (words.length >= 101) clearExtraWords()

 })
}





countAndRestrictWords(volunteeringTextArea,volunteeringWordLength)
countAndRestrictWords(mentorExpectationTextArea,mentorExpectationWordLength)
countAndRestrictWords(skillAndHobbiesTextArea,skillAndHobbiesWordLength)
countAndRestrictWords(specialNeedsTextArea,specialNeedsWordLength)
countAndRestrictWords(finalNoteTextArea,finalNoteWordLength)