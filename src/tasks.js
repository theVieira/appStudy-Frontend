export const url = 'http://localhost:3333/';
import Task from "./entities/Task.js";
import addTask from "./utils/addTask.js";

export default addEventListener('DOMContentLoaded', async () => {
  const res = await fetch(url)
  const data = await res.json()
  data.tasks.forEach(el => {
    const task = new Task(el.name, el.id)
    task.render()
  });
})