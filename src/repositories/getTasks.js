import { url } from "../tasks.js";

export default async function getTasks() {
    const res = await fetch(url)
    const data = await res.json()
    console.log(data);
}