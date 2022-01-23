let inputRef = document.getElementById("input_country");
let inputValue = inputRef.value;

let btnRef = document.getElementById("btn-search");

let formRef = document.querySelector("form");

btnRef.addEventListener("click", (event) => {
  event.preventDefault();

  fetch(`http://universities.hipolabs.com/search?country=${inputRef.value}`)
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i <= data.length; i++) {
        result = data[i].name;
        console.log(result);
      }
    });
});
