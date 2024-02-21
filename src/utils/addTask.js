import Task from "../entities/Task.js";
import { url } from "../tasks.js"

const addTaskButton = document.querySelector('#addTaskButton')
const addTaskModal = document.querySelector('.addTaskModal')
const saveTask = document.querySelector('#saveTask')
import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm';

document.querySelector('form')
  .addEventListener('submit', (ev) => ev.preventDefault())

export default addTaskButton.addEventListener('click', openModal)

document.querySelector('#closeModal').addEventListener('click', closeModal)

saveTask.addEventListener('click', addTask)

function openModal() {
  addTaskModal.setAttribute('class', 'addTaskModal')
}

function closeModal() {
  addTaskModal.setAttribute('class', 'addTaskModal hidden')
}

async function addTask() {
  const name = document.querySelector('#nameTask')
  
  axios.post(url, {
      name: name.value
  })
    .then(res => {
      const task = new Task(res.data.created.name, res.data.created.id)
      task.render()
      console.log(res);
    })
  
    name.value = ''
}