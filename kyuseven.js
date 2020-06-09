function myLanguages(results) {
  let arr = []
  const aSort = Object.keys(results).sort(function(a,b){return results[b]-results[a]})  
  for (let [key, value] of Object.entries(results)) {
      if (value>=60) {
        arr.push(key)
      }
  }
  return aSort.filter(value => -1 !== arr.indexOf(value))
}

function capital(capitals){
    return capitals.map(obj => `The capital of ${obj['state']||obj['country']} is ${obj['capital']}`)
}

function completeSeries(arr) {
  // let result = []
  arr = arr.sort()
  for (let i=0; i<arr.length; i++) {
    if (arr[i]===arr[i+1]) {
      return [0]
    }
  }
  return [...Array(Math.max(...arr)+1).keys()]
}

function change(string){
  alpha = 'abcdefghijklmnopqrstuvwxyz'
  resultArr = []
  string = string.toLowerCase()
  alpha = alpha.split('')
    
  alpha.map( (letter, i) => {
    if (string.includes(letter)) {
      resultArr.push(1)
    } else {
      resultArr.push(0)
    }
  })
  console.log(resultArr)
  return resultArr.join('')
}

function getMinMax(arr){
  const min = Math.min(...arr)
  const max = Math.max(...arr)
  let result = []
  result.push(min, max)
  return result
};

function sumEvenNumbers(input) {
  // start running sum as tot or total  
  let tot = 0
  // iterate over input
  for (let i=0; i<input.length; i++) {
  // check if each number in input is even       
    if (input[i]%2===0) {
      // add that number to total
      tot += input[i]
    }
  }
  return tot
}