var expect = require('chai').expect;
var Cell = require('../src/cell');
var HashSet = require('../src/hashset');

describe("Cell Tests", function() {
	
	describe("Equality", function() {
		it("cells with the same x and y coordinates should be equal", function() {
			var c1 = new Cell(1, 2);
			var c2 = new Cell(1, 2);
			
			expect(c1.equals(c2)).to.equal(true);
		});
	});
	
	describe("Inequality", function() {
		it("cells with different x and y coordinates should not be equal", function() {
			var c1 = new Cell(1, 2);
			var c2 = new Cell(1, 3);
			expect(c1.equals(c2)).to.equal(false);

			c1 = new Cell(0, 2);
			c2 = new Cell(1, 2);
			expect(c1.equals(c2)).to.equal(false);
		});
	});
	
	describe("Hash of Cells", function() {
		it("multiple cells with the same x and y coordinates should not exist", function() {
			expect(new Cell(1, 1).hashCode()).to.equal(new Cell(1, 1).hashCode());
			
			var set = new HashSet();
			set.add(new Cell(1, 1));
			set.add(new Cell(1, 1));
			set.add(new Cell(2, 2));
			
			expect(set.size()).to.equal(2);
		});
	});
	
	describe("Equivalent Set of Cells", function() {
		it("two sets of cells containing cells with the x and y coordinates should be equal", function() {
			var setOfCells = new HashSet();
			setOfCells.add(new Cell(1, 1));
			
			var setOfCells2 = new HashSet();
			setOfCells2.add(new Cell(1, 1));
			
			expect(setOfCells.equals(setOfCells2)).to.equal(true);
		});
	});
});