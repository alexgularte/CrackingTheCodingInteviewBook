/*
1.7
Rotate Matrix: Given an image represented by an NxN matrix, where each pixel in the image is 4
bytes, write a method to rotate the image by 90 degrees. Can you do this in place?
*/

console.log(solution([
    ['A','B','C','D'],
    ['E','F','G','H'],
    ['I','J','L','M'],
    ['N','O','P','Q'],
]));

function solution(mat){
    const layers = mat.length/2 - 1

  //  for(let layer = 0;layer<=layers;layer++){
        rotate(mat, 1)
    //}

    return mat
}

//not complete!!
function rotate(mat, pivot){
    const n = mat.length - 1 - pivot
    
    for(let i = pivot;i<n;i++){
        const aux = mat[pivot][i]
        mat[pivot][i] = mat[n-i][pivot]
        mat[n-i][pivot] = mat[n][n-i]
        mat[n][n-i] = mat[i][n]
        mat[i][n] = aux
    }
    
    return mat
}
