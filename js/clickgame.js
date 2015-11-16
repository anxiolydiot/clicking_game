/*var srcList = $('img').map(function() {
    return this.src;
}).get(); */ 

var randomArrayOut= function shuff (imgArray){
	var currentIndex = imgArray.length, temporayValue, randomIndex;
	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		temporaryValue = array[currentIndex];
    	imgArray[currentIndex] = imgArray[randomIndex];
    	imgArray[randomIndex] = temporaryValue;

	}
	return imgArray;
}


var = index; 
for (index = 0; index < randomArrayOut.length; ++index) {
    console.log(randomArrayOut[index]);
}





function arrayFill() {
   $("profLink").innerHTML = "";
}




var endTime;
function fin() {
	endTime = setTimeout(alertEnd, 20000);

}

function alertEnd() {
	alert("your score is" + )
}

