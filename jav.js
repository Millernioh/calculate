function display(val){
  document.getElementById('edu').value+=val;
};


function calc(){
  let x = document.getElementById('edu').value;
  let y = eval(x)
  document.getElementById('edu').value = y;
};

function crl(){
  document.getElementById('edu').value = ''; 
};