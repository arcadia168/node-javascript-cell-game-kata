var expect = require('chai').expect;
var HashSet = require('../src/HashSet');


describe("HashSet Tests", function() {
	
	var hashset;
	var SampleHashItem = function() {
		this.init = function(value) {
			this.value = value;	
		};
	
		this.hashCode = function() {
			return this.value;
		};
		
		this.init.apply(this, arguments);
	};
	
	beforeEach(function() {
		hashset = new HashSet();
	});
	
	describe("Adding individual items", function() {
		
		it("should store a single item", function() {
			hashset.add(new SampleHashItem(1));
			
			expect(hashset.size()).to.equal(1);
		});
		
		it("should store unique items", function() {
			hashset.add(new SampleHashItem(1));
			hashset.add(new SampleHashItem(2));
			hashset.add(new SampleHashItem(3));
			
			expect(hashset.size()).to.equal(3);
		});
		
		it("should not store duplicate items", function() {
			hashset.add(new SampleHashItem(1));
			hashset.add(new SampleHashItem(1));
			
			expect(hashset.size()).to.equal(1);
		});
	});
	
	describe("Add a list of items", function() {
		
		it("should store a list of unique items", function() {
			hashset.addItems([
				new SampleHashItem(1),
				new SampleHashItem(2),
				new SampleHashItem(3)
			]);
			
			expect(hashset.size()).to.equal(3);
		});
		
		it("should not store duplicate items", function() {
			hashset.addItems([
				new SampleHashItem(3),
				new SampleHashItem(2),
				new SampleHashItem(1),
				new SampleHashItem(1),
				new SampleHashItem(2)
			]);
			
			expect(hashset.size()).to.equal(3);
		});
	});
	
	describe("Removing an item", function() {
		
		it("should remove an item", function() {
			
			var expectedItem = new SampleHashItem(2);
			
			hashset.addItems([
				new SampleHashItem(1),
				expectedItem,
				new SampleHashItem(3)
			]);
			hashset.remove(expectedItem);
			
			expect(hashset.contains(expectedItem)).to.equal(false);
			expect(hashset.size()).to.equal(2);
		});
	});
	
	describe("Convert the set to an array", function() {
		
		it("should return an array of items", function() {
			
			var expectedItem1 = new SampleHashItem(1);
			var duplicateItem = new SampleHashItem(2);
			var expectedItem2 = new SampleHashItem(2);
			
			hashset.add(expectedItem1);
			hashset.add(duplicateItem);
			hashset.add(expectedItem2);
			
			var expectedArray = [expectedItem1, expectedItem2];
			var actualArray = hashset.asArray();
			
			expect(actualArray).to.include(expectedItem1);
			expect(actualArray).to.include(expectedItem2);
			expect(actualArray.length).to.equal(2);
		});
	});
	
	describe("Equality of two sets", function() {
		
		it("should return true for equivalent sets", function() {
			
			var hashset1 = new HashSet();
			hashset1.add(new SampleHashItem(1));
			hashset1.add(new SampleHashItem(2));
			
			var hashset2 = new HashSet();
			hashset2.add(new SampleHashItem(1));
			hashset2.add(new SampleHashItem(2));
			hashset2.add(new SampleHashItem(2));
			
			expect(hashset1.equals(hashset2)).to.equal(true);
		});
		
		it("should return false for non-identical sets", function() {
			
			var hashset1 = new HashSet();
			hashset1.add(new SampleHashItem(1));
			hashset1.add(new SampleHashItem(2));
			
			var hashset2 = new HashSet();
			hashset2.add(new SampleHashItem(3));
			hashset2.add(new SampleHashItem(4));
			
			expect(hashset1.equals(hashset2)).to.equal(false);
		});
	});

	describe("Set element presence detection (contains)", function() {
		
		it("should return true when an item is present", function() {
			
			var hashset = new HashSet();
			hashset.add(new SampleHashItem(1));

			expect(hashset.contains(new SampleHashItem(1))).to.equal(true);
		});

		it("should return false when an item is not present", function() {
			
			var hashset = new HashSet();

			expect(hashset.contains(new SampleHashItem(1))).to.equal(false);
		});
	});
});
