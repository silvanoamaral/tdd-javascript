const Lab = require('lab');
const lab = exports.lab = Lab.script();
const { expect } = require('code');

const { soma } = require('../soma');

lab.test('returns true when 1 + 1 equals 2', () => {
    expect(soma(1,1)).to.equal(2);
    //done();
});

lab.test('rodar sem parametros', () => {
    expect(soma()).to.equal(0);
    //done();
});