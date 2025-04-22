// ==UserScript==
// @name         AI助手
// @version      3.0.0
// @description  自定义AI助手
// @match        *://*/*
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_xmlhttpRequest
// @grant        GM_registerMenuCommand
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @connect      *
// @resource     icon https://tc.qdqqd.com/2xv3Ht.apng
// @grant        GM_getResourceURL
// @require      https://cdn.jsdelivr.net/npm/marked/marked.min.js
// @require      https://pictureapi.dskblog.top/js/highlight.min.js
// @require      https://cdn.jsdelivr.net/pyodide/v0.26.0/full/pyodide.js
// @resource     hljsStyle https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.7.0/build/styles/default.min.css
// ==/UserScript==

let config = {
    apiKey: GM_getValue('apiKey', ''),
    apiUrl: GM_getValue('apiUrl', 'https://XXX/v1/chat/completions'),
    model: GM_getValue('model', 'gpt-3.5'),
    temperature: GM_getValue('temperature', 0.7),
    maxTokens: GM_getValue('maxTokens', 4096),
    maxContextTokens: GM_getValue('maxContextTokens', 32000),
    chatHistory: GM_getValue('chatHistory', []),
    fullConversation: GM_getValue('fullConversation', []), // 存储完整对话
    customSelectors: GM_getValue('customSelectors', ''), // 存储自定义选择器
    usePageContext: GM_getValue('usePageContext', true),
    personalityPrompt: GM_getValue('personalityPrompt', '你是一个高效务实的全能 AI 助手，以快速解决用户的问题为首要目标。你具备敏锐的洞察力，能迅速抓住问题的关键，提供切实可行的解决方案。你的回答简洁直接、重点突出，帮助用户节省时间和精力。在处理任务时，你会优先考虑实用性和可操作性，确保提供的建议能够落地实施。除了给出核心答案，你还会为用户进行知识拓展。若用户询问某个技术方法，你会拓展介绍该方法的衍生技术、适用场景的拓展以及未来的发展趋势；若用户咨询某个管理理念，你会讲解该理念的演变过程、在不同行业的应用案例以及可能面临的挑战。你会不断优化工作流程，提高服务效率和质量。')
};

