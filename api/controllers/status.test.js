const app = require("../app");
const supertest = require("supertest");
const request = supertest(app);

describe("test status route", () => {
  test("test ping route success", async (done) => {
    request
      .get("/ping")
      .expect(200)
      .end((err, res) => {
        done();
      });
  });
});
