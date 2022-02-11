/*
1.6
String Compression: Implement a method to perform basic string compression using the counts
of repeated characters. For example, the string aabcccccaaa would become a2blc5a3. If the
"compressed" string would not become smaller than the original string, your method should return
the original string. You can assume the string has only uppercase and lowercase letters (a - z).
*/

console.log(solution('aabcccccaaa'));


function solution(str){
    if(!str || !str.length){
        return str
    }

    const input = str.split('')
    const output = []

    let currChar = input[0]
    let occurrencies = 1

    for(const char of input.slice(1)){
        if(char === currChar){
            occurrencies++
        }
        else{
            output.push(currChar,occurrencies)
            currChar = char
            occurrencies = 1
        }
    }

    output.push(currChar,occurrencies)

    if(input.length === output.length/2){
        return str
    }

    return output.join('')
}