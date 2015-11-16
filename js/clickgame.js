var secCount =  20;
var timer;
var startButton = document.getElementById("startBtn");
var points = 0;
var clicksOn= document.getElementsByTagName("img");
	for(var i=0; i<clicksOn.length;i++){
		clicksOn[i]= points++;
		clicksOn[i].onclick= null
	}

window.onload = startBtn.addEventListener("click", go)





setTimeout (function() {
	clearInterval(timer);
	startBtn.parentNode.removeChild(startBtn);
	alert ("Good Job, you got" + points);
}, 20000);

function subSeconds () {
	secCount-- <= 0;
	setInterval(subSeconds,1000);
}






/* Broken Random 
var srcList = $('img').map(function() {
    return this.src;
}).get(); 

var imgArray = ["https:/avatars2.githubusercontent.com/u/15272529?v=3&s=401","https:/avatars2.githubusercontent.com/u/14036175?v=3&s=602","https:/assets-cdn.github.com/images/spinners/octocat-spinner-32.gif3","https:/avatars0.githubusercontent.com/u/7451158?v=3&s=964","https:/avatars3.githubusercontent.com/u/5618678?v=3&s=965","https:/avatars0.githubusercontent.com/u/6733491?v=3&s=966","https:/avatars1.githubusercontent.com/u/8145638?v=3&s=967","https:/avatars3.githubusercontent.com/u/15336070?v=3&s=968","https:/avatars2.githubusercontent.com/u/15272529?v=3&s=969","https:/avatars2.githubusercontent.com/u/15277912?v=3&s=9610","https:/avatars2.githubusercontent.com/u/15141560?v=3&s=9611","https:/avatars1.githubusercontent.com/u/9385814?v=3&s=9612","https:/avatars2.githubusercontent.com/u/13262114?v=3&s=9613","https:/avatars3.githubusercontent.com/u/8173918?v=3&s=9614","https:/avatars3.githubusercontent.com/u/15148849?v=3&s=9615","https:/avatars1.githubusercontent.com/u/15239573?v=3&s=9616","https:/avatars1.githubusercontent.com/u/14036148?v=3&s=9617","https:/avatars2.githubusercontent.com/u/5847215?v=3&s=9618","https:/avatars3.githubusercontent.com/u/15143183?v=3&s=9619","https:/avatars1.githubusercontent.com/u/15133070?v=3&s=9620","https:/avatars1.githubusercontent.com/u/15132093?v=3&s=9621","https:/avatars1.githubusercontent.com/u/15150594?v=3&s=9622","https:/avatars2.githubusercontent.com/u/3849057?v=3&s=9623","https:/avatars2.githubusercontent.com/u/15146215?v=3&s=9624","https:/avatars0.githubusercontent.com/u/14286124?v=3&s=9625","https:/avatars0.githubusercontent.com/u/10761518?v=3&s=9626","https:/avatars0.githubusercontent.com/u/14966636?v=3&s=9627","https:/avatars3.githubusercontent.com/u/15222710?v=3&s=9628","https:/avatars3.githubusercontent.com/u/10687011?v=3&s=9629","https:/avatars0.githubusercontent.com/u/14851209?v=3&s=9630","https:/avatars3.githubusercontent.com/u/13789757?v=3&s=9631","https:/avatars0.githubusercontent.com/u/15331794?v=3&s=9632","https:/avatars0.githubusercontent.com/u/15333339?v=3&s=96","https:/avatars2.githubusercontent.com/u/15272529?v=3&s=40","https:/avatars2.githubusercontent.com/u/14036175?v=3&s=60","https:/assets-cdn.github.com/images/spinners/octocat-spinner-32.gif","https:/avatars0.githubusercontent.com/u/7451158?v=3&s=96","https:/avatars3.githubusercontent.com/u/5618678?v=3&s=96","https:/avatars0.githubusercontent.com/u/6733491?v=3&s=96","https:/avatars1.githubusercontent.com/u/8145638?v=3&s=96","https:/avatars3.githubusercontent.com/u/15336070?v=3&s=96","https:/avatars2.githubusercontent.com/u/15272529?v=3&s=96","https:/avatars2.githubusercontent.com/u/15277912?v=3&s=96","https:/avatars2.githubusercontent.com/u/15141560?v=3&s=96","https:/avatars1.githubusercontent.com/u/9385814?v=3&s=96","https:/avatars2.githubusercontent.com/u/13262114?v=3&s=96","https:/avatars3.githubusercontent.com/u/8173918?v=3&s=96","https:/avatars3.githubusercontent.com/u/15148849?v=3&s=96","https:/avatars1.githubusercontent.com/u/15239573?v=3&s=96","https:/avatars1.githubusercontent.com/u/14036148?v=3&s=96","https:/avatars2.githubusercontent.com/u/5847215?v=3&s=96","https:/avatars3.githubusercontent.com/u/15143183?v=3&s=96","https:/avatars1.githubusercontent.com/u/15133070?v=3&s=96","https:/avatars1.githubusercontent.com/u/15132093?v=3&s=96","https:/avatars1.githubusercontent.com/u/15150594?v=3&s=96","https:/avatars2.githubusercontent.com/u/3849057?v=3&s=96","https:/avatars2.githubusercontent.com/u/15146215?v=3&s=96","https:/avatars0.githubusercontent.com/u/14286124?v=3&s=96","https:/avatars0.githubusercontent.com/u/10761518?v=3&s=96","https:/avatars0.githubusercontent.com/u/14966636?v=3&s=96","https:/avatars3.githubusercontent.com/u/15222710?v=3&s=96","https:/avatars3.githubusercontent.com/u/10687011?v=3&s=96","https:/avatars0.githubusercontent.com/u/14851209?v=3&s=96","https:/avatars3.githubusercontent.com/u/13789757?v=3&s=96","https:/avatars0.githubusercontent.com/u/15331794?v=3&s=96","https:/avatars0.githubusercontent.com/u/15333339?v=3&s=96"];
var imageElements = document.getElementsByTagName('img');


var randomArrayOut= function shuff (imgArray){
	var currentIndex = imgArray.length, temporayValue, randomIndex;
	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		temporaryValue = array[currentIndex];
    	imgArray[currentIndex] = imgArray[randomIndex];
    	imgArray[randomIndex] = temporaryValue;

	
	var index; 
	for (index = 0; index < randomArrayOut.length; ++index) {
    console.log(randomArrayOut[index]);
}
}





function points() {
	if (this.getAttribute()
}

function replaceText (str,"this is some text", index){

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
*/
