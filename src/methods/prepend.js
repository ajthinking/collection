"use strict";

module.exports = function prepend(value) {
  this.items.unshift(value);

  return this;
};
