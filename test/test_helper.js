import chai from 'chai';
import chaiImmutable from 'chai-immutable';
import chaiEnzyme from 'chai-enzyme';
// clear
const util = require('util');
util.print('\u001b[2J\u001b[0;0H');

// print date
console.log('__________ ' + new Date() + ' __________');

// init
chai.use(chaiImmutable);
chai.use(chaiEnzyme());