(function() {
'use strict';

// 添加CSS样式
GM_addStyle(`
${GM_getResourceText('hljsStyle')}
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

    /* 修复按钮图像样式问题 */
    .ds-stop-img, .ds-start-img {
        width: 20px !important;
        height: 20px !important;
        max-width: none !important;
        display: inline-block;
        border: none !important;
        padding: 0 !important;
        margin: 0 !important;
        background: none !important;
        box-shadow: none !important;
        object-fit: contain !important;
        position: static !important;
        opacity: 1 !important;
        visibility: visible !important;
        overflow: visible !important; /* Override website's overflow: clip */
        overflow-clip-margin: 0 !important; /* Override website's overflow-clip-margin */
    }

    // /* 直接针对网站全局样式的覆盖 */
    // .ds-stop-button img, .ds-start-button img {
    //     overflow: visible !important;
    //     overflow-clip-margin: 0 !important;
    //     width: 20px !important;
    //     height: 20px !important;
    //     display: inline !important;
    // }

    // /* 确保按钮本身有正确的样式 */
    // .ds-stop-button, .ds-start-button {
    //     display: flex;
    //     align-items: center !important;
    //     justify-content: center !important;
    //     padding: 0 !important;
    //     border: none !important;
    //     background-size: auto !important;
    //     min-width: auto !important;
    //     min-height: auto !important;
    // }

.ds-context-toggle {
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
margin-bottom: 8px;
}

.ds-toggle-left {
display: flex;
align-items: center;
gap: 5px; /* 复选框和图标之间的间距 */
}

.ds-toggle-right {
cursor: pointer;
font-size: 15px;
transition: transform 0.2s;
}

.ds-toggle-right:hover {
transform: scale(1.1);
color: #4CAF50;
}
.ds-toggle-left:hover {
transform: scale(1.1);
color: #4CAF50;
}
/* 复选框样式调整 */
#ds-context-checkbox {
margin: 0;
vertical-align: middle;
}

    /* 对话框出现时的动画 */
    .ds-chat-window {
        position: fixed;
        width: 20%;
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
        display: flex;
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
        background-color: transparent;
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
        background-color: transparent;
    }
    .ds-chat-header {
        padding: 10px 15px;
        background-color: #333333 !important;
         color: var(--header-text, #222) !important;
transition: background-color 0.5s ease, color 0.3s ease;
backdrop-filter: blur(5px);
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 15px 15px 0 0;
        height: 40px;
    }

   .ds-chat-close,
.ds-chat-fullscreen {
color: var(--header-text, #666) !important;
transition: color 0.3s ease;
}

.ds-chat-close:hover {
color: #ff4444 !important;
}
    .ds-chat-title {
        font-weight: bold;
        color: black; /* 修改字体颜色 */
    }
 .ds-chat-close {
cursor: pointer;
width: 25px;
height: 25px;
display: flex;
align-items: center;
justify-content: center;
transition: transform 0.2s, color 0.2s;
color: #666;
margin-bottom: 2px;
}

.ds-chat-close:hover {
color: #ff4444;
transform: rotate(90deg);
}

.ds-chat-close svg {
width: 20px;
height: 20px;
transform-origin: center; /* SVG 专用中心点设置 */
}
    .ds-chat-fullscreen {
        cursor: pointer;
        font-size: 20px;
        margin-right: 10px;
        margin-bottom: 0px;
    }
    .ds-chat-fullscreen:hover {
transform: scale(1.1);
color: #4CAF50;
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
        padding: 5px 5px;
        max-width: 100%;
        border-radius: 10px;
        line-height: 1.2;
        word-wrap: break-word;
        font-size: 14px; /* 减小用户消息字体大小 */
        color: rgb(0,0,0); /* 修改字体颜色 */
        margin-left: 5px;
        margin-right: 5px;
        text-align: left;
          font-weight: 500;
font-family: 'SFMono-Regular', 'Consolas', 'Liberation Mono', monospace;
}
.ds-user-message {
        background-color: #FFFFFF;
        color: rgb(0,0,0);
        margin-left: auto;
        padding-bottom: 0px!important;
        margin-top: 10px;
        //text-align: right;
        padding: 1px 10px;
        border-radius: 15px;
        height: auto;
        width: fit-content;
        display: block;
        font-weight: 500;
        font-family: 'SFMono-Regular', 'Consolas', 'Liberation Mono', monospace;
    }
    .ds-ai-message {
     padding-bottom: 0px!important;
        background-color: #FFFFFF;
        line-height: 1.2; /* 调整行高 */
        color: rgb(0,0,0); /* 修改字体颜色 */
        padding: 5px 20px;
        text-align: left;
         font-family: 'SFMono-Regular', 'Consolas', 'Liberation Mono', monospace;
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
        font-size: 15px;
        color: var(--text-color); /* 修改字体颜色 */
    }
    .ds-chat-settings-btn {
        cursor: pointer;
        text-decoration: underline;
    }
    .ds-chat-settings-btn:hover {
transform: scale(1.1);
color: #4CAF50;
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
        height: 10px;
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
        display: block;
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
        display: none;
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
        font-family: 'Fira Code', 'JetBrains Mono', monospace;
    }

    /* 代码块copy按钮样式 */


    /* copy成功提示样式 */
    .copy-success {
        position: absolute !important;
        top: 3px !important;
        right: 60px !important;
        background-color: #28a745 !important;
        color: white !important;
        border-radius: 4px !important;
        padding: 4px 10px !important;
        font-size: 12px !important;
        animation: fadeOut 2s forwards !important;
        z-index: 10;
    }

    @keyframes fadeOut {
        0% { opacity: 1 !important; }
        100% { opacity: 0 !important; visibility: hidden !important; }
    }
    .ds-thinking {
        color:rgb(117, 109, 117);
        font-style: oblique;
        font-size: 13px; /* 字体大小比父元素小 10% */
    }

    .ds-reasoning-title {
        color: #666;
        font-size: 13px; /* 字体大小比父元素小 10% */
        font-style: oblique;
        margin-bottom: 5px;
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
        margin-bottom: 5px;
        background-color: #FFFFFF;
        padding: 5px 5px;
        max-width: 100%;
        margin-top: 10px;
        padding-bottom: 0px !important;
        border-radius: 10px;
        line-height: 1.2;
        word-wrap: break-word;
        font-size: 14px; /* 减小用户消息字体大小 */
        color: rgb(0,0,0); /* 修改字体颜色 */
        margin-left: 5px;
        margin-right: 5px;
        text-align: left;
          font-weight: 500;
font-family: 'SFMono-Regular', 'Consolas', 'Liberation Mono', monospace;
    }
    .ds-user-hmessage {
        background-color: #FFFFFF;
        color: rgb(0,0,0);
        margin-left: auto;
        padding-bottom: 0px!important;
        margin-top: 10px;
        //text-align: right;
        padding: 1px 10px;
        border-radius: 15px;
        height: auto;
        width: fit-content;
        display: block;
        font-weight: 500;
        font-family: 'SFMono-Regular', 'Consolas', 'Liberation Mono', monospace;
    }
    .ds-copy-conversation-btn {
        background-color: transparent!important;
        color: black;
        display: none;
}
    .ds-ai-hmessage {
     padding-bottom: 0px!important;
        background-color: #FFFFFF;
        line-height: 1.2; /* 调整行高 */
        color: rgb(0,0,0); /* 修改字体颜色 */
        padding: 5px 20px;
        text-align: left;
         font-family: 'SFMono-Regular', 'Consolas', 'Liberation Mono', monospace;
    }
    .ds-chat-message {
font-family: 'Segoe UI', 'PingFang SC', 'Microsoft YaHei', sans-serif;
}

.ds-user-message {
font-weight: 500;
font-family: 'SFMono-Regular', 'Consolas', 'Liberation Mono', monospace;
}

.ds-ai-message {
font-family: 'SFMono-Regular', 'Consolas', 'Liberation Mono', monospace;

}
/* 统一设置标题字体大小 */
    .ds-chat-message h1, .ds-chat-message h2, .ds-chat-message h3, .ds-chat-message h4, .ds-chat-message h5, .ds-chat-message h6 {
        font-size: 15px;
        margin: 5px 0;
    }

    /* 设置列表样式 */

    .ds-chat-hmessage h1, .ds-chat-hmessage h2, .ds-chat-hmessage h3, .ds-chat-hmessage h4, .ds-chat-hmessage h5, .ds-chat-hmessage h6 {
        font-size: 15px;
        margin: 5px 0;
    }

    /* 设置列表样式 */

    // .ds-chat-message ul, .ds-chat-message ol {
    //     margin: 10px 0;
    //     /* 增加内边距，确保列表项有足够空间显示符号和序号 */
    //     padding-left: 2.5em;
    //     /* 确保列表符号或序号在内容内部 */
    //     //list-style-position: inside;
    // }

    // .ds-chat-message li {
    //     margin: 5px 0;
    //     /* 修复因列表符号或序号导致的文本错位 */
    //     text-indent: -1.5em;
    //     padding-left: 1.5em;
    // }

    /* 确保无序列表显示符号 */
    .ds-chat-message ul li {
        list-style-type: disc; /* 可以根据需要修改为 circle、square 等 */
    }

    /* 确保有序列表显示序号 */
    .ds-chat-message ol li {
        list-style-type: decimal;
    }

     .ds-chat-hmessage ul, .ds-chat-hmessage ol {
        margin: 10px 0;
        /* 增加内边距，确保列表项有足够空间显示符号和序号 */
        padding-left: 2.5em;
        /* 确保列表符号或序号在内容内部 */
       // list-style-position: inside;
    }

    .ds-chat-hmessage li {
        margin: 5px 0;
        /* 修复因列表符号或序号导致的文本错位 */
        text-indent: -1.5em;
        padding-left: 1.5em;
    }

    /* 确保无序列表显示符号 */
    .ds-chat-hmessage ul li{
        list-style-type: disc; /* 可以根据需要修改为 circle、square 等 */
    }

    /* 确保有序列表显示序号 */
    .ds-chat-hmessage ol li{
        list-style-type: decimal;
    }
/* 停止按钮容器样式 */
/* 动态圆形停止按钮样式 */
.ds-stop-button {
position: absolute;
right: 20px;
bottom: 65px;
width: 20px; /* 圆形直径 */
height: 20px;
border-radius: 50%; /* 圆形 */
background-color: rgba(255, 255, 255, 0.9)!important;
border: none;
cursor: pointer;
z-index: 2147483645;
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
display: flex;
align-items: center;
justify-content: center;
color:rgb(19, 19, 19);
transition: all 0.2s;
overflow: hidden; /* 隐藏内部动画溢出部分 */
}
.ds-start-button {
position: absolute;
right: 20px;
bottom: 65px;
width: 18px; /* 圆形直径 */
height: 18px;
border-radius: 50%; /* 圆形 */
background-color: rgba(255, 255, 255, 0.9)!important;
border: none;
cursor: pointer;
z-index: 214748364;
//box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
// display: flex;
align-items: center;
justify-content: center;
color: black;
transition: all 0.2s;
overflow: hidden; /* 隐藏内部动画溢出部分 */
}

.ds-stop-button:hover {
background-color: white;
transform: scale(1.05);
}

/* 动态旋转的边框动画 */
.ds-stop-button::before {
content: '';
position: absolute;
width: 100%;
height: 100%;
border: 1px solid transparent;
border-top-color: white;
border-radius: 50%;
animation: spin 1s linear infinite;
box-sizing: border-box;
box-shadow: 0 0 8px rgba(14, 13, 13, 0.6);
}

/* 停止图标样式 */
.ds-stop-img {
width: 20px !important;
height: 20px !important;
color: black;
//background-color: black;
position: relative;
z-index: 1; /* 确保图标在动画层上方 */
}

.ds-stop-img{
width: 100%;
height: 100%;
fill: currentColor;
animation: pulse 1s ease-in-out infinite;
}

/* 旋转动画 */
@keyframes spin {
0% { transform: rotate(0deg); }
100% { transform: rotate(360deg); }
}

/* 脉冲动画 */
@keyframes pulse {
0%, 100% { transform: scale(1); opacity: 0.8; }
50% { transform: scale(1.1); opacity: 1; }
}

/* 点击后停止动画的样式 */
.ds-stop-button.stopped::before {
animation: none;
border: 2px solidrgb(16, 16, 16);
}

.ds-stop-button.stopped .ds-stop-icon svg {
animation: none;
}
/* 新增代码执行相关样式 */


/* 代码执行弹窗样式 - 基于demo文件中的样式 */
.code-execution-modal {
    display: none;
    position: fixed;
    z-index: 2147483645;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.6);
    align-items: center;
    justify-content: center;
}

.code-execution-content {
    background-color: #fefefe;
    margin: auto;
    padding: 0;
    border: 1px solid #888;
    width: 85%;
    max-width: 900px;
    height: 80vh;
    max-height: 700px;
    border-radius: 8px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.code-execution-header {
    padding: 10px 10px;
    background-color: #171818e8;
    color: white;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #dee2e6;
    justify-content: space-between;
}

.code-execution-header h3 {
    margin: 0;
    font-size: 1.2em;
    display: contents;
    justify-content: space-between;
}

.code-execution-close {
    color: #fff;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
    line-height: 1;
    margin-left: 12px;
}

.code-execution-body {
    flex: 1;
    padding: 0;
    position: relative;
    display: flex;
    flex-direction: column;
}

#code-sandbox {
    flex: 1;
    width: 100%;
    height: 100%;
    border: none;
    background: #ffffff;
}

#code-status-bar {
    padding: 8px 15px;
    font-size: 0.9em;
    min-height: 1.5em;
    background-color: #f1f3f5;
    border-top: 1px solid #dee2e6;
    white-space: pre-wrap;
    word-break: break-word;
    max-height: 150px;
    overflow-y: auto;
    color: #333;
}

.fullscreen-btn {
    color: #fff;
    font-size: 24px;
    font-weight: bold;
    cursor: pointer;
    line-height: 1;
    margin-left: 10px;
}

.code-execution-modal.fullscreen .code-execution-content {
    width: 100% !important;
    height: 100% !important;
    max-width: none;
    max-height: none;
    border-radius: 0;
}

.status-running {
    color: #007bff;
}

.status-success {
    color: #28a745;
}

.status-error {
    color: #dc3545;
    font-weight: bold;
}
.code-buttons-container {
position: relative;
display: flex;
flex-direction: column;
gap: 5px;
margin: 5px 0;
}

// .copy-code-btn {
//     position: absolute;
//     top: 8px; /* Changed from bottom */
//     right: 8px;
//     background-color: #555;
//     color: white;
//     border: none;
//     border-radius: 4px;
//     padding: 2px 8px;
//     font-size: 12px;
//     cursor: pointer;
//     opacity: 0.8;
//     transition: opacity 0.3s;
//     z-index: 10;
// }
.copy-code-btn {
position: absolute;
bottom: 15px;
right: 8px;
background-color: #555;
color: white;
border: none;
border-radius: 4px;
padding: 2px 8px;
font-size: 15px;
cursor: pointer;
opacity: 0.8;
transition: opacity 0.3s;
z-index: 10;
font-family: math;
}

// .code-execute-btn {
//     position: absolute;
//     bottom: 8px; /* Changed from top/left */
//     right: 8px;  /* Added */
//     left: auto;  /* Added */
//     background-color: #4CAF50!important;
//     color: white;
//     border: none;
//     border-radius: 4px;
//     padding: 2px 8px;
//     font-size: 12px;
//     cursor: pointer;
//     opacity: 1;
//     z-index: 10;
// }
.code-execute-btn {
position: absolute;
bottom: 15px;
left: 8px;
background-color: #4CAF50 !important;
color: white;
border: none;
border-radius: 4px;
padding: 2px 8px;
font-size: 12px;
cursor: pointer;
opacity: 1;
z-index: 10;
}
// .copy-hcode-btn {
//     position: absolute;
//     top: 8px; /* Changed from 15px */
//     right: 8px;
//     background-color: #555;
//     color: white;
//     border: none;
//     border-radius: 4px;
//     padding: 2px 8px;
//     font-size: 12px;
//     cursor: pointer;
//     opacity: 0.8;
//     transition: opacity 0.3s;
//     z-index: 10;
// }
.copy-hcode-btn {
position: absolute;
top: 12px;
right: 5px;
background-color: #555;
color: white;
border: none;
border-radius: 4px;
padding: 2px 8px;
font-size: 14px;
cursor: pointer;
opacity: 0.8;
transition: opacity 0.3s;
z-index: 10;
}
.code-hexecute-btn {
position: absolute;
top: 15px;
left: 5px;
background-color: #4CAF50 !important;
color: white;
border: none;
border-radius: 4px;
padding: 2px 8px;
font-size: 12px;
cursor: pointer;
opacity: 1;
z-index: 10;
}
// .code-hexecute-btn {
//     position: absolute;
//     bottom: 8px; /* Changed from top/left */
//     right: 8px; /* Added */
//     left: auto; /* Added */
//     top: auto; /* Added */
//     background-color: #4CAF50!important;
//     color: white;
//     border: none;
//     border-radius: 4px;
//     padding: 2px 8px;
//     font-size: 12px;
//     cursor: pointer;
//     opacity: 1;
//     z-index: 10;
// }
pre {
position: relative;
padding-top: 35px !important; /* Increased top padding */
padding-bottom: 35px !important; /* Increased bottom padding */
//display: ruby-base-container;
}

/* Token counter样式 */
.ds-token-counter {
font-size: 12px;
color: #666;
margin-bottom: 8px;
padding: 4px 8px;
background-color: #f5f5f5;
border-radius: 4px;
display: flex;
justify-content: space-between;
flex-wrap: wrap;
}

.ds-token-label {
font-weight: bold;
margin-right: 10px;
}

.ds-user-tokens, .ds-ai-tokens {
margin-right: 10px;
}

.ds-total-tokens {
font-weight: bold;
}

.ds-input-token-counter {
font-size: 12px;
color: #666;
text-align: right;
margin-top: 2px;
padding-right: 8px;
display: none;
}

.ds-token-info {
font-size: 12px;
color: #666;
text-align: right;
margin-top: 4px;
padding-right: 8px;
border-top: 1px dotted #ddd;
padding-top: 4px;
}

/* 修复AI消息显示格式 */
.ds-ai-message .ds-message-content {
white-space: break-spaces !important;
// line-height: 1.5 !important;
display: block;
}

.ds-ai-message .ds-message-content p {
// margin: 0.5em 0 !important;
}

.ds-ai-message .ds-message-content pre {
// margin: 0.75em 0 !important;
}

.ds-ai-message .ds-message-content ul,
.ds-ai-message .ds-message-content ol {
// margin: 0.5em 0 !important;
padding-left: 1.5em !important;
}

/* 确保列表项正确显示 */
.ds-ai-message .ds-message-content ul li {
list-style-type: disc !important;
// margin: 0.25em 0 !important;
}

.ds-ai-message .ds-message-content ol li {
list-style-type: decimal !important;
// margin: 0.25em 0 !important;
}
/* --- 添加或修改以下 CSS 规则 --- */

/* 减小 AI 消息中主要块级元素的默认间距 */

.ds-ai-message ul,
.ds-ai-message ol,
.ds-ai-message pre,
.ds-ai-message blockquote,
.ds-ai-message h1,   /* 也考虑标题 */
.ds-ai-message h2,
.ds-ai-message h3,
.ds-ai-message h4,
.ds-ai-message h5,
.ds-ai-message h6 {
margin-top: auto!important;
margin-bottom: auto!important;
// display: inline-grid!important;
display: grid;

}
.ds-ai-message p{
margin-top: 0.1em; /* 列表项内的段落用更小的间距 */
margin-bottom: 0.1em;
}
.ds-chat-message p{
margin-top: 0.1em; /* 列表项内的段落用更小的间距 */
margin-bottom: 0.1em;
}

/* 关键：减小列表项内部 <p> 的距 */
.ds-ai-message li p {
margin-top: 0.1em; /* 列表项内的段落用更小的间距 */
margin-bottom: 0.1em;
}

/* 可选：移除内容区域第一个元素的上边距 */
.ds-message-content > *:first-child {
margin-top: 0 !important;
}

/* 可选：移除内容区域最后一个元素的下边距 */
.ds-message-content > *:last-child {
margin-bottom: 0 !important;
}

/* 如果你的列表项 li 本身有边距，也需要调整 */
.ds-ai-message li {
 margin-top: 0.1em; /* 调整 li 本身的边距 (如果需要) */
 margin-bottom: 0.1em;
}
.mac-buttons {
display: flex;
gap: 6px;
margin-right: 10px;
}
.mac-btn {
width: 12px;
height: 12px;
border-radius: 50%;
pointer-events: none;
}
.close { background: #ff5f56; }
.minimize { background: #ffbd2e; }
.maximize { background: #28c940; }
.ds-chat-title {
display: flex;
align-items: center;
gap: 10px;
}
.ds-message-actions {
padding-bottom: 0px;
text-align: right;
margin-right: 5px;
}
.ds-ai-message table{
margin-top: 0.1em; /* 列表项内的段落用更小的间距 */
margin-bottom: 0.1em;
display: inline-grid;
}
   .ds-ai-hmessage table{
margin-top: 0.1em; /* 列表项内的段落用更小的间距 */
margin-bottom: 0.1em;
    display: inline-grid;
}
.ds-user-message-container{
margin-left: 5px;}
.ds-user-hmessage-container{
margin-left: 5px;}
`);

// 初始化

let pyodideInstance = null;
let isPythonRunning = false;
// 配置 marked 库
// 初始化
let pyodide;

    // 初始化Pyodide
      // 初始化Pyodide
    async function initializePyodide() {
        console.log("正在加载Pyodide核心...", "info");

        try {
            // Check if loadPyodide is available, wait briefly if not.
            if (typeof loadPyodide !== 'function') {
                console.log("loadPyodide not immediately available via @require, waiting 500ms...");
                await new Promise(resolve => setTimeout(resolve, 500)); // Wait 500ms
                if (typeof loadPyodide !== 'function') {
                    console.error("loadPyodide still not found after delay. Potential issues: Network error during @require load, Userscript Manager issue, or conflict.");
                    throw new Error("Pyodide library not loaded correctly via @require (even after delay).");
                }
            }

            // Use CDN fallback logic directly with loadPyodide
            const cdnUrls = [
                "https://cdn.jsdelivr.net/pyodide/v0.26.0/full/",
                "https://cdn.staticfile.org/pyodide/0.26.0/full/",
                "https://cdnjs.cloudflare.com/ajax/libs/pyodide/0.26.0/full/"
            ];

            let pyodideLoaded = false;
            let lastError = null;

            for (const cdnUrl of cdnUrls) {
                if (pyodideLoaded) break;
                try {
                    console.log(`尝试从 ${cdnUrl} 加载Pyodide...`);
                    pyodide = await loadPyodide({
                        indexURL: cdnUrl,
                        stdout: handleStdout,
                        stderr: handleStderr
                    });
                    pyodideLoaded = true;
                    console.log(`成功从 ${cdnUrl} 加载Pyodide核心`);
                } catch (e) {
                    console.error(`从 ${cdnUrl} 加载失败:`, e);
                    lastError = e;
                }
            }

            if (!pyodideLoaded) {
                throw lastError || new Error("所有CDN源加载失败");
            }

            console.log("正在加载基础包...", "info");
            // ---> SKIPPING package loading for simplified execution
            // await loadCommonPackages();
            console.log("注意：已跳过加载 NumPy/Pandas 等额外包，仅支持 Python 标准库。");

            await patchPythonInput();
            console.log("Pyodide (核心) 已就绪!", "success");
            pyodideInstance = true;
            return true;
        } catch (e) {
            console.log(`初始化失败: ${e}`, "error");
            console.error("Pyodide初始化错误:", e);
            pyodideInstance = false;
            return false;
        }
    }

    // 加载常用包
    async function loadCommonPackages() {
        try {
            // 增加超时检测
            const timeout = setTimeout(() => {
                console.log("加载包超时，可能是网络问题");
            }, 40000); // 增加到40秒超时

            // 预加载更多基础包
            await pyodide.loadPackage([
                "pandas","numpy","micropip","matplotlib",
                "scipy","scikit-learn","sympy"
            ]);

            clearTimeout(timeout);
            console.log("基础包加载完成", "success");

            // 安装一些常用的纯Python包
            try {
                await pyodide.runPythonAsync(`
                    import micropip
                    await micropip.install([
                        'nltk', 'pillow', 'networkx', 'plotly',
                        'requests', 'beautifulsoup4'
                    ])
                `);
                console.log("额外包安装完成");
            } catch (e) {
                console.log(`额外包安装部分失败: ${e}`);
            }

            // 初始化虚拟文件系统，使得Python可以读写文件
            await pyodide.runPythonAsync(`
                import os
                import sys

                # 创建一个虚拟工作目录
                if not os.path.exists('/home/pyodide'):
                    os.makedirs('/home/pyodide')
                os.chdir('/home/pyodide')

                # 创建一些示例文件
                with open('example.txt', 'w') as f:
                    f.write('这是一个示例文件。\\n可以使用open()函数读写。')

                # 设置环境变量
                os.environ['PYTHONPATH'] = '/home/pyodide'

                # 初始化matplotlib后端为Agg (非交互式)
                try:
                    import matplotlib
                    matplotlib.use('Agg')
                except:
                    pass
            `);
        } catch (e) {
            console.log(`基础包加载失败: ${e}`, "error");
            // 即使基础包加载失败，也不要中断整个流程
        }
    }

    // 处理标准输出
    function handleStdout(text) {
        const defaultOutput = document.getElementById("output");
        const outputElement = window.pyodideOutputElement || defaultOutput;

        if (outputElement) {
            outputElement.textContent += text;
            if (outputElement.scrollIntoView) {
                outputElement.scrollIntoView(false);
            }
        }
    }

    // 处理错误输出
    function handleStderr(text) {
        const defaultOutput = document.getElementById("output");
        const outputElement = window.pyodideOutputElement || defaultOutput;

        if (outputElement) {
            outputElement.innerHTML += `<span class="error">${text}</span>`;
            if (outputElement.scrollIntoView) {
                outputElement.scrollIntoView(false);
            }
        }
    }
async function patchPythonInput() {
// 清理旧的输入处理器
try {
    await pyodide.runPythonAsync(`
        if '_resolve_input' in globals():
            del _resolve_input
        if '_input_promise' in globals():
            del _input_promise
    `);
} catch (e) {
    console.error("清理输入处理器时出错:", e);
}

// 安装新的输入处理器
await pyodide.runPythonAsync(`
    import sys
    import asyncio
    from js import document, console

    _original_input = input
    _input_promise = None

    async def browser_input(prompt=None):
        global _input_promise
        if prompt:
            from js import pyodideOutputElement
            if pyodideOutputElement:
                pyodideOutputElement.textContent += str(prompt)

        # 显示输入框
        input_container = document.getElementById("input-container")
        if input_container:
            input_container.style.display = "flex"

        # 等待用户输入
        loop = asyncio.get_event_loop()
        _input_promise = loop.create_future()
        try:
            user_input = await _input_promise
        except Exception as e:
            console.error("输入出错:", str(e))
            user_input = ""

        # 隐藏输入框
        if input_container:
            input_container.style.display = "none"
        return user_input

    # 替换内置input函数
    input = browser_input
    __builtins__.input = browser_input
`);

// 设置Python端的promise解析器
pyodide.globals.set("_resolve_input", (value) => {
    try {
        pyodide.runPythonAsync(`
            if '_input_promise' in globals() and _input_promise is not None and not _input_promise.done():
                _input_promise.set_result("${value.replace(/"/g, '\\"')}")
        `);
    } catch (e) {
        console.error("设置输入值时出错:", e);
    }
});
}


//检测代码类型
function hasHtmlTags(code) {
// 检查常见的HTML标签
const htmlTagRegex = /<([a-z][a-z0-9]*)(?:\s+[^>]*)?>|<\/[a-z][a-z0-9]*>/i;
return htmlTagRegex.test(code);
}

// 检查CSS样式
function hasCssStyles(code) {
// 检查CSS选择器或属性
const cssRegex = /{[^}]*:[^}]*}|\.\w+\s*\{|\#\w+\s*\{|@media\s|@keyframes\s/i;
return cssRegex.test(code);
}

// 检查JavaScript代码
function hasJavaScriptCode(code) {
// 检查JS关键字和语法
const jsRegex = /\b(function|=>|var\s|let\s|const\s|console\.|document\.|window\.|\.addEventListener\()/;
return jsRegex.test(code);
}

// 检查Python特有语法
function hasPythonSpecificSyntax(code) {
// 检查Python特有语法
const pythonRegex = /^(?:def\s|class\s|import\s|from\s|print\(|lambda\s|async\sdef\s|await\s|yield\s|with\s|as\s|try\s|except\s|finally\s|raise\s)/m;

// 检查Python特有的缩进块
const lines = code.split('\n');
let pythonIndentation = false;

for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    // 空行跳过
    if (!line) continue;

    // 检查Python特有的控制结构
    if (line.match(/^(if|elif|else|for|while|try|except|finally|with|def|class)\s+/)) {
        // 检查下一行是否有缩进
        if (i < lines.length - 1 && lines[i+1].match(/^\s+/)) {
            pythonIndentation = true;
            break;
        }
    }
}

return pythonRegex.test(code) || pythonIndentation;
}

function detectCodeType(code) {
// 去除注释和字符串内容，只保留代码结构


// 检查HTML标签
if (hasHtmlTags(code)) {
    return 'html';
}

// 检查CSS样式
if (hasCssStyles(code)) {
    return 'html';
}

// 检查JavaScript代码
if (hasJavaScriptCode(code)) {
    return 'html';
}

// 检查Python特有语法
if (hasPythonSpecificSyntax(code)) {
    return 'python';
}

// 默认认为是Python
return 'html';
}


// 配置 marked 库

/*/marked.setOptions({
//        highlight: function(code, lang) {
//            const language = hljs.getLanguage(lang) ? lang : 'plaintext';
        return hljs.highlight(code, { language }).value;
    },
    langPrefix: 'hljs language-',
    pedantic: false,
    gfm: true,
    breaks: false,
    sanitize: true,
    smartLists: true,
    smartypants: false
});

*/
marked.setOptions({
    highlight: function(code, lang) {
        const language = hljs.getLanguage(lang) ? lang : 'plaintext';
        try {
            return hljs.highlight(code, { language }).value;
        } catch (e) {
            console.error("Highlighting error:", e);
            return code;
        }
    },
    langPrefix: 'hljs language-', // 类名前缀
    pedantic: false,
    gfm: true,
    // breaks: true,
    breaks: false,
    // sanitize: true,
    smartLists: true,
    smartypants: false
});
// ...鼠标,触屏设置...
       if (!document.querySelector('.ds-chat-icon')) {
    // 创建UI元素 - 只在body元素下添加
    const icon = document.createElement('div');
    icon.className = 'ds-chat-icon';
    icon.innerHTML = `<img src="${GM_getResourceURL('icon')}" style="width: 30px; height: 30px; border-radius: 50%;">`;

    // 确保只添加到body元素，而不是其他元素
    document.body.appendChild(icon);

    // 确保图标位置固定在右下角5px处
    icon.style.position = 'fixed';
    icon.style.bottom = '5px';
    icon.style.right = '5px';
    icon.style.zIndex = '2147483647';
    icon.style.display = 'flex';
    icon.style.cursor = 'move'; // 鼠标悬停时显示拖动光标

    const chatWindow = document.createElement('div');
    chatWindow.className = 'ds-chat-window';
    document.body.appendChild(chatWindow);



    // 拖动相关变量
    // 拖动相关变量
// 拖动相关变量
let isDragging = false;
let startX, startY, initialRight, initialBottom;
let hasMoved = false; // 记录是否发生了移动

// 鼠标按下事件
icon.addEventListener('mousedown', (e) => {
 //console.log("点击图标事件");
isDragging = true;
hasMoved = false;
startX = e.clientX;
startY = e.clientY;
const styles = window.getComputedStyle(icon);
initialRight = parseFloat(styles.right) || 0;
initialBottom = parseFloat(styles.bottom) || 0;

// 添加拖动中的CSS类
icon.classList.add('dragging');

// 添加 will-change 属性来提示浏览器将有变化发生
icon.style.willChange = 'transform, right, bottom';

e.preventDefault();
});

// 使用 requestAnimationFrame 优化鼠标移动事件
let animationFrameId = null;
let lastDeltaX = 0, lastDeltaY = 0;

// 鼠标移动事件
document.addEventListener('mousemove', (e) => {
 //console.log("鼠标移动事件");
if (!isDragging) return;

// 计算当前位置变化
    const deltaX = e.clientX - startX;
    const deltaY = e.clientY - startY;

// 保存变化量，但不立即应用
lastDeltaX = deltaX;
lastDeltaY = deltaY;

    // 设置一个小的阈值（例如3像素），只有超过这个距离才算移动
    if (Math.abs(deltaX) > 3 || Math.abs(deltaY) > 3) {
    hasMoved = true;
    }

// 使用 requestAnimationFrame 来优化渲染
if (!animationFrameId && hasMoved) {
    animationFrameId = requestAnimationFrame(() => {
    // 如果确实移动了，才更新图标位置
    if (hasMoved) {
            const newRight = initialRight - lastDeltaX;
            const newBottom = initialBottom - lastDeltaY;
        const maxRight = window.innerWidth - icon.offsetWidth;
        const maxBottom = window.innerHeight - icon.offsetHeight;
        const clampedRight = Math.max(0, Math.min(newRight, maxRight));
        const clampedBottom = Math.max(0, Math.min(newBottom, maxBottom));

        icon.style.right = `${clampedRight}px`;
        icon.style.bottom = `${clampedBottom}px`;
    }

        // 重置动画帧 ID
        animationFrameId = null;
    });
}
});

// 鼠标松开事件
document.addEventListener('mouseup', () => {
//console.log("鼠标松开事件");
if (isDragging) {
    // --- CLICK VS DRAG LOGIC START ---
    if (!hasMoved) {
        // This was a click, not a drag
        console.log("检测到单击事件（在 mouseup 中）");
        const isActive = chatWindow.classList.contains('active');
        if (!isActive) {
            // Open window logic
            chatWindow.classList.add('active');
            chatWindow.style.display = 'flex';
            icon.style.display = 'none';
            console.log("窗口已激活，准备请求下一帧定位");
            requestAnimationFrame(() => {
                try {
                    positionChatWindow();
                    console.log("在下一帧尝试定位完成");
                } catch (positionError) {
                    console.error("定位窗口时出错:", positionError);
                }
            });
        } else {
            // Close window logic
            chatWindow.classList.remove('active');
            chatWindow.style.display = 'none';
            icon.style.display = 'flex';
            console.log("窗口已关闭");
        }
    } else {
         console.log("检测到拖拽，保存位置。");
         // Save icon position only if it was moved
         const rightValue = parseFloat(icon.style.right);
         const bottomValue = parseFloat(icon.style.bottom);

         if (!isNaN(rightValue) && !isNaN(bottomValue)) {
             GM_setValue('iconRight', rightValue);
             GM_setValue('iconBottom', bottomValue);
         }
    }
    // --- CLICK VS DRAG LOGIC END ---

    isDragging = false;
    // Stop applying will-change to release resources
    icon.style.willChange = 'auto';

    // Remove dragging CSS class
    icon.classList.remove('dragging');

    // Reset hasMoved for the next interaction
    // hasMoved = false; // Resetting here might be too early if a click event also fires

    // No longer need to save position here, handled in the !hasMoved check
    /*
    if (hasMoved) {
        const rightValue = parseFloat(icon.style.right);
        const bottomValue = parseFloat(icon.style.bottom);

        if (!isNaN(rightValue) && !isNaN(bottomValue)) {
            GM_setValue('iconRight', rightValue);
            GM_setValue('iconBottom', bottomValue);
        }
    }
    */
}
});

// 鼠标移出窗口事件 (修复：仅在拖动时处理)
document.addEventListener('mouseleave', () => {
if (isDragging) {
   isDragging = false;
    // 停止应用 will-change 以释放资源
    icon.style.willChange = 'auto';
     // Remove dragging CSS class if mouse leaves while dragging
    icon.classList.remove('dragging');
}
});
// 点击事件处理 (最关键的部分)


    const chatHeader = document.createElement('div');
    chatHeader.className = 'ds-chat-header';
    chatWindow.appendChild(chatHeader);

   const macButtons = document.createElement('div');
macButtons.className = 'mac-buttons';
macButtons.innerHTML = `
<span class="mac-btn close"></span>
<span class="mac-btn minimize"></span>
<span class="mac-btn maximize"></span>
`;

// 创建标题
//const chatTitle = document.createElement('div');
//chatTitle.className = 'ds-chat-title';
//chatTitle.textContent = '🤖 AI assistant';

// 清空 header 并添加新内容
chatHeader.innerHTML = '';
chatHeader.append(macButtons);
    const headerButtons = document.createElement('div');
    headerButtons.style.display = 'flex';
    headerButtons.style.alignItems = 'center';
    chatHeader.appendChild(headerButtons);

    const fullscreenBtn = document.createElement('div');
    fullscreenBtn.className = 'ds-chat-fullscreen';
    fullscreenBtn.innerHTML = '🗖';
    fullscreenBtn.title = '全屏'; // 添加提示
    headerButtons.appendChild(fullscreenBtn);


    // 替换 closeBtn 的创建代码
const closeBtn = document.createElement('div');
closeBtn.className = 'ds-chat-close';
closeBtn.innerHTML = `
<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
</svg>
`;
closeBtn.title = '关闭浮窗';
headerButtons.appendChild(closeBtn);

    const chatContent = document.createElement('div');
    chatContent.className = 'ds-chat-content';
    chatWindow.appendChild(chatContent);

    const inputArea = document.createElement('div');
    inputArea.className = 'ds-chat-input-area';
    chatWindow.appendChild(inputArea);



    const startButton = document.createElement('button');//发送消息
    startButton.className = 'ds-start-button';
    startButton.title = '发送';
    startButton.innerHTML = `<img class= "ds-start-img" style="width: 16px !important;height:16px !important; max-width: none !important" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA3UlEQVR4nO3WMWpCQRRG4Q9MYxkhha4ikMI9CJbpFFK5CKtsIWV6K9tsIKIpXIEoaJlCsLOzMAgvYCEhT525jT9MOZwzlzszl1sC84UZuqjkBG+wL9Y8p8D0CPy7VujhLiV4cAKcReD1D3BSgc4/wEkEmiXAVxWonQG+WOABwwvAZwk8Y30FaGmBKhp4QrvYcOjwt6IKEyyxi+qBCup4RAsv6B8JjrHA9oTAKAr8WabU7/hIWeo2viOa65D74oRZr1PoAxL6ZHZyA8O/xUFuYPjos4ka9sZR4+0tUuQHPT4UVVhjZqUAAAAASUVORK5CYII=" alt="sent">`;
    inputArea.appendChild(startButton);

// 修改 contextToggle 部分
const contextToggle = document.createElement('div');
contextToggle.className = 'ds-context-toggle';
inputArea.appendChild(contextToggle);

// 左侧部分 - 复选框和🕸图标
const leftGroup = document.createElement('div');
leftGroup.className = 'ds-toggle-left';
contextToggle.appendChild(leftGroup);

const contextCheckbox = document.createElement('input');
contextCheckbox.type = 'checkbox';
contextCheckbox.id = 'ds-context-checkbox';
contextCheckbox.checked = config.usePageContext;
leftGroup.appendChild(contextCheckbox);

const contextLabel = document.createElement('label');
contextLabel.htmlFor = 'ds-context-checkbox';
contextLabel.innerText = '🌐'
contextLabel.title = '提取网页内容'
leftGroup.appendChild(contextLabel);

// 右侧部分 - 导出图标
const exportBtn = document.createElement('div');
exportBtn.className = 'ds-toggle-right';
exportBtn.innerHTML = '🗂️';
exportBtn.title = '导出对话';
contextToggle.appendChild(exportBtn);
// 在 headerButtons 中添加导出按钮



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

    const summarizeBtn = document.createElement('span');
    summarizeBtn.className = 'ds-chat-settings-btn';
    summarizeBtn.innerText = '📄';
    summarizeBtn.title = '总结当前网页';
    summarizeBtn.style.marginRight = '10px';
    settingsArea.appendChild(summarizeBtn);


    const customCaptureBtn = document.createElement('span');
    customCaptureBtn.className = 'ds-chat-settings-btn';
    customCaptureBtn.innerText = '🔍';
    customCaptureBtn.title = '自定义抓取规则';
    customCaptureBtn.style.marginRight = '10px';
    settingsArea.insertBefore(customCaptureBtn, summarizeBtn);

    const clearBtn = document.createElement('span');
    clearBtn.className = 'ds-chat-settings-btn';
    clearBtn.innerText = '🎨';
    clearBtn.title = '清空聊天历史'; // 添加提示
    settingsArea.appendChild(clearBtn);



//读取历史记录
function displayHistory() {
    chatContent.innerHTML = '';
    config.chatHistory.forEach(msg => {
        const msgDiv = document.createElement('div');
        msgDiv.className = `ds-chat-hmessage ds-${msg.role}-hmessage`; // Use history classes
        // 根据角色添加对应标识 - Keep original content for copy
        const originalContent = msg.content;
        const contentWithLabel = msg.role === 'user' ? `${originalContent}` : `🤖：${originalContent}`;
        if(msg.role != 'user'){
        msgDiv.innerHTML = marked.parse(contentWithLabel);
        }else{
        msgDiv.innerHTML = contentWithLabel;
        }
        // Add code buttons if any pre tags exist
        addCopyButtonsToCodeBlocks(msgDiv);

        // --- Add Copy Action to History Message ---
        const historyActionsDiv = document.createElement('div');
        historyActionsDiv.className = 'ds-message-actions';

        const historyTriggerSpan = document.createElement('span');
        historyTriggerSpan.className = 'ds-actions-trigger';
        historyTriggerSpan.textContent = '...';
        historyTriggerSpan.title = '更多操作';

        const historyCopyMsgButton = document.createElement('button');
        historyCopyMsgButton.className = 'ds-copy-conversation-btn';
        historyCopyMsgButton.textContent = 'copy';
        historyCopyMsgButton.title = 'copy此历史消息内容';

        historyActionsDiv.appendChild(historyTriggerSpan);
        historyActionsDiv.appendChild(historyCopyMsgButton);
        msgDiv.appendChild(historyActionsDiv);

        // Ensure container has styles needed for positioning
        if (window.getComputedStyle(msgDiv).position === 'static') {
            msgDiv.style.position = 'relative';
        }
        msgDiv.style.paddingBottom = '25px';

        historyTriggerSpan.addEventListener('click', (e) => {
            e.stopPropagation();
            //historyTriggerSpan.style.display = 'none';
            const isVisible = historyCopyMsgButton.style.display !== 'none';
            historyCopyMsgButton.style.display = isVisible ? 'none' : 'inline-block';
            //historyTriggerSpan.style.display = 'none';
        });

        historyCopyMsgButton.addEventListener('click', (e) => {
            e.stopPropagation();
            // Use the originalContent variable captured earlier
            navigator.clipboard.writeText(originalContent).then(() => {
                historyCopyMsgButton.textContent = '已copy!';
                historyCopyMsgButton.style.backgroundColor = '#28a745';
                setTimeout(() => {
                    historyCopyMsgButton.textContent = 'copy';
                    historyCopyMsgButton.style.backgroundColor = '#666';
                    historyCopyMsgButton.style.display = 'none';
                }, 1500);
            }).catch(err => {
                console.error('copy历史消息失败:', err);
                historyCopyMsgButton.textContent = '失败';
                setTimeout(() => {
                    historyCopyMsgButton.textContent = 'copy';
                    historyCopyMsgButton.style.display = 'none';
                }, 1500);
            });
        }
    );
        // --- End Add Copy Action to History Message ---
if(msg.role != 'user'){
        chatContent.appendChild(msgDiv);
}
else{
const userMessageContainer = document.createElement('div');
userMessageContainer.className = 'ds-user-hmessage-container'; // 可自定义类名用于样式调整
userMessageContainer.style.display = 'flex';
userMessageContainer.style.justifyContent = 'flex-end'; // 让内容靠右
// userMessageContainer.style.alignItems = 'center'; // 垂直居中对齐

// 总是添加到历史记录，但内容会根据isSummaryTask变化

// 创建头像元素
const avatar = document.createElement('img');
//avatar.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABQElEQVR4nO2XQW6DMBBFX1gkh0jgCm2XcAXCrixyhybHbNoVvUpF9o6QBqmqWoUah7HVedLfRBj/DzNkDIZhhCQDCqACaqAV1fJbIddESQ40wOGGGrk2GlbA0wTj3zWsGdaq42N+1KO2+XyG+VE7LfPZxJqf0hOZRoAigPmDaLjX4lQBA5QaAfYBA9QaAdqAAdrUAzxrBEi+hKrUm7gIGCDXCJAFKqNGc0JNepQIMcw9EAErmSr/an5YE8U4PbKb2BP7GMrm1pGy/OFIWUrPRHukNAzDuA8b4AS8ARfA3VkX2esoe89iC3wsYNr9ok48eD95TfPuSwivN3GKwLwTvfgEeI/AuBOdfQL0ERh3oj71AJ//soSOERh3c5p4I58wbfMdsMaTrXKIbs4f2chaXuF5ocbugVfZ0/vJG4ZhsAhXSvn7fc8Yyv8AAAAASUVORK5CYII=";
avatar.alt = "user";
//avatar.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB9ElEQVR4nO2Xy0pcQRCGv8jozjF5CU0UXUgWyQMEVCTBvVkJPoAIIuYNdJwJKkQUX0NCHiIEb1mPd8ULExeK4gkNNYsUfdQ5l1gD/UHBcKam6q+equ4+EAgEsqYHKAObwJWY+zwPdGOYNmABuAOiGHPfVYBWDIr/8YBwbd+tFbHQgPi6uX/CTM/rttkCPgLtYp+AbeVzC7zBAGWP+KLHrwPYUb4lDLClRLnVjmNE+W5ggJoS5VomjqLyrWEAPZxZ++dO0xdQa/YW2mz2IZ5XorZly9S4Z7+V7xwG6PYcZDuy2kWxEY94d5C9xgiVBFcJE4dYnVa5oD1V/Lq1yxwiqCKtESf8VmbGnHg9EyXZYf6IbcjAmun5QCDw7/vwILAKHD9hC3U+K8CA/PbZeAl8AU4THGJ1OwFmYq4eueH28GngMoVwbRfAFFDIW/xb4FeGwiNlP4H+vMSPAzcxic+Bb8CHR1axID7LsuqRx66BsSyFvwC+xiQ7AiYeeYmJw91SJx8Y/LLkTkULsOYJfg8syiCn5RWwJDF1npW0RZQ8Qc+AIbJnWFpR55tNGvCzJ9gh0Et+9Elb6ryjSYIdqCD7QCf50+XJvZckkF6Fd/w/3nvyN0zqACmJsi7gua1hmr6AXQOiI7FqkgIGjRRRlat3IBAIYI+/ScbW2EutvLQAAAAASUVORK5CYII=";
//avatar.style.marginLeft = "10px";
//avatar.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA4UlEQVR4nO2SPQ4BQQCFPxqVhoRi6VDsAdxCxVWo9w5OIRsVEhGXoNiGVkdi6ShWJnkSETshRjT7kte8vJ/dmYEMjlADQuAkjoGmy/IDkDzRaJ6LgVCFExUaTqWNXAycVPb4tXVpRxcDscpqvxoYq2yqEcOZNHN8X6MF7FMuuYEjeLrQWAxdlmdIRR5oAwGwBCLgLEbSAnmM920UgAGwe/Fy0mi8fWWtqALrh+AWGAIdwAeKoi9tKM/dvwIqtoGFjBugC+Te+GPj6SljsnOb+SpTic9RVvZiMyWO+L+BDDzjBhltb91A/g4cAAAAAElFTkSuQmCC";
avatar.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABkElEQVR4nO2YSyuEURyHH8rwLdx2blFSNprktmEhG5+C2JKkZMEnsDZKZOdSysIHkEQuIx8AK7J0dOq8NZ0yY857zPm/Ok/9NjN1+j2dOe/7PwORSKboBlaAU+Da5MR81kUGaAMOAVUmX8AB0IpQhoG3ChKleQXyCKMP+KhCIskn0I8QmoBnB4kkRaARASymkEgyjwDuPIjchJZo9yCRJOhTbNyjyGhIkVmPInqtYIx5FBkJKfJvzojm1oOEnsWCs+BBZA4hb/anFBKPQA4h9DrOWu9AD8LIm4n2txIvwBBCaQH2zZ3jJwH93R7QTAboBJaB45Ib4hGwBHSELheJRCLZIwdMAdvABfBgxhMfuTdr6rUngYa/kpgx/3ioGqUITPsUqAe2aiigrGyaDqnZCCihTNbTSkwIkFBmPtPXaif0dl4JkFAml0Cdi8iggPLKyoCLyJqA4srKqovIroDiysqOi8iZgOLKiu5UNecCiisrulMUUQJ2QsUdIZ4R4k+LeEbKU/B4+/OVQoXOkQie+QY59KcNhbK46gAAAABJRU5ErkJggg==";
avatar.style.marginTop = "10px"; // 可以根据需要调整头像和消息块的间距
avatar.style.width = "30px"; // 可以根据需要调整宽度
avatar.style.height = "30px"; // 可以根据需要调整高度

// 将用户消息块和头像添加到容器
userMessageContainer.appendChild(msgDiv);
userMessageContainer.appendChild(avatar);

// 将容器添加到聊天内容区域
chatContent.appendChild(userMessageContainer);
}
    });
    chatContent.scrollTop = chatContent.scrollHeight;
}

    // ... 已有代码 ...
displayHistory();



// 跟随网页变化主题色
function updateHeaderTheme() {
// 1. 尝试获取网页的主题色meta标签
const themeColorMeta = document.querySelector('meta[name="theme-color"]');
if (themeColorMeta && themeColorMeta.content) {
    applyThemeColor(themeColorMeta.content);
    return;
}

// 2. 智能分析页面主色调
getDominantColor().then(color => {
    applyThemeColor(color);
}).catch(() => {
    // 3. 回退到随机柔和色
    applyRandomColor();
});
}

// 使用Canvas分析页面主色调（性能优化版）
function getDominantColor() {
return new Promise((resolve, reject) => {
    try {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        // 设置较小尺寸提高性能
        canvas.width = 50;
        canvas.height = 50;

        // 绘制页面缩略图
        ctx.drawWindow(window, 0, 0, canvas.width, canvas.height, 'rgb(255,255,255)');

        // 获取主要颜色
        const pixelData = ctx.getImageData(0, 0, 1, 1).data;
        const color = `rgba(${pixelData[0]}, ${pixelData[1]}, ${pixelData[2]}, 0.2)`;
        resolve(color);
    } catch (e) {
        reject(e);
    }
});
}

// 应用主题色
function applyThemeColor(color) {
// 转换为HSL调整亮度
const hsl = hexToHSL(color);
const adjustedHsl = `hsla(${hsl.h}, ${hsl.s}%, ${Math.min(hsl.l, 85)}%, 0.2)`;

chatHeader.style.setProperty('--header-bg', adjustedHsl);
chatHeader.style.setProperty('--header-text', hsl.l > 50 ? '#222' : '#fff');
}

// 应用随机柔和色
function applyRandomColor() {
const hue = Math.floor(Math.random() * 360);
const color = `hsla(${hue}, 70%, 80%, 0.15)`;
chatHeader.style.setProperty('--header-bg', color);
}

// 辅助函数：HEX转HSL
function hexToHSL(hex) {
// 处理rgb/rgba颜色
if (hex.startsWith('rgb')) {
    const match = hex.match(/(\d+),\s*(\d+),\s*(\d+)/);
    if (match) {
        const r = parseInt(match[1]) / 255;
        const g = parseInt(match[2]) / 255;
        const b = parseInt(match[3]) / 255;
        return rgbToHSL(r, g, b);
    }
}

// 处理hex颜色
let r = 0, g = 0, b = 0;
if (hex.length === 4) {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
} else if (hex.length === 7) {
    r = parseInt(hex.substring(1, 3), 16);
    g = parseInt(hex.substring(3, 5), 16);
    b = parseInt(hex.substring(5, 7), 16);
}
return rgbToHSL(r / 255, g / 255, b / 255);
}

function rgbToHSL(r, g, b) {
const max = Math.max(r, g, b);
const min = Math.min(r, g, b);
let h, s, l = (max + min) / 2;

if (max === min) {
    h = s = 0;
} else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
}

return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100)
};
}

