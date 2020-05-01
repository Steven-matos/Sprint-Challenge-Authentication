const request = require("supertest");

const server = require("../api/server");

describe("auth-router", function() {
  describe("POST /api/auth/register", function() {
    it("Should return 200 OK", function() {
      return request(server)
        .post("/api/auth/register")
        .send({username: "testing0", password: "test0"})
        .expect(201);
    });
    it("Should return 200 OK", function() {
      return request(server)
        .post("/api/auth/register")
        .send({ username: "testing11", password: "test11" })
        .then(res => {
            expect(res.type).toMatch(/json/i)
        });
    });
  });
  describe("POST /api/auth/login", function() {
    it("Should return 200 OK", function() {
      return request(server)
        .post("/api/auth/login")
        .send({ username: "testing", password: "test" })
        .expect(200);
    });
    it("Should return 200 OK", function() {
      return request(server)
        .post("/api/auth/login")
        .send({ username: "testing", password: "test" })
        .then(res => {
          expect(res.type).toMatch(/json/i);
        });
    });
  });
});
