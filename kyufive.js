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