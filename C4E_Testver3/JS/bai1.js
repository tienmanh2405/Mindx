function isPrime(number) {
    if (number <= 1) return false;
    if (number <= 3) return true;
    if (number % 2 === 0 || number % 3 === 0) return false;
    for (let i = 5; i * i <= number; i += 6) {
        if (number % i === 0 || number % (i + 2) === 0) {
            return false;
        }
    }
    return true;
}

function calculatePrimeSum() {
    const inputA = parseInt(document.getElementById("inputA").value);
    const inputB = parseInt(document.getElementById("inputB").value);

    if (isNaN(inputA) || isNaN(inputB) || inputA >= inputB) {
        document.getElementById("result").innerText = "Vui lòng nhập lại số a và b (a < b).";
        return;
    }

    let primeSum = 0;

    for (let i = inputA; i <= inputB; i++) {
        if (isPrime(i)) {
            primeSum += i;
        }
    }

    document.getElementById("result").innerText = `Tổng các số nguyên tố trong khoảng từ ${inputA} đến ${inputB} là: ${primeSum}`;
}
