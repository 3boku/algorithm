// 최대공약수(GCD)를 구하는 함수
function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// 최소공배수(LCM)를 구하는 함수
function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

// N개의 숫자들의 최소공배수를 구하는 함수
function solution(arr) {
    let answer = arr[0];
    for (let i = 1; i < arr.length; i++) {
        answer = lcm(answer, arr[i]);
    }
    return answer;
}