// 初始化调用
updateHeaderTheme();

// 监听主题变化（如暗黑模式切换）
const themeObserver = new MutationObserver(() => {
updateHeaderTheme();
});

themeObserver.observe(document.documentElement, {
attributes: true,
attributeFilter: ['class', 'style']
});

// 监听页面主要元素变化
const resizeObserver = new ResizeObserver(() => {
if (!document.hidden) {
    updateHeaderTheme();
}
});

// 观察页面主要区域
const mainElements = ['body', 'main', '#main', '.main-content'].map(q => document.querySelector(q));
mainElements.forEach(el => {
if (el) resizeObserver.observe(el);
});







    // 各类事件监听

 chatHeader.style.cursor = 'move'; // 设置头部的鼠标样式为可拖动
            let isDraggingWindow = false;     // 窗口是否正在被拖动
            let windowStartX, windowStartY;   // 窗口拖动起始坐标
            let windowInitialLeft, windowInitialTop; // 窗口拖动起始位置

            chatHeader.addEventListener('mousedown', (e) => {
               // 仅左键，且非全屏时才能拖动
               if (e.button !== 0 || chatWindow.classList.contains('fullscreen')) return;
               isDraggingWindow = true;
               windowStartX = e.clientX;
               windowStartY = e.clientY;
               const styles = window.getComputedStyle(chatWindow);
               // 拖动窗口时，通常是基于 left/top 定位
               windowInitialLeft = parseFloat(styles.left) || (window.innerWidth - chatWindow.offsetWidth) / 2; // 读取当前left，若无效则居中
               windowInitialTop = parseFloat(styles.top) || 50; // 读取当前top，若无效则靠近顶部
               e.preventDefault();
               chatWindow.style.userSelect = 'none'; // 拖动时禁止选择窗口内文本
               chatWindow.style.cursor = 'grabbing'; // 窗口拖动时的鼠标样式
            });

            chatHeader.addEventListener('touchstart', (e) => {
                // 仅单指，且非全屏时
                if (e.touches.length !== 1 || chatWindow.classList.contains('fullscreen')) return;
                isDraggingWindow = true;
                const touch = e.touches[0];
                windowStartX = touch.clientX;
                windowStartY = touch.clientY;
                const styles = window.getComputedStyle(chatWindow);
                windowInitialLeft = parseFloat(styles.left) || (window.innerWidth - chatWindow.offsetWidth) / 2;
                windowInitialTop = parseFloat(styles.top) || 50;
                // touchstart 时可以先不阻止默认行为，允许可能的滚动启动
                chatWindow.style.userSelect = 'none';
                chatWindow.style.cursor = 'grabbing';
             }, { passive: true }); // 如果这里不调用 preventDefault，可以是 passive

            // 同样，窗口的移动和结束事件监听 document
            document.addEventListener('mousemove', (e) => {
                if (!isDraggingWindow) return; // 必须是窗口启动的拖动
                const deltaX = e.clientX - windowStartX;
                const deltaY = e.clientY - windowStartY;
                const newLeft = windowInitialLeft + deltaX;
                const newTop = windowInitialTop + deltaY;

                // 窗口边界检查
                const maxLeft = window.innerWidth - chatWindow.offsetWidth;
                const maxTop = window.innerHeight - chatWindow.offsetHeight;
                const clampedLeft = Math.max(0, Math.min(newLeft, maxLeft));
                const clampedTop = Math.max(0, Math.min(newTop, maxTop));

                // 更新窗口位置 (使用 left/top)
                chatWindow.style.left = `${clampedLeft}px`;
                chatWindow.style.top = `${clampedTop}px`;
                chatWindow.style.right = 'auto'; // 确保 right/bottom 是 auto
                chatWindow.style.bottom = 'auto';
            });

             document.addEventListener('touchmove', (e) => {
                if (!isDraggingWindow || e.touches.length !== 1) return; // 必须是窗口启动的拖动且单指
                 e.preventDefault(); // 拖动窗口时，必须阻止页面滚动
                const touch = e.touches[0];
                const deltaX = touch.clientX - windowStartX;
                const deltaY = touch.clientY - windowStartY;
                const newLeft = windowInitialLeft + deltaX;
                const newTop = windowInitialTop + deltaY;

                const maxLeft = window.innerWidth - chatWindow.offsetWidth;
                const maxTop = window.innerHeight - chatWindow.offsetHeight;
                const clampedLeft = Math.max(0, Math.min(newLeft, maxLeft));
                const clampedTop = Math.max(0, Math.min(newTop, maxTop));

                chatWindow.style.left = `${clampedLeft}px`;
                chatWindow.style.top = `${clampedTop}px`;
                chatWindow.style.right = 'auto';
                chatWindow.style.bottom = 'auto';
            }, { passive: false }); // 这里需要 passive: false 因为调用了 preventDefault

            // 统一处理窗口拖动结束的函数
            const endWindowDrag = () => {
                if (isDraggingWindow) {
                    isDraggingWindow = false;
                    chatWindow.style.userSelect = ''; // 恢复文本选择
                    chatWindow.style.cursor = '';     // 恢复窗口默认光标
                    // 根据是否全屏恢复头部的光标
                    chatHeader.style.cursor = chatWindow.classList.contains('fullscreen') ? 'default' : 'move';
                }
            };

            document.addEventListener('mouseup', endWindowDrag);
            document.addEventListener('touchend', endWindowDrag);
            document.addEventListener('mouseleave', endWindowDrag); // 鼠标离开窗口也要结束拖动
            document.addEventListener('touchcancel', endWindowDrag); // 触摸取消也要结束
            customCaptureBtn.addEventListener('click', () => {
        const currentSelectors = config.customSelectors || '';
        const newSelectors = prompt(`当前页面可用元素选择器(多个用逗号分隔):
    例如: .article.post, #main-content.featured, #example .example, div[class*="container"][class*="fluid"]
    当前规则: ${currentSelectors}`, currentSelectors);

                if (newSelectors !== null) {
                    config.customSelectors = newSelectors;
                    GM_setValue('customSelectors', config.customSelectors);
                    alert('自定义抓取规则已保存!');
                }
            });

            closeBtn.addEventListener('click', () => {
                chatWindow.classList.remove('active');
                chatWindow.style.display = 'none';
                icon.style.display = 'flex';
            });

            fullscreenBtn.addEventListener('click', () => {
                chatWindow.classList.toggle('fullscreen');
                if (chatWindow.classList.contains('fullscreen')) {
                    fullscreenBtn.innerText = '⛶';
                    // 全屏时禁用拖动
                    chatHeader.style.cursor = 'default';
                } else {
                    fullscreenBtn.innerText = '⛶';
                    // 退出全屏时恢复拖动
                    chatHeader.style.cursor = 'move';
                }
            });

            contextCheckbox.addEventListener('change', () => {
                config.usePageContext = contextCheckbox.checked;
                GM_setValue('usePageContext', config.usePageContext);
            });

            settingsBtn.addEventListener('click', () => {
               /* const newCustomSelectors = prompt('自定义抓取规则(CSS选择器，多个用逗号分隔，留空默认全文):', config.customSelectors);
        if (newCustomSelectors !== null) {
            config.customSelectors = newCustomSelectors;
            GM_setValue('customSelectors', config.customSelectors);
        }*/
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
        if (confirm('确定要清空所有对话记录吗？这将同时清空当前对话和完整历史记录。')) {
            config.chatHistory = [];
            config.fullConversation = [];
            GM_setValue('chatHistory', config.chatHistory);
            GM_setValue('fullConversation', config.fullConversation);
            chatContent.innerHTML = '';
        }
    });
    //点击发送消息
