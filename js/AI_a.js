// 自定义的替代函数
function GM_getValue(key, defaultValue) {
    const value = localStorage.getItem(key);
    return value !== null ? JSON.parse(value) : defaultValue;
}

function GM_setValue(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function GM_addStyle(css) {
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);
}

function GM_getResourceText(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => response.text())
            .then(text => resolve(text))
            .catch(error => reject(error));
    });
}

function GM_getResourceURL(url) {
    return url;
}

// 模拟流式响应的 fetch 请求
function GM_xmlhttpRequest(options) {
    return new Promise((resolve, reject) => {
        const controller = new AbortController();
        const signal = controller.signal;

        let timeoutId = setTimeout(() => {
            controller.abort();
            reject(new Error('请求超时'));
        }, 30000);

        fetch(options.url, {
                method: options.method,
                headers: options.headers,
                body: options.data,
                signal
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`请求失败: ${response.statusText}`);
                }
                clearTimeout(timeoutId);
                if (options.onloadstart) {
                    options.onloadstart({ response });
                }
                resolve(response);
            })
            .catch(error => {
                clearTimeout(timeoutId);
                if (options.onerror) {
                    options.onerror(error);
                }
                reject(error);
            });
    });
}

(function() {
    'use strict';

    // 添加CSS样式
    const css = `
        /* 定义淡入淡出的动画 */
        @keyframes fadeInOut {
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }

        /* 整体背景调整 */
        body {
            --background-color: white;
            --text-color: #000;
            --error-color: #ff0000;
        }

        /*动画*/
        .ds-chat-icon img {
            width: 50px !important;
            height: 50px !important;
            border-radius: 50%;
            transition: all 0.3s ease;
            animation: breath 2s infinite alternate;
        }

        @keyframes breath {
            0% { opacity: 0.9; }
            100% { opacity: 1; }
        }

        @keyframes pulse {
            0% { transform: scale(1); }
            100% { transform: scale(1.15); }
        }

        /* 对话框出现时的动画 */
        .ds-chat-window {
            position: fixed;
            width: 340px;
            /*height: 50vh*/
            max-width: 70vw;
            max-height: 70vh;
            background-color: #F6F6F6; /* 修改背景颜色 */
            border: 1px solid #ddd;
            border-radius: 15px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
            //display: none;
            flex-direction: column;
            overflow: hidden;
            opacity: 0;
           /*transform: translateY(20px);*/
            z-index: 2147483646;
            backdrop-filter: blur(5px);
            animation: fadeIn 0.5s ease-in-out forwards;
            transition: opacity 0.5s ease-in-out, width 0.5s ease-in-out, height 0.5s ease-in-out;
        }
        @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
        }

        /* 对话框激活时的样式 */
        .ds-chat-window.active {
            //display: flex !important;
            opacity: 1 !important;
        }

        /* 全屏时的动画 */
        .ds-chat-window.fullscreen {
            width: 100vw !important; /* 使用 vw/vh 更准确 */
            height: 100vh !important;
            max-width: 100vw !important;
            max-height: 100vh !important;
            top: 0 !important;  /* 强制定位到左上角 */
            left: 0 !important; /* 强制定位到左上角 */
            right: auto !important; /* 覆盖可能存在的 right */
            bottom: auto !important;/* 覆盖可能存在的 bottom */
            border-radius: 0 !important;
            animation: fadeIn 0.3s ease-in-out forwards; /* 可以保留或移除动画 */
        }
        /* 其他样式保持不变 */
        .ds-chat-icon {
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 50px;
            height: 50px;
            background-color: var(--primary-color);
            border-radius: 50%;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            font-size: 24px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
            transition: transform 0.3s, box-shadow 0.3s;
            z-index: 2147483647;
            backdrop-filter: blur(5px);
            border: 1px solid rgba(255, 255, 255, 0.4);
        }
        .ds-chat-icon {
            transform: scale(1.05);
            box-shadow: 0 6px 8px rgba(0, 0, 0, 0.3);
            background-color: rgb(0, 0, 0);
        }
        .ds-chat-header {
            padding: 10px 15px;
            background-color: #9a9e994f;
            color: black;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-radius: 15px 15px 0 0;
        }
        .ds-chat-title {
            font-weight: bold;
            color: black; /* 修改字体颜色 */
        }
        .ds-chat-close {
            cursor: pointer;
            font-size: 18px;
            color: #ff6666;
        }
        .ds-chat-fullscreen {
            cursor: pointer;
            font-size: 18px;
            margin-right: 10px;
        }
        .ds-chat-content {
            flex: 1;
            padding: 0px;
            overflow-y: auto;
            background-color: var(--secondary-color); /* 修改背景颜色 */
            border-bottom: 1px solid #ddd;
        }
        .ds-chat-message {
            margin-bottom: 10px;
            background-color: #FFFFFF;
            padding: 5px 8px;
            border-radius: 10px;
            line-height: 1.2;
            word-wrap: break-word;
            font-size: 14px; /* 减小用户消息字体大小 */
            color: rgb(0,0,0); /* 修改字体颜色 */
            margin-left: 5px;
            margin-right: 5px;
            text-align: left;
        }
        .ds-user-message {
            background-color: #FFFFFF;
            color: rgb(0,0,0);
            margin-left: auto;
            text-align: right;
            padding: 1px 10px;
            border-radius: 15px;
            height: auto;
            width: fit-content;
            display: block;
        }

        .ds-ai-message {
            background-color: #FFFFFF;
            line-height: 1.2; /* 调整行高 */
            color: rgb(0,0,0); /* 修改字体颜色 */
            padding: 5px 1px;
            text-align: left;
        }
        .ds-chat-input-area {
            padding: 10px;
            display: flex;
            flex-direction: column;
            backdrop-filter: blur(10px);
            background-color: var(--secondary-color); /* 修改背景颜色 */
            border-top: 1px solid rgba(221, 221, 221, 0.5);
        }
        .ds-chat-input {
            width: 100%;
            padding: 8px 10px;
            border: 1px solid #ddd;
            border-radius: 8px;
            margin-bottom: 8px;
            outline: none;
            transition: border-color 0.3s;
            font-size: 15px;
            color: var(--text-color); /* 修改字体颜色 */
            background-color: rgba(255, 255, 255, 0.8);
            box-sizing: border-box;
        }
        /* 鼠标悬停(Hover)效果 */
        .ds-chat-input:hover {
            border-color: #90c8f3; /* 淡蓝色边框 */
            box-shadow: 0 0 8px rgba(144, 200, 243, 0.4); /* 淡蓝色发光效果 */
        }

        /* 聚焦(Focus)效果 */
        .ds-chat-input:focus {
            border-color: #5ab1f3; /* 更亮的蓝色边框 */
            box-shadow: 0 0 10px rgba(90, 177, 243, 0.6); /* 更强的发光效果 */
            background-color: rgba(255, 255, 255, 0.9); /* 背景稍微变亮 */
        }
        .ds-chat-input:focus {
            border-color: #007bff;
        }
        .ds-chat-settings {
            display: flex;
            justify-content: space-between;
            font-size: 12px;
            color: var(--text-color); /* 修改字体颜色 */
        }
        .ds-chat-settings-btn {
            cursor: pointer;
            text-decoration: underline;
        }
        .ds-thinking {
            color: #e87be4;
            font-style: italic;
        }
        .ds-error {
            color: var(--error-color);
        }
        .ds-context-toggle {
            margin-bottom: 8px;
            display: flex;
            align-items: center;
            font-size: 12px;
        }
        .ds-context-toggle input {
            margin-right: 5px;
        }
        .ds-context-summary {
            font-size: 11px;
            color: #666;
            margin-top: 5px;
            font-style: italic;
        }
        .ds-message-content {
            line-height: 1.5 !important;
            color: var(--text-color) !important;
            display: block !important;
            visibility: visible !important;
            opacity: 1 !important;
            min-height: 1em;
            background: none !important;
            background-color: transparent !important;
            background-image: none !important;
            text-shadow: none !important;
        }
        @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
        }

        .ds-message-content::after {
            content: '|';
            position: relative;
            display: inline;
            color: transparent !important;
            /*color: #2372c3; */
            animation: blink 1s infinite;
            margin-left: 2px;
        }

        .ds-message-content:not(:empty)::after {
            //display: none;
        }

        /* 增强代码块高亮效果 */
        .hljs {
            background-color: #2d2d2d !important ;
            border-radius: 4px !important;
            margin: 10px 0 !important;
            position: relative !important;
            overflow: auto !important;
            color: #cccccc !important;
            border: none !important; /* 添加这行移除边框 */
            box-shadow: 0 2px 4px rgba(0,0,0,0.1) !important; /* 可选：用阴影替代边框 */
        }

        /* 代码块复制按钮样式 */
        .copy-code-btn {
            position: absolute !important;
            top: 8px !important;
            right: 8px !important;
            background-color: #555 !important;
            color: white !important;
            border: none !important;
            border-radius: 4px !important;
            padding: 4px 10px !important;
            font-size: 12px !important;
            cursor: pointer !important;
            opacity: 0.8 !important;
            transition: opacity 0.3s !important;
        }

        /* 复制成功提示样式 */
        .copy-success {
            position: absolute !important;
            top: 8px !important;
            right: 60px !important;
            background-color: #28a745 !important;
            color: white !important;
            border-radius: 4px !important;
            padding: 4px 10px !important;
            font-size: 12px !important;
            animation: fadeOut 2s forwards !important;
        }

        @keyframes fadeOut {
            0% { opacity: 1 !important; }
            100% { opacity: 0 !important; visibility: hidden !important; }
        }
        .ds-thinking {
            color: #e87be4;
            font-style: oblique;
            font-size: 13px; /* 字体大小比父元素小 10% */
        }

        .ds-reasoning-title {
            color: #666;
            font-size: 13px; /* 字体大小比父元素小 10% */
            font-style: oblique;
            margin-bottom: 4px;
        }

        .ds-reasoning-content {
            background-color: #f0f0f0;
            color: #666;
            padding: 8px;
            font-style: oblique;
            margin-top: 8px;
            border-radius: 4px;
            font-size: 12px;
        }
        .ds-chat-hmessage {
            margin-bottom: 10px;
            background-color: #FFFFFF;
            padding: 5px 5px;
            border-radius: 10px;
            line-height: 1.2;
            word-wrap: break-word;
            font-size: 14px; /* 减小用户消息字体大小 */
            color: rgb(0,0,0); /* 修改字体颜色 */
            margin-left: 5px;
            margin-right: 5px;
            text-align: left;
        }
        .ds-user-hmessage {
            background-color: #FFFFFF;
            color: rgb(0,0,0);
            margin-left: auto;
            text-align: right;
            padding: 1px 10px;
            border-radius: 15px;
            height: auto;
            width: fit-content;
            display: block;
        }

        .ds-ai-hmessage {
            background-color: #FFFFFF;
            line-height: 1.2; /* 调整行高 */
            color: rgb(0,0,0); /* 修改字体颜色 */
            padding: 5px 5px;
            text-align: left;
        }
    `;

    // 异步加载代码高亮样式
    GM_getResourceText('https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.7.0/build/styles/default.min.css')
        .then(hljsStyle => {
            GM_addStyle(css + hljsStyle);
        })
        .catch(error => {
            console.error('加载代码高亮样式失败:', error);
            GM_addStyle(css);
        });

    // 初始化配置
    let config = {
        apiKey: GM_getValue('apiKey', ''),
        apiUrl: GM_getValue('apiUrl', 'https://api.deepseek.com/v1/chat/completions'),
        model: GM_getValue('model', 'deepseek'),
        temperature: GM_getValue('temperature', 0.7),
        maxTokens: GM_getValue('maxTokens', 4096),
        maxContextTokens: GM_getValue('maxContextTokens', 32000),
        chatHistory: GM_getValue('chatHistory', []),
        usePageContext: GM_getValue('usePageContext', true),
        personalityPrompt: GM_getValue('personalityPrompt', '你是一个高效务实的全能 AI 助手，以快速解决用户的问题为首要目标。你具备敏锐的洞察力，能迅速抓住问题的关键，提供切实可行的解决方案。你的回答简洁直接、重点突出，帮助用户节省时间和精力。在处理任务时，你会优先考虑实用性和可操作性，确保提供的建议能够落地实施。除了给出核心答案，你还会为用户进行知识拓展。若用户询问某个技术方法，你会拓展介绍该方法的衍生技术、适用场景的拓展以及未来的发展趋势；若用户咨询某个管理理念，你会讲解该理念的演变过程、在不同行业的应用案例以及可能面临的挑战。你会不断优化工作流程，提高服务效率和质量。')
    };

    // 动态加载依赖库
    function loadScript(url) {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = url;
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        });
    }

    Promise.all([
            loadScript('https://cdn.jsdelivr.net/npm/marked/marked.min.js'),
            loadScript('https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.7.0/build/highlight.min.js')
        ])
        .then(() => {
            // 配置 marked 库
            marked.setOptions({
                highlight: function(code, lang) {
                    const language = hljs.getLanguage(lang) ? lang : 'plaintext';
                    return hljs.highlight(code, { language }).value;
                },
                langPrefix: 'hljs language-',
                pedantic: false,
                gfm: true,
                breaks: false,
                sanitize: false,
                smartLists: true,
                smartypants: false
            });

            // 检查是否已经存在图标
            if (!document.querySelector('.ds-chat-icon')) {
                // 创建UI元素 - 只在body元素下添加
                const icon = document.createElement('div');
                icon.className = 'ds-chat-icon';
                icon.innerHTML = `<img src="${GM_getResourceURL('https://tc.qdqqd.com/2xv3Ht.apng')}" style="width: 30px; height: 30px; border-radius: 50%;">`;

                // 确保只添加到body元素，而不是其他元素
                document.body.appendChild(icon);

                // 确保图标位置固定在右下角5px处
		const savedRight = GM_getValue('iconRight', 5);
		const savedBottom = GM_getValue('iconBottom', 5);
		icon.style.right = `${savedRight}px`;
		icon.style.bottom = `${savedBottom}px`;
                icon.style.position = 'fixed';
                icon.style.zIndex = '2147483647';
                icon.style.display = 'flex';
                icon.style.cursor = 'move'; // 鼠标悬停时显示拖动光标

                const chatWindow = document.createElement('div');
                chatWindow.className = 'ds-chat-window';
                document.body.appendChild(chatWindow);

                // 拖动相关变量
                let isDragging = false;
                let startX, startY, initialRight, initialBottom;
                let hasMoved = false; // 记录是否发生了移动

                // 鼠标按下事件
                icon.addEventListener('mousedown', (e) => {
                    isDragging = true;
                    hasMoved = false; // <<<--- 每次按下鼠标时，重置移动标志
                    startX = e.clientX;
                    startY = e.clientY;
                    const styles = window.getComputedStyle(icon);
                    initialRight = parseFloat(styles.right) || 0;
                    initialBottom = parseFloat(styles.bottom) || 0;
                    e.preventDefault(); // 阻止默认的拖动行为（如图片拖拽）和文本选择
                });

                // 鼠标移动事件
                document.addEventListener('mousemove', (e) => {
                    

                    if (isDragging) {
                        const deltaX = e.clientX - startX;
                        const deltaY = e.clientY - startY;

                        // 设置一个小的阈值（例如3像素），只有超过这个距离才算移动
                        if (Math.abs(deltaX) > 3 || Math.abs(deltaY) > 3) {
                            hasMoved = true; // <<<--- 一旦移动超过阈值，就标记为已移动
                        }

                        // 如果确实移动了，才更新图标位置
                        if (hasMoved) {
                            const newRight = initialRight - deltaX;
                            const newBottom = initialBottom - deltaY;
                            const maxRight = window.innerWidth - icon.offsetWidth;
                            const maxBottom = window.innerHeight - icon.offsetHeight;
                            const clampedRight = Math.max(0, Math.min(newRight, maxRight));
                            const clampedBottom = Math.max(0, Math.min(newBottom, maxBottom));
                            icon.style.right = `${clampedRight}px`;
                            icon.style.bottom = `${clampedBottom}px`;
                        }
                    }
                });

                // 鼠标松开事件
                document.addEventListener('mouseup', () => {
                    
                    if (isDragging) {
                        isDragging = false;
			const styles = window.getComputedStyle(icon);
			GM_setValue('iconRight', parseFloat(styles.right));
			GM_setValue('iconBottom', parseFloat(styles.bottom));
                        // 注意：hasMoved 的状态在这里保持不变，它记录了 mousedown 和 mouseup 之间是否发生过移动
                    }
                });

                // 鼠标移出窗口事件 (修复：仅在拖动时处理)
                document.addEventListener('mouseleave', () => {
                    if (isDragging) { // 只有在拖动状态下移出窗口才需要停止拖动
                        isDragging = false;
                        // hasMoved 状态同样保持
                    }
                });
                // 点击事件处理 (最关键的部分)
                icon.addEventListener('click', (e) => {
                    console.log("图标点击事件被触发了！");
                    console.log("当前 hasMoved 状态:", hasMoved);


                    if (!hasMoved) {
                        const isActive = chatWindow.classList.contains('active');
                        if (!isActive) {
                            // --- 修改这里的逻辑 ---
                            // 1. 先添加 active 类，并隐藏图标
                            
                            // 2. 使用 requestAnimationFrame 将定位操作推迟到下一帧
                    
			   chatWindow.classList.add('active');
			   chatWindow.style.display = 'flex';
                           icon.style.display = 'none';
                            console.log("窗口已激活，准备请求下一帧定位");
                                requestAnimationFrame(() => {
                                    try { // 最好加上 try...catch 以防 positionChatWindow 内部出错
                                       
                                        console.log("在下一帧尝试定位完成");
                                    } catch (positionError) {
                                        console.error("定位窗口时出错:", positionError);
                                        // 可以在这里添加一些备用逻辑，比如显示窗口但不定位，或者显示错误信息
                                    }
                                });
                            

                        } else {
                            // 关闭窗口的逻辑保持不变
				chatWindow.classList.remove('active');
                             chatWindow.style.display = 'none';
                            icon.style.display = 'flex';
                            console.log("窗口已关闭");
                        }
                    } else {
                        console.log("检测到拖拽，忽略点击。");
	
                    }

                });

                const chatHeader = document.createElement('div');
                chatHeader.className = 'ds-chat-header';
                chatWindow.appendChild(chatHeader);

                const chatTitle = document.createElement('div');
                chatTitle.className = 'ds-chat-title';
                chatTitle.innerText = '🤖 Ai Assistant';
                chatHeader.appendChild(chatTitle);

                const headerButtons = document.createElement('div');
                headerButtons.style.display = 'flex';
                headerButtons.style.alignItems = 'center';
                chatHeader.appendChild(headerButtons);

                const fullscreenBtn = document.createElement('div');
                fullscreenBtn.className = 'ds-chat-fullscreen';
                fullscreenBtn.innerText = '🗖';
                fullscreenBtn.title = '全屏'; // 添加提示
                headerButtons.appendChild(fullscreenBtn);

                const closeBtn = document.createElement('div');
                closeBtn.className = 'ds-chat-close';
                closeBtn.innerText = '×';
                closeBtn.title = '关闭浮窗'; // 添加提示
                headerButtons.appendChild(closeBtn);

                const chatContent = document.createElement('div');
                chatContent.className = 'ds-chat-content';
                chatWindow.appendChild(chatContent);

                const inputArea = document.createElement('div');
                inputArea.className = 'ds-chat-input-area';
                chatWindow.appendChild(inputArea);

                const contextToggle = document.createElement('div');
                contextToggle.className = 'ds-context-toggle';
                inputArea.appendChild(contextToggle);

                const contextCheckbox = document.createElement('input');
                contextCheckbox.type = 'checkbox';
                contextCheckbox.id = 'ds-context-checkbox';
                contextCheckbox.checked = config.usePageContext;
                contextToggle.appendChild(contextCheckbox);

                const contextLabel = document.createElement('label');
		contextLabel.htmlFor = 'ds-context-checkbox';
		contextLabel.innerText = '🕸️';
		contextLabel.title = '网页上下文';
		contextLabel.style.color = '#000000';       // 黑色（或深色）
		contextLabel.style.fontWeight = 'bold';     // 加粗
		contextLabel.style.fontSize = '1.3em';      // 可选：调大字号
		contextToggle.appendChild(contextLabel);

                const inputBox = document.createElement('textarea');
                inputBox.className = 'ds-chat-input';
                inputBox.placeholder = '输入你的问题...';
                inputBox.rows = 2;
                inputBox.style.padding = '8px 10px';
                inputArea.appendChild(inputBox);

                const settingsArea = document.createElement('div');
                settingsArea.className = 'ds-chat-settings';
                inputArea.appendChild(settingsArea);

                const settingsBtn = document.createElement('span');
                settingsBtn.className = 'ds-chat-settings-btn';
                settingsBtn.innerText = '🖋️';
                settingsBtn.title = 'AI设置'; // 添加提示
                settingsArea.appendChild(settingsBtn);

                const clearBtn = document.createElement('span');
                clearBtn.className = 'ds-chat-settings-btn';
                clearBtn.innerText = '🎨';
                clearBtn.title = '清空聊天历史'; // 添加提示
                settingsArea.appendChild(clearBtn);
		// ... existing code ...


settingsArea.className = 'ds-chat-settings';
inputArea.appendChild(settingsArea);

// 新增总结网页按钮
const summarizeBtn = document.createElement('span');
summarizeBtn.className = 'ds-chat-settings-btn';
summarizeBtn.innerText = '📄';
summarizeBtn.title = '一键总结当前网页';
summarizeBtn.style.marginRight = '10px';
settingsArea.appendChild(summarizeBtn);

// 添加总结网页按钮点击事件

// ... rest of the existing code ...

                // 显示历史消息
                function displayHistory() {
                    chatContent.innerHTML = '';
                    config.chatHistory.forEach(msg => {
                        const msgDiv = document.createElement('div');
                        msgDiv.className = `ds-chat-hmessage ds-${msg.role}-hmessage`;
                        // 根据角色添加对应标识
                        const contentWithLabel = msg.role === 'user' ? `${msg.content}` : `🤖：${msg.content}`;
                        msgDiv.innerHTML = marked.parse(contentWithLabel);
                        addCopyButtonsToCodeBlocks(msgDiv);
                        chatContent.appendChild(msgDiv);
                    });
                    chatContent.scrollTop = chatContent.scrollHeight;
                }
                displayHistory();

                // 事件监听,关闭弹窗


        closeBtn.addEventListener('click', () => {
	chatWindow.classList.remove('active');
            chatWindow.style.display = 'none';
            icon.style.display = 'flex';
        });
                
                fullscreenBtn.addEventListener('click', () => {
                    chatWindow.classList.toggle('fullscreen');
                    if (chatWindow.classList.contains('fullscreen')) {
                        fullscreenBtn.innerText = '🗖';
                    } else {
                        fullscreenBtn.innerText = '🗖';
                    }
                });

                contextCheckbox.addEventListener('change', () => {
                    config.usePageContext = contextCheckbox.checked;
                    GM_setValue('usePageContext', config.usePageContext);
                });

                settingsBtn.addEventListener('click', () => {
                    const newApiUrl = prompt('API地址(默认:https://api.deepseek.com/v1/chat/completions):', config.apiUrl);
                    if (newApiUrl !== null) {
                        config.apiUrl = newApiUrl;
                        GM_setValue('apiUrl', config.apiUrl);
                    }
                    const newApiKey = prompt('API密钥:', config.apiKey);
                    if (newApiKey !== null) {
                        config.apiKey = newApiKey;
                        GM_setValue('apiKey', config.apiKey);
                    }

                    const newModel = prompt('模型默认(deepseek-chat):', config.model);
                    if (newModel !== null) {
                        config.model = newModel;
                        GM_setValue('model', config.model);
                    }

                    const newTemp = parseFloat(prompt('Temperature (0-2建议0.5-0.8)', config.temperature));
                    if (!isNaN(newTemp) && newTemp >= 0 && newTemp <= 2) {
                        config.temperature = newTemp;
                        GM_setValue('temperature', config.temperature);
                    }

                    const newMaxTokens = parseInt(prompt('输出Token限制最大不能超过8192默认4096(输出文本):', config.maxTokens));
                    if (!isNaN(newMaxTokens) && newMaxTokens > 0 && newMaxTokens <= 8192) {
                        config.maxTokens = newMaxTokens;
                        GM_setValue('maxTokens', config.maxTokens);
                    }

                    const newMaxContextTokens = parseInt(prompt('最大上下文限制128k默认32k(越大记忆越好):', config.maxContextTokens));
                    if (!isNaN(newMaxContextTokens) && newMaxContextTokens > 0 && newMaxContextTokens <= 128000) {
                        config.maxContextTokens = newMaxContextTokens;
                        GM_setValue('maxContextTokens', config.maxContextTokens);
                    }

                    const newPersonalityPrompt = prompt('自定义人格提示词:(AI助手)', config.personalityPrompt);
                    if (newPersonalityPrompt !== null) {
                        config.personalityPrompt = newPersonalityPrompt;
                        GM_setValue('personalityPrompt', config.personalityPrompt);
                    }
                });

                clearBtn.addEventListener('click', () => {
                    config.chatHistory = [];
                    GM_setValue('chatHistory', config.chatHistory);
                    chatContent.innerHTML = '';
                });

                 /**
 * 获取网页主要内容
 * @returns {Object} 包含url、title和content的对象
 */
function getPageContent() {
    // 1. 多策略确定主要内容容器
    let mainContent = findMainContent();

    // 2. 克隆节点并清理
    const clone = mainContent.cloneNode(true);
    const elementsToRemove = clone.querySelectorAll(`
        script, style, noscript, iframe,
        nav, footer, header, aside,
        .sidebar, .ad, .ads, .advertisement,
        .social-share, .comments, .related-posts,
        [role="navigation"], [role="banner"],
        [aria-hidden="true"], .hidden, .d-none,
        img, video, audio, svg, canvas,
        .widget, .popup, .modal, .notification,
        .cookie-banner, .consent-banner,
        .breadcrumb, .pagination, .tag-cloud
    `);

    elementsToRemove.forEach(el => el.remove());

    // 3. 处理文本内容
    let text = clone.textContent
        .replace(/[\n\r\t]+/g, ' ')
        .replace(/\s{2,}/g, ' ')
        .replace(/[^\S\r\n]{2,}/g, ' ')
        .trim();

    // 4. 截断
    const MAX_LENGTH = 20000;
    if (text.length > MAX_LENGTH) {
        let truncated = text.substring(0, MAX_LENGTH);
        let lastPeriod = truncated.lastIndexOf('.');
        if (lastPeriod > 0) {
            truncated = truncated.substring(0, lastPeriod + 1);
        } else {
            const otherPunctuations = [ '。', '！', '？' ];
            for (const punctuation of otherPunctuations) {
                const lastIndex = truncated.lastIndexOf(punctuation);
                if (lastIndex > 0) {
                    truncated = truncated.substring(0, lastIndex + 1);
                    break;
                }
            }
        }
        text = truncated;
    }

    // 5. 质量检查
    if (text.length < 100) {
        console.warn('获取的网页内容较短，可能质量不高');
    }

    return {
        url: window.location.href,
        title: document.title,
        content: text,
        charset: document.characterSet,
        wordCount: text.split(/\s+/).length
    };
}

/**
 * 多策略查找网页主要内容区域
 * @returns {HTMLElement} 主要内容区域的 DOM 元素
 */
function findMainContent() {
    // 策略 1: 使用选择器查找
    const mainSelectors = [
        'main',
        'article',
        '.main-content',
        '.article',
        '.post',
        '.content',
        '#content',
        '.entry-content',
        '.page-content',
        '.body-content',
        '.main-body'
    ];

    for (const selector of mainSelectors) {
        const el = document.querySelector(selector);
        if (el && el.textContent.trim().length > 0) {
            return el;
        }
    }

    // 策略 2: 使用文本密度算法
    return findContentByTextDensity();
}

/**
 * 使用文本密度算法查找主要内容区域
 * @returns {HTMLElement} 主要内容区域的 DOM 元素
 */
function findContentByTextDensity() {
    let bestElement = null;
    let maxDensity = 0;

    const allElements = document.body.getElementsByTagName('*');
    for (let i = 0; i < allElements.length; i++) {
        const element = allElements[i];
        const text = element.textContent.trim();
        const textLength = text.length;
        const linkLength = Array.from(element.getElementsByTagName('a')).reduce((sum, link) => sum + link.textContent.length, 0);
        const density = (textLength - linkLength) / element.innerHTML.length;

        if (density > maxDensity && textLength > 200) {
            maxDensity = density;
            bestElement = element;
        }
    }

    return bestElement || document.body;
}

                /**
                 * 根据当前图标位置智能计算并设置聊天窗口的位置 (使用 top/left)
                 * [版本：方案A - 基于style计算iconRect + 详细日志]
                 */
                /**
                 * 根据当前图标位置智能计算并设置聊天窗口的位置 (使用 top/left)
                 * [版本：方案A改进 + 边界优先 + 详细日志]
                 */
                function positionChatWindow() {
                    // --- 1. 检查是否全屏 ---
                    if (chatWindow.classList.contains('fullscreen')) {
                        console.log("positionChatWindow: 处于全屏模式，跳过定位计算。");
                        return;
                    }
                    console.log("positionChatWindow: 开始计算位置 (方案A改进)...");

                    // --- 2. 获取图标样式并推算 iconRect (增加健壮性) ---
                    let iconRect;
                    let errorOccurred = false;
                    try {
                        const iconStyles = window.getComputedStyle(icon);
                        const iconWidth = icon.offsetWidth;
                        const iconHeight = icon.offsetHeight;
                        const viewportWidth = window.innerWidth;
                        const viewportHeight = window.innerHeight;

                        // 优先尝试读取 right/bottom，如果无效或为 auto，则尝试 left/top
                        let validIconRight = parseFloat(iconStyles.right);
                        let validIconBottom = parseFloat(iconStyles.bottom);
                        let validIconLeft = parseFloat(iconStyles.left);
                        let validIconTop = parseFloat(iconStyles.top);

                        // 如果 right/bottom 无效，尝试用 left/top 计算
                        if (isNaN(validIconRight) || isNaN(validIconBottom)) {
                            console.warn("无法从 right/bottom 获取有效位置, 尝试 left/top...");
                            if (!isNaN(validIconLeft) && !isNaN(validIconTop)) {
                                iconRect = {
                                    left: validIconLeft,
                                    top: validIconTop,
                                    right: validIconLeft + iconWidth,
                                    bottom: validIconTop + iconHeight,
                                    width: iconWidth,
                                    height: iconHeight
                                };
                                console.log("使用 left/top 推算 iconRect");
                            } else {
                                // 如果 left/top 也无效，则使用getBoundingClientRect 作为最后手段
                                console.warn("left/top 也无效, 回退到 getBoundingClientRect()...");
                                iconRect = icon.getBoundingClientRect();
                                // 检查 getBoundingClientRect 的结果是否合理 (不为 0,0)
                                if (iconRect.left === 0 && iconRect.top === 0 && iconRect.width > 0) {
                                    console.warn("getBoundingClientRect() 返回了 (0,0) 或附近，可能不准确!");
                                    // 在这里可以强制使用一个默认安全位置，如果 BBox 不可靠
                                    // iconRect = { left: 10, top: viewportHeight - 60, right: 60, bottom: viewportHeight - 10, width: 50, height: 50 };
                                }
                            }
                        } else {
                            // 使用 right/bottom 计算
                            iconRect = {
                                right: viewportWidth - validIconRight,
                                bottom: viewportHeight - validIconBottom,
                                left: viewportWidth - validIconRight - iconWidth,
                                top: viewportHeight - validIconBottom - iconHeight,
                                width: iconWidth,
                                height: iconHeight
                            };
                            console.log("使用 right/bottom 推算 iconRect");
                        }

                        // 添加 toJSON 方法以便安全地打印
                        if (iconRect && typeof iconRect === 'object') {
                            iconRect.toJSON = () => ({
                                left: iconRect.left,
                                top: iconRect.top,
                                right: iconRect.right,
                                bottom: iconRect.bottom,
                                width: iconRect.width,
                                height: iconRect.height
                            });
                        } else {
                            throw new Error("未能成功创建 iconRect 对象"); // 抛出错误以便 catch 捕获
                        }

                    } catch (e) {
                        console.error("获取/计算图标位置或尺寸时出错:", e);
                        errorOccurred = true;
                        // 如果出错，提供一个默认的安全 Rect 对象
                        const defaultTop = window.innerHeight - 60;
                        const defaultLeft = 10;
                        iconRect = { left: defaultLeft, top: defaultTop, right: defaultLeft + 50, bottom: defaultTop + 50, width: 50, height: 50, toJSON: () => ({ left: defaultLeft, top: defaultTop, right: defaultLeft + 50, bottom: defaultTop + 50, width: 50, height: 50 }) };
                        console.warn("使用了默认的 iconRect:", iconRect.toJSON());
                    }

                    // --- 3. 获取其他输入值并打印 ---
                    const winWidth = 340;
                    const viewportWidth = window.innerWidth;
                    const viewportHeight = window.innerHeight;
                    // 使用 70vh 计算最大高度 (用于边界检查)
                    const maxWinHeight = viewportHeight * 0.7;
                    const margin = 10;

                    console.log('positionChatWindow 输入值:', {
                        iconRect: iconRect.toJSON(),
                        winWidth,
                        maxWinHeight, // 使用 maxWinHeight 进行检查
                        margin,
                        viewportWidth,
                        viewportHeight,
                        errorOccurred // 记录是否在获取位置时出错
                    });

                    // --- 4. 计算理想位置并直接进行边界限制 ---
                    let idealLeft, idealTop;

                    // 优先尝试放在右边
                    const spaceRight = viewportWidth - iconRect.right - margin;
                    const spaceLeft = iconRect.left - margin;

                    if (spaceRight >= winWidth || spaceRight >= spaceLeft) { // 如果右边空间够，或者右边空间比左边大
                        idealLeft = iconRect.right + margin;
                        console.log("优先尝试放置在右侧");
                    } else { // 否则放在左边
                        idealLeft = iconRect.left - winWidth - margin;
                        console.log("空间不足，尝试放置在左侧");
                    }

                    // 决定垂直位置：优先尝试与图标顶部对齐，如果底部空间不足再考虑向上移动
                    const spaceBelow = viewportHeight - iconRect.top - margin; // 从图标顶部开始算下方空间
                    const spaceAbove = iconRect.bottom - margin; // 从图标底部开始算上方空间 (这里改用 bottom)

                    if (spaceBelow >= maxWinHeight) { // 如果从图标顶部往下放足够放下最大高度
                        idealTop = iconRect.top; // 尝试与图标顶部对齐
                        console.log("垂直方向：尝试与图标顶部对齐");
                    } else if (spaceAbove >= maxWinHeight) { // 如果从图标底部往上放足够
                        idealTop = iconRect.bottom - maxWinHeight; // 放置窗口底部与图标底部对齐
                        console.log("垂直方向：空间不足，尝试底部对齐图标底部");
                    } else { // 上下空间都不够放最大高度，优先贴近图标顶部放置
                        idealTop = iconRect.top;
                        console.log("垂直方向：上下空间均不足，优先贴近图标顶部");
                    }


                    // --- 5. 对计算出的 idealLeft, idealTop 进行最终边界限制 ---
                    let finalLeft = idealLeft;
                    let finalTop = idealTop;
                    console.log(`计算出的理想位置: L:${Math.round(idealLeft)}, T:${Math.round(idealTop)}`);

                    // 限制左边界
                    if (finalLeft < margin) {
                        console.log(`  调整: 左侧超出 (${Math.round(finalLeft)} < ${margin}), 修正为 ${margin}`);
                        finalLeft = margin;
                    }
                    // 限制右边界
                    if (finalLeft + winWidth > viewportWidth - margin) {
                        console.log(`  调整: 右侧超出 (${Math.round(finalLeft + winWidth)} > ${viewportWidth - margin}), 修正为 ${viewportWidth - winWidth - margin}`);
                        finalLeft = viewportWidth - winWidth - margin;
                        // 如果调整后又导致左边出界（屏幕太窄），再次修正
                        if (finalLeft < margin) { finalLeft = margin; }
                    }

                    // 限制上边界
                    if (finalTop < margin) {
                        console.log(`  调整: 顶部超出 (${Math.round(finalTop)} < ${margin}), 修正为 ${margin}`);
                        finalTop = margin;
                    }
                    // 限制下边界 (使用 maxWinHeight)
                    if (finalTop + maxWinHeight > viewportHeight - margin) {
                        console.log(`  调整: 底部超出 (${Math.round(finalTop + maxWinHeight)} > ${viewportHeight - margin}), 修正为 ${viewportHeight - maxWinHeight - margin}`);
                        finalTop = viewportHeight - maxWinHeight - margin;
                        // 如果调整后又导致顶部出界（屏幕太矮），再次修正
                        if (finalTop < margin) { finalTop = margin; }
                    }

                    // --- 6. 应用最终位置 ---
                    const finalPosition = { left: finalLeft, top: finalTop };
                    console.log('最终将应用的定位:', { left: Math.round(finalPosition.left), top: Math.round(finalPosition.top) });

                    if (typeof finalPosition.left === 'number' && typeof finalPosition.top === 'number') {
                        chatWindow.style.left = `${finalPosition.left}px`;
                        chatWindow.style.top = `${finalPosition.top}px`;
                        chatWindow.style.right = 'auto';
                        chatWindow.style.bottom = 'auto';
                        console.log("样式已应用到 chatWindow");
                    } else {
                        console.error("计算出的 finalPosition 无效!", finalPosition);
                        chatWindow.style.bottom = '10px';
                        chatWindow.style.right = '10px';
                        chatWindow.style.top = 'auto';
                        chatWindow.style.left = 'auto';
                        console.warn("应用了安全回退位置 (10px, 10px)");
                    }
                    console.log("positionChatWindow: 定位计算结束 (方案A改进)。");
                }
                // 确保在 icon 的 click 事件监听器中调用 positionChatWindow()
                // (参考上面问题1的 click 事件代码，调用位置已包含)

                // 然后，在上面修改过的 icon 的 'click' 事件监听器中，
                // 在 chatWindow.classList.toggle('active') 之前调用 positionChatWindow();
                // 如：
                icon.addEventListener('click', (e) => {
                    if (!hasMoved) {
                        // --->>> 在这里调用定位函数 <<<---
                        positionChatWindow();

                        chatWindow.classList.toggle('active');
			
                       
                    }
                });

                // 流式响应处理
                function handleStreamResponse(response, aiMsgDiv, thinkingMsgDiv) {
                    return new Promise((resolve, reject) => {
                        let aiMessage = '🤖：';
                        let reasoningMessage = '';
                        let isReasoningReceived = false;
                        let isReasoningFinished = false;
                        let reasoningTitleDiv; // 用于显示 “思考内容：” 的元素

                        aiMsgDiv.innerHTML = '';
                        const contentDiv = document.createElement('div');
                        contentDiv.className = 'ds-chat-message ds-ai-message';

                        const reasoningDiv = document.createElement('div');
                        reasoningDiv.className = 'ds-reasoning-content';

                        // 调整添加元素的顺序，先添加思考内容 div，再添加正式回答 div
                        aiMsgDiv.appendChild(reasoningDiv);
                        aiMsgDiv.appendChild(contentDiv);

                        const decoder = new TextDecoder();
                        let buffer = '';

                        // 检查 response 是否为包含实际响应的对象
                        if (response && response.response) {
                            response = response.response;
                        }

                        // 检查响应状态
                        if (!response || !response.ok) {
                            const status = response ? response.status : 'undefined';
                            const statusText = response ? response.statusText : 'undefined';
                            console.error('响应状态错误:', status, statusText);
                            reject(new Error(`响应状态错误: ${status} ${statusText}`));
                            return;
                        }

                        const reader = response.body ?.getReader();
                        if (!reader) {
                            console.error('无法获取响应流的读取器');
                            reject(new Error('无法获取响应流的读取器'));
                            return;
                        }

                        function readStream() {
                            reader.read().then(({ done, value }) => {
                                if (done) {
                                    console.log('流读取完成');
                                    if (aiMessage.trim()) {
                                        config.chatHistory.push({ role: 'assistant', content: aiMessage.slice(4) });
                                        GM_setValue('chatHistory', config.chatHistory);
                                    }
                                    addCopyButtonsToCodeBlocks(aiMsgDiv);
                                    // 如果接收到过思考内容，在结束时保留 “思考内容：” 提示
                                    if (isReasoningReceived) {
                                        if (!reasoningTitleDiv) {
                                            reasoningTitleDiv = document.createElement('div');
                                            reasoningTitleDiv.className = 'ds-reasoning-title';
                                            reasoningTitleDiv.innerText = '思考内容：';
                                            aiMsgDiv.insertBefore(reasoningTitleDiv, reasoningDiv);
                                        }
                                        if (thinkingMsgDiv.parentNode) {
                                            thinkingMsgDiv.parentNode.removeChild(thinkingMsgDiv);
                                        }
                                    } else {
                                        // 若未接收到思考内容，移除提示
                                        if (thinkingMsgDiv.parentNode) {
                                            thinkingMsgDiv.parentNode.removeChild(thinkingMsgDiv);
						reasoningTitleDiv = document.createElement('div');
                                            reasoningTitleDiv.className = 'ds-reasoning-title';
                                            reasoningTitleDiv.innerText = '注意:该模型没有思考内容';
                                            aiMsgDiv.insertBefore(reasoningTitleDiv, reasoningDiv);

                                        }
                                    }
                                    resolve();
                                    return;
                                }

                                try {
                                    buffer += decoder.decode(value, { stream: true });
                                } catch (decodeError) {
                                    console.error('解码响应流时出错:', decodeError);
                                    reject(decodeError);
                                    return;
                                }

                                const lines = buffer.split('\n');
                                buffer = lines.pop() || '';

                                for (const line of lines) {
                                    if (!line.trim() || line === 'data: [DONE]') continue;
                                    if (line.startsWith('data: ')) {
                                        try {
                                            const data = JSON.parse(line.slice(6));
                                           // console.log('解析到的数据:', data); // 打印解析到的数据，方便调试
                                            if (data.choices ?.[0] ?.delta ?.content) {
                                                const newContent = data.choices[0].delta.content;
                                                aiMessage += newContent;
                                                contentDiv.innerHTML = marked.parse(aiMessage);
                                                contentDiv.querySelectorAll('pre code').forEach((block) => {
                                                    hljs.highlightElement(block);
                                                });
                                                addCopyButtonsToCodeBlocks(contentDiv);
                                                chatContent.scrollTop = chatContent.scrollHeight;
                                            }
                                            if (data.choices ?.[0] ?.delta ?.reasoning_content) {
                                                const newReasoningContent = data.choices[0].delta.reasoning_content;
                                                reasoningMessage += newReasoningContent;
                                                reasoningDiv.innerHTML = marked.parse(reasoningMessage);
                                                reasoningDiv.querySelectorAll('pre code').forEach((block) => {
                                                    hljs.highlightElement(block);
                                                });
                                                addCopyButtonsToCodeBlocks(reasoningDiv);
                                                chatContent.scrollTop = chatContent.scrollHeight;
                                                isReasoningReceived = true;
                                                isReasoningFinished = false;
                                                thinkingMsgDiv.className = 'ds-reasoning-title';
                                                thinkingMsgDiv.innerText = '思考中......';
                                            } else {
                                                if (isReasoningReceived && !isReasoningFinished) {
                                                    reasoningTitleDiv = document.createElement('div');
                                                    reasoningTitleDiv.className = 'ds-reasoning-title';
                                                    reasoningTitleDiv.innerText = '思考内容：';
                                                    aiMsgDiv.insertBefore(reasoningTitleDiv, reasoningDiv);
                                                    if (thinkingMsgDiv.parentNode) {
                                                        thinkingMsgDiv.parentNode.removeChild(thinkingMsgDiv);
                                                    }
                                                    isReasoningFinished = true;
                                                }
                                            }
                                        } catch (parseError) {
                                            console.warn('解析响应数据失败:', parseError, '行内容:', line);
                                        }
                                    }
                                }

                                readStream();
                            }).catch(error => {
                                console.error('读取流时出错:', error);
                                reject(error);
                            });
                        }

                        readStream();
                    });
                }


                // ... 已有代码 ...
                // 计算消息的 token 数量（简单估算）
                function countTokens(text) {
                    return Math.ceil(text.length / 2);
                }

                // 检查并截断上下文
                function truncateContext(messages, maxContextTokens) {
                    let totalTokens = 0;
                    for (let i = messages.length - 1; i >= 0; i--) {
                        const messageTokens = countTokens(messages[i].content);
                        if (totalTokens + messageTokens > maxContextTokens) {
                            messages.splice(0, i);
                            break;
                        }
                        totalTokens += messageTokens;
                    }
                    return messages;
                }

                // 发送消息函数


// 发送消息函数
async function sendMessage(message, retryCount = 0, hideMessage = false) {
    if (!message.trim()) return;

    if (!config.apiKey) {
        alert('请先设置 API 密钥！');
        settingsBtn.click();
        return;
    }

    if (!navigator.onLine) {
        const errorMsgDiv = document.createElement('div');
        errorMsgDiv.className = 'ds-chat-message ds-error';
        errorMsgDiv.innerText = '错误: 网络连接已断开,请检查网络后重试';
        chatContent.appendChild(errorMsgDiv);
        chatContent.scrollTop = chatContent.scrollHeight;
        return;
    }

    const userMsg = { role: 'user', content: message };
    config.chatHistory.push(userMsg);
    GM_setValue('chatHistory', config.chatHistory);

    if (!hideMessage) {
        const userMsgDiv = document.createElement('div');
        userMsgDiv.className = 'ds-chat-message ds-user-message';
        userMsgDiv.innerHTML = marked.parse(`${message}`);
        addCopyButtonsToCodeBlocks(userMsgDiv);
        chatContent.appendChild(userMsgDiv);
    }

    const thinkingMsgDiv = document.createElement('div');
    thinkingMsgDiv.className = 'ds-reasoning-title';
    thinkingMsgDiv.innerText = '思考中...';
    chatContent.appendChild(thinkingMsgDiv);

    const aiMsgDiv = document.createElement('div');
    aiMsgDiv.className = 'ds-chat-message ds-ai-message';
    chatContent.appendChild(aiMsgDiv);

    chatContent.scrollTop = chatContent.scrollHeight;

    const requestData = {
        model: config.model,
        messages: [
            { role: 'system', content: config.personalityPrompt },
            ...truncateContext(config.chatHistory, config.maxContextTokens)
        ],
        temperature: config.temperature,
        max_tokens: config.maxTokens,
        stream: true,
    };

    if (config.usePageContext) {
        const pageContent = getPageContent();
        requestData.messages.splice(1, 0, {
            role: 'system',
            content: `[当前网页信息]
标题: ${pageContent.title}
URL: ${pageContent.url}
正文内容: ${pageContent.content}
注意：基于以上网页内容，回答问题，如果问题不相关则仅作为上下文扩充参考`
        });
        console.log(`[当前网页信息]
标题: ${pageContent.title}
URL: ${pageContent.url}
内容摘要: ${pageContent.content}
基于以上网页内容，请回答以下问题，如果问题不相关则仅作为上下文参考`
        );
    }
    console.log('发送的请求数据:', requestData); // 添加

    try {
        return new Promise((resolve, reject) => {
            let timeoutId = setTimeout(() => {
                reject(new Error('请求超时'));
            }, 30000);

            GM_xmlhttpRequest({
                method: 'POST',
                url: config.apiUrl,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${config.apiKey}`,
                    'Accept': 'text/event-stream'
                },
                responseType: 'stream',
                data: JSON.stringify(requestData),
                onloadstart: (responseInfo) => {
                    try {
                        // 传递实际的响应对象
                        handleStreamResponse(responseInfo.response, aiMsgDiv, thinkingMsgDiv)
                            .then(resolve)
                            .catch(reject);
                    } catch (error) {
                        reject(error);
                    }
                },
                onerror: (error) => {
                    clearTimeout(timeoutId);
                    chatContent.removeChild(thinkingMsgDiv);
                    reject(new Error('请求失败: ' + error.statusText));
                },
                ontimeout: () => {
                    clearTimeout(timeoutId);
                    chatContent.removeChild(thinkingMsgDiv);
                    reject(new Error('请求超时'));
                }
            });
        });
    } catch (error) {
        if (thinkingMsgDiv.parentNode) {
            chatContent.removeChild(thinkingMsgDiv);
        }

        let errorMessage = '发生未知错误';
        if (error.message.includes('timeout')) {
            errorMessage = '请求超时,请检查网络连接';
        } else if (error.message.includes('Failed to fetch') || error.message.includes('请求失败')) {
            errorMessage = '无法连接到服务器,请检查:\n1. 网络连接\n2. API地址是否正确\n3. 是否开启了代理/VPN';
        } else if (error.message.includes('401')) {
            errorMessage = 'API密钥无效或已过期,请重新设置';
        } else if (error.message.includes('429')) {
            errorMessage = '请求过于频繁,请稍后再试';
        } else {
            errorMessage = `错误: ${error.message}`;
        }

        const errorMsgDiv = document.createElement('div');
        errorMsgDiv.className = 'ds-chat-message ds-error';
        errorMsgDiv.innerText = errorMessage;
        chatContent.appendChild(errorMsgDiv);
        chatContent.scrollTop = chatContent.scrollHeight;

        if ((error.message.includes('Failed to fetch') || error.message.includes('请求失败') || error.message.includes('timeout')) && retryCount < 3) {
            const retryMsgDiv = document.createElement('div');
            retryMsgDiv.className = 'ds-chat-message ds-thinking';
            retryMsgDiv.innerText = `连接失败,正在第${retryCount + 1}次重试...`;
            chatContent.appendChild(retryMsgDiv);

            setTimeout(() => {
                chatContent.removeChild(retryMsgDiv);
                return sendMessage(message, retryCount + 1, hideMessage);
            }, 2000);
        }
    }
}


// ... rest of the existing code ...
                // 为代码块添加复制按钮
                function addCopyButtonsToCodeBlocks(container) {
                    // 遍历所有 pre 元素（不仅仅是已高亮的）
                    container.querySelectorAll('pre').forEach(pre => {
                        // 强制添加 hljs 类确保样式应用
                        if (!pre.classList.contains('hljs')) {
                            pre.classList.add('hljs');
                        }

                        // 如果不存在代码元素则自动创建
                        if (!pre.querySelector('code')) {
                            const code = document.createElement('code');
                            code.textContent = pre.textContent;
                            pre.innerHTML = '';
                            pre.appendChild(code);
                        }

                        // 移除已存在的复制按钮
                        const existingButton = pre.querySelector('.copy-code-btn');
                        if (existingButton) {
                            existingButton.remove();
                        }

                        // 创建新的复制按钮
                        const copyButton = document.createElement('button');
                        copyButton.className = 'copy-code-btn';
                        copyButton.textContent = '复制';

                        // 绑定复制事件（带重试机制）
                        copyButton.addEventListener('click', () => {
                            const code = pre.querySelector('code').textContent;
                            navigator.clipboard.writeText(code).then(() => {
                                // 显示成功提示
                                const successMessage = document.createElement('div');
                                successMessage.className = 'copy-success';
                                successMessage.textContent = '复制成功';
                                pre.appendChild(successMessage);

                                // 2秒后淡出移除
                                setTimeout(() => {
                                    successMessage.style.opacity = '0';
                                    setTimeout(() => {
                                        pre.removeChild(successMessage);
                                    }, 500);
                                }, 1500);
                            }).catch(err => {
                                console.error('复制失败: ', err);
                                // 可选：添加错误提示
                            });
                        });

                        // 添加按钮到代码块
                        pre.appendChild(copyButton);

                        // 强制重新高亮代码（解决时序问题）
                        hljs.highlightElement(pre.querySelector('code'));
                    });
                }
//一键总结网页内容事件

// 添加总结网页按钮点击事件
summarizeBtn.addEventListener('click', async () => {
    if (!config.apiKey) {
        alert('请先设置 API 密钥！');
        settingsBtn.click();
        return;
    }

    // 在对话框显示用户正在总结网页的消息
    const userSummaryMsgDiv = document.createElement('div');
    userSummaryMsgDiv.className = 'ds-chat-message ds-user-message';
    userSummaryMsgDiv.innerText = '正在总结当前网页...';
    chatContent.appendChild(userSummaryMsgDiv);
    chatContent.scrollTop = chatContent.scrollHeight;

    const pageContent = getPageContent();
    const summaryPrompt = `你是一个长文本内容总结专家，总结当前网页，不能漏掉任何一点，要求突出重点和关键信息(重点需要标记)：
    网页标题: ${pageContent.title}
    URL: ${pageContent.url}
    网页内容:
    ${pageContent.content.substring(0, 10000)}...`;

    try {
        await sendMessage(summaryPrompt,0,true);
    } catch (error) {
        console.error('总结网页时出错:', error);
    }
});

// ... rest of the existing code ...
                // 输入框事件
                inputBox.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        const message = inputBox.value.trim();
                        if (message) {
                            sendMessage(message);
                            inputBox.value = '';
                        }
                    }
                });
            }
        })
        .catch(error => {
            console.error('加载依赖库失败:', error);
        });
})();