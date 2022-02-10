//1.1
//Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you
//cannot use additional data structures?

console.log(isUniqueChars('qwertyuiopasdfg'));

function solution1(str){
    if(str.length > 128){
        return false
    }

    const arr = str.split('').sort((a,b) => a.charCodeAt(0)-b.charCodeAt(0))

    for(let i = 0;i<arr.length-1;i++){
        if(arr[i] === arr[i+1]){
            return false
        }
    }

    return true
}

function solution2(str){
    if(str.length > 128){
        return false
    }

    const chars = {}

    for(const char of str.split('')){
        if(chars[char]){
            return false
        }

        chars[char] = true
    }
    
    return true
}

//Assuming the string will only uses the lowercase letters 'a' through 'z'. 
//This allow us to use just a single variable
//Creating a "hash table" inside one variable
//Examples:
//00000000000000000000000000000001 a
//00000000000000000000000000000010 b 
//00000000000000000000000000000100 c
//00000000000000000000000000001000 d
//...
//So each position in the binary string represents one character
function isUniqueChars(str){
    var checker = 0
    
    for(const char of str.split('')){
        const shifts = char.charCodeAt(0) - 'a'.codePointAt(0)

        if((checker & (1 << shifts)) > 0){
            return false
        }

        checker |= (1 << shifts)
    }

    return true
}