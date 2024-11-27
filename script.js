const input = document.getElementById('text-input');
const submit = document.getElementById('check-btn');
// const form = document.getElementById('form');
const result = document.getElementById('result');
// console.log(form)
console.log(result);


//Takin word from the input text

const palindrome = (word) => {
    console.log(word);
    // console.log(word.split(''));
    // console.log(word.length);
    const wordChars = word.split('');
    const wordReversed = word.split('').reverse();

    console.log(wordChars);
    console.log(wordReversed);
    console.log(wordReversed[wordReversed.length -2]);
    
    if(!input.value){
        alert('Please input a value');
    } else if (word.length === 1){
        console.log(true);
        result.innerText = `${word} is a palindrome `        
    }
}

submit.addEventListener('click', function(e){
    // e.preventDefault();
    palindrome(input.value);
})

//splitting word
