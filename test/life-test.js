var expect = require('chai').expect;
var Life = require('../src/life');
var HashSet = require('../src/hashset');
var Cell = require('../src/cell');

describe("Life Tests", function() {

	describe("Initialisation", function() {
		it("create a set with the correct number of cells", function() {
			var setOfCells = new HashSet();
			setOfCells.add(new Cell(1,1));
			setOfCells.add(new Cell(2,2));

			var life = new Life(setOfCells);
			expect(life.getLiveCells().size()).to.equal(2);
		});
	});

	describe("Underpopulation", function() {
		it("should return false for fewer than 2 neighbours", function() {
			var setOfCells = new HashSet();
			setOfCells.add(new Cell(1,1));
			setOfCells.add(new Cell(2,2));

			var life = new Life(setOfCells);
			expect(life.cellShouldSurvive(0)).to.equal(false);
			expect(life.cellShouldSurvive(1)).to.equal(false);
			expect(life.cellShouldSurvive(2)).to.equal(true);
		});
	});

	describe("Overpopulation", function() {
		it("should return false for more than 3 neighbours", function() {
			var setOfCells = new HashSet();
			setOfCells.add(new Cell(1,1));
			setOfCells.add(new Cell(2,2));

			var life = new Life(setOfCells);
			expect(life.cellShouldSurvive(3)).to.equal(true);
			expect(life.cellShouldSurvive(4)).to.equal(false);
		});
	});

	describe("Survival", function() {
		it("should return true for exactly 2 or 3 neighbours", function() {
			var setOfCells = new HashSet();
			setOfCells.add(new Cell(1,1));
			setOfCells.add(new Cell(2,2));

			var life = new Life(setOfCells);
			expect(life.cellShouldSurvive(2)).to.equal(true);
			expect(life.cellShouldSurvive(3)).to.equal(true);
		});
	});

	describe("getNumberOfNeighbours", function() {
		it("should return the correct number of neighbours", function () {
			var setOfCells = new HashSet();
			setOfCells.add(new Cell(1,1));
			setOfCells.add(new Cell(2,2));

			var life = new Life(setOfCells);
			
		})
	});
});
