const input = document.getElementById('text-input');
const submit = document.getElementById('check-btn');
const form = document.getElementById('form');
console.log(form)


//Takin word from the input text

const palindrome = (word) => {
    console.log(word);
    console.log(word.split(''));
    console.log(word.length);

    if(word.length === 1){
        console.log(true);
    }
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    palindrome(input.value);
})

//splitting word
