var oddNumbers  = [1, 2, 3, 4, 5, 5, 7];
var evenNumbers = [4, 4, 5, 5, 6, 6, 6, 7];


function sum(list_of_numbers) {

    var total = 0;

    for (var i=0; i < list_of_numbers.length; i++){ total = total + list_of_numbers[i]; };

    return total;

}

console.log("Sum of [" + oddNumbers + "] is " + sum(oddNumbers));
console.log("Sum of [" + evenNumbers + "] is " + sum(evenNumbers));


function mean(list_of_numbers){

	return sum(list_of_numbers) / list_of_numbers.length;

}

console.log("Mean of [" + oddNumbers + "] is " + mean(oddNumbers));
console.log("Mean of [" + evenNumbers + "] is " + mean(evenNumbers));


function median(list_of_numbers){

    list_of_numbers.sort(function(a,b) {return a - b;} );

    var half = Math.round(list_of_numbers.length/2) - 1;

    if (list_of_numbers.length % 2) { return list_of_numbers[half]; }

    else { return (list_of_numbers[half+1] + list_of_numbers[half]) / 2.0; }

}

console.log("Median of [" + oddNumbers + "] is " + median(oddNumbers));
console.log("Median of [" + evenNumbers + "] is " + median(evenNumbers));