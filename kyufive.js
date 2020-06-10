function pigIt(str){
  //Code here
  return str.replace(/\b(\w)(\w*)\b/g,"$2$1ay");
}

function pigIt(str){

  // check for punctuation at end
    // first make str to all lowercase
    // checking if last character of string is not included in alphabet
  const strLower = str.toLowerCase()
  const alpha = 'abcdefghijklmnopqrstuvwxyz'
  const pig = []
//   console.log(str[str.length-1])
  if (!alpha.includes(strLower[strLower.length-1])) {
    const punct = str[str.length-1]
    console.log('includes punctuation', punct)
    // get str without punct
    str = str.slice(0, str.length-2)
    str = str.split(' ')
    str.map( word => {
      pig.push(word.slice(1, word.length)+word[0]+'ay')
      
    })
    pig.push(punct)
    console.log(pig)
  } else {
    str = str.slice(0, str.length)
    str = str.split(' ')
    str.map( word => {
      pig.push(word.slice(1, word.length)+word[0]+'ay')
      
    })
  }
  return pig.join(' ')
}

function josephus(items, k){
    let result = [], index = 0;
    while (items.length > 0){
      index = (index + k - 1) % items.length;
      result = result.concat(items.splice(index, 1));
    }
    return result;
}

function duplicateCount(text){
    let array = []
    let resArr = [1]
    let result = []
    text = text.toLowerCase()
    for (let i=0; i<text.length; i++) {
       array.push(text.split('').filter(t => t===text[i]))
    }
    array = array.filter(arr=>arr.length>1)
    array.forEach( arr => {
      if (!resArr.includes(arr)) {
        resArr.push(arr)
      }
    })
    resArr = resArr.sort()  
    
    for (let i=0; i<resArr.length-1; i++) {
      if (resArr[i][0]!==resArr[i+1][0]) {
        result.push(resArr[i])
      }
      
    }
  
    if (result.length===0){
      return 0
    } else {
      return result.length
    }
  
  }

var encryptThis = function(text) {
    const lastLetter = text[text.length-1]
    const secondLetter = text[1]
    const mid = text.slice(2, text.length-1)
    const result = []
    text = text.split(' ')
    for (let i=0; i<text.length; i++) {
      let lastLetter = text[i][text[i].length-1]
      let secondLetter = text[i][1]
      let mid = text[i].slice(2, text[i].length-1)
      if (text[i].length===1) {
        result.push(text[i].charCodeAt(0))
      }
      else if (text[i].length===2) {
        result.push(text[i].charCodeAt(0)+lastLetter)
      }
      else {
        result.push(text[i].charCodeAt(0)+lastLetter+mid+secondLetter)
      }
    }
    return result.join(' ')
}

const splitAndAdd = (arr, n) => {
    if (n <= 0)
      return arr;
    const ln = arr.length;
    if ((ln % 2) === 1)
      arr.unshift(0);
    return splitAndAdd(arr.splice(0, Math.ceil(ln / 2)).map((a, i) => a + arr[i]), n-1);
    }

function digital_root(n) {
    if (n < 10)
        return n;
    
    for (var sum = 0, i = 0, n = String(n); i < n.length; i++)
        sum += Number(n[i]);
        
    return digital_root(sum);
}

function narcissistic(value) {
    const power = value.toString().length
    let numArr = value.toString().split('').map(s=>parseInt(s))
    let result = []
    for (let i=0; i<numArr.length; i++) {
      result.push(numArr[i]**power)
    }
    return (result.reduce((acc, d)=>{return acc+d})===value)
  }