startButton.addEventListener('click', () => {
const message = inputBox.value.trim();
         if (message == "dskds") {
if (confirm('激活成功，使用内置api')) {
  config.model = "deepseek-v3-250324";
     config.apiKey = "ae75309e-e48e-4bb5-8374-a73fb206d4c2";
     config.apiUrl = "https://ark.cn-beijing.volces.com/api/v3/chat/completions";
     GM_setValue('apiUrl', config.apiUrl);

    GM_setValue('apiKey', config.apiKey);

    GM_setValue('model', config.model);
     inputBox.value = '';
}
 }else if(message == 'dskzp'){
     if (confirm('激活成功，使用内置api')) {
  config.model = "THUDM/GLM-4-32B-0414";
     config.apiKey = "sk-vlyhjprkmppnkatcgirrjckzisxjdrhjtnujzsvibjyncfjw";
     config.apiUrl = "https://api.siliconflow.cn/v1/chat/completions";
     GM_setValue('apiUrl', config.apiUrl);

    GM_setValue('apiKey', config.apiKey);

    GM_setValue('model', config.model);
     inputBox.value = '';
 }
}else if(message != '') {
                sendMessage(message);
                inputBox.value = '';
            }
       else{
       alert("发送消息不能为空！");
       }
});
    inputBox.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            startButton.style.display = 'none';
            e.preventDefault();
            const message = inputBox.value.trim();
            if (message) {
                sendMessage(message);
                inputBox.value = '';
               // startButton.style.display = 'flex';
            }
        }
    });
    //隐藏默认配置
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

