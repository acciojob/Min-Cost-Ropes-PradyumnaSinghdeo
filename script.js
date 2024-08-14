function mincost(arr)
{ 
//write your code here
// return the min cost
	let minHeap = [...arr].sort((a, b) => a - b);
    
    let totalCost = 0;
    
    
    while (minHeap.length > 1) {
        // Extract the two smallest ropes
        let first = minHeap.shift();  // Extract the smallest rope
        let second = minHeap.shift(); // Extract the second smallest rope
        
        let cost = first + second;
        
        // Add the cost to the total cost
        totalCost += cost;
        
        minHeap.push(cost);
        minHeap.sort((a, b) => a - b);
    }
    
    return totalCost;
}

module.exports = mincost;
  
