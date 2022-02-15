console.log(solution('a,b,c,d,e,f'));

function solution(listStr){
    const head = buildList1(listStr)

    printList(head)

    deleteNode2(head.next.next.next)

    printList(head)
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

function buildList1(listStr){
    if(!listStr || !listStr.split(',')){
        return {}
    }

    let head = {}

    const arr = listStr.split(',')

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

function buildList2(listStr){
    if(!listStr || !listStr.split(',')){
        return {}
    }

    let head = {}

    const arr = listStr.split(',')

    for(let i = arr.length-1;i>0;i--){
        head.value = arr[i]

        head = {
            next: head
        }
    }

    head.value = arr[0]

    return head
}

function deleteNode1(head,value){
    if(head && head.next && value){
        let prevNode = head
        let currNode = head.next

        while(currNode){
            if(currNode.value === value){
                prevNode.next = currNode.next
                return
            }
            currNode = currNode.next    
            prevNode = prevNode.next
        }
    }
}

function deleteNode2(node){
    node.value = node.next.value
    node.next = node.next.next
    
}