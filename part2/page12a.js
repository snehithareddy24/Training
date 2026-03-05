function bestStock(stockPrices) {
    let maxDiff = -Infinity;
    let bestStockName = "";

    for (let i = 0; i < stockPrices.length; i++) {
        let stock = stockPrices[i];
        let priceDiff = stock.currentPrice - stock.lastPrice;
        if (priceDiff > maxDiff) {
            maxDiff = priceDiff;
            bestStockName = stock.name;
        }
    }

    return `${bestStockName} has more`;
}

const stockPrice = [
    { name: "Wipro", lastPrice: 200, currentPrice: 210 },
    { name: "Deloitte", lastPrice: 250, currentPrice: 270 },
    { name: "HDFC", lastPrice: 200, currentPrice: 290 }
];

console.log(bestStock(stockPrice));