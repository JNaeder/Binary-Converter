const inputString = document.getElementById("input_text");
const outputString = document.getElementById("output_text");

const bitCountText = document.getElementById("bit_count");
const byteCountText = document.getElementById('byte_count');

const copyButton = document.getElementById("copy_button");
const githubButton = document.getElementById("github_button");

const githubURL = "https://github.com/JNaeder/Binary-Converter";

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

function countBits(){
    let stringArray = outputString.textContent.split(" ");
    if(stringArray[0].length === 0) stringArray = [];
    let bitCount = stringArray.length * 8;
    let byteCount = bitCount/8;
    bitCountText.textContent = `Bitcount: ${bitCount.toString().padStart(8, 0)}`;
    byteCountText.textContent = `Bytecount: ${byteCount.toString().padStart(8,0)}`;
}

inputString.addEventListener('input', function(){
    outputString.textContent = convertTextToBinary(inputString.value);
    countBits();
})

copyButton.addEventListener('click', function(){
    navigator.clipboard.writeText(outputString.textContent);
})

githubButton.addEventListener('click', function(){
    window.open(githubURL, "_blank");
})

