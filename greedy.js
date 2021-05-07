'use strict'

let states = ['mt', 'wa', 'or', 'id', 'nv', 'ut', 'ca', 'az'];

let stations = {};
stations['one'] = ['id', 'nv', 'ut'];
stations['two'] = ['mt', 'wa', 'id'];
stations['three'] = ['or', 'nv', 'ca'];
stations['four'] = ['ca', 'az'];
stations['five'] = ['nv', 'ut'];


function greedy() {

  let finalStations = [];

  while(states.length){
    let bestStation = null;
    let statesCovered = [];
    for(let station in stations){
      let covered = getIntersection(states, stations[station]);
      if(covered.length > statesCovered.length) {
        bestStation = station;
        statesCovered = covered;
      }
    }
    states = getDifference(states, statesCovered);
    finalStations.push(bestStation)
  }
  return finalStations;
}

function getDifference(arr1, arr2){
  let obj = {};
  let result = [];
  arr1.forEach((item)=>{
    obj[item] ? obj[item]++ : obj[item] = 1;
  })
  arr2.forEach((item)=>{
    obj[item] ? obj[item]++ : obj[item] = 1;
  })
  for(let item in obj){
    if(obj[item] === 1) result.push(item);
  }
  return result;
}

function getIntersection(arr1, arr2) {
  let obj = {};
  let result = [];
  arr1.forEach((item)=>{
    obj[item] ? obj[item]++ : obj[item] = 1;
  })
  arr2.forEach((item)=>{
    obj[item] ? obj[item]++ : obj[item] = 1;
  })
  for(let item in obj){
    if(obj[item] > 1) result.push(item);
  }
  return result;
}

console.log(greedy());
console.log(stations)
// author: KiraJS



// const statesNeeded = new Set(['mt', 'wa', 'or', 'id', 'nv', 'ut'])

// let stations = {}
// stations['kone'] = new Set(['id', 'nv', 'ut'])
// stations['ktwo'] = new Set(['wa', 'id', 'mt'])
// stations['khtree'] = new Set(['or', 'nv', 'ca'])
// stations['kfour'] = new Set(['nv', 'ut'])
// stations['kfive'] = new Set(['ca', 'az'])
// let finalStations = new Set()
// let bestStation = null
// let statesCovered = new Set()

// while (statesNeeded) {

    
//     for (let station in stations) {
//     let covered = [...statesNeeded].filter(value => station.includes(value))

//     // console.log('covered', covered)
    
//         if (covered.length > statesNeeded.length) {
//             console.log('covered', covered)
//             bestStation = station
//             statesCovered = covered
//         }    
//     }
// }

// // console.log('statesCovered', statesCovered)

// // statesNeeded 

// //195
