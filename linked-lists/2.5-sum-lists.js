console.log(solution('716','592'))

function solution(num1, num2){
    const head1 = buildList(num1)
    const head2 = buildList(num2)

    printList(head1)
    printList(head2)

    printList(sum(head1, head2))
}

function sum(head1, head2){
    const sumHead = {}
    let currSumNode = sumHead

    let currNode1 = head1
    let currNode2 = head2

    let carry = 0

    while(currNode1.value || currNode2.value){
        let sum = parseInt(currNode1.value||0) + parseInt(currNode2.value||0) + carry
        
        if(sum>9){
            carry = parseInt(sum.toString(10).split('')[0])
            sum = parseInt(sum.toString(10).split('')[1])
        }
        else{
            if(carry){
                carry = 0
            }
        }

        currSumNode.value = sum
        
        if(currNode1.next || currNode2.next){
            currSumNode.next = {}
            currSumNode = currSumNode.next  
        }

        if(currNode1.next){
            currNode1 = currNode1.next
        }
        else{
            currNode1 = {}
        }

        if(currNode2.next){
            currNode2 = currNode2.next
        }
        else{
            currNode2 = {}
        }
    }

    if(carry){
        currSumNode.next = {}
        currSumNode.next.value = carry
    }

    return sumHead
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