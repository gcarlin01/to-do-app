import test from "../lib/BaseTest";

test("user can add and complete a task", async ({ inboxPage }) => {
  await inboxPage.navigate();
  await inboxPage.addTask("clean room");
  await inboxPage.completeTask("clean room");
});
