
var nouns = ["banana","bottle","candle","sweater","purse","sock","foot"];
var randomNoun;
var be = ["is","was","became","looks"]
var randomBe;
var adjective = ["red","orange","yellow","green","blue"]
var randomAdjective;

function setup() {
	createCanvas(windowWidth, windowHeight);

	var nounIndex = floor(random(nouns.length));
	randomNoun = nouns[nounIndex];
	var beIndex = floor(random(be.length));
	randomBe = be[beIndex];
	var adjectiveIndex = floor(random(adjective.length));
	randomAdjective = adjective[adjectiveIndex];

}
function draw(){
	background(randomAdjective);
	textSize(40);

	fill("black");
	text(randomNoun, 200, height/2);
	text(randomBe, 400, height/2);
	text("the",100,height/2);
	text(randomAdjective,600, height/2);
}
