// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    var curr = parseInt(currency);
    var res = {};
    if (curr === 0) {
        return res = {};
    }else if (curr > 10000) {
        return res = {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }else {
        var coins = {
            "H" : 50,
            "Q" : 25,
            "D" : 10,
            "N" : 5,
            "P" : 1
        };
        for (var key in coins) {
            var quantity = Math.trunc(curr/coins[key]);
            if (quantity > 0) {
                res[key] = quantity;
                curr = curr - coins[key]*res[key];
            }
        }
        return res;
    }
}