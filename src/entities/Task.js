import { url } from "../tasks.js"
const tasksArea = document.querySelector('.tasks')

export default class Task {
  constructor(name, id) {
    const div = document.createElement('div')
    this.div = div
    div.classList = 'task'

    const removeBtn = document.createElement('input')
    removeBtn.id = id
    removeBtn.type = 'button'
    removeBtn.classList = 'removeBtn'
    removeBtn.addEventListener('click', async (ev) => {
      ev.preventDefault()
      const res = await fetch(url + id, {
        method: 'DELETE'
      })
      const data = await res.json()
      console.log(data);
      tasksArea.removeChild(div)
    })

    const label = document.createElement('label')
    label.htmlFor = id
    label.textContent = name

    div.append(removeBtn, label)
  }

  render() {
    tasksArea.append(this.div)
  }
}