document.getElementById('changeColor').addEventListener('click', function() {
    var header = document.getElementById('header');
    if (header.classList.contains('red')) {
        header.classList.remove('red');
        header.classList.add('blue');
    } else {
        header.classList.remove('blue');
        header.classList.add('red');
    }
});

document.getElementById('consolelog').addEventListener('click', function(){
    let fruits = ["apple", "banana", "cherry"];

    console.log(fruits[0]);
    console.log(fruits.length);

    fruits.push("orange"); // 배열 끝에 요소 추가
    console.log(fruits); // ["apple", "banana", "cherry", "orange"]

    fruits.pop(); // 배열 끝의 요소 제거
    console.log(fruits); // ["apple", "banana", "cherry"]
})

document.getElementById('slice').addEventListener('click', function(){
    var numbers = [1, 2, 3, 4, 5, 6];

    let sliceNumbers = numbers.slice(1, 4);
    console.log(sliceNumbers);

    let sliceToEnd = numbers.slice(2);
    console.log(sliceToEnd);

    let slicedFromEnd = numbers.slice(-3);
    console.log(slicedFromEnd);

    let copiedArray = numbers.slice();
    console.log(copiedArray);
})