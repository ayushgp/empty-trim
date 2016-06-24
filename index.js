Object.prototype.toType = function() {
	return ({}).toString.call(this).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
};


module.exports = function deleteEmptyObjects(object){
	if(object.toType() !== 'object'){
		return;
	}
	for(var prop in object){
		if(object[prop].toType() === 'object'){
			deleteEmptyObjects(object[prop]);
		}
		if(object.hasOwnProperty(prop) && 
				Object.keys(object[prop]).length === 0 && 
				object[prop].constructor === Object){
			delete object[prop];
		}
	}
};