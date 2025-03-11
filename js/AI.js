// ai-chat.js
let aiWinbox = null;
let chatHistory = [];
let isContextEnabled = true;
const API_KEY = 'Bearer sk-zgvablorrcxisbjvwdrxovvjiitbuccfxcwsswlnauszxiwk';
const API_URL = 'https://api.siliconflow.cn/v1/chat/completions';

// 切换窗口状态
function AItoggleWinbox() {
  if (document.querySelector('#aiChatBox')) {
    aiWinbox.toggleClass('hide');
  } else {
    createAIChatWindow();
  }
}

// 创建AI聊天窗口（修复版）
function createAIChatWindow() {
  const container = document.createElement('div');
  container.id = 'aiChatBox';
  document.body.appendChild(container);

  aiWinbox = WinBox({
    id: 'aiChatBox',
    title: 'deepseek-ai/DeepSeek-R1-Distill-Qwen-7B',
    x: "center",
    y: "center",
    minwidth: '380px',
    height: '60%',
    background: 'var(--card-bg)',
    onclose: () => {
      container.remove();
      aiWinbox = null;
    },
    onmaximize: () => {
      container.innerHTML = `<style>
        #aiChatBox {
          width: 100% !important;
          height: 100% !important;
        }
      </style>`;
    },
    onrestore: () => {
      container.innerHTML = '';
    }
  });

  // 窗口内容结构（修正布局）
  aiWinbox.body.innerHTML = `
    <div id="ai-chat-container">
      <div id="ai-chat-history" style="height: calc(100% - 70px); overflow-y: auto; padding: 15px;"></div>
      <div class="ai-input-group" style="position: absolute; bottom: 0; width: 100%; padding: 15px; background: var(--card-bg); border-top: 1px solid var(--btn-border-color);">
        <div style="display: flex; gap: 8px;">
          <input type="text" id="ai-user-input" placeholder="输入问题..." autocomplete="off" style="flex:1; padding:8px;">
          <button onclick="sendMessage()" style="padding:8px 15px;">发送</button>
          <button id="ai-context-toggle" onclick="toggleContext()" style="padding:8px 15px;">上下文</button>
        </div>
      </div>
    </div>
  `;

  // 初始化功能
  initChatEvents();
}

// 初始化聊天事件（修复绑定问题）
function initChatEvents() {
  const inputElement = document.getElementById('ai-user-input');
  if (inputElement) {
    inputElement.addEventListener('keypress', e => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
      }
    });
  }

  // 上下文按钮样式
  const contextBtn = document.getElementById('ai-context-toggle');
  if (contextBtn) {
      contextBtn.textContent = isContextEnabled ? '关闭上下文' : '启用上下文';
      contextBtn.style.backgroundColor = isContextEnabled ? '#28a745' : '#6c757d';
  }
}


// 发送消息功能（修复元素ID）
async function sendMessage() {
  const userInput = document.getElementById('ai-user-input'); // 修正ID
  const message = userInput.value.trim();
  if (!message) return;

  // 添加用户消息
  const userMessage = { role: "user", content: "不要输出markdown格式,注意关键段落和标题处使用换行符(这句话与问题本身无关只是格式要求，不用思考)"+message};
  chatHistory.push(userMessage);
  addMessage('user', message);
  userInput.value = '';

  try {
    const reasoningId = addReasoningContainer();
    const answerId = addMessage('ai', '');
    
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Authorization': API_KEY,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: "deepseek-ai/DeepSeek-R1-Distill-Qwen-7B",
        stream: true,
        max_tokens: 4096,
        temperature: 0.7,
        messages: isContextEnabled ? [...chatHistory] : [userMessage]
      })
    });

    if (!response.ok) throw new Error(`HTTP错误! 状态码: ${response.status}`);

    // 流式处理
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';
    let answerContent = '';
    let reasoningContent = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const parts = buffer.split('\n\n');
      buffer = parts.pop() || '';

      for (const part of parts) {
        const lines = part.split('\n').filter(line => line.startsWith('data: '));
        
        for (const line of lines) {
          try {
            const data = JSON.parse(line.slice(6));
            const delta = data.choices[0].delta;

            if (delta.reasoning_content !== undefined) {
              reasoningContent += delta.reasoning_content || '';
              updateReasoning(reasoningId, reasoningContent);
            }
            
            if (delta.content) {
              answerContent += delta.content;
              updateAnswer(answerId, answerContent);
            }
          } catch (e) {
            console.error('解析错误:', e);
          }
        }
      }
    }

    finalizeProcessing(reasoningId, answerId, answerContent);
  } catch (error) {
    console.error('错误:', error);
    updateMessage(answerId, `请求失败: ${error.message}`);
    document.getElementById(reasoningId)?.remove();
  }
}

