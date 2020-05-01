const request = require("supertest");

const server = require("../api/server");

describe("Jokes-router.js", function() {
  describe("Get /api/jokes", function() {
    it("Should return 200 OK", function() {
      return request(server)
        .get("/api/jokes")
        .set(
          "authorization",
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RpbmciLCJpYXQiOjE1ODUzMjUyNTMsImV4cCI6MTU4NTMzNjA1M30.mKZihDGci6ddSb_mBsdWq2JQ80D8EBasOma4njW8dGU"
        )
        .expect(200);
    });
    it("Should return 401 unauthorized", function() {
      return request(server)
        .get("/api/jokes")
        .expect(401);
    });
  });
});
