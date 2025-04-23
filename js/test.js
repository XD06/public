const options = {
  method: 'POST',
  headers: {
    Authorization: 'Bearer sk-vlyhjprkmppnkatcgirrjckzisxjdrhjtnujzsvibjyncfjw',
    'Content-Type': 'application/json'
  },
  body: '{"model":"Qwen/Qwen2.5-Coder-32B-Instruct","stream":false,"max_tokens":512,"temperature":0.7,"top_p":0.7,"top_k":50,"frequency_penalty":0.5,"n":1,"stop":[],"messages":[{"role":"user","content":"hello"}]}'
};

fetch('https://api.siliconflow.cn/v1/chat/completions', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));