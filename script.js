const api = new ChatGPT.ChatGPTUnofficialProxyAPI({
  accessToken: "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"
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

