// Current Equation for solving
let str='';
//console.log(str)

// Click event for Numbers Click
let numbers = document.getElementsByClassName('number')
// console.log(numbers);
for (let i = 0;i<numbers.length;i++)
{
  numbers[i].addEventListener('click',function(){
    let a = Number(document.getElementsByClassName('number')[i].innerHTML);
    console.log(a,typeof a);
    
    str = str + a;
    console.log(str);
    document.getElementById('show').innerHTML = str;
  })
}


// Click event for operators
let operators = document.getElementsByClassName('operator');
for(let i = 0;i<operators.length;i++)
{
  operators[i].addEventListener('click',function(){
    let a = document.getElementsByClassName('operator')[i].innerHTML;
    console.log(a);

    // if(str===''){
    //   //alert("Invalid Syntax!");
    // }
    // else{
    //   str = str + a;
    //   document.getElementById('show').innerHTML = str;
    // }
    str = str + a;
      document.getElementById('show').innerHTML = str;
  })
}

// Click Event for Clear
document.querySelector('#clear').addEventListener('click',function(){
  str = '';
  //document.getElementById('equation').innerHTML = '';
  document.getElementById('show').innerHTML = '';
})

// Click Event for Equals Operator
document.querySelector('#equals').addEventListener('click',function(){
  // let num1 = Number(str[0]);
  // let num2 = Number(str[2]);
  if(str==='')
  {

  }
  else
  {
    document.getElementById('show').innerHTML = eval(str);
    //document.getElementById('equation').innerHTML = '';
    //str = '';
    str = eval(str);
  }
})