// 消息显示功能（修正容器ID）
function addMessage(role, content) {
  const historyDiv = document.getElementById('ai-chat-history'); // 修正ID
  const messageDiv = document.createElement('div');
  const messageId = `msg-${Date.now()}`;

  messageDiv.id = messageId;
  messageDiv.className = `message ${role}-message`;
  messageDiv.innerHTML = `
    <small style="display:block; margin-bottom:5px; opacity:0.6;">对话${chatHistory.length}</small>
    ${content}
  `;
  
  historyDiv.appendChild(messageDiv);
  historyDiv.scrollTop = historyDiv.scrollHeight;
  return messageId;
}

// 上下文切换功能（修正按钮ID）
function toggleContext() {
  const contextBtn = document.getElementById('ai-context-toggle'); // 修正ID
  isContextEnabled = !isContextEnabled;
  
  if (isContextEnabled) {
    contextBtn.textContent = '关闭上下文';
    contextBtn.style.backgroundColor = '#28a745';
  } else {
    contextBtn.textContent = '启用上下文';
    contextBtn.style.backgroundColor = '#6c757d';
    chatHistory = [];
  }
}

// 其他辅助函数保持原有逻辑...

        function updateMessage(id, newContent) {
            const messageDiv = document.getElementById(id);
            if (messageDiv) {
                messageDiv.textContent = newContent;
                messageDiv.classList.remove('loading');
                messageDiv.scrollIntoView({ behavior: 'smooth' });
            }
        }
        // 添加缺失的函数到ai-chat.js
function addReasoningContainer() {
    const historyDiv = document.getElementById('ai-chat-history');
    const container = document.createElement('div');
    const id = `reasoning-${Date.now()}`;
    
    container.id = id;
    container.className = 'reasoning-container';
    container.innerHTML = `
        <div class="reasoning-header">思考过程</div>
        <div class="reasoning-content loading"></div>
    `;
    
    historyDiv.appendChild(container);
    return id;
}

function updateReasoning(id, content) {
    const container = document.getElementById(id);
    if (container) {
        const contentDiv = container.querySelector('.reasoning-content');
        contentDiv.innerHTML = content + '<span class="loading-dots"></span>';
        container.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

function updateAnswer(id, content) {
    const container = document.getElementById(id);
    if (container) {
        container.innerHTML = `<div class="streaming-answer">${content}</div>`;
        container.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    const historyDiv = document.getElementById('ai-chat-history');
    const shouldScroll = 
        historyDiv.scrollTop + historyDiv.clientHeight >= historyDiv.scrollHeight - 50;
    if (shouldScroll) {
        historyDiv.scrollTo({
            top: historyDiv.scrollHeight,
            behavior: 'smooth'
        });
    }
}

function finalizeProcessing(reasoningId, answerId, answerContent) {
    const reasoningContainer = document.getElementById(reasoningId);
    if (reasoningContainer) {
        const contentDiv = reasoningContainer.querySelector('.reasoning-content');
        contentDiv?.classList.remove('loading');
    }

    const answerContainer = document.getElementById(answerId);
    if (answerContainer) {
        answerContainer.innerHTML = answerContent;
    }
    
    // 将AI回复加入历史记录
    chatHistory.push({ role: "assistant", content: answerContent });
    if (answerContainer) {
        answerContainer.scrollIntoView({
            behavior: 'smooth',
            block: 'end'
        });
    }
}
function clearContext() {
    chatHistory = [];
    isContextEnabled = false;
    
    // 清空聊天显示
    const historyContainer = document.getElementById('chat-history');
    historyContainer.innerHTML = '';
    
    // 更新按钮状态
    const contextBtn = document.getElementById('context-toggle');
    contextBtn.textContent = '启用上下文';
    contextBtn.style.backgroundColor = '#6c757d';
}

        // 回车发送功能
        document.getElementById('ai-user-input').addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
            }
        });