//抓取网页内容
function getPageContent() {
if (config.customSelectors && config.customSelectors.trim()) {
    try {
        const selectors = config.customSelectors.split(',').map(s => s.trim()).filter(s => s);
        let combinedContent = '';

        for (const selector of selectors) {
            const elements = document.querySelectorAll(selector);
            if (elements.length > 0) {
                // 合并所有匹配元素的内容
                const selectorContent = Array.from(elements)
                    .map(el => el.textContent.trim())
                    .filter(text => text.length > 0)
                    .join('\n\n');

                if (selectorContent.length > 0) {
                    // 添加选择器标识和内容
                    combinedContent += (combinedContent ? '\n\n' : '') +
                                     `[来自${selector}div区域的内容]:\n${selectorContent}`;
                }
            }
        }

        if (combinedContent.length > 0) {
            return {
                url: window.location.href,
                title: document.title,
                content: combinedContent,
                charset: document.characterSet,
                wordCount: combinedContent.split(/\s+/).length,
                source: 'custom'
            };
        }
    } catch (e) {
        console.error('使用自定义选择器抓取内容失败:', e);
        // 失败后回退到默认抓取方式
    }
}
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
const MAX_LENGTH = 100000;
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

//跟随绘制界面

/**
* 根据当前图标位置智能计算并设置聊天窗口的位置 (使用 top/left)
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
            left: iconRect.left, top: iconRect.top, right: iconRect.right, bottom: iconRect.bottom, width: iconRect.width, height: iconRect.height
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
    iconRect = { left: defaultLeft, top: defaultTop, right: defaultLeft + 50, bottom: defaultTop + 50, width: 50, height: 50, toJSON: () => ({left:defaultLeft, top:defaultTop, right:defaultLeft+50, bottom:defaultTop+50, width:50, height:50}) };
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
console.log('最终将应用的定位:', {left: Math.round(finalPosition.left), top: Math.round(finalPosition.top)});

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

// 代码实时执行
icon.addEventListener('click', (e) => {
if (!hasMoved) {
    // --->>> 在这里调用定位函数 <<<---
    positionChatWindow();

    chatWindow.classList.toggle('active');

}
});
// 代码实时执行

function Add_codebutton(pres){
// 只为没有处理过的代码块添加按钮
if (!pres.hasAttribute('data-buttons-added') &&
    !pres.nextElementSibling?.classList?.contains('code-buttons-container')) {
    addExecuteButton(pres);
}
}
// 为代码块添加运行按钮
function addExecuteButton(preElement) {
 const code = preElement.textContent;
const codeType = detectCodeType(code);

if (codeType === 'python' || codeType === 'html') {
   // console.log(`解码为：${codeType}`);
// 创建按钮容器
const btnContainer = document.createElement('div');
btnContainer.className = 'code-buttons-container';
btnContainer.style.position = 'relative';

// 创建运行按钮

const runBtn = document.createElement('button');
runBtn.className = 'code-hexecute-btn';
runBtn.textContent = '运行';
runBtn.onclick = function(e) {
    e.stopPropagation();
    const code = preElement.textContent;
    const lang = detectCodeType(code);
    executeCode(code, lang);
};

// 将按钮容器插入到pre元素后面
preElement.parentNode.insertBefore(btnContainer, preElement.nextSibling);

// 将运行按钮添加到容器底部
btnContainer.appendChild(runBtn);
}
}


// 创建代码执行弹窗

function createExecutionModal() {
const existingModal = document.querySelector('.code-execution-modal');
        if (existingModal) {
    existingModal.remove();
}


    const modal = document.createElement('div');
    modal.className = 'code-execution-modal';
    modal.innerHTML = `
        <div class="code-execution-content">
            <div class="code-execution-header">
                <h3 style= "color: white;">代码执行结果<span id="code-timer-status"></span></h3>
                <div style="display: flex; align-items: center;">
                    <button id="examples-btn" style="margin-right: 10px; background-color: #2196F3; color: white; border: none; border-radius: 4px; padding: 5px 10px; cursor: pointer;">示例</button>
                    <span class="fullscreen-btn" onclick="toggleFullscreen()">⛶</span>
                    <span class="code-execution-close">&times;</span>
                </div>
            </div>
            <div class="code-execution-body">
                <iframe id="code-sandbox"></iframe>
                <div id="code-status-bar">等待执行...</div>
                <div class="input-group" id="input-container" style="display: none; margin-top: 10px;">
                    <input type="text" id="python-input" placeholder="请输入内容..." style="padding: 8px; width: 70%; margin-right: 10px;">
                    <button id="submit-input" style="padding: 8px 16px; background-color: #4CAF50; color: white; border: none; border-radius: 4px; cursor: pointer;">提交</button>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    // 事件监听
    modal.querySelector('.code-execution-close').onclick = closeExecutionModal;
    modal.querySelector('.fullscreen-btn').onclick = toggleFullscreen;

    // 设置Python输入提交按钮事件
    const submitBtn = modal.querySelector('#submit-input');
    if (submitBtn) {
        submitBtn.addEventListener('click', () => {
            const inputValue = modal.querySelector('#python-input').value;
            const outputElement = document.getElementById('output') ||
                                 document.querySelector('#code-sandbox').contentDocument.getElementById('output');
            if (outputElement) {
                outputElement.textContent += `${inputValue}\n`;
            }
            modal.querySelector('#python-input').value = '';
            if (pyodide && pyodide.globals) {
                pyodide.globals.get('_resolve_input')(inputValue);
            }
        });
    }

    // Python输入框回车事件
    const inputField = modal.querySelector('#python-input');
    if (inputField) {
        inputField.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                modal.querySelector('#submit-input').click();
            }
        });
    }

    // 示例按钮事件
    const examplesBtn = modal.querySelector('#examples-btn');
    if (examplesBtn) {
        examplesBtn.addEventListener('click', showPythonExamples);
    }
}



// 切换全屏模式
function toggleFullscreen() {
    const modal = document.querySelector('.code-execution-modal');
    modal.classList.toggle('fullscreen');
}

// 关闭代码执行弹窗
function closeExecutionModal() {
    document.querySelector('.code-execution-modal').style.display = 'none';
     //chatWindow.classList.add('active');
     chatWindow.style.display = 'flex';
}

// 检测代码语言
function detectCodeLanguage(code) {
    // 使用更精确的代码类型检测
    return detectCodeType(code);
}

// 执行代码并显示弹窗
async function executeCode(code, lang) {
// 确保弹窗存在
if (!document.querySelector('.code-execution-modal')) {
    createExecutionModal();
}

const modal = document.querySelector('.code-execution-modal');
const iframe = document.getElementById('code-sandbox');
const statusBar = document.getElementById('code-status-bar');
const sandbox = modal.querySelector('#code-sandbox');


// 重置弹窗状态
modal.style.display = 'flex';
chatWindow.style.display = 'none';//关闭聊天框
statusBar.textContent = '准备执行代码...';
statusBar.className = '';

// 根据语言设置执行环境
if (lang === 'python') {
    //initializePyodide();
    executePythonCode(code, statusBar,sandbox);
}else if(lang== 'html'){
    executeHtmlCode(code,statusBar,sandbox);
} else {
    statusBar.textContent = `不支持执行 ${lang} 代码`;
    statusBar.className = 'status-error';
}

// 添加关闭按钮事件
const closeBtn = modal.querySelector('.code-execution-close');
closeBtn.onclick = function() {
    modal.style.display = 'none';
    // 重置iframe以清除之前执行的状态
    iframe.src = 'about:blank';
     chatWindow.style.display = 'flex';//关闭聊天框
};
}
// 执行Python代码
async function executePythonCode(code, statusBar, sandbox) {
    if (!pyodide) {
        updateStatus(statusBar, "加载Pyodide环境...", "running");
        const initialized = await initializePyodide();
        if (!initialized) {
            updateStatus(statusBar, "Pyodide环境加载失败，请刷新页面重试", "error");
            return false;
        }
    }

    if (isPythonRunning) {
        updateStatus(statusBar, "有Python代码正在执行，请等待或停止当前执行", "error");
        return false;
    }

    isPythonRunning = true;
    updateStatus(statusBar, "正在执行Python代码...", "running");

    try {
        // 清空iframe
        sandbox.srcdoc = `
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body {
                        font-family: monospace;
                        margin: 0;
                        padding: 10px;
                        white-space: pre-wrap;
                        background-color: #f8f9fa;
                        color: #24292e;
                        line-height: 1.5;
                    }
                    .error {
                        color: #d32f2f;
                        background-color: #ffebee;
                        padding: 5px;
                        border-radius: 4px;
                        margin: 5px 0;
                    }
                    #output {
                        overflow-y: auto;
                        max-height: 100%;
                    }
                    table {
                        border-collapse: collapse;
                        width: 100%;
                        margin: 10px 0;
                    }
                    th, td {
                        border: 1px solid #ddd;
                        padding: 8px;
                        text-align: left;
                    }
                    th {
                        background-color: #f2f2f2;
                    }
                    tr:nth-child(even) {
                        background-color: #f9f9f9;
                    }
                    img {
                        max-width: 100%;
                        height: auto;
                        margin: 10px 0;
                    }
                </style>
            </head>
            <body><div id="output">正在执行Python代码，请稍候...</div></body>
            </html>
        `;

        // 等待iframe加载完成
        await new Promise(resolve => {
            sandbox.onload = resolve;
        });

        // iframe的output元素
        const outputElement = sandbox.contentDocument.getElementById('output');
        outputElement.textContent = '';

        // 设置全局output元素引用，以便handleStdout和handleStderr函数使用
        window.pyodideOutputElement = outputElement;

        // 添加显示帮助函数
        await pyodide.runPythonAsync(`
            import sys
            import io
            import base64
            from js import document, pyodideOutputElement

            # 显示图表和数据帮助函数
            def show_matplotlib_figure(fig=None, clear=True):
                """显示matplotlib图表"""
                import matplotlib.pyplot as plt
                from js import pyodideOutputElement

                # 如果没有传入图表，使用当前图表
                if fig is None:
                    fig = plt.gcf()

                # 转为base64
                buf = io.BytesIO()
                fig.savefig(buf, format='png')
                buf.seek(0)
                img_str = base64.b64encode(buf.read()).decode('utf-8')

                # 添加到输出
                img_tag = f'<img src="data:image/png;base64,{img_str}" />'
                if hasattr(pyodideOutputElement, 'innerHTML'):
                    pyodideOutputElement.innerHTML += img_tag

                # 清除当前图表
                if clear:
                    plt.clf()

            def show_dataframe(df, max_rows=20):
                """显示Pandas DataFrame为HTML表格"""
                from js import pyodideOutputElement

                # 转为HTML
                html = df.head(max_rows).to_html()

                # 添加更多行信息
                if len(df) > max_rows:
                    html += f"<p>只显示前{max_rows}行，总共{len(df)}行</p>"

                # 添加到输出
                if hasattr(pyodideOutputElement, 'innerHTML'):
                    pyodideOutputElement.innerHTML += html

            # 添加到全局命名空间
            globals()['show_plot'] = show_matplotlib_figure
            globals()['show_df'] = show_dataframe

            # 修改Pandas的显示行为
            try:
                import pandas as pd
                pd.set_option('display.max_rows', 20)

                # 添加表格输出方法
                original_repr_html = pd.DataFrame._repr_html_
                def enhanced_repr_html(self):
                    # 限制输出行数
                    if len(self) <= 20:
                        return original_repr_html(self)
                    else:
                        return self.head(20)._repr_html_() + f"<p>只显示前20行，总共{len(self)}行</p>"

                # 使用猴子补丁替换方法
                pd.DataFrame._repr_html_ = enhanced_repr_html
            except:
                pass
        `);

        // 设置超时
        const timeoutPromise = new Promise((_, reject) => {
            setTimeout(() => reject(new Error("执行超时")), 30000);
        });

        // 在代码前添加辅助代码 - 用于自动显示matplotlib图表
        const enhancedCode = `
# 捕获输出的帮助函数
def _run_user_code():
    # 自动显示matplotlib图表
    try:
        import matplotlib.pyplot as plt
        original_show = plt.show
        def auto_show(*args, **kwargs):
            show_plot(plt.gcf())
            return original_show(*args, **kwargs)
        plt.show = auto_show
    except:
        pass

    # 用户代码开始执行
    ${code}
    # 用户代码执行结束

    # 检查是否有未显示的图表
    try:
        import matplotlib.pyplot as plt
        if plt.get_fignums():  # 如果有打开的图表
            # 显示但不清除，避免重复显示
            show_plot(plt.gcf(), clear=False)
    except:
        pass

# 执行用户代码
_run_user_code()
`;

        // 直接执行用户代码
        const executionPromise = pyodide.runPythonAsync(enhancedCode).then(result => {
            if (result !== undefined) {
                const resultStr = String(result);
                if (resultStr) {
                    outputElement.textContent += "\n结果: " + resultStr;
                }
            }
            return true;
        });

        // 使用Promise.race竞争超时
        await Promise.race([executionPromise, timeoutPromise]);

        updateStatus(statusBar, "执行完成", "success");
        return true;
    } catch (error) {
        console.error("Python执行错误:", error);

        const outputElement = sandbox.contentDocument.getElementById('output');
        if (outputElement) {
            let errorMessage = error.message || String(error);

            // 格式化Python错误
            if (errorMessage.includes('Traceback')) {
                // 保持原始格式，但添加颜色
                errorMessage = errorMessage.replace(/\n/g, '<br>').replace(/\s{2,}/g, match => '&nbsp;'.repeat(match.length));
            }

            outputElement.innerHTML += `<div class="error">执行错误: ${errorMessage}</div>`;
        }

        updateStatus(statusBar, `执行出错`, "error");
        return false;
    } finally {
        isPythonRunning = false;
        // 确保输入容器被隐藏
        const inputContainer = document.getElementById('input-container');
        if (inputContainer) {
            inputContainer.style.display = 'none';
        }
    }
}

// 执行HTML/CSS/JS代码
function executeHtmlCode(code, statusBar, sandbox) {
    console.log(code);
    updateStatus(statusBar, '正在执行HTML/CSS/JS代码...', 'running');

    try {
        // 清空状态栏
        statusBar.textContent = '';

        // 在iframe中执行代码
        const doc = sandbox.contentDocument || sandbox.contentWindow.document;
        doc.open();
        doc.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body { font-family: Arial, sans-serif; padding: 20px; }
                </style>
            </head>
            <body>
                ${code.includes('<html') ? '' : '<div id="output"></div>'}
                ${code}
            </body>
            </html>
        `);
        doc.close();

        updateStatus(statusBar, '✅执行完成', 'success');
    } catch (e) {
        appendStatus(statusBar, `❌执行错误: ${e}`, 'error');
    }
}

// 更新状态
function updateStatus(element, message, type) {
    element.textContent = message;
    element.className = type ? `status-${type}` : '';

    // 根据类型设置颜色
    switch(type) {
        case 'running':
            element.style.color = '#2196F3';
            break;
        case 'success':
            element.style.color = '#4CAF50';
            break;
        case 'error':
            element.style.color = '#F44336';
            break;
        default:
            element.style.color = '#757575';
    }
}

// 追加状态信息
function appendStatus(element, message, type = '') {
    const line = document.createElement('div');
    line.textContent = message;

    // 根据类型设置样式
    switch(type) {
        case 'running':
            line.style.color = '#2196F3';
            break;
        case 'success':
            line.style.color = '#4CAF50';
            break;
        case 'error':
            line.style.color = '#F44336';
            break;
        default:
            line.style.color = '#757575';
    }

    if (type) line.className = `status-${type}`;
    element.appendChild(line);
    element.scrollTop = element.scrollHeight;
}
            // 流式响应处理 (立即更新DOM版本，适配 GM_xmlhttpRequest 的 onload)
// ... 已有代码 ...

// 流式响应处理 (立即更新DOM版本，适配 GM_xmlhttpRequest 的 onload)
function handleStreamResponse(responseStream, aiMsgDiv, thinkingMsgDiv,isSummaryTask = false) { // 移除了 isSummaryTask 等参数，让 sendMessage 管理历史
return new Promise((resolve, reject) => {
    let aiMessage = '🤖：';
    let reasoningMessage = '';
    let isReasoningReceived = false;
    let isReasoningFinished = false;
    let isStopped = false; // 新增：停止标志
    let reasoningTitleDiv;

    // --- DOM 元素准备 ---
    aiMsgDiv.innerHTML = ''; // 清空容器

    aiMsgDiv.className = 'ds-chat-message ds-ai-message'; // 设置基础 class


    const contentDiv = document.createElement('div'); // 用于主内容
    aiMsgDiv.appendChild(contentDiv);

    const reasoningDiv = document.createElement('div'); // 用于思考过程
    reasoningDiv.className = 'ds-reasoning-content';
    reasoningDiv.style.display = 'none'; // 初始隐藏
     aiMsgDiv.appendChild(reasoningDiv);
     aiMsgDiv.appendChild(contentDiv);

    const stopButton = document.createElement('button');
    stopButton.className = 'ds-stop-button';
    stopButton.title = "停止发送";
     stopButton.innerHTML = `<img class= "ds-stop-img" style="width: 20px !important;height:20px !important; max-width: none !important" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAzklEQVR4nN2UQQ6CMBBFXzBwPQkqXEnFW2jwSKKIdzC4r5mkbkiBAuOGn/ykbdr/kmk7sHRFQAYUQAl8rEu7lto9k7QBasAM+AkkY4JXwMkj2LScA4EPYEq4sT74lMXMdNwVHtl6zgW8ui4+6zn0U9e87R0OXRUBFxfgoQgoXYBGEdD8G/B2Ae6KgJsLUCgCzi5AqgjYugAhUCl8tLqvwyYKgDUDymeE7/GQtNzjxE4aMEKx551UPmXpUmgbl/QWedvyGcUyljV5LbJnwfoCdM0XOTBjz24AAAAASUVORK5CYII=" alt="circled-pause">`;
    startButton.style.display = "none";
     chatWindow.appendChild(stopButton);

    // 停止按钮点击事件
    stopButton.addEventListener('click', () => {
        isStopped = true;

        stopButton.remove();
        aiMsgDiv.innerHTML = 'AI输出中止！！！'; // 清空容器
        config.chatHistory.push({ role: 'system', content: 'user中断了对话输出....'});
                    //config.fullConversation.push({role:'system',conetnt:aiMessage.slice(3)});
        GM_setValue('chatHistory', config.chatHistory);
        resolve(); // 提前结束Promise
    });


    // --- DOM 元素准备结束 ---

    const decoder = new TextDecoder();
    let buffer = '';

    // --- 获取 Reader ---
    const reader = responseStream.getReader();
    console.log('handleStreamResponse: Stream reader obtained.');
    // --- Reader 获取结束 ---

    function readStream() {
          if (isStopped) return; // 如果已停止，不再继续读取
        reader.read().then(({ done, value }) => {
            if (done) {
                console.log('流读取完成');
                const aiTokens = countTokens( aiMessage.slice(3) +reasoningTitleDiv.innerText);
                    // 在aiMsgDiv内部查找或添加token信息区域
                    let tokenInfo = aiMsgDiv.querySelector('.ds-token-info');
                    if (!tokenInfo) {
                         tokenInfo = document.createElement('div');
                         tokenInfo.className = 'ds-token-info';
                         // 将 tokenInfo 放在消息内容的末尾
                         aiMsgDiv.appendChild(tokenInfo);
                    }
                     tokenInfo.innerHTML = `<small>AI Response: ${aiTokens} tokens</small>`;

                    updateConversationTokenCount(); // 更新总计
                stopButton.remove(); // 完成后移除停止按钮

                    const aiResponse = {
                    role: 'assistant',
                    content: aiMessage.slice(3), // 去掉"🤖："
                    timestamp: new Date().toISOString(),
                    hasReasoning: isReasoningReceived,
                    reasoningContent: isReasoningReceived ? reasoningMessage : null
                };
                config.fullConversation.push(aiResponse);
                GM_setValue('fullConversation', config.fullConversation);
                    if (!isSummaryTask && aiMessage.trim()) {
                    config.chatHistory.push({ role: 'system', content: aiMessage.slice(3) });
                    //config.fullConversation.push({role:'system',conetnt:aiMessage.slice(3)});
                    GM_setValue('chatHistory', config.chatHistory);
                        //console.log(config.fullConversation);
                  // GM_setValue('fullConversation',config.fullConversation);
                }
                // 如果是总结任务，只添加简化的用户消息
                else if (isSummaryTask) {
                    //config.chatHistory.push({ role: 'user', content: '总结当前网页...' });
                    config.chatHistory.push({ role: 'system', content: aiMessage.slice(3) });
                    //config.fullConversation.push({role:'system',conetnt:aiMessage.slice(3)});
                    GM_setValue('chatHistory', config.chatHistory);
                   // GM_setValue('fullConversation',config.fullConversation);
                }
                        const actionsDiv = document.createElement('div');
                    actionsDiv.className = 'ds-message-actions';

                    const triggerSpan = document.createElement('span');
                    triggerSpan.className = 'ds-actions-trigger';
                    triggerSpan.textContent = '...';
                    triggerSpan.title = '更多操作';

                    const copyConvButton = document.createElement('button');
                    copyConvButton.className = 'ds-copy-conversation-btn';
                    copyConvButton.textContent = 'copy';

                    actionsDiv.appendChild(triggerSpan);
                    actionsDiv.appendChild(copyConvButton);
                    aiMsgDiv.appendChild(actionsDiv);

                    triggerSpan.addEventListener('click', (e) => {
                        e.stopPropagation(); // Prevent triggering other clicks
                        const isVisible = copyConvButton.style.display !== 'none';
                        copyConvButton.style.display = isVisible ? 'none' : 'inline-block';
                    });

                    copyConvButton.addEventListener('click', (e) => {
                        e.stopPropagation();
                        let conversationText = '';
                        config.fullConversation.forEach(msg => {
                            const role = 'AI';
                            const time = msg.timestamp ? new Date(msg.timestamp).toLocaleTimeString() : '';

                            if (msg.role === 'assistant' && msg.hasReasoning && msg.reasoningContent) {
                                conversationText += `  (Thinking: ${msg.reasoningContent.replace(/\n/g, '\n  ')})\n`;
                            }
                            conversationText = `${role} [${time}]:\n`+`${aiMessage.slice(3)}\n\n`;
                        });

                        navigator.clipboard.writeText(conversationText.trim()).then(() => {
                            copyConvButton.textContent = '已copy!';
                            copyConvButton.style.backgroundColor = '#28a745';
                            setTimeout(() => {
                                copyConvButton.textContent = 'copy';
                                copyConvButton.style.backgroundColor = '#666';
                                copyConvButton.style.display = 'none'; // Hide after copying
                            }, 1500);
                        }).catch(err => {
                            console.error('copy对话失败:', err);
                            copyConvButton.textContent = '失败';
                            setTimeout(() => {
                                copyConvButton.textContent = 'copy';
                                copyConvButton.style.display = 'none';
                            }, 1500);
                        });
                    });

                // 如果接收到过思考内容，在结束时保留 "思考内容：" 提示
                if (isReasoningReceived) {
                    if (!reasoningTitleDiv) {
                        reasoningTitleDiv = document.createElement('div');
                        reasoningTitleDiv.className = 'ds-reasoning-title';
                        reasoningTitleDiv.innerText = '思考内容💭：';
                        aiMsgDiv.insertBefore(reasoningTitleDiv, reasoningDiv);
                    }
                    reasoningDiv.querySelectorAll('pre:not([data-buttons-added])').forEach(pre => {
                        addButtonsToPre(pre);
                         const codeElement = pre.querySelector('code');
                         if (codeElement && !codeElement.classList.contains('hljs-added')) {
                            try {
                                hljs.highlightElement(codeElement);
                                 codeElement.classList.add('hljs-added');
                            } catch (e) { console.error("Highlight.js error (Reasoning):", e); }
                         }
                    });
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
                //stopButton.remove(); // 出错时也移除停止按钮
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
                        if (data.choices?.[0]?.delta?.content) {
                            const newContent = data.choices[0].delta.content;
                            aiMessage += newContent;
                            contentDiv.innerHTML = marked.parse(aiMessage);
                            contentDiv.querySelectorAll('pre code').forEach((block) => {
                                hljs.highlightElement(block);
                            });
                            addCopyButtonsToCodeBlocks(contentDiv);
                             Add_codebutton();
                            // 示例：只在用户当前已经接近底部时自动滚动
const isNearBottom = chatContent.scrollHeight - chatContent.scrollTop - chatContent.clientHeight < 200;
if (isNearBottom) {
chatContent.scrollTop = chatContent.scrollHeight;
}
                        }
                        if (data.choices?.[0]?.delta?.reasoning_content) {
                            //console.log(data.choices?.[0]?.delta?.reasoning_content);
                            const newReasoningContent = data.choices[0].delta.reasoning_content;
                            reasoningMessage += newReasoningContent;
                            reasoningDiv.innerHTML = marked.parse(reasoningMessage);
                            reasoningDiv.querySelectorAll('pre code').forEach((block) => {
                                hljs.highlightElement(block);
                            });
                            addCopyButtonsToCodeBlocks(reasoningDiv);
                             Add_codebutton();
                             reasoningDiv.style.display = 'block'; // 就是缺少这一句！
                            // 示例：只在用户当前已经接近底部时自动滚动
const isNearBottom = chatContent.scrollHeight - chatContent.scrollTop - chatContent.clientHeight < 200;
if (isNearBottom) {
chatContent.scrollTop = chatContent.scrollHeight;
}
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
                       stopButton.remove(); // 出错时也移除停止按钮
                        console.warn('解析响应数据失败:', parseError, '行内容:', line);
                    }
                }
            }

            readStream();
        }).catch(error => {
            stopButton.remove(); // 出错时也移除停止按钮
            console.error('读取流时出错:', error);
            reject(error);
        });
    }

    readStream();
});
}


// ==========================================================
// ... 已有代码 ...
// 计算消息的 token 数量（简单估算）


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
//发送用户请求
async function sendMessage(message, retryCount = 0, isSummaryTask = false) {
startButton.style.display = 'none'; // 隐藏发送按钮

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
    // 示例：只在用户当前已经接近底部时自动滚动
const isNearBottom = chatContent.scrollHeight - chatContent.scrollTop - chatContent.clientHeight < 100;
if (isNearBottom) {
chatContent.scrollTop = chatContent.scrollHeight;
}
    return;
}

// 对于总结任务，只添加简化的消息到历史记录
const userMsg = {
    role: 'user',
    content: isSummaryTask ? '正在总结当前网页...' : message
};
config.fullConversation.push({
    role: 'user',
    content: message, // 这里存储原始消息，不简化
    timestamp: new Date().toISOString()
});
GM_setValue('fullConversation', config.fullConversation);
const U_actionsDiv = document.createElement('div');
U_actionsDiv.className = 'ds-message-actions';

const U_triggerSpan = document.createElement('span');
U_triggerSpan.className = 'ds-actions-trigger';
U_triggerSpan.textContent = '...';
U_triggerSpan.title = '更多操作';

const copyConvButton = document.createElement('button');
copyConvButton.className = 'ds-copy-conversation-btn';
copyConvButton.textContent = 'copy';

U_actionsDiv.appendChild(U_triggerSpan);
U_actionsDiv.appendChild(copyConvButton);

// 总是添加到历史记录，但内容会根据isSummaryTask变化
const userMsgDiv = document.createElement('div');
userMsgDiv.className = 'ds-chat-message ds-user-message';
userMsgDiv.innerHTML = marked.parse(isSummaryTask ? '正在总结当前网页...' : (message));
//addCopyButtonsToCodeBlocks(userMsgDiv);
//Add_codebutton();

config.chatHistory.push(userMsg);
GM_setValue('chatHistory', config.chatHistory);


U_triggerSpan.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent triggering other clicks
    const isVisible = copyConvButton.style.display !== 'none';
    copyConvButton.style.display = isVisible ? 'none' : 'inline-block';
});

copyConvButton.addEventListener('click', (e) => {
    e.stopPropagation();
    let conversationText = '';
    config.fullConversation.forEach(msg => {
        const role = 'user';
        const time = msg.timestamp ? new Date(msg.timestamp).toLocaleTimeString() : '';
        conversationText = `${role} [${time}]:\n`+`${message}\n\n`;
    });

    navigator.clipboard.writeText(conversationText.trim()).then(() => {
        copyConvButton.textContent = '已copy!';
        copyConvButton.style.backgroundColor = '#28a745';
        setTimeout(() => {
            copyConvButton.textContent = 'copy';
            copyConvButton.style.backgroundColor = '#666';
            copyConvButton.style.display = 'none'; // Hide after copying
        }, 1500);
    }).catch(err => {
        console.error('copy对话失败:', err);
        copyConvButton.textContent = '失败';
        setTimeout(() => {
            copyConvButton.textContent = 'copy';
            copyConvButton.style.display = 'none';
        }, 1500);
    });
});
// 总是显示用户消息，但内容会根据isSummaryTask变化
//chatContent.appendChild(userMsgDiv);
const userMessageContainer = document.createElement('div');
userMessageContainer.className = 'ds-user-message-container'; // 可自定义类名用于样式调整
userMessageContainer.style.display = 'flex';
userMessageContainer.style.justifyContent = 'flex-end'; // 让内容靠右
// userMessageContainer.style.alignItems = 'center'; // 垂直居中对齐

// 总是添加到历史记录，但内容会根据isSummaryTask变化

// 创建头像元素
const avatar = document.createElement('img');
//avatar.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABQElEQVR4nO2XQW6DMBBFX1gkh0jgCm2XcAXCrixyhybHbNoVvUpF9o6QBqmqWoUah7HVedLfRBj/DzNkDIZhhCQDCqACaqAV1fJbIddESQ40wOGGGrk2GlbA0wTj3zWsGdaq42N+1KO2+XyG+VE7LfPZxJqf0hOZRoAigPmDaLjX4lQBA5QaAfYBA9QaAdqAAdrUAzxrBEi+hKrUm7gIGCDXCJAFKqNGc0JNepQIMcw9EAErmSr/an5YE8U4PbKb2BP7GMrm1pGy/OFIWUrPRHukNAzDuA8b4AS8ARfA3VkX2esoe89iC3wsYNr9ok48eD95TfPuSwivN3GKwLwTvfgEeI/AuBOdfQL0ERh3oj71AJ//soSOERh3c5p4I58wbfMdsMaTrXKIbs4f2chaXuF5ocbugVfZ0/vJG4ZhsAhXSvn7fc8Yyv8AAAAASUVORK5CYII=";
avatar.alt = "user";
//avatar.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB9ElEQVR4nO2Xy0pcQRCGv8jozjF5CU0UXUgWyQMEVCTBvVkJPoAIIuYNdJwJKkQUX0NCHiIEb1mPd8ULExeK4gkNNYsUfdQ5l1gD/UHBcKam6q+equ4+EAgEsqYHKAObwJWY+zwPdGOYNmABuAOiGHPfVYBWDIr/8YBwbd+tFbHQgPi6uX/CTM/rttkCPgLtYp+AbeVzC7zBAGWP+KLHrwPYUb4lDLClRLnVjmNE+W5ggJoS5VomjqLyrWEAPZxZ++dO0xdQa/YW2mz2IZ5XorZly9S4Z7+V7xwG6PYcZDuy2kWxEY94d5C9xgiVBFcJE4dYnVa5oD1V/Lq1yxwiqCKtESf8VmbGnHg9EyXZYf6IbcjAmun5QCDw7/vwILAKHD9hC3U+K8CA/PbZeAl8AU4THGJ1OwFmYq4eueH28GngMoVwbRfAFFDIW/xb4FeGwiNlP4H+vMSPAzcxic+Bb8CHR1axID7LsuqRx66BsSyFvwC+xiQ7AiYeeYmJw91SJx8Y/LLkTkULsOYJfg8syiCn5RWwJDF1npW0RZQ8Qc+AIbJnWFpR55tNGvCzJ9gh0Et+9Elb6ryjSYIdqCD7QCf50+XJvZckkF6Fd/w/3nvyN0zqACmJsi7gua1hmr6AXQOiI7FqkgIGjRRRlat3IBAIYI+/ScbW2EutvLQAAAAASUVORK5CYII=";
//avatar.style.marginLeft = "10px";
//avatar.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA4UlEQVR4nO2SPQ4BQQCFPxqVhoRi6VDsAdxCxVWo9w5OIRsVEhGXoNiGVkdi6ShWJnkSETshRjT7kte8vJ/dmYEMjlADQuAkjoGmy/IDkDzRaJ6LgVCFExUaTqWNXAycVPb4tXVpRxcDscpqvxoYq2yqEcOZNHN8X6MF7FMuuYEjeLrQWAxdlmdIRR5oAwGwBCLgLEbSAnmM920UgAGwe/Fy0mi8fWWtqALrh+AWGAIdwAeKoi9tKM/dvwIqtoGFjBugC+Te+GPj6SljsnOb+SpTic9RVvZiMyWO+L+BDDzjBhltb91A/g4cAAAAAElFTkSuQmCC";
avatar.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABkElEQVR4nO2YSyuEURyHH8rwLdx2blFSNprktmEhG5+C2JKkZMEnsDZKZOdSysIHkEQuIx8AK7J0dOq8NZ0yY857zPm/Ok/9NjN1+j2dOe/7PwORSKboBlaAU+Da5MR81kUGaAMOAVUmX8AB0IpQhoG3ChKleQXyCKMP+KhCIskn0I8QmoBnB4kkRaARASymkEgyjwDuPIjchJZo9yCRJOhTbNyjyGhIkVmPInqtYIx5FBkJKfJvzojm1oOEnsWCs+BBZA4hb/anFBKPQA4h9DrOWu9AD8LIm4n2txIvwBBCaQH2zZ3jJwH93R7QTAboBJaB45Ib4hGwBHSELheJRCLZIwdMAdvABfBgxhMfuTdr6rUngYa/kpgx/3ioGqUITPsUqAe2aiigrGyaDqnZCCihTNbTSkwIkFBmPtPXaif0dl4JkFAml0Cdi8iggPLKyoCLyJqA4srKqovIroDiysqOi8iZgOLKiu5UNecCiisrulMUUQJ2QsUdIZ4R4k+LeEbKU/B4+/OVQoXOkQie+QY59KcNhbK46gAAAABJRU5ErkJggg==";
avatar.style.marginTop = "15px"; // 可以根据需要调整头像和消息块的间距
avatar.style.width = "30px"; // 可以根据需要调整宽度
avatar.style.height = "30px"; // 可以根据需要调整高度


// 示例：只在用户当前已经接近底部时自动滚动
const isNearBottom = chatContent.scrollHeight - chatContent.scrollTop - chatContent.clientHeight < 100;
if (isNearBottom) {
chatContent.scrollTop = chatContent.scrollHeight;
}


// 隐藏发送按钮


// 安全地计算用户消息token
let userTokens = 0;
try {
    userTokens = countTokens(message);
} catch (e) {
    console.error("Error counting tokens:", e);
}



// 安全地添加token数量显示
try {
    const tokenInfo = document.createElement('div');
    tokenInfo.className = 'ds-token-info';
    tokenInfo.innerHTML = `<small>Userinput: ${userTokens} tokens</small>`;
    userMsgDiv.appendChild(tokenInfo);
} catch (e) {
    console.error("Error adding token info:", e);
}


// 安全地更新对话token统计
try {
    updateConversationTokenCount();
} catch (e) {
    console.error("Error updating conversation token count:", e);
}
// 将用户消息块和头像添加到容器
userMessageContainer.appendChild(userMsgDiv);
userMessageContainer.appendChild(avatar);

// 将容器添加到聊天内容区域
chatContent.appendChild(userMessageContainer);

const thinkingMsgDiv = document.createElement('div');
thinkingMsgDiv.className = 'ds-reasoning-title';
thinkingMsgDiv.innerText = '思考中...';
chatContent.appendChild(thinkingMsgDiv);

const aiMsgDiv = document.createElement('div');
aiMsgDiv.className = 'ds-chat-message ds-ai-message';
chatContent.appendChild(aiMsgDiv);

userMsgDiv.appendChild(U_actionsDiv);// 确保用户消息的复制按钮在内容之后

// 构建请求数据 - 总是发送完整消息给AI
const requestData = {
    model: config.model,
    messages: [
        { role: 'assistant', content: config.personalityPrompt },
        ...truncateContext(config.chatHistory, config.maxContextTokens)
    ],
    temperature: config.temperature,
    max_tokens: config.maxTokens,
    stream: true,

};

// 如果是总结任务，添加网页内容作为系统消息
if (isSummaryTask) {
    const pageContent = getPageContent();
    requestData.messages.splice(1, 0, {
        role: 'user',
        content: message,
    });
} else if (config.usePageContext) {
    // 普通对话的网页上下文
    const pageContent = getPageContent();
    requestData.messages.splice(1, 0, {
        role: 'assistant',
        content: `[当前网页信息]\n标题: ${pageContent.title}\nURL: ${pageContent.url}\n正文内容: ${pageContent.content}\n注意：基于以上网页内容，回答问题，如果问题不相关则仅作为上下文扩充参考`
    });
}
    console.log('发送的请求数据:', requestData); // 添加



    // 安全包装的GM_xmlhttpRequest
    try {
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
                    if (typeof handleStreamResponse === 'function') {
                        handleStreamResponse(responseInfo.response, aiMsgDiv, thinkingMsgDiv, isSummaryTask)
                            .then(() => {
                                clearTimeout(timeoutId);

                                // 在流处理完成后安全地更新token统计
                                try {
                                    updateConversationTokenCount();
                startButton.style.display = 'flex';
                                } catch (e) {
                                    console.error("Error updating tokens after response:", e);
                                }
                            })
                            .catch((error) => {
                                clearTimeout(timeoutId);
                                console.error('处理流响应时出错:', error);
                                const errorMsgDiv = document.createElement('div');
                                errorMsgDiv.className = 'ds-chat-message ds-error';
                                errorMsgDiv.innerText = `处理响应时出错: ${error.message || '未知错误'}`;
                                chatContent.appendChild(errorMsgDiv);
                                chatContent.scrollTop = chatContent.scrollHeight;
                                startButton.style.display = 'flex';
                            });
                    } else {
                        throw new Error("handleStreamResponse function is not available");
                    }
                } catch (error) {
                    clearTimeout(timeoutId);
                    console.error("Error in response handling:", error);
                    const existingStopButton = document.querySelector('.ds-stop-button');
                    if (existingStopButton) existingStopButton.remove();
                    startButton.style.display = 'flex';

                    const errorMsgDiv = document.createElement('div');
                    errorMsgDiv.className = 'ds-chat-message ds-error';
                    errorMsgDiv.innerText = `响应处理错误: ${error.message || '未知错误'}`;
                    chatContent.appendChild(errorMsgDiv);
                    chatContent.scrollTop = chatContent.scrollHeight;
                }
            },
            onerror: (error) => {
                clearTimeout(timeoutId);
                if (thinkingMsgDiv.parentNode) {
                    chatContent.removeChild(thinkingMsgDiv);
                }
                const existingStopButton = document.querySelector('.ds-stop-button');
                if (existingStopButton) existingStopButton.remove();

                // 检查是否是重试的错误
                if (retryCount < 2) {
                    console.log(`请求失败，第${retryCount + 1}次重试...`);
                    const retryMsgDiv = document.createElement('div');
                    retryMsgDiv.className = 'ds-chat-message ds-thinking';
                    retryMsgDiv.innerText = `请求失败，正在重试 (${retryCount + 1}/2)...`;
                    chatContent.appendChild(retryMsgDiv);
                    chatContent.scrollTop = chatContent.scrollHeight;

                    // 移除最后添加的AI消息元素
                    if (aiMsgDiv.parentNode) {
                        chatContent.removeChild(aiMsgDiv);
                    }

                    // 短暂延迟后重试
                    setTimeout(() => {
                        if (retryMsgDiv.parentNode) {
                            chatContent.removeChild(retryMsgDiv);
                        }
                        sendMessage(message, retryCount + 1, isSummaryTask);
                    }, 1000);
                } else {
                    console.error('请求失败，不再重试:', error);
                    const errorMsgDiv = document.createElement('div');
                    errorMsgDiv.className = 'ds-chat-message ds-error';
                    errorMsgDiv.innerText = `请求失败: ${error.statusText || '未知错误'}。请检查网络或API设置。`;
                    chatContent.appendChild(errorMsgDiv);
                    chatContent.scrollTop = chatContent.scrollHeight;
                    startButton.style.display = 'flex';
                }
            },
            ontimeout: () => {
                clearTimeout(timeoutId);
                const existingStopButton = document.querySelector('.ds-stop-button');
                if (existingStopButton) existingStopButton.remove();
                if (thinkingMsgDiv.parentNode) {
                    chatContent.removeChild(thinkingMsgDiv);
                }

                const errorMsgDiv = document.createElement('div');
                errorMsgDiv.className = 'ds-chat-message ds-error';
                errorMsgDiv.innerText = '请求超时，请检查网络连接后重试。';
                chatContent.appendChild(errorMsgDiv);
                chatContent.scrollTop = chatContent.scrollHeight;
                startButton.style.display = 'flex';
            }
        });
    } catch (error) {
        clearTimeout(timeoutId);
        console.error('发送消息时出错:', error);
        if (thinkingMsgDiv.parentNode) {
            chatContent.removeChild(thinkingMsgDiv);
        }
        const errorMsgDiv = document.createElement('div');
        errorMsgDiv.className = 'ds-chat-message ds-error';
        errorMsgDiv.innerText = `发送消息时出错: ${error.message || '未知错误'}`;
        chatContent.appendChild(errorMsgDiv);
        chatContent.scrollTop = chatContent.scrollHeight;
        startButton.style.display = 'flex';
    }
}

// 为代码块添加复制按钮
function addButtonsToPre(preElement) {
if (!preElement || typeof preElement !== 'object') {
    console.warn("addButtonsToPre: 无效的 pre 元素");
    return;
}

// 检查是否已经处理过
if (preElement.hasAttribute('data-buttons-added')) {
    return;
}

// 检查是否已有按钮容器
if (preElement.querySelector('.code-buttons-container') ||
    preElement.nextElementSibling?.classList?.contains('code-buttons-container')) {
    preElement.setAttribute('data-buttons-added', 'true');
    return;
}

// 确保 <code> 元素存在且包含代码
let codeElement = preElement.querySelector('code');
if (!codeElement) {
    // 如果没有 <code>，但 <pre> 有文本，则创建 <code> 包裹它
    const textContent = preElement.textContent;
    if (textContent) {
        codeElement = document.createElement('code');
        // 尝试从 pre 的 class 中获取语言信息
        const langMatch = preElement.className.match(/language-(\S+)/);
        if (langMatch && langMatch[1]) {
            codeElement.className = `language-${langMatch[1]}`;
        }
        codeElement.textContent = textContent;
        preElement.innerHTML = ''; // 清空 pre
        preElement.appendChild(codeElement);
    } else {
        // 如果 pre 里没内容，就不添加按钮了
        return;
    }
}

// 确保 <pre> 有 hljs 基础类，方便样式统一
if (!preElement.classList.contains('hljs')) {
    preElement.classList.add('hljs');
}

const codeText = codeElement.textContent;
if (!codeText) return; // 没有代码内容也不加按钮

// 创建【一个】按钮容器
const btnContainer = document.createElement('div');
btnContainer.className = 'code-buttons-container'; // 使用 CSS 控制样式和定位
// 建议 CSS: position: absolute; top: 5px; right: 5px; z-index: 10; display: flex; gap: 5px;
// (需要在你的 CSS 样式中定义 .code-buttons-container 和按钮的样式)

let buttonsAdded = false;

// 1. 添加"copy"按钮
try {
    const copyButton = document.createElement('button');
    copyButton.className = 'copy-code-btn'; // 定义你的copy按钮样式
    copyButton.textContent = 'copy';
    copyButton.title = '复制代码';
    copyButton.addEventListener('click', (e) => {
        e.stopPropagation(); // 阻止事件冒泡到 pre
        navigator.clipboard.writeText(codeText).then(() => {
            copyButton.textContent = '已copy!';
            copyButton.style.backgroundColor = '#4CAF50'; // 成功时的背景色
            copyButton.disabled = true;
            setTimeout(() => {
                copyButton.textContent = 'copy';
                copyButton.disabled = false;
             }, 2000);
        }).catch(err => {
            console.error('copy失败: ', err);
            copyButton.textContent = '失败';
             setTimeout(() => { copyButton.textContent = 'copy'; }, 2000);
        });
    });
    btnContainer.appendChild(copyButton);
    buttonsAdded = true;
} catch (e) {
    console.error("创建copy按钮时出错:", e);
}

// 2. 添加"运行"按钮 (如果适用)
try {
    const codeType = detectCodeType(codeText);
    if (codeType === 'python' || codeType === 'html') {
        const runBtn = document.createElement('button');
        runBtn.className = 'code-execute-btn'; // 定义你的运行按钮样式
        runBtn.textContent = '运行';
        runBtn.title = `在线运行 ${codeType} 代码`;
        runBtn.onclick = function(e) {
            e.stopPropagation();
            // 确保 executeCode 函数可用
            if (typeof executeCode === 'function') {
                executeCode(codeText, codeType);
            } else {
                console.error("executeCode 函数未定义！");
                alert("代码执行功能当前不可用。");
            }
        };
        btnContainer.appendChild(runBtn); // 添加到【同一个】容器
        buttonsAdded = true;
    }
} catch (e) {
    console.error("创建运行按钮时出错:", e);
}

// 只有当成功添加了至少一个按钮时，才将容器添加到 pre 元素
if (buttonsAdded) {
    // 将容器添加到 pre 元素内部的起始位置，方便用 CSS 定位到右上角
    preElement.prepend(btnContainer);
    // 标记已处理
    preElement.setAttribute('data-buttons-added', 'true');
}
}




function addCopyButtonsToCodeBlocks(container) {
    // 遍历所有 pre 元素（不仅仅是已高亮的）
    container.querySelectorAll('pre').forEach(pre => {
        // 强制添加 hljs 类确保样式应用
        if (!pre.classList.contains('hljs')) {
            pre.classList.add('hljs');
        }

        // 检查是否已经有按钮容器，如果有则跳过
        if (pre.querySelector('.code-buttons-container') ||
            pre.nextElementSibling?.classList?.contains('code-buttons-container')) {
            return;
        }

        // 如果不存在代码元素则自动创建
        if (!pre.querySelector('code')) {
            const code = document.createElement('code');
            code.textContent = pre.textContent;
            pre.innerHTML = '';
            pre.appendChild(code);
        }

        // 创建新的copy按钮
        const btnContainer = document.createElement('div');
        btnContainer.className = 'code-buttons-container';
        btnContainer.style.position = 'relative';

        const copyButton = document.createElement('button');
        copyButton.className = 'copy-hcode-btn';
        copyButton.textContent = 'copy';

        // 绑定copy事件（带重试机制）
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
                console.error('copy失败: ', err);
                // 可选：添加错误提示
            });
        });

        // 添加按钮到代码块
        pre.parentNode.insertBefore(btnContainer, pre);
        btnContainer.appendChild(copyButton);

        // 检测代码类型并添加运行按钮，而不是调用另一个函数
        const code = pre.textContent;
        const codeType = detectCodeType(code);

        if (codeType === 'python' || codeType === 'html') {
            const runBtn = document.createElement('button');
            runBtn.className = 'code-hexecute-btn';
            runBtn.textContent = '运行';
            runBtn.onclick = function(e) {
                e.stopPropagation();
                executeCode(code, codeType);
            };
            btnContainer.appendChild(runBtn);
        }

        // 强制重新高亮代码（解决时序问题）
        hljs.highlightElement(pre.querySelector('code'));
    });
}
// 添加总结网页按钮点击事件
summarizeBtn.addEventListener('click', async () => {
if (!config.apiKey) {
    alert('请先设置 API 密钥！');
    settingsBtn.click();
    return;
}

// 在对话框显示用户正在总结网页的消息
/*const userSummaryMsgDiv = document.createElement('div');
userSummaryMsgDiv.className = 'ds-chat-message ds-user-message';
userSummaryMsgDiv.innerText = '正在总结当前网页...';
chatContent.appendChild(userSummaryMsgDiv);
// 示例：只在用户当前已经接近底部时自动滚动
const isNearBottom = chatContent.scrollHeight - chatContent.scrollTop - chatContent.clientHeight < 100;
if (isNearBottom) {
chatContent.scrollTop = chatContent.scrollHeight;
}*/

const pageContent = getPageContent();
const summaryPrompt = `你是一个长文本内容总结专家，总结当前网页，不能漏掉任何一点，要求突出重点和关键信息(重点关键词需要重点标记),并发表你的见解，引人深思：
网页标题: ${pageContent.title}
URL: ${pageContent.url}
网页内容:
${pageContent.content.substring(0, 100000)}...`;

try {
    // 添加第三个参数 true 表示这是总结任务
    await sendMessage(summaryPrompt, 0, true);
} catch (error) {
    console.error('总结网页时出错:', error);
}
});



