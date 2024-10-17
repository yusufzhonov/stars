let a = '*';

for (let i = 1; i <= 6; i++) {
  console.log(a);
  a += '*';
};

let b = '*';

for (let i = 6; i >= 1; i--) {
  b = '';
  for (let j = 1; j <= i; j++) {
    b += "*"; 
  }
  console.log(b); 
};