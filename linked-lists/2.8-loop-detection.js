console.log(solution('ABCDE'));

function solution(str){
    const list = buildList(str)
    printList(list)

    list.next.next.next.next.next = list.next.next
    printList(list)

    const m = new Map()

    let node = list

    while(node.next && (m.get(node) === undefined)){
        m.set(node, true)
        node = node.next
    }

    return !!node.next
}


function printList(head){
    const limit = 8
    let i = 0

    if(!head || !head.value){
        console.log('');
    }

    let str = `[${head.value}] -> `

    while(head.next && (i < limit)){
        head = head.next
        str += `[${head.value}] -> `        
        i++
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