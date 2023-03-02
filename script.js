import { ChatGPTUnofficialProxyAPI } from 'chatgpt'

const api = new ChatGPTUnofficialProxyAPI({
  accessToken: process.env.OPENAI_ACCESS_TOKEN
})

const input = document.getElementById('input')
const output = document.getElementById('output')
const button = document.getElementById('submit')

button.addEventListener('click', async () => {
  const question = input.value
  input.value = ''
  const res = await api.sendMessage(question)
  output.innerHTML += `<p><strong>You:</strong> ${question}</p>`
  output.innerHTML += `<p><strong>ChatGPT:</strong> ${res.text}</p>`
})
