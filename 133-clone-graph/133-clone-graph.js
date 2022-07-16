/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(graphHead) {
    if(!graphHead) {
        return null
    }
    let clonedNodes = Array(graphHead.val)
    
    function cloneNode(node = graphHead) {
        
        const nodeIndx = node.val - 1
        const clonedLen = clonedNodes.length
        if(node.val > clonedLen) {
            clonedNodes.push(undefined)
            // clonedNodes = [...clonedNodes, ...Array(nodeIndx - clonedLen) ]  
        }
        let clonedNode = clonedNodes[nodeIndx]
        if(!clonedNode) {
            clonedNode = new Node(node.val)
            clonedNodes[nodeIndx] = clonedNode
            clonedNode.neighbors = node.neighbors.map(neighbor => cloneNode(neighbor))
        }
        return clonedNode

    }
    return cloneNode()
};


// let graphList = []
    // const cloneGraph = (node = graph) => {
    //     const indx = node.val
    //     const graphLen = graphList.length
    //     if (indx > graphLen) {
            // graphList = [ ...Array(indx - graphLen).fill(undefined), ...graphList ]
    //     }
    //     console.log({ graphList, indx })
    //     const neighborIndxs = []
    //     graphList[indx - 1] = neighborIndxs
    //     node.neighbors.forEach(nextNode =>{
    //         console.log(nextNode)
    //         const neighborIndex = nextNode.val
    //         if(graphList[neighborIndex - 1] ===  undefined) {
    //             cloneGraph(nextNode)                
    //         }
    //         neighborIndxs.push(neighborIndex)
    //     })
    // }
    // cloneGraph()
    // console.log({ graphList })
    // return graphList



        
        
//         const clonedNode = new Node(node.val)
//         cloneIndicies[nodeIndx] = clonedNode
//         const clonedNeighborNodes = []
        
//         let i = 0;
//         while(node.neighbors.length > i) {
//             const neighbor = node.neighbors[i]
//             const neighborIndx = neighbor.val - 1
//             const trackerLen = cloneIndicies.length
            
//             if(neighbor.val > trackerLen) {
//                 cloneIndicies = [ ...Array(neighborIndx - trackerLen), ...cloneIndicies ]  
//             }
//             const trackedNode = cloneIndicies[neighborIndx]
//             if(!trackedNode) {
//                 clonedNeighborNodes.push(cloneNode(neighbor))
//             }
//             else {
//                 clonedNeighborNodes.push(trackedNode)
//             }
//             i++
//         }
//         clonedNode.neighbors = clonedNeighborNodes
//         return clonedNode 