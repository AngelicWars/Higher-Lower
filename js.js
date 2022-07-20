let random = Math.floor(Math.random() * 100) + 1;

const prompt = document.getElementById("prompt");

 const getValue = () => {
    const inputVal = parseInt(document.getElementById("userInput").value);
    if(inputVal === random) {
        prompt.innerHTML ='The number is correct';
    }
    else if(inputVal < random) {
        prompt.innerHTML = 'The number is higher'
    }
    else if(inputVal > random) {
        prompt.innerHTML = 'The number is lower'
    }
 }
 
const newValue = () => {
    random = Math.floor(Math.random() * 100) + 1;
    prompt.innerHTML = '';
    document.getElementById("userInput").value = '';
}


 const limiter = (input) => {
    if (input.value < 0) input.value = 0;
    if (input.value > 100) input.value = 100;
 }