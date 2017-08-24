exports.BasicCard = function(front, back) {
	this.front = front;
	this.back = back;
}

exports.ClozeCard = function(text, cloze) {

	var textToLower = text.toLowerCase();
	var clozeToLower = cloze.toLowerCase();

	if (!textToLower.includes(clozeToLower)) {
		console.log('Text Does Not Match; Try Again! ' + cloze );
		return;
	}

	this.full = text;
	this.cloze = cloze;
	this.partial = text.replace(cloze, '...');
}


