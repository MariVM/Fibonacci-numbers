'use strict';

function fib(n) {
  let a = 1,
      b = 1;
    
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

window.onload = function() {
    let items = document.getElementsByClassName(`fibNum`);
    for (let i = 0; i < items.length; i++) {
        let fibNum = items[i];
        fibNum.innerText = fib(i);
    }
};