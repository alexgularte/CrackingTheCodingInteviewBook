/*1.3
URLify: Write a method to replace all spaces in a string with '%20'. You may assume that the string
has sufficient space at the end to hold the additional characters, and that you are given the "true"
length of the string. (Note: if implementing in Java, please use a character array so that you can
perform this operation in place.)
EXAMPLE
Input: "Mr John Smith", 13
Output: "Mr%20John%20Smith"
*/

console.log(solution2('Mr John Smith      ',13));

function solution1(str, len){
    return str.substr(0,len).replace(/ /g, '%20')
}

function solution2(str, len){
    const inputArr = str.split('')
    const outputArr = []

    for(let i = 0;i<len;i++){
        if(inputArr[i] === ' '){
            outputArr.push('%','2','0')
        }
        else{
            outputArr.push(inputArr[i])
        }
    }

    return outputArr.join('')
}