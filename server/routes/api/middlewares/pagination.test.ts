import { seed, getTestDatabase, getTestServer } from "@server/test/support";

const db = getTestDatabase();
const server = getTestServer();

afterAll(server.disconnect);

beforeEach(db.flush);

describe("#pagination", () => {
  it("should allow offset and limit", async () => {
    const { user } = await seed();
    const res = await server.post("/api/users.list", {
      body: {
        token: user.getJwtToken(),
        limit: 1,
        offset: 1,
      },
    });
    expect(res.status).toEqual(200);
  });

  it("should not allow negative limit", async () => {
    const { user } = await seed();
    const res = await server.post("/api/users.list", {
      body: {
        token: user.getJwtToken(),
        limit: -1,
      },
    });
    expect(res.status).toEqual(400);
  });

  it("should not allow non-integer limit", async () => {
    const { user } = await seed();
    const res = await server.post("/api/users.list", {
      body: {
        token: user.getJwtToken(),
        limit: "blah",
      },
    });
    expect(res.status).toEqual(400);
  });

  it("should not allow negative offset", async () => {
    const { user } = await seed();
    const res = await server.post("/api/users.list", {
      body: {
        token: user.getJwtToken(),
        offset: -1,
      },
    });
    expect(res.status).toEqual(400);
  });

  it("should not allow non-integer offset", async () => {
    const { user } = await seed();
    const res = await server.post("/api/users.list", {
      body: {
        token: user.getJwtToken(),
        offset: "blah",
      },
    });
    expect(res.status).toEqual(400);
  });
});
