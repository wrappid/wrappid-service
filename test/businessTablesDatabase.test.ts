import { beforeAll, describe, test, expect } from "@jest/globals";
import request from "supertest";

const BASE_URL = "https://demoapi.wrappid.dev/";
let token = "";
// eslint-disable-next-line no-undef
beforeAll(async () => {
  const response = await request(BASE_URL)
    .post("login")
    .send({ emailOrPhone: "pritam@rxefy.com", password: "Pritam@rxefy123" })
    .set("Content-Type", "application/json")
    .set("Accept-Encoding", "gzip, deflate, br")
    .set("Connection", "keep-alive")
    .set("User-Agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36");
  token = response.body.accessToken;
});
describe("Test business/tables/:database", () => {
  test("TC01 Verify API Response Status Code", async () => {
    const database = "application";
    const response = await request(BASE_URL)
      .get(`business/tables/${database}`)
      .set("Authorization", `Bearer ${token}`)
      .set("Content-Type", "application/json")
      .set("Accept-Encoding", "gzip, deflate, br")
      .set("Connection", "keep-alive")
      .set("User-Agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36");

    expect(response.statusCode).toBe(200);
  });
});
describe("Test business/tables/:database", () => {
  test("TC02 Verify API Response Format JSON", async () => {
    const database = "application";
    const response = await request(BASE_URL)
      .get(`business/tables/${database}`)
      .set("Authorization", `Bearer ${token}`)
      .set("Content-Type", "application/json")
      .set("Accept-Encoding", "gzip, deflate, br")
      .set("Connection", "keep-alive")
      .set("User-Agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36");

    expect(response.body).toBeInstanceOf(Object);
  });
});
describe("Test business/tables/:database", () => {
  test("TC05 Verify API Response Time Within Acceptable Limits", async () => {
    const database = "application";
    const acceptableResponseTime = 2000;
    const startTime = Date.now();
    await request(BASE_URL)
      .get(`business/tables/${database}`)
      .set("Authorization", `Bearer ${token}`)
      .set("Content-Type", "application/json")
      .set("Accept-Encoding", "gzip, deflate, br")
      .set("Connection", "keep-alive")
      .set("User-Agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36");

    const endTime = Date.now();
    const responseTime = endTime - startTime;
    expect(responseTime).toBeLessThanOrEqual(acceptableResponseTime);  //responsetime = 306ms as of now 
  });
});
describe("Test business/tables/:database", () => {
  test("TC08 Verify API Response Headers", async () => {
    const database = "application";
    const response = await request(BASE_URL)
      .get(`business/tables/${database}`)
      .set("Authorization", `Bearer ${token}`)
      .set("Content-Type", "application/json")
      .set("Accept-Encoding", "gzip, deflate, br")
      .set("Connection", "keep-alive")
      .set("User-Agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36");

    expect(response.headers["content-type"]).toBe("application/json; charset=utf-8");
    expect(response.headers["access-control-allow-origin"]).toBe("*");
    expect(response.headers["connection"]).toBe("keep-alive");
  });
});
describe("Test business/tables/:database", () => {
  test("TC09 Verify API Response Headers", async () => {
    const database = "application";
    const response = await request(BASE_URL)
      .get(`business/tables/${database}`)
      .set("Authorization", `Bearer ${token}`)
      .set("Content-Type", "application/json")
      .set("Accept-Encoding", "gzip, deflate, br")
      .set("Connection", "keep-alive")
      .set("User-Agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36");

    expect(response.headers["content-type"]).toBe("application/json; charset=utf-8");
    expect(response.headers["access-control-allow-origin"]).toBe("*");
    expect(response.headers["connection"]).toBe("keep-alive");
  });
});
describe("Test business/tables/:database", () => {
  test("TC10 Verify API Response Payload Size", async () => {
    const database = "application";
    const response = await request(BASE_URL)
      .get(`business/tables/${database}`)
      .set("Authorization", `Bearer ${token}`)
      .set("Content-Type", "application/json")
      .set("Accept-Encoding", "gzip, deflate, br")
      .set("Connection", "keep-alive")
      .set("User-Agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36");

    const payloadSize = Buffer.from(JSON.stringify(response.body)).length;
    const maxSize = 2000; // Set the maximum allowed payload size in bytes
    expect(payloadSize).toBeLessThanOrEqual(maxSize);
  });
});
/*describe("Test business/tables/:database", () => {
  test("TC11 Verify API Handles Malformed Requests", async () => {
    //Request with wrong password
    const response = await request(BASE_URL)*/
