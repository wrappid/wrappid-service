import { beforeAll, describe, test, expect } from "@jest/globals";
import request from "supertest";

const BASE_URL = "https://demoapi.wrappid.dev/";
let token = "";
// eslint-disable-next-line no-undef
beforeAll (async () => {
  const response = await request(BASE_URL)
    .post("login")
    .send({ emailOrPhone: "pritam@rxefy.com", password: "Pritam@rxefy123" })
    .set("Content-Type", "application/json")
    .set("Accept-Encoding", "gzip, deflate, br")
    .set("Connection", "keep-alive")
    .set("User-Agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36");
  token = response.body.accessToken;
});
describe("business/count/:entity",() => {
  test("TC01 Verify API Response Status Code", async () => {
    const entity = "Users";
    const response = await request(BASE_URL)
      .get(`business/count/${entity}`)
      .set("Authorization", `Bearer ${token}`)
      .set("Content-Type", "application/json")
      .set("Accept-Encoding", "gzip, deflate, br")
      .set("Connection", "keep-alive")
      .set("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36");

    expect(response.statusCode).toBe(200);
  });

});
describe("business/count/:entity", () => {
  test("TC02 Verify API Response Format JSON", async () => {
    const entity = "Users";
    const response = await request(BASE_URL)
      .get(`business/count/${entity}`)
      .set("Authorization", `Bearer ${token}`)
      .set("Content-Type", "application/json")
      .set("Accept-Encoding", "gzip, deflate, br")
      .set("Connection", "keep-alive")
      .set("User-Agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36");

    expect(response.body).toBeInstanceOf(Object);
  });
});
describe("business/count/:entity", () => {
  test("TC05 Verify API Response Time Within Acceptable Limits", async () => {
    const entity = "Users";
    const acceptableResponseTime = 2000;
    const startTime = Date.now();
    await request(BASE_URL)
      .get(`business/count/${entity}`)
      .set("Authorization", `Bearer ${token}`)
      .set("Content-Type", "application/json")
      .set("Accept-Encoding", "gzip, deflate, br")
      .set("Connection", "keep-alive")
      .set("User-Agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36");

    const endTime = Date.now();
    const responseTime = endTime - startTime;
    expect(responseTime).toBeLessThanOrEqual(acceptableResponseTime);  //responsetime = 152ms as of now 
  });
});
describe("business/count/:entity", () => {
  test("TC08 Verify API Response Headers", async () => {
    const entity = "Users";
    const response = await request(BASE_URL)
      .get(`business/count/${entity}`)
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
describe("business/count/:entity", () => {
  test("TC10 Verify API Response Payload Size", async () => {
    const entity = "Users";
    const response = await request(BASE_URL)
      .get(`business/count/${entity}`)
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
describe("business/count/:entity", () => {
  test("TC15 Verify API Handles Unauthorized Access", async () => {
    const entity = "Users";
    const falsetoken = "JyotirmoyGhosh1610";
    const response = await request(BASE_URL)
      .get(`business/count/${entity}`)
      .set("Authorization", `Bearer ${falsetoken}`)
      .set("Content-Type", "application/json")
      .set("Accept-Encoding", "gzip, deflate, br")
      .set("Connection", "keep-alive")
      .set("User-Agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36");
    expect(response.statusCode).toBe(401);
  });
});
describe("business/count/:entity", () => {
  test("TC38 Verify API Response Content Type", async () => {
    const entity = "Users";
    const response = await request(BASE_URL)
      .get(`business/count/${entity}`)
      .set("Authorization", `Bearer ${token}`)
      .set("Content-Type", "application/json")
      .set("Accept-Encoding", "gzip, deflate, br")
      .set("Connection", "keep-alive")
      .set("User-Agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36");
    expect(response.header["content-type"]).toContain("application/json");
  });
});
describe("Test business/tables/attributes/:database/:table", () => {
  test("TC39 Verify API Response Compression (Accept-Encoding)", async () => {   
  });
});
describe("Test business/tables/attributes/:database/:table", () => {
  test("TC41 Verify API Response Not Compressed (Other Encoding)", async () => {   
  });
});
describe("Test business/tables/attributes/:database/:table", () => {
  test("TC42 Verify API Response Language (Accept-Language)", async () => {   
  });
});
describe("Test business/tables/attributes/:database/:table", () => {
  test("TC43 Verify API Response Locale", async () => {   
  });
});
describe("Test business/tables/attributes/:database/:table", () => {
  test("TC44 Verify API Response Timezone (Accept-Timezone)", async () => {   
  });
});