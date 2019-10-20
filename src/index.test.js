import { expect } from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('Yay', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  })
});

describe('index.html', () => {
  it('h1 should say Users', (done) => {
    expect(true).to.equal(true);
    const index = fs.readFileSync('./src/index.html', "utf-8");
    jsdom.env(index, function(err, window){
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal("Users");
      done();
      window.close();
    })
  })
});
