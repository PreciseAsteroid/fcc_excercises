function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  arr.map((item) => {
    // {\displaystyle T=2\pi {\sqrt {\frac {a^{3}}{\mu }}}}
    item.orbitalPeriod = Math.round(2 * Math.PI * (Math.sqrt(Math.pow(earthRadius + item.avgAlt, 3)/GM)));
    delete item.avgAlt;
  })

  // console.log(arr);
  return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);

orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);
