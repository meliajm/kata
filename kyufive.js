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
//alt
function narcissistic(value) {
    const power = value.toString().length
    let numArr = value.toString().split('').map(s=>parseInt(s))
    let result = numArr.map( num =>  num**power)
    return (result.reduce((acc, d)=>{return acc+d})===value)
}

function solution(string) {
    let indx = []
    const lowerString = string.toLowerCase()
    
    for (let i=0; i<string.length; i++) {
      if (lowerString[i]!==string[i]) {
        indx.push(i)
      }
    }  
    
    let res = [string.slice(0, indx[0])]
    
    for (let j=0; j<indx.length; j++) {
      res.push(string.slice(indx[j], indx[j+1]))
    }
    
    return res.join(' ')
  }

function generateHashtag (str) {
    if (str.length===0) {
      return false
    }
    str = str.split(' ').filter( strg=> strg!=="") 
    if (str[0]===undefined) {
      return false
    }
    if (str.map( word=>word[0].toUpperCase()+word.slice(1)).join('').length+1>140) {
      return false
    } else {
      return '#' + str.map( word=>word[0].toUpperCase()+word.slice(1)).join('')
    }
  }

function firstNonRepeatingLetter(s) {
    console.log(s)
    const sLower = s.toLowerCase()
    let result = ""
    let invRes = []
    for (let i=0; i<sLower.length; i++) {
      if ((sLower.slice(i,i) + sLower.slice(i+1)).includes(sLower[i])) {
        invRes.push(s[i])
      }
    }
    console.log(invRes)
  
    
    for (let i=0; i<sLower.length; i++) {
      if (!invRes.includes(sLower[i])) {
        result = s[i]
        break
      }
    }
  
    console.log(result)
    return result
    
  }

  function formatDuration (seconds) {
    if (seconds===0) {
      return 'now'
    }
    
    let m = 0 
    let h = 0
    let d = 0
    let y = 0
    let results = []
    
    console.log(seconds)
    
    if (seconds>=31536000) {
      y += Math.floor(seconds/(31536000))
      seconds = seconds%(31536000)
    }
    if (seconds>=3600*24) {
      d += Math.floor(seconds/(3600*24))
      seconds = seconds%(3600*24)
    }
    if (seconds>=3600) {
      h += Math.floor(seconds/3600)
      seconds = seconds%3600 
    }
    if (seconds>=60) {
      m += Math.floor(seconds/60)
      seconds = seconds%60 
    }
    console.log('y', y)
    console.log('d', d)
    console.log('h', h)
    console.log('m', m)
    console.log(seconds)
    if (y !== 0) {
      y === 1 ? results.push(`${y}` + ' year') : results.push(`${y}` + ' years')
    }
    
    if (d !== 0) {
      d === 1 ? results.push(`${d}` + ' day') : results.push(`${d}` + ' days')
    }
    
    if (h !== 0) {
      h === 1 ? results.push(`${h}` + ' hour') : results.push(`${h}` + ' hours')
    }
    
    if (m !== 0) {
      m === 1 ? results.push(`${m}` + ' minute') : results.push(`${m}` + ' minutes')
    }
    
    if (seconds !== 0) {
      seconds === 1 ? results.push(`${seconds}` + ' second') : results.push(`${seconds}` + ' seconds')
    }
    
    console.log(results)
    
  //  oxford comma versus not
    if (results.length===1) {
      return results.join('')
    }
    
    if (results.length===2) {
      return results.join(' and ')
    }
  }

  function solution(input, markers) {
    const inputSplit = input.split('\n')
  //   console.log(input)
  //   console.log(inputSplit)
    let removed = []
    for (let i=0; i<inputSplit.length; i++) {
        if (!inputSplit[i].includes(markers[0]) && !inputSplit[i].includes(markers[1])) {
          removed.push(inputSplit[i].trim())
        }
      for (let j=0; j<inputSplit[i].length; j++) {
        if (inputSplit[i][j]===markers[0]) {
          console.log(inputSplit[i][j])
          console.log(i, j)
          removed.push(inputSplit[i].slice(0, j).trim())
        }
        if (inputSplit[i][j]===markers[1]) {
          console.log(inputSplit[i][j])
          console.log(i, j)  
          removed.push(inputSplit[i].slice(0, j).trim())
        }
      }
    }
    console.log(removed.join('\n'))
    return removed.join('\n')
  };
// Your new function as given to you by me, your boss.
var cutLog = function(p, n) {
  // Some array to store calculated values
  let tot = 0
  for (j = 0; j <= n; j++) {
      for (i = n; i >= 0; i--) { // Two nested loops = Θ(n^2)
          if ( p[j]+p[i]> tot && j+i<=n) {
            tot = p[j]+p[i]
            
          }
      }
  }
  return tot; 
}

  