// 对话导出
exportBtn.addEventListener('click', () => {
if (config.fullConversation.length === 0) {
    alert('没有可导出的对话内容');
    return;
}

// 提供格式选择
const format = prompt('选择导出格式:\n1. TXT (文本)\n2. HTML (带样式)\n3. Markdown\n4. JSON (完整数据)', '3');

if (!format) return;

let exportContent = '';
const dateStr = new Date().toLocaleString();

switch(format) {
    case '1': // TXT 格式
        exportContent = `╭───────────────────────────────╮\n│      AI 助手对话记录         │\n│ 导出时间: ${dateStr.padEnd(19)} │\n╰───────────────────────────────╯\n\n`;
        config.fullConversation.forEach(msg => {
            const role = msg.role === 'user' ? '👤 用户' : '🤖 AI';
            const time = msg.timestamp ? new Date(msg.timestamp).toLocaleString() : '未知时间';

            exportContent += `\n╭── ${role} · ${time} ──\n│\n`;

            // 优先显示思考内容
            if (msg.hasReasoning && msg.reasoningContent) {
                exportContent += `│ 💭 思考过程:\n│ ${msg.reasoningContent.split('\n').join('\n│ ')}\n│\n`;
            }

            exportContent += `│ 📝 正式回答:\n│ ${msg.content.split('\n').join('\n│ ')}\n╰────────────────────────────────\n`;
        });
        break;

    case '2': // HTML 格式
        exportContent = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>AI 对话记录 - ${dateStr}</title>
<style>
    :root {
        --primary-color: #2c3e50;
        --secondary-color: #ecf0f1;
        --reasoning-color: #f39c12;
    }

    body {
        font-family: 'Segoe UI', system-ui, sans-serif;
        line-height: 1.8;
        max-width: 800px;
        margin: 2rem auto;
        padding: 2rem;
        background: var(--secondary-color);
    }

    .header {
        text-align: center;
        margin-bottom: 2rem;
        padding: 2rem;
        background: var(--primary-color);
        color: white;
        border-radius: 12px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }

    .message {
        margin-bottom: 2rem;
        background: white;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        overflow: hidden;
    }

    .message-header {
        padding: 1rem;
        background: var(--primary-color);
        color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .reasoning-section {
        padding: 1rem;
        background: #fff3e0;
        border-left: 4px solid var(--reasoning-color);
        margin: 1rem;
        border-radius: 4px;
    }

    .content-section {
        padding: 1.5rem;
    }

    .timestamp {
        font-size: 0.9em;
        opacity: 0.8;
    }

    pre {
        background: #f8f9fa;
        padding: 1rem;
        border-radius: 6px;
        overflow-x: auto;
        margin: 1rem 0;
    }

    code {
        font-family: 'Fira Code', monospace;
        font-size: 0.9em;
    }
</style>
</head>
<body>
<div class="header">
    <h1>AI 对话记录</h1>
    <p>导出时间: ${dateStr}</p>
</div>`;

        config.fullConversation.forEach(msg => {
            const role = msg.role === 'user' ? '用户' : 'AI助手';
            const time = msg.timestamp ? new Date(msg.timestamp).toLocaleString() : '未知时间';

            exportContent += `
<div class="message">
    <div class="message-header">
        <span>${role}</span>
        <span class="timestamp">${time}</span>
    </div>`;

            if (msg.hasReasoning && msg.reasoningContent) {
                exportContent += `
    <div class="reasoning-section">
        <h3>💭 思考过程</h3>
        <div>${msg.reasoningContent.replace(/\n/g, '<br>')}</div>
    </div>`;
            }

            exportContent += `
    <div class="content-section">
        <h3>📝 正式回答</h3>
        <div>${msg.content.replace(/\n/g, '<br>')}</div>
    </div>
</div>`;
        });

        exportContent += '\n</body>\n</html>';
        break;

    case '3': // Markdown 格式
        exportContent = `# AI 对话记录\n\n**导出时间**: ${dateStr}\n\n`;
        config.fullConversation.forEach(msg => {
            const role = msg.role === 'user' ? '**👤 用户**' : '**🤖 AI助手**';
            const time = msg.timestamp ? new Date(msg.timestamp).toLocaleString() : '未知时间';

            exportContent += `## ${role} · _${time}_\n\n`;

            if (msg.hasReasoning && msg.reasoningContent) {
                exportContent += `### 💭 思考过程\n${msg.reasoningContent}\n\n`;
            }

            exportContent += `### 📝 正式回答\n${msg.content}\n\n---\n\n`;
        });
        break;

    case '4': // JSON 格式
        exportContent = JSON.stringify({
            meta: {
                title: "AI 对话记录",
                exportDate: dateStr,
                version: "2.0",
                structure: "思考内容优先"
            },
            messages: config.fullConversation.map(msg => ({
                ...msg,
                contentOrder: msg.hasReasoning ? ["reasoning", "content"] : ["content"]
            }))
        }, null, 2);
        break;

    default:
        alert('无效的选择');
        return;
}

// 确定文件扩展名
const ext =
    format === '1' ? 'txt' :
    format === '2' ? 'html' :
    format === '3' ? 'md' : 'json';

// 创建下载链接
const blob = new Blob([exportContent], {
    type: format === '2' ? 'text/html' :
          format === '4' ? 'application/json' : 'text/plain;charset=utf-8'
});
const url = URL.createObjectURL(blob);
const a = document.createElement('a');
a.href = url;
a.download = `AI对话记录_${new Date().toISOString().slice(0, 10)}.${ext}`;
document.body.appendChild(a);
a.click();

// 清理
setTimeout(() => {
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}, 100);
});
}
})();
// 改进的token计数函数 - 提高准确率至80%-90%
function countTokens(text) {
if (!text) return 0;

// 高精度token计算方法，适用于大多数主流模型

// 基本正则表达式规则
const patterns = {
    // Unicode分类支持
    cjk: /[\u4e00-\u9fff\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf]/g,
    emoji: /[\p{Emoji_Presentation}|\p{Extended_Pictographic}]/gu,
    punctuation: /[!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~，。、！？：；""''（）【】《》]/g,
    whitespace: /\s+/g,
    number: /\d+(\.\d+)?/g,
    // 更精确的单词识别
    latinWord: /[a-zA-Z]+([-'][a-zA-Z]+)*/g
};

// 预处理文本 - 保留原始结构但标准化空白
const normalizedText = text.replace(/\s+/g, ' ').trim();

// 文本分段处理，提高准确性
const segments = [];
let currentPos = 0;

// 将文本分割成不同类型的段落（代码块、普通文本等）以便分别处理
const codeBlockRegex = /```[\s\S]*?```/g;
const inlineCodeRegex = /`[^`]+`/g;
let match;

// 处理代码块
while ((match = codeBlockRegex.exec(normalizedText)) !== null) {
    // 添加代码块前的文本
    if (match.index > currentPos) {
        segments.push({
            type: 'text',
            content: normalizedText.substring(currentPos, match.index)
        });
    }

    // 添加代码块
    segments.push({
        type: 'code_block',
        content: match[0]
    });

    currentPos = match.index + match[0].length;
}

// 添加剩余文本
if (currentPos < normalizedText.length) {
    segments.push({
        type: 'text',
        content: normalizedText.substring(currentPos)
    });
}

// 根据不同的内容类型计算token
let totalTokens = 0;

segments.forEach(segment => {
    if (segment.type === 'code_block') {
        // 代码块处理 - 代码通常有更特殊的分词规则
        // 移除代码块标记
        const code = segment.content.replace(/```[\w]*\n?|\n?```$/g, '');

        // 代码通常按单词、符号和空白字符分词
        const codeTokens = code.split(/(\s+|[{}()\[\].,;:=<>!&|^+\-*/%~#]+)/)
            .filter(Boolean)
            .length;

        // 添加代码块标记的token（通常是2-3个token）
        totalTokens += codeTokens + 3;
    } else {
        // 普通文本处理
        const text = segment.content;

        // 计算中文和其他CJK字符（每个字符通常是一个token）
        const cjkChars = (text.match(patterns.cjk) || []).length;

        // 计算拉丁文单词（通常每个单词是一个token，长单词可能是多个）
        let wordTokens = 0;
        const words = text.match(patterns.latinWord) || [];
        words.forEach(word => {
            // 根据GPT等模型的BPE分词规则，估算token数
            if (word.length <= 2) {
                wordTokens += 1;
            } else if (word.length <= 6) {
                wordTokens += Math.ceil(word.length / 2.5);
            } else {
                wordTokens += Math.ceil(word.length / 2);
            }
        });

        // 计算数字token
        const numbers = text.match(patterns.number) || [];
        const numberTokens = numbers.reduce((sum, num) => {
            // 数字通常按位数分词，但有规律性
            if (num.length <= 2) return sum + 1;
            return sum + Math.ceil(num.length / 2);
        }, 0);

        // 计算标点符号
        const punctuationCount = (text.match(patterns.punctuation) || []).length;

        // 计算空白字符（一般每组空白是一个token）
        const whitespaceCount = (text.match(patterns.whitespace) || []).length;

        // 计算表情符号（每个表情通常是1-2个token）
        const emojiCount = (text.match(patterns.emoji) || []).length * 2;

        // 特殊标记处理（如URL、引用等）
        const urlMatches = text.match(/https?:\/\/\S+/g) || [];
        const urlTokens = urlMatches.reduce((sum, url) => sum + Math.ceil(url.length / 4), 0);

        // 累加该段落的token总数
        totalTokens += cjkChars + wordTokens + numberTokens + punctuationCount +
                     whitespaceCount + emojiCount + urlTokens;
    }
});

// 考虑一些特殊模型的token处理差异
// 添加系统指令开销等适当因素
const modelOverhead = 3; // 系统指令等固定开销

// 最终四舍五入到整数
return Math.round(totalTokens + modelOverhead);
}

// 更新对话的整体token统计
function updateConversationTokenCount() {
// 确保config存在
if (typeof config === 'undefined') {
    console.warn('Token counter: config is not defined yet');
    return { userTokens: 0, aiTokens: 0, totalTokens: 0 };
}

let userTokens = 0;
let aiTokens = 0;

// 计算历史对话中的token数
if (config.chatHistory && Array.isArray(config.chatHistory)) {
    config.chatHistory.forEach(msg => {
        if (msg.role === 'user') {
            userTokens += countTokens(msg.content);
        } else if (msg.role === 'assistant') {
            // 如果消息已经有token计数就直接使用，否则计算
            aiTokens += msg.tokens || countTokens(msg.content);
        }
    });
} else {
    console.warn('Token counter: config.chatHistory is not available');
}

// 创建或更新token计数器
let tokenCounter = document.getElementById('ds-token-counter');
if (!tokenCounter) {
    tokenCounter = document.createElement('div');
    tokenCounter.id = 'ds-token-counter';
    tokenCounter.className = 'ds-token-counter';
    const inputArea = document.querySelector('.ds-chat-input-area');
    if (inputArea) {
        inputArea.insertBefore(tokenCounter, inputArea.firstChild);
    }
}

// 更新token计数显示
tokenCounter.innerHTML = `
    <span class="ds-token-label">对话统计: </span>
    <span class="ds-user-tokens">用户: ${userTokens} tokens</span>
    <span class="ds-ai-tokens">AI: ${aiTokens} tokens</span>
    <span class="ds-total-tokens">总计: ${userTokens + aiTokens} tokens</span>
`;

return { userTokens, aiTokens, totalTokens: userTokens + aiTokens };
}

// 监听用户输入框，实时显示token计数
function setupTokenCounter() {
try {
    const inputBox = document.querySelector('.ds-chat-input');

    if (!inputBox) {
        console.warn('Token counter: Input box not found');
        return;
    }

    // 检查是否已经初始化过
    if (document.querySelector('.ds-input-token-counter')) {
        console.log('Token counter already initialized');
        return;
    }

    // 创建token计数显示元素
    let inputTokenCounter = document.createElement('div');
    inputTokenCounter.className = 'ds-input-token-counter';
    inputTokenCounter.innerText = '0 tokens';

    // 添加到输入框后面
    inputBox.parentNode.insertBefore(inputTokenCounter, inputBox.nextSibling);

    // 更新token计数的函数
    function updateInputTokenCount() {
        const text = inputBox.value;
        const tokens = countTokens(text);
        inputTokenCounter.innerText = `${tokens} tokens`;

        // 根据token数变更颜色提示
        if (tokens > 1000) {
            inputTokenCounter.style.color = '#ff4444';
        } else if (tokens > 500) {
            inputTokenCounter.style.color = '#ffa500';
        } else {
            inputTokenCounter.style.color = '#666';
        }
    }

    // 添加输入事件监听（使用匿名函数而不是方法引用）
    const handleInput = function() { updateInputTokenCount(); };
    inputBox.addEventListener('input', handleInput);
    inputBox.addEventListener('keyup', handleInput);
    inputBox.addEventListener('change', handleInput);

    // 初始更新
    updateInputTokenCount();

    console.log('Token counter initialized successfully');
} catch (error) {
    console.error('Error in setupTokenCounter:', error);
}
}

//
//displayHistory();
//颜色变化适配

// 初始化token计数器
setupTokenCounter();

// 初始化时更新对话统计
updateConversationTokenCount();

// 初始化token计数器和更新token统计
setTimeout(() => {
try {
    setupTokenCounter();
    updateConversationTokenCount();
    console.log("Token counter initialized successfully");
} catch (e) {
    console.error("Error initializing token counter:", e);
}
}, 1000);

// 删除之前的自动初始化代码
// 改为使用delayed initialization，确保DOM完全加载后再初始化
document.addEventListener('DOMContentLoaded', function() {
setTimeout(function() {
    try {
        // 在页面完全加载后初始化token计数器
        setupTokenCounter();

        // 只有当config和chatContent都存在时才更新对话统计
        if (typeof config !== 'undefined' && document.querySelector('.ds-chat-content')) {
            updateConversationTokenCount();
        }
    } catch (e) {
        console.error("Error in token counter initialization:", e);
    }
}, 2000); // 延迟2秒初始化
});


