let a = '*';

for (let i = 1; i <= 6; i++) {
  console.log(a);
  a += '*';
};

for (let i = 5; i >= 0; i--) {
  a = a.substring(0, a.length - 1);
  console.log(a);
};