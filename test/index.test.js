const chai = require('chai');
const chaiHttp = require('chai-http');
const server = 'http://localhost:8080';

let should = chai.should();

chai.use(chaiHttp);

describe('GET /api/dataIdList?datasize=full', function () {
  it('respond with all the dataList', function () {
    chai
      .request(server)
      .get('/api/dataIdList?datasize=full')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.length.should.be.eql(90);
      });
  });
});

describe('GET /api/dataIdList?datasize=half', function () {
  it('respond with half of the dataList', function () {
    chai
      .request(server)
      .get('/api/dataIdList?datasize=half')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.length.should.be.eql(45);
      });
  });
});

describe('GET /api/dataIdList?datasize=0', function () {
  it('respond with a specific array', function () {
    chai
      .request(server)
      .get('/api/dataIdList?datasize=0')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.length.should.be.eql(358);
      });
  });
});

describe('GET /api/dataIdList?datasize', function () {
  it('respond with a 400 error', function () {
    chai
      .request(server)
      .get('/api/dataIdList?datasize')
      .end((err, res) => {
        res.should.have.status(400);
      });
  });
});

describe('GET /api/dataItem/:id', function () {
  it('respond with an array from a specific id', function () {
    chai
      .request(server)
      .get('/api/dataItem/0')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.length.should.be.eql(358);
      });
  });
});

describe('GET /api/dataItem/:id', function () {
  it('respond with a 404 error for missing info', function () {
    chai
      .request(server)
      .get('/api/dataItem/')
      .end((err, res) => {
        res.should.have.status(404);
      });
  });
});
