console.log(solution('WATERBOTTLE','ERBOTTLEWAT'));

function solution(str1, str2){
    return isSubstring2(str1, str1+str2)
}

function isSubstring1(str1, str2){
    return new RegExp(str1).test(str2)
}

function isSubstring2(str1, str2){
    if(!str1){
        return true
    }

    const a1 = str1.split('')
    const a2 = str2.split('')

    let j = 0

    for(const char of a2){
        if(char === a1[j]){
            if(j === a1.length-1){
                return true
            }
            j++
        }
        else{
            j = 0
        }
    }

    return false
}
