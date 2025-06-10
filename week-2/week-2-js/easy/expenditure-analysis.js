/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/
let input = [{
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	},
  {
		id: 2,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Vadaa',
	},
  {
		id: 3,
		timestamp: 1656076800003,
		price: 100,
		category: 'Vehicle',
		itemName: 'Ferrari',
	},{
		id: 4,
		timestamp: 1656076800003,
		price: 1400,
		category: 'Bacteria',
		itemName: 'Ketoo',
	}{
		id: 4,
		timestamp: 1656076800003,
		price: 1400,
		category: 'Bacteria',
		itemName: 'Ketoo',
	}
]



function calculateTotalSpentByCategory(transactions) {
let xyz = loopover(transactions);
const myMap = new Map();
myMap.set(transactions[0].category,)
  return [];
}






function loopover(transactions)
{
for(let i=0;i<transactions.length;i++)
{
console.log(transactions[i].category,transactions[i].price);
}
}

calculateTotalSpentByCategory(input);

module.exports = calculateTotalSpentByCategory;
