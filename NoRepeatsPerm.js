function permAlone(str,buffer,prefix='') {
  // initial run
  if (typeof buffer === 'undefined') {
      var buffer = [];
  }

  if (str.length === 1){

    buffer.push((prefix + str[0]).toString());
    if (prefix === '') {
      return buffer.length;
    }
    return buffer;
  }else if (/^(.)\1*$/.test(str)) {
    return 0;
  }



  for (var i = 0; i < str.length; i++) {

    str = str.substr(1) + str[0];

    permAlone(str.substr(1),buffer,prefix+ str[0]);
  }
  buffer = buffer.filter((item) => {
    return /(.)\1/.test(item) === false;
  })

  return buffer.length;

}

console.log(permAlone('abcd'));
console.log(permAlone('aabb'));
// permAlone('aab');
console.log(permAlone('a'));
console.log(permAlone('aaa'));
console.log(permAlone('abfdefa'));
console.log(permAlone("zzzzzzzz"));
