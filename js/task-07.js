//  Task 7

// Напиши скрипт, который реагирует на изменение значения
// input#font - size - control(событие input) и изменяет инлайн - стиль
// span#text обновляя свойство font - size.В результате при
// перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" />
// <br />
// <span id="text">Абракадабра!</span>
 


// const input = document.getElementById('font-size-control');
// const span = document.getElementById('text');
// input.addEventListener('input', handleInputRange);
// function handleInputRange(event) {
//     span.style.fontSize = event.currentTarget.value + "px";
// }
    
const inputRangeRef = document.querySelector("#font-size-control");
const inputTextRef = document.querySelector("#text");
inputTextRef.style.fontSize = `${inputRangeRef.value}px`;
const handleInput = () => {
  inputTextRef.style.fontSize = `${inputRangeRef.value}px`;
};
inputRangeRef.addEventListener("input", handleInput);