import jsdom from 'jsdom';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';
import chaiEnzyme from 'chai-enzyme'

chai.use(chaiImmutable)
    .use(chaiEnzyme);
