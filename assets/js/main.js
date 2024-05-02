// Viết một hàm nhận vào một mảng các số nguyên và thực hiện các yêu cầu sau:

// B1: Tìm số lớn thứ hai trong mảng.
// B2: Sắp xếp mảng theo thứ tự tăng dần hoặc giảm dần.
// B3: Tính tổng của các số chẵn trong mảng.

const b1 = (arr) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (!result.includes(arr[i]) ) {
            result.push(arr[i]);
        }
    }

    const finalResult = result.sort((a,b) => b-a);
    return finalResult[1];

}

console.log(b1([12, 15, 18, 33, 40]));


const b2 = (arr) => {
    let result1 = arr.sort((a,b) => a - b);
    console.log(result1);
    let result2 = arr.sort((a,b) => b - a);
    console.log(result2);
}

b2([11,15,43,24,35]);


const b3 = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            sum += arr[i]
        }
    }
    return sum;
}

console.log(b3([1,2,3,4,5,6]));