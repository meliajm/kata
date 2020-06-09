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