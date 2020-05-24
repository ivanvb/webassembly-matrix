function ijk(matrixA, matrixB, matrixC, length) {
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            for (let k = 0; k < length; k++) {
                matrixC[i * length + j] += matrixA[i * length + k] * matrixB[j * length + k];
            }
        }
    }
}

function benchmark(name, func) {
    console.time(name)
    let result = func(4, 0.2, 100_000_000_000);
    console.timeEnd(name)
    console.log(`${name} result: ${result}`)
}

Module['onRuntimeInitialized'] = () => {
    const LENGTH = 2;
    let m1 = generateRandomMatrix(LENGTH);
    let m2 = generateRandomMatrix(LENGTH);
    let result = new Array(LENGTH * LENGTH).fill(0);

    let bufferA = new ArrayBuffer(maxLength);
    let bufferB = new ArrayBuffer(maxLength);
    let bufferC = new ArrayBuffer(maxLength);
    let bufferFlush = new ArrayBuffer(maxLength);
    let matrixA = new Float64Array(bufferA);
    let matrixB = new Float64Array(bufferB);
    let matrixC = new Float64Array(bufferC);
    let cache = new Float64Array(bufferFlush);

    _ijk(m1, m2, result, LENGTH);
    console.log(result)
}



function generateRandomMatrix(length) {
    let matrix = [];

    for (let i = 0; i < length * length; i++) {
        matrix.push(generateRandomNumber(100_000, 1_000_000));
    }
    return matrix;
}

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}