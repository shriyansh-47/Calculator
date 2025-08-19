const ipfield = document.getElementsByClassName("ip")[0];

function display(input) {
  let v = "+-/x.";

  if (
    v.indexOf(ipfield.value[ipfield.value.length - 1]) != -1 &&
    v.indexOf(input) != -1
  )
    input = "";

  ipfield.value += input;

  ipfield.scrollLeft = ipfield.scrollWidth;
}

function clearAll() {
  ipfield.value = "";
}

function erase() {
  ipfield.value = ipfield.value.substring(0, ipfield.value.length - 1);
}

function clearEntry() {
  let str = ipfield.value;
  let v = "+-/x";
  let c = 0;

  for (let i = str.length - 1; i >= 0; i--) {
    if (v.indexOf(str[i]) != -1) {
      c = i + 1;
      break;
    }
  }

  ipfield.value = ipfield.value.substring(0, c);
}

function calculate() {
  let str = ipfield.value;
  let arr = str.split(/[+\-x\/]/);
  let v = "";

  console.log(arr);
  console.log(typeof str);

  for (let i = 0; i < str.length; i++)
    if (str[i] == "+" || str[i] == "-" || str[i] == "x" || str[i] == "/")
      v += str[i];

  for (let i = 0; i < arr.length; i++) arr[i] = Number(arr[i]);

  let sol = arr[0],
    f = 0;

  for (let i = 0; i < v.length; i++) {
    if (v[i] == "+") sol += arr[i + 1];
    if (v[i] == "-") sol -= arr[i + 1];
    if (v[i] == "x") sol *= arr[i + 1];
    if (v[i] == "/") {
      if (arr[i + 1] == 0) {
        f = 1;
        break;
      }
      sol /= arr[i + 1];
    }
  }

  sol = Math.trunc(sol * Math.pow(10, 4)) / Math.pow(10, 4);

  ipfield.value = "";

  if (f == 1) display("Not Defined");
  else display(String(sol));
}

function theme_change() {
  // const body = document.getElementsByTagName("body")[0];
  // body.style["background-color"] = str;

  // or just :- document.body.style.backgroundColor = 'white';

  // or :- const body = document.getElementsByTagName("body")[0];
  //       body.style.backgroundColor = 'white';

  colour = document.getElementById("colour").disabled;
  dark = document.getElementById("dark").disabled;
  light = document.getElementById("light").disabled;

  if (!colour) {
    colour = true;
    light = false;
    dark = true;
  } 
  
  else if (!light) {
    colour = true;
    light = true;
    dark = false;
  } 
  
  else if (!dark) {
    colour = false;
    light = true;
    dark = true;
  }

  document.getElementById("colour").disabled = colour;
  document.getElementById("dark").disabled = dark;
  document.getElementById("light").disabled = light;

  // if(str=='light')
  // {
  //     document.getElementById('colour').disabled = true;
  //     document.getElementById('dark').disabled = true;
  //     document.getElementById('light').disabled = false;
  // }

  // else if(str=='dark')
  // {
  //     document.getElementById('colour').disabled = true;
  //     document.getElementById('dark').disabled = false;
  //     document.getElementById('light').disabled = true;
  // }

  // else
  // {
  //     document.getElementById('colour').disabled = false;
  //     document.getElementById('dark').disabled = true;
  //     document.getElementById('light').disabled = true;
  // }
}

// const one = document.getElementsByClassName('one');
// const two = document.getElementsByClassName('two');
// const three = document.getElementsByClassName('three');
// const four = document.getElementsByClassName('four');
// const five = document.getElementsByClassName('five');
// const six = document.getElementsByClassName('six');
// const seven = document.getElementsByClassName('seven');
// const eight = document.getElementsByClassName('eight');
// const nine = document.getElementsByClassName('nine');
// const zero = document.getElementsByClassName('zero');
// const decimal = document.getElementsByClassName('decimal');
// const AorS = document.getElementsByClassName('AorS');
// const equal = document.getElementsByClassName('equal');
// const A = document.getElementsByClassName('A');
// const S = document.getElementsByClassName('S');
// const M = document.getElementsByClassName('M');
// const D = document.getElementsByClassName('D');
// const clearall = document.getElementsByClassName('clearall');
// const clear = document.getElementsByClassName('clear');
// const erase = document.getElementsByClassName('erase');

// one[0].addEventListener('click',() => print('1'));
// two[0].addEventListener('click',() => print('2'));
// three[0].addEventListener('click',() => print('3'));
// four[0].addEventListener('click',() => print('4'));
// five[0].addEventListener('click',() => print('5'));
// six[0].addEventListener('click',() => print('6'));
// seven[0].addEventListener('click',() => print('7'));
// eight[0].addEventListener('click',() => print('8'));
// nine[0].addEventListener('click',() => print('9'));
// zero[0].addEventListener('click',() => print('0'));
// decimal[0].addEventListener('click',() => print('.'));
// A[0].addEventListener('click',() => print('+'));
// S[0].addEventListener('click',() => print('-'));
// M[0].addEventListener('click',() => print('X'));
// D[0].addEventListener('click',() => print('/'));
