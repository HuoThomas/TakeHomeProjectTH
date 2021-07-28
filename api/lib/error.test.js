describe("Test errorCodes function", () => {
  test("test 403 code", async () => {
    const { errorCodes } = require("./error");
    expect(errorCodes[403].status).toEqual(403);
    expect(errorCodes[403].code).toEqual("BAD_PERMISSIONS");
  });
  test("test non-existent error code", async () => {
    const { errorCodes } = require("./error");
    expect(errorCodes[302]).toEqual(undefined);
  });
});
