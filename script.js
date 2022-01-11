const inputString = document.getElementById("input_text");
const outputString = document.getElementById("output_number");
const enterButton =document.getElementById("enter_button");

function convertToBinary(num){
    let output = "";
    let num2 = num;
    let columns = Math.trunc(Math.log2(num) + 1);
    columns = columns > 1 ? columns : 1;
    for(let i = columns - 1; i >= 0; i--){
        if(num2 / (2**i) >= 1){
            num2 -= (2**i);
            output += "1";
        } else {
            output += "0";
        }
    }
    return output.padStart(8,0);
}

function convertToASCII(str){
    let output = [];
    for(let i = 0; i < str.length; i++){
        output.push(str.charCodeAt(i));
    }
    return output;
}

function convertTextToBinary(inputString){
    const charArray = convertToASCII(inputString).map(char => convertToBinary(char));
    return charArray.join(" ");

}

enterButton.addEventListener('click', function(){
    outputString.textContent = convertTextToBinary(inputString.value);
})

inputString.addEventListener('input', function(){
    outputString.textContent = convertTextToBinary(inputString.value);
})
