console.log(solution('617','295'))

function solution(num1, num2){
    if(num1.length !== num2.length){
        console.log('ERROR');
        return
    }

    const head1 = buildList(num1)
    const head2 = buildList(num2)

    printList(head1)
    printList(head2)

    const sumList = sumLists(head1,head2)

    printList(sumList)
}

function sumLists(head1, head2){
    const [sumList, carry] = sum(head1, head2)

    return sumList
}

function sum(head1, head2){
    if(head1.next && head2.next){
        const [sumList, carryIn] = sum(head1.next, head2.next)
        let s = parseInt(head1.value) + parseInt(head2.value) + parseInt(carryIn)

        let carryOut = 0

        if(s > 9){
            carryOut = s.toString(10).split('')[0]
            s = s.toString(10).split('')[1]
        }

        return [{value: s, next: sumList}, carryOut]
    }
    else{
        let s = parseInt(head1.value) + parseInt(head2.value)

        let carryOut = 0

        if(s > 9){
            carryOut = s.toString(10).split('')[0]
            s = s.toString(10).split('')[1]
        }

        return [{value: s}, carryOut]
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