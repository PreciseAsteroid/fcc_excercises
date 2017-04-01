function pairwise(arr, arg,buffer,index) {
  sumIndices = 0
  indicesDetected = [];
  for (var i = 0; i < arr.length; i++) {
    sumIndices =  sumIndices + arr.reduce((p, c, index) => {
      if (index == 0) {
        return 0;
      }
      if (arr[0] + c === arg) {
        // console.log('hit at incides:',i,index+i,arr[0],c);
        // console.log(indicesDetected[i]);
        // console.log(indicesDetected[i+index]);
        // console.log(indicesDetected[i] === undefined && indicesDetected[index+i] === undefined);

        if(indicesDetected[i] === undefined && indicesDetected[index+i] === undefined){
          // both indices are not assigned
            indicesDetected[i] = i + index + i;
            indicesDetected[i+index] = i + index + i;
            // console.log('indicesDetected', indicesDetected);
            // console.log('returning', i + index + i);
            return i + index + i;
        }else{
          // console.log('hit but already used',p);

          return p;
        }

      }else {
        // console.log('returning current:',p);
        return p;
      }
    },0);
    arr.shift();
  }
  console.log('sumIndices',sumIndices);
  return sumIndices
}

pairwise([1,4,2,3,0,5], 7);
pairwise([7, 9, 11, 13, 15], 20);
pairwise([1, 1, 1], 2);
pairwise([0, 0, 0, 0, 1, 1], 1);


//
// function pairwise(arr, arg,buffer,index) {
//   // return immediately if no args are provided
//   if (typeof arr[0] === 'undefined'){
//     return 0;
//   }
//   // first time initita buffer
//   if (typeof buffer == 'undefined') {
//     console.log('typeof undefined buffer');
//     buffer = [];
//     index = 0;
//   }
//
//     // start building buffer
//     if (index === 0) {
//       console.log('arr[index]', arr[index]);
//       console.log('buffer', buffer);
//
//       buffer.push([arr[index]]);
//       if (arr[index]!== 0) {
//           buffer.push(['X']);
//       }
//
//       console.log('buffer', buffer);
//
//     } else {
//       // add permutations
//       // replace with map
//         let tmpBuffer = [];
//         buffer.map((item) => {
//           console.log('item', item);
//           console.log('arr[index]', arr[index]);
//           console.log('buffer before', buffer);
//
//             var tmpItem = item.slice(); // to copy by value
//             item.push(arr[index]);
//             tmpItem.push('X');
//         // if (arr[index]!== 0) {
//             console.log('tmpItem',tmpItem);
//             tmpBuffer.push(tmpItem);
//             console.log('tmpBuffer', tmpBuffer);
//
//             // }
//           });
//
//
//           tmpBuffer.map((item) => {
//             console.log('tmpBuffer item pushed', item);
//             buffer.push(item)});
//             console.log('buffer', buffer);
//
//     }
//
//
//     if (index === arr.length-1) {
//       // return buffer;
//       let finalBuffer = [];
//       let accIndex = 0;
//       console.log('buffer last', buffer);
//       console.log('buffer last length', buffer.length);
//       buffer.reduce((p, c, i) => {
//         let tmpAccIndex = 0
//         if(c.reduce((p1, c1,i1) => {
//           if (c1 !== 'X') {
//             tmpAccIndex = tmpAccIndex + i1;
//             console.log('tmpAccIndex',tmpAccIndex);
//             return p1+c1;
//
//           }else {
//             return p1+0;
//           }
//         }, 0)===arg){
//           accIndex = accIndex + tmpAccIndex;
//           console.log('bingo at index',i,buffer[i],accIndex);
//           var bingoItem = [];
//           bingoItem.push(buffer[i]);
//           bingoItem.push([tmpAccIndex]);
//           bingoItem.push([accIndex]);
//           finalBuffer.push(bingoItem);
//
//         }else{
//           console.log('no bingo');
//         };
//       }, 0)
//       // clean finalBuffer
//       console.log('finalBuffer before cleaning',finalBuffer);
//
//       for (var i = 0; i < arr.length; i++) {
//         let minIndex = -1;
//         for (var j = 0; j < finalBuffer.length; j++) {
//           let minSum = -1;
//
//           // console.log('current char:',finalBuffer[j][0][i]);
//           console.log('crrent legnth of buffer', finalBuffer.length);
//           console.log('current buffer', finalBuffer);
//           console.log('current row', j);
//           if (finalBuffer[j][0][i] !== 'X') {
//             console.log('current char that is not X:',finalBuffer[j][0][i]);
//
//             console.log('my row and sum:',j,finalBuffer[j][1][0]);
//
//             if (minSum === -1 || finalBuffer[j][1][0]<minSum) {
//               minSum = finalBuffer[j][1][0];
//               console.log('current col:',i);
//               console.log('the new minSum is:', minSum);
//               console.log('minIndex is', minIndex);
//               if (minIndex !== -1) {
//                 console.log('deleteing row:' ,minIndex);
//                 // delete finalBuffer[minIndex];
//                 finalBuffer.splice(minIndex, 1);
//                 // j = j -1;
//               }
//               minIndex = j;
//               console.log('new minIndex', minIndex);
//             }else{
//               // remove item
//               // delete finalBuffer[j];
//               finalBuffer.splice(j, 1);
//               console.log('deleted row', j);
//             }
//           }
//         }
//       }
//       console.log('finalBuffer after cleaning',finalBuffer);
//
//
//
//
//
//     } else {
//       index ++;
//       return pairwise(arr,arg,buffer,index);
//     }
//
//
//
// }
// console.log('result',pairwise([], 100));
// console.log('result',pairwise([1,2,3], 7));
// console.log('result',pairwise([1, 3, 2, 4], 4));
// // pairwise([1,2,3], 7);
// // pairwise([1,2,3],3);
// // pairwise([1, 4, 2, 3, 0, 5], 7)
// // pairwise([7, 9, 11, 13, 15], 20);
// // pairwise([1, 3, 2, 4], 4)
//
// // pairwise([1,4,2,3,0,5], 7);
