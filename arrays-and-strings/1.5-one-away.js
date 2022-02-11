/*
1.5
One Away: There are three types of edits that can be performed on strings: insert a character,
remove a character, or replace a character. Given two strings, write a function to check if they are
one edit (or zero edits) away.
EXAMPLE
pale, ple -> true
pales, pale -> true
pale, bale -> true
pale, bae -> false
*/
console.log(solution('pale', 'bae'));

function solution(str1, str2){
    let oneEdit = false

    if(str1.length === str2.length){
        for(let i = 0;i<str1.length;i++){
            if(str1.charAt(i) !== str2.charAt(i)){
                if(oneEdit){
                    return false
                }
                oneEdit = true
            }
        }
    }
    else{
        if(Math.abs(str1.length-str2.length) > 1){
            return false
        }
        else{
            let skipOneChar = false

            let i1 = 0
            let i2 = 0

            while(str1.charAt(i1) && str2.charAt(i2)){
                if(str1.charAt(i1) !== str2.charAt(i2)){
                    if(skipOneChar){
                        return false
                    }
                    else{
                        skipOneChar = true
                        if(str1.length > str2.length){
                            i1++
                        }
                        else{
                            i2++
                        }
                    }
                }

                i1++
                i2++
            }
        }
    }

    return true
}