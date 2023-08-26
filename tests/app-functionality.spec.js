// @ts-check
import { test, expect } from "@playwright/test";
import { ToDo } from "../helper-page";

test("test", async ({ page }) => {
  const main = new ToDo(page);
  await main.goToApp();
  await main.addTask("clean room");
  await main.completeTask("clean room");
});
