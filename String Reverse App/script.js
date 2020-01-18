class reverseYourString {
    constructor(param) {
        this.param = param;
    }

    reverseString(param) {
        let inscribedString = `<p><b>Your inscribed string:</b> ${param}`;
        const splitString = param.split('');
        const reversedString = splitString.reverse();
        let text = '';
        reversedString.map(el => text += el)
        const output = document.querySelector('#output');
        inscribedString += ` <b>Your reversed string:</b> ${text}</p>`
        output.innerHTML = inscribedString;
    }
}

const clearForm = () => {
    const myInput = document.querySelector('#myString');
    myInput.value = "";
}

btn.addEventListener('click', () => {
    const myString = document.querySelector('#myString').value;
    if (myString == '') {
        alert('Please enter some text!');
        clearForm();
    } else if (isNaN(myString) == false) {
        alert('The entered text cannot be a number!');
        clearForm();
    } else {
        const ob = new reverseYourString();
        ob.reverseString(myString);
        clearForm();
    }
})
