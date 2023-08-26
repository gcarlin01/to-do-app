exports.ToDo = class ToDo {
  constructor(page) {
    this.page = page;
    this.enterTaskInput = 'input[placeholder="enter a task"]';
    this.addButton = '//button[text()="Add"]';
    this.doneButton = '//button[text()="done"]';
    this.inProgressList = '//body[@class="__className_20951f"]//ul[1]';
  }

  async goToApp() {
    await this.page.goto("http://localhost:3000");
  }

  async addTask(newTask) {
    await this.page.locator(this.enterTaskInput).fill(newTask);
    await this.page.locator(this.addButton).click();
  }

  async completeTask(taskToBeCompleted) {
    const tasksInProgress = await this.page.$$(this.inProgressList);
    for (const task of tasksInProgress) {
      if (taskToBeCompleted === (await task.textContent())) {
        await this.page.locator(this.doneButton).click();
        break;
      }
    }
  }
};
