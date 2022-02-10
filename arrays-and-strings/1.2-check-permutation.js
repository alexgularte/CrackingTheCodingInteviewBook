//1.2
//Check Permutation: Given two strings, write a method to decide if one is a permutation of the
//other

console.log(solution2('AAABBBCCC','BBBCCCAAAP'));

function solution1(str1, str2){
    if(str1.length !== str2.length) {
        return false
    }

    const arr1 = str1.split('').sort((a,b) => a.charCodeAt(0)-b.charCodeAt(0))
    const arr2 = str2.split('').sort((a,b) => a.charCodeAt(0)-b.charCodeAt(0))

    for(let i = 0;i<arr1.length;i++){
        if(arr1[i] !== arr2[i]){
            return false
        }
    }

    return true
}

function solution2(str1, str2){
    const chars = {}
    const arr1 = str1.split('')
    const arr2 = str2.split('')

    for(const char of arr1){
        if(!chars[char]){
            chars[char] = 0
        }
        chars[char]++
    }

    for(const char of arr2){
        if(!chars[char]){
            return false
        }

        if(chars[char] === 1){
            delete chars[char]
        }
        else{
            chars[char]--
        }
    }
    
    return Object.keys(chars).length === 0
}