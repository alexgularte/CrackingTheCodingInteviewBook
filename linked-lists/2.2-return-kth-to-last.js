const list = {
    value: 'A',
    next: {
        value: 'B',
        next: {
            value: 'C',
            next: {
                value: 'D',
                next: {
                    value: 'E',
                    next: {
                        value: 'F',
                        next: {
                            value: 'G',
                            next: {
                                value: 'H',
                                next: {
                                    value: 'I',
                                    next: {
                                        value: 'J',
                                        next: {
                                            value: 'L',
                                            next: {
                                                value: 'M',
                                                next: {
                                                    value: 'N',
                                                    next: {
                                                        value: 'O'                                                        
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}


console.log(solution2(list, 4));

function solution(list, kth){
    let element = list
    let kCount = 0

    let currNode = list

    while(currNode.next){
        kCount++
        currNode = currNode.next

        if(kCount > kth){
            element = element.next
        }
    }

    if(kCount < kth){
        return null
    }

    return element
}

function solution2(list, kth){
    return getKthLast(list, kth)
}

function getKthLast(node, kth, kthElement=null, step=0){
    if(kthElement === null){
        kthElement = node
    }

    if(node.next){
        if(step > kth){
            return getKthLast(node.next,kth, kthElement.next,step+1)
        }

        return getKthLast(node.next,kth, kthElement,step+1)
    }
    else{
        return kthElement.next
    }
}