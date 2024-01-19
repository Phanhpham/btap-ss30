function isPrime(num) {
    // Kiểm tra xem một số có phải là số nguyên tố hay không
    if (num < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function printPrimeNumbers(arr) {
    const primeNumbers = arr.filter(num => isPrime(num));
    console.log("Các số nguyên tố trong mảng là:", primeNumbers);
}

const arrayOfIntegers = [2, 5, 10, 13, 17, 20, 23, 29, 31];

printPrimeNumbers(arrayOfIntegers);
