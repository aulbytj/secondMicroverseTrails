function bonAppetit(bill, k, b) {
  let N = 0;

  for (let i = 0; i < bill.length; i++) {
    if (i != k) {
      N += bill[i];
    }
  }
  let ans = b - N / 2;
  console.log(ans);
  if (ans === 0) {
    return "Bon Appetit";
  }
  return ans;
}

console.log(bonAppetit([3, 10, 2, 9], 1, 7));
