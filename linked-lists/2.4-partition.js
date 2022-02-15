console.log(solution('3,5,8,5,10,2,1',5));

function solution(strList, value){
    const head = buildList(strList)

    printList(head)

    const newHead = partition2(head, value)

    printList(newHead)
}

//TODO: complete!
function partition2(head, value){
    const tail = getTail(head)

    let currNode = head


    while(currNode.next){
        const next = currNode.next

        if(currNode.value < value){
            const aux = currNode.value
            currNode.value = currNode.next.value
            currNode.next = currNode.next.next
            
        }
        else{
            const aux = currNode.value
            currNode.value = currNode.next.value
            currNode.next = currNode.next.next
        }

        currNode = next
    }

    

    return head
}

function getTail(head){
    while(head.next){
        head = head.next
    }

    return head
}

function partition1(head, value){
    let head1, tail1, head2, tail2
    
    while(head.value){
        if(head.value < value){
            if(tail1){
                const node = {
                    value: head.value
                }

                tail1.next = node
                tail1 = node
            }
            else{
                tail1 = {
                    value: head.value
                }
                head1 = tail1
            }
        }
        else{
            if(tail2){
                const node = {
                    value: head.value
                }

                tail2.next = node
                tail2 = node
            }
            else{
                tail2 = {
                    value: head.value
                }
                head2 = tail2
            }

        }

        if(head.next){
            head = head.next
        }
        else{
            head = {}
        }
        
    }

    tail1.next = head2

    return head1
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