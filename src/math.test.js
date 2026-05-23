const { describe, it } = require("node:test");
const { equal } = require("node:assert/strict");
const { sum } = require("./math");

describe('test math', () => {
    it('should sum two params', () => {
        equal(sum(1,1), 2)
    })
})