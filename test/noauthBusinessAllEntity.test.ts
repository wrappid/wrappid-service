import { describe, test, expect } from "@jest/globals";
import request from "supertest";

const BASE_URL = "https://demoapi.wrappid.dev/";
describe("Testing API: noauth/business/all/:entity", () => {
  test("TC01 Verify API Response Status Code", async () => {
    const entity = "Routes";
    const response = await request(BASE_URL)
      .get(`noauth/business/all/${entity}`)
      //.set("Authorization", `Bearer`)
      .set("Content-Type", "application/json")
      .set("Accept-Encoding", "gzip, deflate, br")
      .set("Connection", "keep-alive")
      .set("User-Agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36");
  
    expect(response.statusCode).toBe(200);
  });
});