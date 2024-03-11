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
describe("formSchema/:formID",() => {
  test("TC01 Verify API Response Status Code", async () => {
    const formID = "Users";
    const response = await request(BASE_URL)
      .get(`formSchema/${formID}`)
      .set("Authorization", `Bearer ${token}`)
      .set("Content-Type", "application/json")
      .set("Accept-Encoding", "gzip, deflate, br")
      .set("Connection", "keep-alive")
      .set("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36");

    expect(response.statusCode).toBe(200);
  });
});

