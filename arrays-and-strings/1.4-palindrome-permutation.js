/*
1.4
Palindrome Permutation: Given a string, write a function to check if it is a permutation of
a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A
permutation is a rearrangement of letters. The palindrome does not need to be limited to just
dictionary words.
EXAMPLE
Input: Tact Coa
Output: True (permutations: "taco cat'; "atc o eta·; etc.)
*/
console.log(solution2('Tact Coa'));

function solution1(str){
    const arr = str.toLowerCase().replace(/\s/g,'').split('')
    
    const lettersCounter = {}

    for(const letter of arr){
        if(!lettersCounter[letter]){
            lettersCounter[letter] = 0
        }
        
        lettersCounter[letter]++
    }

    let hasOneOddCounter = false

    for(const counter of Object.values(lettersCounter)){
        if(counter%2 !== 0){
            if(hasOneOddCounter){
                return false
            }
            hasOneOddCounter = true
        }
    }

    return true
}

function solution2(str){
    const arr = str.toLowerCase().replace(/\s/g,'').split('')
    
    const oddLetters = {}

    for(const letter of arr){
        if(oddLetters[letter]){
            delete oddLetters[letter]
        }
        else{
            oddLetters[letter] = true
        }
    }

    return Object.keys(oddLetters).length < 2
}