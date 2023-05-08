function checkCashRegister(price, cash, cid) {
  const cashVal = { 
    'ONE HUNDRED': 100,
    'TWENTY': 20,
    'TEN': 10,
    'FIVE': 5,
    'ONE': 1,
    'QUARTER': .25,
    'DIME': .1,
    'NICKEL': .05,
    'PENNY': .01 
  };
  const cidObj = cid.reverse().reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc;
  }, {});
  let cidTotal = cid.reduce((acc, cur) => acc + cur[1], 0);
  let changeTotal = cash - price;
  let change = [];
  let insufficient = false;
  function changeDue(cashIn) {
    for (let key in cidObj) {
      while (cashIn >= cashVal[key]) {
        if (cidObj[key] < cashVal[key]) {
          break;
        }
        for (let item of change) {
          if (item[0] === key) {
            item[1] = Math.round((item[1] + cashVal[key]) * 100) / 100;
            cashIn = (cashIn - cashVal[key]).toFixed(2);
            cidObj[key] = (cidObj[key] - cashVal[key]).toFixed(2);;
          } 
        }
        if (!change.flat().includes(key)) {
          change.push([key, cashVal[key]])
          cashIn -= cashVal[key];
          cidObj[key] -= cashVal[key];
        }
      }
    }
    if (cashIn > 0) {
      insufficient = true;
    }
  }
  changeDue(changeTotal);
  if (insufficient) {
    return {'status': 'INSUFFICIENT_FUNDS', 'change': []}
  } else if (changeTotal === cidTotal) {
    return {'status': 'CLOSED', 'change': cid.reverse()}
  } else {
    return {'status': 'OPEN', 'change': change}
  }
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));

/*Cash Register

Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key. */