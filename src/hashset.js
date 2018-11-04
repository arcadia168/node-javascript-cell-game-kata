var HashSet = function() {	
	this._items = Object.create(null);

	this.add = function(item) {
		this._items[item.hashCode()] = item;
	};
	
	this.addItems = function(items) {
		for(var i=0; i<items.length; i++) {
			var item = items[i];
			this.add(item);
		}
	};
	
	this.remove = function(item) {
		delete this._items[item.hashCode()];
	};
	
	this.asArray = function() {
		var array = [];
		for(var index in this._items) {
			var item = this._items[index];
			array.push(item);
		}
		return array;
	};
	
	this.size = function() {
		var count = 0;
		for(var item in this._items) {
			count++;
		}
		return count;
	};
	
	this.equals = function(otherHashSet) {
		return JSON.stringify(this) === JSON.stringify(otherHashSet);
	};

	this.contains = function(item) {
		return undefined !== this._items[item.hashCode()];
	};
};

module.exports = HashSet;
