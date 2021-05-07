'use strict'

let graph = {};

graph['you'] = ['alice', 'bob', 'claire'];
graph['bob'] = ['anuj', 'peggy'];
graph['alice'] = ['peggy'];
graph['claire'] = ['thom', 'jonny'];
graph['anuj'] = [];
graph['thom'] = [];
graph['jonny'] = [];
graph['peggy'] = [];

// not weighed graph - graph in width
const searchInWidth = (graphObject, person) => {
    let searchQueue = graphObject[person]
    console.log('search_queue', searchQueue)
    const searched = []

    while(searchQueue.length) {
        let lastInQueue = searchQueue.pop();
        console.log('lastInQueue', lastInQueue)
        console.log('lastInQueue[lastInQueue.length - 1]', lastInQueue[lastInQueue.length - 1])

        if (!searched.includes(lastInQueue)) {
            if (lastInQueue[lastInQueue.length - 1] === 'm') {
                return lastInQueue + ' is mango seller'
            } else {
                console.log('graphObject[lastInQueue]', graphObject[lastInQueue])
                searchQueue = searchQueue.concat(graphObject[lastInQueue])
                searched.push(lastInQueue)
                console.log('searchQueue2', searchQueue)
            }
        }
    }
    return 'There are no mango seller in the queue';
}

console.log('result', searchInWidth(graph, 'you'))

// Page 150










// 'use strict'

// let graph = {};

// graph['you'] = ['alice', 'bob', 'claire'];
// graph['bob'] = ['anuj', 'peggy'];
// graph['alice'] = ['peggy'];
// graph['claire'] = ['thom', 'jonny'];
// graph['anuj'] = [];
// graph['thom'] = [];
// graph['jonny'] = [];
// graph['peggy'] = [];

// const searchInDepth = (graphObject, person) => {
//     let searchQueue = graphObject[person]
//     console.log('search_queue', searchQueue)

//     while(searchQueue.length) {
//         let lastInQueue = searchQueue.pop();
//         console.log('lastInQueuest', lastInQueue)
//         console.log('lastInQueue[lastInQueue.length - 1]', lastInQueue[lastInQueue.length - 1])

//         if (lastInQueue[lastInQueue.length - 1] === 'm') {
//             return lastInQueue + ' is mango seller'
//         } else {
//             console.log('graphObject[lastInQueue]', graphObject[lastInQueue])
//             searchQueue = searchQueue.concat(graphObject[lastInQueue])
//             console.log('searchQueue2', searchQueue)
//         }

//     }
//     return 'There are no mango seller in the queue';

// }

// // searchInDepth(graph, 'you')
// console.log('result', searchInDepth(graph, 'you'))





















// const graph = new Map();
// graph.set('you', ["alice", "bob", "claire"])
// graph.set('bob', ["anuj", "peggy"])
// graph.set('alice', ["peggy"])
// graph.set('claire', ["thom", "jonny"])
// graph.set('anuj', [])
// graph.set('peggy', [])
// graph.set('thom', [])
// graph.set('jonny', [])

// console.log('graph', graph);
// console.log('you', graph.get('you'));