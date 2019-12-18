const test = require('tape');
const request = require('supertest');
const app = require('../src/index.js')

test("test that tape is working", t => {
    t.equals(1,1, "one should equal one");
});

