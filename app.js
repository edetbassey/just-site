const newWord = "daily";

function capitalizeWord(word){
    const newW = [...word];
    newW[0] = newW[0].toUpperCase()
    return newW.join("")
}
const sentence = "pumpkin pranced purposefully across the pond"
function titleCase(sent){
    let answer = ""
    const newW = [...sent.split(" ")]
    for (const s of newW) answer += capitalizeWord(s) + " ";
    return answer;
}

//console.log(capitalizeWord(newWord))
console.log(titleCase(sentence))