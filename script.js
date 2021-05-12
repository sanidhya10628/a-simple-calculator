// document.querySelector("#show").innerHTML = 7 * 8;
document.querySelector("#one").addEventListener("click", function () {
  document.querySelector("#show").innerHTML = 1;
});

// document.querySelector("#show").innerHTML = 7 * 8;
document.querySelector("#two").addEventListener("click", function () {
  const initialNumber = String(document.querySelector('#show').innerHTML);
  if(Number(initialNumber)===0)
  {
    document.querySelector('#show').innerHTML = 2;
  }
  else
  {
    // console.log(initialNumber);
    const finalNumber = initialNumber + 2;
    document.querySelector("#show").innerHTML = finalNumber;
  }
});
