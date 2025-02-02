"use strict";

module.exports = (it, expect, collect) => {
  it("should prepend an item to the beginning of the collection", () => {
    const collection = collect([1, 2, 3, 4, 5]);

    expect(collection.prepend(0).all()).to.eql([0, 1, 2, 3, 4, 5]);
    expect(collection.all()).to.eql([0, 1, 2, 3, 4, 5]);
  });
};
