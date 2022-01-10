const inputNumber = document.getElementById("input_number");
const outputNumber = document.getElementById("output_number");
const enterButton =document.getElementById("enter_button");


function convertToBinary(num){
    let output = "";
    let num2 = num;
    const columns = Math.ceil(Math.log2(num));
    for(let i = columns - 1; i >= 0; i--){
        if(num2 / (2**i) >= 1){
            num2 -= (2**i);
            output += "1";
        } else {
            output += "0";
        }
    }
    return output;
}

enterButton.addEventListener('click', function(){
    outputNumber.textContent = convertToBinary(inputNumber.value);
})

inputNumber.addEventListener('input', function(){
    outputNumber.textContent = convertToBinary(inputNumber.value);
})
