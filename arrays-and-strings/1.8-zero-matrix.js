/*
1.8
Zero Matrix: Write an algorithm such that if an element in an MxN matrix is 0, its entire row and
column are set to 0.
*/

console.log(solution([
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,0,5,6,7,8,9],
    [1,2,3,4,5,6,0,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9]
]));


function solution(mat){
    const zeroRows = {}
    const zeroColumns = {}

    for(let i = 0;i<mat.length;i++){
        for(let j = 0;j<mat[i].length;j++){
            if(mat[i][j] === 0){
                zeroRows[i] = true
                zeroColumns[j] = true
            }
        }
    }

    for(const row of Object.keys(zeroRows)) {
        for(let j = 0;j<mat[row].length;j++){
            mat[row][j] = 0
        }
    }

    for(const col of Object.keys(zeroColumns)) {
        for(let i = 0;i<mat.length;i++){
            mat[i][col] = 0
        }
    }
    
    printMat(mat)
}

function printMat(mat){
    for(const i of mat){
        let str = ''
        for (const j of i){
            str += `${j} `
        }

        console.log(`${str}`);
    }
}