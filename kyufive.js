ali187, tute, ooflorent, makmonty, dragonhai, dilidili (plus 13 more warriors)
function pigIt(str){
  //Code here
  return str.replace(/\b(\w)(\w*)\b/g,"$2$1ay");
}
18 similar code variations are grouped with this oneShow Variations

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