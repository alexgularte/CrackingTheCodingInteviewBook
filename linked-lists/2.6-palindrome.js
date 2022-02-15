console.log(solution('AA'));

function solution(str){
    const head = buildList(str)

    printList(head)

    return checkPalindrome(head)
}


function checkPalindrome(head, stack=[]){
    if(head.next){
        stack.unshift(head.value)
        return checkPalindrome(head.next, stack) && (head.value === stack.pop())
    }   
    else{
        stack.unshift(head.value)
        return stack.pop() === head.value
    }
}

function printList(head){
    if(!head || !head.value){
        console.log('');
    }

    let str = `[${head.value}] -> `

    while(head.next){
        head = head.next
        str += `[${head.value}] -> `        
    }

    console.log(str);
}

function buildList(listStr){
    if(!listStr || !listStr.split('')){
        return {}
    }

    let head = {}

    const arr = listStr.split('')

    head.value = arr[0]

    let currNode = {}

    head.next = currNode

    for(let i = 1;i<arr.length;i++){
        currNode.value = arr[i]
        if(i !== arr.length-1){
            currNode.next = {}
        }

        currNode = currNode.next
    }

    return head
}