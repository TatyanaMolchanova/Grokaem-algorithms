'use strict'

let graph = {}
graph['start'] = {}
graph['start']['a'] = 6
graph['start']['b'] = 2

console.log('graph', graph)
console.log('keys', Object.keys(graph['start']))
console.log("graph['start']['a']", graph['start']['a'])
console.log("graph['start']['b']", graph['start']['b'])

graph['a'] = {}
graph['a']['fin'] = 1
graph['b'] = {}
graph['b']['a'] = 3
graph['b']['fin'] = 5
graph['fin'] = {}

let infinity = Infinity
let costs = {}
costs['a'] = 6
costs['b'] = 2
costs['fin'] = infinity

let parents = {}
parents['a'] = 'start'
parents['b'] = 'start'
parents['in'] = null

let processed = []

const findLowestCostNode = costs => {
    let lowestCost = Infinity
    let lowestCostNode = null
    for (const node in costs) {
        const cost = costs[node]

        if (cost < lowestCost && !processed.includes(node)) {
            lowestCost = cost
            lowestCostNode = node
        }
    }
    return lowestCostNode
}

findLowestCostNode(costs)

console.log('findLowestCostNode(costs)', findLowestCostNode(costs))

const deixtra = () => {
    let node = findLowestCostNode(costs)
    let result = null

    while (node != null) {
        const cost = costs[node]
        const neighbors = graph[node]

        for (let n in neighbors) {
            const newCost = cost + neighbors[n]

            if (costs[n] > newCost) {
                costs[n] = newCost
                parents[n] = node
            }
            result = newCost
        }
        processed.push(node)
        node = findLowestCostNode(costs)
        
    }
    return result
}

console.log('deixtra', deixtra())

// Page 181