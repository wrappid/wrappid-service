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
describe("Test: business/tables/:database", () => {
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
  test("TC08 Verify API Endpoint URL", async () => {
  });
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
  test("TC11 Verify API Handles Malformed Requests....(Skiped)", async () => {
  });
  test("TC12 Verify API Handles Authentication Failure....(Not Applicable for this url)", async () => {
  });
  test("TC13 Verify API Handles Missing Request Payload....(Skipped", async () => {
    
  });
  test("TC15 Verify API Handles Unauthorized Access", async () => {
    const database = "application";
    function generateRandomString(length: number): string {
      const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let result = "";
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      return result;
    }
    const falsetoken = generateRandomString(20);
    //const falsetoken = "JyotirmoyGhosh1610";
    const response = await request(BASE_URL)
      .get(`business/tables/${database}`)
      .set("Authorization", `Bearer ${falsetoken}`)
      .set("Content-Type", "application/json")
      .set("Accept-Encoding", "gzip, deflate, br")
      .set("Connection", "keep-alive")
      .set("User-Agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36");
    expect(response.statusCode).toBe(401);
  });
  test("TC16 Verify API Handles Request Payload Size Limit...(Skiped)", async () => {
  });
  test("TC18 Verify API Handles Invalid Request Method...(Skiped)", async () => {
  });
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
  test("TC39 Verify API Response Compression (Accept-Encoding)", async () => {   
  });
  test("TC41 Verify API Response Not Compressed (Other Encoding)", async () => {   
  });
  test("TC42 Verify API Response Language (Accept-Language)", async () => {   
  });
  test("TC43 Verify API Response Locale", async () => {   
  });
  test("TC44 Verify API Response Timezone (Accept-Timezone)", async () => {   
  });
});