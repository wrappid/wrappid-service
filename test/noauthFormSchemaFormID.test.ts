import { describe, test, expect } from "@jest/globals";
import request from "supertest";

const BASE_URL = "https://demoapi.wrappid.dev/";
describe("Testing API: noauth/formSchema/:formID", () => {
  test("TC01 Verify API Response Status Code", async () => {
    const formID = "loginWithOtp";
    const response = await request(BASE_URL)
      .get(`noauth/formSchema/${formID}`)
      //.set("Authorization", `Bearer`)
      .set("Content-Type", "application/json")
      .set("Accept-Encoding", "gzip, deflate, br")
      .set("Connection", "keep-alive")
      .set("User-Agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36");
  
    expect(response.statusCode).toBe(200);
  });
  
});
describe("Testing API: noauth/formSchema/:formID", () => {
  test("TC02 Verify API Response Format JSON", async () => {
    const formID = "loginWithOtp";
    const response = await request(BASE_URL)
      .get(`noauth/formSchema/${formID}`)
      //.set("Authorization", `Bearer ${token}`)
      .set("Content-Type", "application/json")
      .set("Accept-Encoding", "gzip, deflate, br")
      .set("Connection", "keep-alive")
      .set("User-Agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36");

    expect(response.body).toBeInstanceOf(Object);
  });
});
describe("Testing API: noauth/formSchema/:formID", () => {
  test("TC05 Verify API Response Time Within Acceptable Limits", async () => {
    const acceptableResponseTime = 2000;
    const startTime = Date.now();
    const formID = "loginWithOtp";
    await request(BASE_URL)
      .get(`noauth/formSchema/${formID}`)
      //.set("Authorization", `Bearer ${token}`)
      .set("Content-Type", "application/json")
      .set("Accept-Encoding", "gzip, deflate, br")
      .set("Connection", "keep-alive")
      .set("User-Agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36");

    const endTime = Date.now();
    const responseTime = endTime - startTime;
    expect(responseTime).toBeLessThanOrEqual(acceptableResponseTime);  //responsetime = 152ms as of now 
  });
});
describe("Testing API: noauth/formSchema/:formID", () => {
  test("TC08 Verify API Response Headers", async () => {
    const formID = "loginWithOtp";
    const response = await request(BASE_URL)
      .get(`noauth/formSchema/${formID}`)
      //.set("Authorization", `Bearer `)
      .set("Content-Type", "application/json")
      .set("Accept-Encoding", "gzip, deflate, br")
      .set("Connection", "keep-alive")
      .set("User-Agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36");

    expect(response.headers["content-type"]).toBe("application/json; charset=utf-8");
    expect(response.headers["access-control-allow-origin"]).toBe("*");
    expect(response.headers["connection"]).toBe("keep-alive");
  });
});
describe("Testing API: noauth/formSchema/:formID", () => {
  test("TC10 Verify API Response Payload Size", async () => {
    const formID = "loginWithOtp";
    const response = await request(BASE_URL)
      .get(`noauth/formSchema/${formID}`)
      //.set("Authorization", `Bearer`)
      .set("Content-Type", "application/json")
      .set("Accept-Encoding", "gzip, deflate, br")
      .set("Connection", "keep-alive")
      .set("User-Agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36");

    const payloadSize = Buffer.from(JSON.stringify(response.body)).length;
    const maxSize = 2000; // Set the maximum allowed payload size in bytes
    expect(payloadSize).toBeLessThanOrEqual(maxSize);
  });
});
describe("Testing API: noauth/formSchema/:formID", () => {
  test("TC15 Verify API Handles Unauthorized Access.....(Not applicable)", async () => {
    
  });
});
describe("Testing API: noauth/formSchema/:formID", () => {
  test("TC38 Verify API Response Content Type", async () => {
    const formID = "loginWithOtp";
    const response = await request(BASE_URL)
      .get(`noauth/formSchema/${formID}`)
      //.set("Authorization", `Bearer ${token}`)
      .set("Content-Type", "application/json")
      .set("Accept-Encoding", "gzip, deflate, br")
      .set("Connection", "keep-alive")
      .set("User-Agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36");
    expect(response.header["content-type"]).toContain("application/json");
  });
});
describe("Testing API: noauth/formSchema/:formID", () => {
  test("TC39 Verify API Response Compression (Accept-Encoding)", async () => {   
  });
}); 
describe("Testing API: noauth/formSchema/:formID", () => {
  test("TC41 Verify API Response Not Compressed (Other Encoding)", async () => {   
  });
});
describe("Testing API: noauth/formSchema/:formID", () => {
  test("TC42 Verify API Response Language (Accept-Language)", async () => {   
  });
});
describe("Testing API: noauth/formSchema/:formID", () => {
  test("TC43 Verify API Response Locale", async () => {
  });
});
describe("Testing API: noauth/formSchema/:formID", () => {
  test("TC44 Verify API Response Timezone (Accept-Timezone)", async () => {   
  });
});