/**
     * @todo
     * At this time this is out of my knowledge
     */
/*.get(`business/tables`)
      .send({ emailOrPhone: "8777083276", password: "Pritam@rxey123" })
      .set("Content-Type", "application/json")
      .set("Accept-Encoding", "gzip, deflate, br")
      .set("Connection", "keep-alive")
      .set("User-Agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36");
    // Request with invalid emailOrPhone
    const response1 = await request(BASE_URL)
      .post("/login")
      .send({ emailOrPhone: "877703276", password: "Pritam@rxefy123" })
      .set("Content-Type", "application/json")
      .set("Accept-Encoding", "gzip, deflate, br")
      .set("Connection", "keep-alive")
      .set("User-Agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36");
    expect(response.body.message).toMatch("Invalid password");
    expect(response1.body.message).toMatch("emailOrPhone must match the following");
  });
});
*/
describe("Test business/tables/:database", () => {
  test("TC12 Verify API Handles Authentication Failure....(Not Applicable for this url)", async () => {
  });
});
/*describe("Test business/tables/:database", () => {
  test("TC13 Verify API Handles Missing Request Payload", async () => {
    const database = "application";
    const response = await request(BASE_URL)
      .get(`business/tables/${database}`)
      .set("Authorization", `Bearer ${token}`)
      .set("Content-Type", "application/json")
      .set("Accept-Encoding", "gzip, deflate, br")
      .set("Connection", "keep-alive")
      .set("User-Agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36");
    expect(response.statusCode).toBeGreaterThanOrEqual(400);
    expect(response.statusCode).toBeLessThan(500);
  });
});
*/
describe("Test business/tables/:database", () => {
  test("TC15 Verify API Handles Unauthorized Access", async () => {
    const database = "application";
    const falsetoken = "JyotirmoyGhosh1610";
    const response = await request(BASE_URL)
      .get(`business/tables/${database}`)
      .set("Authorization", `Bearer ${falsetoken}`)
      .set("Content-Type", "application/json")
      .set("Accept-Encoding", "gzip, deflate, br")
      .set("Connection", "keep-alive")
      .set("User-Agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36");
    expect(response.statusCode).toBe(401);
  });
});
describe("Test business/tables/:database", () => {
  test("TC16 Verify API Handles Request Payload Size Limit...(Skiped)", async () => {
  });
});
describe("Test business/tables/:database", () => {
  test("TC18 Verify API Handles Invalid Request Method...(Skiped)", async () => {
  });
});
describe("Test business/tables/:database", () => {
  test("TC38 Verify API Response Content Type", async () => {
    const database = "application";
    const response = await request(BASE_URL)
      .get(`business/tables/${database}`)
      .set("Authorization", `Bearer ${token}`)
      .set("Content-Type", "application/json")
      .set("Accept-Encoding", "gzip, deflate, br")
      .set("Connection", "keep-alive")
      .set("User-Agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36");
    expect(response.header["content-type"]).toContain("application/json");
  });
});
describe("Test business/tables/:database", () => {
  test("TC39 Verify API Response Compression (Accept-Encoding)", async () => {   
  });
});
describe("Test business/tables/:database", () => {
  test("TC41 Verify API Response Not Compressed (Other Encoding)", async () => {   
  });
});
describe("Test business/tables/:database", () => {
  test("TC42 Verify API Response Language (Accept-Language)", async () => {   
  });
});
describe("Test business/tables/:database", () => {
  test("TC43 Verify API Response Locale", async () => {   
  });
});
describe("Test business/tables/:database", () => {
  test("TC44 Verify API Response Timezone (Accept-Timezone)", async () => {   
  });
});