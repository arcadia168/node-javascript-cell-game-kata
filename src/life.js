var Life = function(initialLiveCells) {
	this._liveCells = initialLiveCells;

	this.getLiveCells = function() {
		return this._liveCells;
	};

	this.cellShouldSurvive = function(numNeighbours) {
		if (numNeighbours < 2 || numNeighbours > 3) {
			return false;
		} else {
			return true;
		}
	};

  //get number of neighbours for a given cell
	this.getNumberOfNeighbours = function(cell) {

		//how to find number of neighbours for a given cells
		//use co-ordinates

		//rules for a neigbour? 8 possible
		//horizontally
		//x - 1, x + 1)
		//if (y + 1, y - 1)
		//4 diagonal neighbours
		// x - 1 && y - 1
		//
	}

  //creation of life rule
	this.shouldCreateCell = function(cell, numNeighbours) {

	}
};

module.exports = Life;
