let stars = "*";

for (let i = 1; i <= 6; i++) {
  console.log(stars);
  stars += "*";
};

for (let i = 5; i >= 1; i--) {
  stars = stars.substring(0, stars.length - 1);
  console.log(stars);
};