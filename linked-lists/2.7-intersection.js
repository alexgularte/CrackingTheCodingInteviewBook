console.log(solution());

function solution(){
    const list1 = buildList('46721')
    const list2 = buildList('3159')

    list2.next.next.next.next = list1.next.next

    const [list1LastNode, list1Size] = getLastNodeAndListSize(list1)
    const [list2LastNode, list2Size] = getLastNodeAndListSize(list2)

    if(list2LastNode === list1LastNode){
        let l1,l2

        if(list1Size !== list2Size){
            if(list1Size > list2Size){
                l1 = getTheThNode(list1, list1Size-list2Size)
                l2 = list2
            }
            else{
                l1 = list1
                l2 = getTheThNode(list2, list2Size-list1Size)
            }
        }
        else{
            l1 = list1
            l2 = list2
        }

        return getIntersection(l1,l2)
    }
}

function getIntersection(l1,l2){
    while((l1 !== l2) && l1.next && l2.next){
        l1 = l1.next
        l2 = l2.next
    }

    if(l1 === l2){
        return l1
    }
}

function getTheThNode(node, steps){
    while((steps > 0) && node.next){
        steps--
        node = node.next
    }

    return node
}

function getLastNodeAndListSize(node){
    let listSize = 0

    while(node.next){
        node = node.next
        listSize++    
    }

    return [node, listSize]
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