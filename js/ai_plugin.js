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
// @resource     icon https://img.mduge.com/i/2025/04/27/680e104c8b3a1.png
// @grant        GM_getResourceURL
// @require      https://cdn.jsdelivr.net/npm/marked/marked.min.js
// @require      https://pictureapi.dskblog.top/js/highlight.min.js
// @require      https://cdn.jsdelivr.net/pyodide/v0.26.0/full/pyodide.js
// @resource     hljsStyle https://pictureapi.dskblog.top/css/agate.min.css
// ==/UserScript==



(function() {
    'use strict';

    // 添加CSS样式
    GM_addStyle(`
    ${GM_getResourceText('hljsStyle')}
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

        /* 消息容器样式 */
        .ds-message-container {
            position: relative;
            margin-bottom: 5px;
            width: auto;
            margin-left:5px;
            margin-right: 5px;
        }

        /* 消息选项按钮样式 */
        .ds-message-options-btn {
            opacity: 0.7;
            transition: opacity 0.2s;
        }

        .ds-message-options-btn:hover {
            opacity: 1;
            background-color: rgba(0,0,0,0.05);
        }

        /* 消息选项菜单样式 */
        .ds-message-options-menu {
            min-width: 120px;
            z-index: 2147483647;
        }

        .ds-message-option {
            transition: background-color 0.2s;
        }

        /* 复制成功提示样式 */
        .copy-success {
            animation: fadeIn 0.3s, fadeOut 1.5s 0.5s forwards;
            z-index: 2147483647;
        }

        @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
        }

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
            display: none;
            flex-direction: column;
            overflow: hidden;
            opacity: 0;
           /*transform: translateY(20px);*/
            z-index: 2147483646;
            backdrop-filter: blur(5px);
            animation: fadeIn 0.5s ease-in-out forwards;
            transition: opacity 0.5s ease-in-out, width 0.5s ease-in-out, height 0.5s ease-in-out, transform 0.05s ease-out;
            transform: translate3d(0, 0, 0); /* 启用GPU加速 */
            -webkit-backface-visibility: hidden; /* 防止闪烁 */
            backface-visibility: hidden;
            -webkit-perspective: 1000;
            perspective: 1000;
            contain: content; /* 内容隔离，优化性能 */
        }

        /* 聊天窗口拖动时的样式 */
        .ds-chat-window.dragging {
            pointer-events: none; /* 拖动时禁用所有交互，提高性能 */
            user-select: none;
            will-change: transform; /* 明确告知浏览器transform会变化 */
            transition: none !important; /* 拖动时禁用所有过渡效果 */
        }

        /* 聊天内容区域 - 减少重绘区域 */
        .ds-chat-content {
            contain: layout style paint; /* 强布局隔离，减少重排重绘 */
            overflow-y: auto;
            flex: 1;
        }

        .ds-chat-header {
            padding: 10px 15px;
            background-color: var(--header-bg, #9a9e994f) !important;
            color: var(--header-text, #222) !important;
            transition: background-color 0.5s ease, color 0.3s ease;
            backdrop-filter: blur(5px);
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-radius: 15px 15px 0 0;
            height: 25px;
            will-change: transform; /* 告知浏览器可能会有拖动 */
            touch-action: none; /* 禁用默认触摸行为 */
            cursor: move;
            user-select: none; /* 防止文本选择 */
        }

        /* 确保图标拖动也高效 */
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
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0);
            transition: transform 0.3s, box-shadow 0.3s;
            z-index: 2147483647;
            backdrop-filter: blur(5px);
            border: 1px solid rgba(255, 255, 255, 0);
            transform: translate3d(0, 0, 0); /* 启用GPU加速 */
            will-change: transform, right, bottom; /* 明确告知浏览器可能变化的属性 */
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
            touch-action: none; /* 禁用默认触摸行为 */
        }

        /* 为拖动中的图标添加专用样式 */
        .ds-chat-icon.dragging {
            transition: none !important; /* 拖动时禁用过渡效果 */
            pointer-events: none;
        }

        @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
        }

        /* 对话框激活时的样式 */
        .ds-chat-window.active {
            display: flex !important;
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
        /* 其他样式保持不变
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
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0);
            transition: transform 0.3s, box-shadow 0.3s;
            z-index: 2147483647;
            backdrop-filter: blur(5px);
            border: 1px solid rgba(255, 255, 255, 0);
            transform: translate3d(0, 0, 0); /* 启用GPU加速 */
        }
        */
        .ds-chat-icon {
            transform: scale(1.05);
            box-shadow: 0 6px 8px rgba(0, 0, 0, 0);
            background-color: transparent;
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
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s, color 0.2s;
    color: #666;
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
            margin-bottom: 6px;
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
            padding: 5px 1px;
            border-radius: 10px;
            line-height: 1.2;
            word-wrap: break-word;
            font-size: 14px; /* 减小用户消息字体大小 */
            color: rgb(0,0,0); /* 修改字体颜色 */
           //margin-left: 5px;
            //margin-right: 5px;
            text-align: left;
        }
        .ds-user-message {
            background-color: #FFFFFF;
            color: rgb(0,0,0);
          margin-left: auto;
            margin-top: 10px;
           text-align: left;
            padding: 8px 15px;
            border-radius: 15px;
            height: auto;
            width: fit-content;
            display: block;
            max-width: -moz-available;
        }

        .ds-ai-message {
            background-color: #FFFFFF;
            line-height: 1.2; /* 调整行高 */
            color: rgb(0,0,0); /* 修改字体颜色 */
            padding: 15px 5px;
            text-align: left;
           // margin-right:auto;
            //width: fit-content;
            border-radius: 15px;
            width: fit-content;
    max-width: -moz-available;

        }


        .ds-chat-message table{

         overflow: auto;
        display:block;
        }
          .ds-chat-hmessage table{

        overflow: auto;
        display:block;
        }
        .ds-chat-input-area {
            padding: 10px;
            display: flex;
            flex-direction: column;
            backdrop-filter: blur(10px);
            background-color: white; /* 修改背景颜色 */
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
            height: 15px
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
            height: 8px;
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

        /* 代码块复制按钮样式 */


        /* 复制成功提示样式 */
        .copy-success {
            position: absolute !important;
            top: 20px !important;
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
            color: #e87be4;
            font-style: oblique;
            font-size: 13px; /* 字体大小比父元素小 10% */
        }
         .ds-ai-message think {
            color: #e87be4;
            font-style: oblique;
            font-size: 13px; /* 字体大小比父元素小 10% */
        }

        .ds-reasoning-title {
            color: #666;
            font-size: 13px; /* 字体大小比父元素小 10% */
            font-style: oblique;
            margin-bottom: 5px;
            text-align: left;
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
            //margin-left: 5px;
            //margin-right: 5px;
            text-align: left;
              font-weight: 500;
    font-family: 'SFMono-Regular', 'Consolas', 'Liberation Mono', monospace;
        }
        .ds-user-hmessage {
            background-color: #FFFFFF;
            color: rgb(0,0,0);
            margin-left: auto;
            margin-top: 10px;
            text-align: left;
            padding: 8px 15px;
            border-radius: 15px;
            height: auto;
            width: fit-content;
            display: block;
            font-weight: 500;
            max-width: -moz-available;
            font-family: 'SFMono-Regular', 'Consolas', 'Liberation Mono', monospace;
        }

        .ds-ai-hmessage {
            background-color: #FFFFFF;
            line-height: 1.2; /* 调整行高 */
            color: rgb(0,0,0); /* 修改字体颜色 */
            padding: 10px 20px;
            text-align: left;
            width: fit-content;
            max-width: -moz-available;
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

        .ds-chat-message ul, .ds-chat-message ol {
            margin: 10px 0;
            /* 增加内边距，确保列表项有足够空间显示符号和序号 */
            padding-left: 2.5em;
            /* 确保列表符号或序号在内容内部 */
            //list-style-position: inside;
        }

        .ds-chat-message li {
            margin: 5px 0;
            /* 修复因列表符号或序号导致的文本错位 */
            text-indent: -1.5em;
            padding-left: 1.5em;
        }

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
    bottom: 52px;
    width: 20px; /* 圆形直径 */
    height: 20px;
    border-radius: 50%; /* 圆形 */
    background-color: rgba(255, 255, 255, 0.9);
    border: none;
    cursor: pointer;
    z-index: 2147483645;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ff4444;
    transition: all 0.2s;
    overflow: hidden; /* 隐藏内部动画溢出部分 */
  }
  .ds-start-button {
    position: absolute;
    right: 20px;
    bottom: 52px;
    width: 20px; /* 圆形直径 */
    height: 20px;
    border-radius: 50%; /* 圆形 */
    background-color: rgba(255, 255, 255, 0);
    border: none;
    cursor: pointer;
    z-index: 214748364;
    //box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ff4444;
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
    box-shadow: 0 0 8px rgba(255, 68, 68, 0.6);
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
    border: 2px solid #ff4444;
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
        align-items: end;
        border-bottom: 1px solid #dee2e6;
    }

    .code-execution-header h3 {
        margin: 0;
        font-size: 1.2em;
        display: contents;
        color: white;
    }

    .code-execution-close {
        color: #fff;
        font-size: 28px;
        font-weight: bold;
        cursor: pointer;
        line-height: 1;
        margin-left: auto;
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

  .copy-code-btn {
    position: absolute;
    top: 20px;
    right: 8px;
    background-color: #555;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 2px 8px;
    font-size: 12px;
    cursor: pointer;
    opacity: 0.8;
    transition: opacity 0.3s;
    z-index: 10;
  }

  .code-execute-btn {
    position: absolute;
    bottom: 15px;
    right: 8px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 2px 8px;
    font-size: 12px;
    cursor: pointer;
    opacity: 1;
    z-index: 10;
  }

  pre {
    position: relative;
    padding-top: 30px !important;
    padding-bottom: 30px !important;
    //display: ruby-base-container;
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
  ds-toggle-middle {
    display: flex;
    align-items: center;
    gap: 5px;
    margin: 0 10px;
  }
  .ds-toggle-middle:hover {
    transform: scale(1.1);
    color: #4CAF50;
  }

  .error-message {
  color: red;
  font-weight: bold;
  }
  .ds-scroll-to-bottom {
    position: absolute;
    right: 45%;
    bottom: 25%;
    width: 30px;
    height: 30px;
    background-color: rgba(255, 255, 255, 0);
    border-radius: 50%;
    display: none;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 2147483646;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    transition: all 0.3s;
    animation: pulse 1.5s infinite;
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.2);
    }
    70% {
      transform: scale(1.1);
      box-shadow: 0 0 0 5px rgba(0, 0, 0, 0);
    }
    100% {
      transform: scale(1);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
  }

  .ds-scroll-to-bottom:hover {
    background-color: rgba(255,255,255,0);
    animation: none;
    transform: scale(1.1);
  }

  .ds-scroll-to-bottom img {
    width: 20px;
    height: 20px;
  }
  //聊天中图片大小
      .ds-chat-message img{
      width: 100%;
      height: auto;
      }
          .ds-chat-hmessage img{
      width: 100%;
      height: 100%;
      }
          .history-button{
    background-color:#f8f8f8!important;
}
.cancel-button{
    background-color:#f8f8f8!important;
}
    .save-button{
    background-color:#4CAF50!important;
}

    `);

    // 初始化
    let config = {
        apiKey: GM_getValue('apiKey', ''),
        apiUrl: GM_getValue('apiUrl', 'https://XXX/v1/chat/completions'),
        model: GM_getValue('model', 'gpt-3.5'),
        temperature: GM_getValue('temperature', 0.7),
        maxTokens: GM_getValue('maxTokens', 4096),
        streamOutput : true,
        error_sign : true,
        chatHistory: GM_getValue('chatHistory', []),
        fullConversation: GM_getValue('fullConversation', []), // 存储完整对话
        customSelectors: GM_getValue('customSelectors', ''), // 存储自定义选择器
          additionalParams: GM_getValue('additionalParams', {}),//自定义请求参数
        usePageContext: GM_getValue('usePageContext', true),
        personalityPrompt: GM_getValue('personalityPrompt', '我是一个高效务实的全能 AI 助手，以快速解决用户的问题为首要目标。我具备敏锐的洞察力，能迅速抓住问题的关键，提供切实可行的解决方案。我的回答简洁直接、重点突出，帮助用户节省时间和精力。在处理任务时，我会优先考虑实用性和可操作性，确保提供的建议能够落地实施。除了给出核心答案，我还会为用户进行知识拓展。若用户询问某个技术方法，我会拓展介绍该方法的衍生技术、适用场景的拓展以及未来的发展趋势；若用户咨询某个管理理念，我会讲解该理念的演变过程、在不同行业的应用案例以及可能面临的挑战。我会不断优化工作流程，提高服务效率和质量。')
    };
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

  function detectCodeType(code) {
    const cleanedCode = code.trim();

    // 1. 先检查显式标记
    if (cleanedCode.startsWith('```python') || cleanedCode.startsWith('```py')) {
        return 'python';
    }
    if (cleanedCode.startsWith('```html')) {
        return 'html';
    }

    // 2. 检查HTML特征
    const htmlTagRegex = /<([a-z][a-z0-9]*)(?:\s+[^>]*)?>|<\/[a-z][a-z0-9]*>|<!DOCTYPE\s+html|<html|<head|<body|<div|<p|<span|<img|<a\s|<ul|<li|<table|<script|<style|<link/i;
    if (htmlTagRegex.test(cleanedCode)) {
        return 'html';
    }

    // 3. 检查Python特征
    const pythonKeywords = /\b(def\s|class\s|import\s|from\s|print\(|lambda\s|async\s|await\s|yield\s|with\s|as\s|try\s|except\s|finally\s|raise\s|elif\s|@\w+)\b/;
    const pythonIndent = /^\s+(if|elif|else|for|while|try|except|finally|with|def|class)\b.*:\s*$/m;

    if (pythonKeywords.test(cleanedCode) || pythonIndent.test(cleanedCode)) {
        return 'python';
    }

    // 4. 默认返回none表示无法确定类型
    return 'none';
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
  // ...已有代码...

    // 检查是否已经存在图标
  // ... 图标创建代码 ...
    if (!document.querySelector('.ds-chat-icon')) {
         checkScrollPosition();
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
  //滑动到底部
  const scrollToBottomBtn = document.createElement('div');
  scrollToBottomBtn.className = 'ds-scroll-to-bottom';
  /*scrollToBottomBtn.innerHTML = `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 4V20M12 20L18 14M12 20L6 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  `;*/
  scrollToBottomBtn.innerHTML = '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA+ElEQVR4nO2ZQQ6CMBBF34pjqGcR9IgKlxPRC6hrkjEmXUxIXNCGFs1/yWz//Cm/JAwghBBrZwd0wB0YAVu4xtCrBbap5o/AK4Np+1JPoEk5+ZLmzQ2xiRmgcyIXYA9ULE8F1EDv+p9jhO5O4GM+N7XrP8QI+Aub4+SnVJOLPRufw1JYigdbWc2mtGHTAPzRHSiFaQD0BJIwRQhFKAlThFCEkjBFCEUoCVOE+JMI2QpqNqUNmwbgx7/Ixl9fbN0KrxYb1/8aI9A6gT4I5lruHibL3VOM0Dastku/fR6x63XCqT8Lm69JZBMe4ZDxF9MQekafvBBCkIU3HL4pE5WP8IAAAAAASUVORK5CYII=" alt="new-presentation">';
        /*crollToBottomBtn.innerHTML = '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAXklEQVR4nO2UsQ2AMAwEbzwivP8AcfZ4GiqKKCQgHJSXrnHhK156WLmZHSiAOnEg1QQ+8FwnuSbQQ3wvsE4UTqBG4grsdx1Y4z2OwKbtQNNukb8912lQkoGtJljhmgPl5PZM+ShungAAAABJRU5ErkJggg==" alt="slide-layout">';
  */
  scrollToBottomBtn.title = '滚动到底部';
  chatWindow.appendChild(scrollToBottomBtn);
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
  //左侧
  const contextLabel = document.createElement('label');
  contextLabel.htmlFor = 'ds-context-checkbox';
  contextLabel.innerText = '🌐'
  contextLabel.title = '提取网页内容'
  leftGroup.appendChild(contextLabel);
  //中间
  const streamToggle = document.createElement('div');
  streamToggle.className = 'ds-toggle-middle';
  const streamCheckbox = document.createElement('input');
  streamCheckbox.type = 'checkbox';
  streamCheckbox.id = 'ds-stream-checkbox';
  streamCheckbox.checked = config.streamOutput !== false; // 默认开启流式
  streamCheckbox.title = '流式输出(兼容模式关闭)';
  streamToggle.appendChild(streamCheckbox);
  const streamLabel = document.createElement('label');
  streamLabel.htmlFor = 'ds-stream-checkbox';
  streamLabel.innerText = '🌀';
  streamLabel.title = '流式输出(兼容模式关闭)';
  streamToggle.appendChild(streamLabel);
  contextToggle.appendChild(streamToggle);
  // 右侧部分 - 导出图标
  const exportBtn = document.createElement('div');
  exportBtn.className = 'ds-toggle-right';
  exportBtn.innerHTML = '🗂️';
  exportBtn.title = '导出对话';
  contextToggle.appendChild(exportBtn);
  // 在 headerButtons 中添加导出按钮

  streamCheckbox.addEventListener('change', () => {
    config.streamOutput = streamCheckbox.checked;
    GM_setValue('streamOutput', config.streamOutput);
  });

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

        // 显示历史消息
        // ... 已有代码 ...


  function displayHistory() {
        chatContent.innerHTML = '';
        config.chatHistory.forEach(msg => {
            const msgDiv = document.createElement('div');
            if(msg.role!='user'){
            msgDiv.className = `ds-chat-hmessage ds-ai-hmessage`;
            }else{
            msgDiv.className = `ds-chat-hmessage ds-user-hmessage`;
            }
            const contentWithLabel = msg.role === 'user' ? `${msg.content}` : `🤖：${msg.content}`;
            if(msg.role !='user'){
            msgDiv.innerHTML = marked.parse(contentWithLabel);
            }
            else{
                msgDiv.innerHTML = contentWithLabel;
            }
            // 确保历史记录中的代码块被高亮处理
            msgDiv.querySelectorAll('pre code').forEach((block) => {
                hljs.highlightElement(block);
                // 为代码块添加运行按钮
                addExecuteButton(block.parentNode);
            });

            addCopyButtonsToCodeBlocks(msgDiv);
            chatContent.appendChild(msgDiv);

            // 为历史消息添加选项菜单
            addMessageOptionsMenu(msgDiv);
        });

        const isNearBottom = chatContent.scrollHeight - chatContent.scrollTop - chatContent.clientHeight < 200;
        if (isNearBottom) {
            chatContent.scrollTop = chatContent.scrollHeight;
        }
    }
  // ... 已有代码 ...
        displayHistory();
  //颜色变化适配




  // 在创建 chatHeader 后添加以下代码
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



  // ... 已有代码 ...

  let isUserScrolling = false;
  let scrollTimeout = null;

  function checkScrollPosition() {
    const chatContent = document.querySelector('.ds-chat-content');
    if (!chatContent) return;
  if (chatContent) {
      const computedStyle = getComputedStyle(chatContent);
      const contentHeight = parseFloat(computedStyle.height) || 0;

      // 如果内容高度不足100px或者没有足够内容需要滚动
      if (contentHeight < 100 || chatContent.scrollHeight <= chatContent.clientHeight) {
          scrollToBottomBtn.style.display = 'none';
          return;
      }
  }
    const isNearBottom = chatContent.scrollHeight - chatContent.scrollTop - chatContent.clientHeight < 50;

    // 只在用户没有主动滚动时显示按钮
    scrollToBottomBtn.style.display = (isNearBottom || isUserScrolling) ? 'none' : 'flex';
  }

  // 监听滚动事件
  if (chatContent) {
    chatContent.addEventListener('scroll', () => {
      isUserScrolling = true;
      checkScrollPosition();

      // 清除之前的定时器
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      // 设置新的定时器，500ms后认为滚动结束
      scrollTimeout = setTimeout(() => {
        isUserScrolling = false;
        checkScrollPosition();
      }, 500);
    });
  }

  // ... 已有代码 ...
  // 监听滚动事件
  // const chatContent = document.querySelector('.ds-chat-content');
  if (chatContent) {
    chatContent.addEventListener('scroll', checkScrollPosition);
  }
  scrollToBottomBtn.addEventListener('click', () => {
    const chatContent = document.querySelector('.ds-chat-content');
    if (chatContent) {
      chatContent.scrollTo({
        top: chatContent.scrollHeight,
        behavior: 'smooth'
      });
    }
  });
  // 初始检查




        // 事件监听
        // 在创建chatHeader后添加以下代码
  chatHeader.style.cursor = 'move'; // 设置鼠标样式为可拖动
  let isDraggingWindow = false;
  let startXWindow, startYWindow, initialLeftWindow, initialTopWindow;
  let windowAnimationFrameId = null;
  let lastWindowDeltaX = 0, lastWindowDeltaY = 0;
  let lastRenderTime = 0;
  const MIN_RENDER_INTERVAL = 10; // 最小渲染间隔(毫秒)，控制渲染频率

  // 鼠标按下事件
  chatHeader.addEventListener('mousedown', (e) => {
    if (e.button !== 0) return; // 只响应左键点击

    // --- 添加判断：如果点击目标是按钮，则不启动拖拽 ---
    if (e.target === closeBtn || closeBtn.contains(e.target) || e.target === fullscreenBtn) {
        return;
    }
    // --- 判断结束 ---

    // 如果是全屏状态，不允许拖动
    if (chatWindow.classList.contains('fullscreen')) return;

    isDraggingWindow = true;
    startXWindow = e.clientX;
    startYWindow = e.clientY;

    const styles = window.getComputedStyle(chatWindow);
    initialLeftWindow = parseFloat(styles.left) || 0;
    initialTopWindow = parseFloat(styles.top) || 0;

    // 添加拖动中的CSS类
    chatWindow.classList.add('dragging');

    // 禁用所有子元素的pointer-events，防止拖动过程中触发其他事件
    Array.from(chatWindow.querySelectorAll('*')).forEach(el => {
        el._pointerEvents = el.style.pointerEvents;
        el.style.pointerEvents = 'none';
    });

    // 添加 will-change 属性来提示浏览器优化渲染
    chatWindow.style.willChange = 'transform';
    chatWindow.style.transition = 'none'; // 暂时禁用过渡动画

    e.preventDefault(); // 阻止默认行为
    chatWindow.style.userSelect = 'none'; // 防止拖动时选中文本
  });

  // 创建变换矩阵和位置信息
  let currentTransformX = 0;
  let currentTransformY = 0;
  let baseLeft = 0;
  let baseTop = 0;

  // 鼠标移动事件
  document.addEventListener('mousemove', (e) => {
    if (!isDraggingWindow) return;

    // 计算当前位置变化
    const deltaX = e.clientX - startXWindow;
    const deltaY = e.clientY - startYWindow;

    // 保存变化量，但不立即应用
    lastWindowDeltaX = deltaX;
    lastWindowDeltaY = deltaY;

    // 使用节流控制渲染频率，减少不必要的重绘
    const now = performance.now();
    if (now - lastRenderTime < MIN_RENDER_INTERVAL && windowAnimationFrameId) {
        return; // 跳过过于频繁的更新
    }

    // 使用 requestAnimationFrame 来优化渲染
    if (!windowAnimationFrameId) {
        // 首次移动时，记录基础位置，之后只修改transform
        if (currentTransformX === 0 && currentTransformY === 0) {
            const computedStyle = window.getComputedStyle(chatWindow);
            baseLeft = parseFloat(computedStyle.left) || 0;
            baseTop = parseFloat(computedStyle.top) || 0;

            // 如果没有设置left/top，则使用初始位置
            if (isNaN(baseLeft)) baseLeft = initialLeftWindow;
            if (isNaN(baseTop)) baseTop = initialTopWindow;
        }

        windowAnimationFrameId = requestAnimationFrame(() => {
            // 更新变换值，而不是直接修改left/top属性
            currentTransformX = lastWindowDeltaX;
            currentTransformY = lastWindowDeltaY;

            // 应用变换，使用transform而不是改变位置属性
            chatWindow.style.transform = `translate3d(${currentTransformX}px, ${currentTransformY}px, 0)`;

            // 重置动画帧 ID并更新渲染时间
            windowAnimationFrameId = null;
            lastRenderTime = performance.now();
        });
    }
  });

  // 鼠标松开事件
  document.addEventListener('mouseup', () => {
    if (isDraggingWindow) {
        // 计算最终位置（基础位置+变换）
        const finalLeft = baseLeft + currentTransformX;
        const finalTop = baseTop + currentTransformY;

    // 限制在窗口范围内
    const maxLeft = window.innerWidth - chatWindow.offsetWidth;
    const maxTop = window.innerHeight - chatWindow.offsetHeight;
        const clampedLeft = Math.max(0, Math.min(finalLeft, maxLeft));
        const clampedTop = Math.max(0, Math.min(finalTop, maxTop));

        // 重置变换并设置实际位置
        chatWindow.style.transform = 'translate3d(0, 0, 0)';
    chatWindow.style.left = `${clampedLeft}px`;
    chatWindow.style.top = `${clampedTop}px`;
    chatWindow.style.right = 'auto';
    chatWindow.style.bottom = 'auto';

        // 恢复子元素的pointer-events
        Array.from(chatWindow.querySelectorAll('*')).forEach(el => {
            if (el._pointerEvents !== undefined) {
                el.style.pointerEvents = el._pointerEvents;
                delete el._pointerEvents;
            }
        });

        // 恢复其他样式
        isDraggingWindow = false;
        currentTransformX = 0;
        currentTransformY = 0;
        chatWindow.style.userSelect = ''; // 恢复文本选择
        chatWindow.style.willChange = 'auto'; // 停止应用 will-change 以释放资源
        chatWindow.style.transition = ''; // 恢复过渡动画

        // 移除拖动中的CSS类
        chatWindow.classList.remove('dragging');

        // 保存窗口位置到GM存储
        if (!isNaN(clampedLeft) && !isNaN(clampedTop)) {
            GM_setValue('chatWindowLeft', clampedLeft);
            GM_setValue('chatWindowTop', clampedTop);
        }
    }
  });

  // 鼠标移出窗口事件
  document.addEventListener('mouseleave', () => {
    if (isDraggingWindow) {
        // 模拟鼠标松开事件
        const mouseUpEvent = new MouseEvent('mouseup');
        document.dispatchEvent(mouseUpEvent);
    }
  });
    // 添加触摸事件支持 - 图标拖动
  icon.addEventListener('touchstart', (e) => {
    isDragging = true;
    hasMoved = false;
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    const styles = window.getComputedStyle(icon);
    initialRight = parseFloat(styles.right) || 0;
    initialBottom = parseFloat(styles.bottom) || 0;

    // 添加拖动中的CSS类
    icon.classList.add('dragging');

    // 添加 will-change 属性来提示浏览器将有变化发生
    icon.style.willChange = 'transform, right, bottom';
    icon.style.transition = 'none'; // 暂时禁用过渡动画

    // 阻止页面滚动
    e.preventDefault();
  }, { passive: false });

  let iconAnimationFrameId = null;
  let iconLastRenderTime = 0;
  const ICON_MIN_RENDER_INTERVAL = 10; // 控制图标拖动的最小渲染间隔

  document.addEventListener('touchmove', (e) => {
    if (!isDragging) return;

    // 计算当前位置变化
    const deltaX = e.touches[0].clientX - startX;
    const deltaY = e.touches[0].clientY - startY;

    // 保存变化量，但不立即应用
    lastDeltaX = deltaX;
    lastDeltaY = deltaY;

    // 设置一个小的阈值（例如3像素），只有超过这个距离才算移动
    if (Math.abs(deltaX) > 3 || Math.abs(deltaY) > 3) {
        hasMoved = true;
    }

    // 使用节流控制渲染频率
    const now = performance.now();
    if (now - iconLastRenderTime < ICON_MIN_RENDER_INTERVAL && iconAnimationFrameId) {
        e.preventDefault();
        return; // 跳过过于频繁的更新
    }

    // 使用 requestAnimationFrame 来优化渲染
    if (!iconAnimationFrameId && hasMoved) {
        iconAnimationFrameId = requestAnimationFrame(() => {
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

            // 重置动画帧 ID并更新时间戳
            iconAnimationFrameId = null;
            iconLastRenderTime = performance.now();
        });
    }

    // 阻止页面滚动
    if (hasMoved) {
        e.preventDefault();
    }
  }, { passive: false });

  document.addEventListener('touchend', () => {
    if (isDragging) {
        isDragging = false;
        // 停止应用 will-change 以释放资源
        icon.style.willChange = 'auto';
        icon.style.transition = ''; // 恢复过渡动画

        // 移除拖动中的CSS类
        icon.classList.remove('dragging');

        // 保存图标位置
        if (hasMoved) {
            const rightValue = parseFloat(icon.style.right);
            const bottomValue = parseFloat(icon.style.bottom);

            if (!isNaN(rightValue) && !isNaN(bottomValue)) {
                GM_setValue('iconRight', rightValue);
                GM_setValue('iconBottom', bottomValue);
            }
        }
    }
  });

  // 触摸取消事件处理
  document.addEventListener('touchcancel', () => {
    if (isDragging) {
        // 模拟触摸结束事件
        const touchEndEvent = new TouchEvent('touchend');
        document.dispatchEvent(touchEndEvent);
    }
  });

  // 添加触摸事件支持 - 窗口拖动
  chatHeader.addEventListener('touchstart', (e) => {
    // --- 添加判断：如果触摸目标是按钮，则不启动拖拽 ---
    if (e.target === closeBtn || closeBtn.contains(e.target) || e.target === fullscreenBtn) {
        return;
    }
    // --- 判断结束 ---

    // 如果是全屏状态，不允许拖动
    if (chatWindow.classList.contains('fullscreen')) return;

    isDraggingWindow = true;
    startXWindow = e.touches[0].clientX;
    startYWindow = e.touches[0].clientY;

    const styles = window.getComputedStyle(chatWindow);
    initialLeftWindow = parseFloat(styles.left) || 0;
    initialTopWindow = parseFloat(styles.top) || 0;

    // 添加拖动中的CSS类
    chatWindow.classList.add('dragging');

    // 禁用所有子元素的pointer-events，防止拖动过程中触发其他事件
    Array.from(chatWindow.querySelectorAll('*')).forEach(el => {
        el._pointerEvents = el.style.pointerEvents;
        el.style.pointerEvents = 'none';
    });

    // 添加 will-change 属性来提示浏览器优化渲染
    chatWindow.style.willChange = 'transform';
    chatWindow.style.transition = 'none'; // 暂时禁用过渡动画

    // 防止拖动时选中文本
    chatWindow.style.userSelect = 'none';

    // 重置transform追踪变量
    currentTransformX = 0;
    currentTransformY = 0;

    // 记录初始位置作为基础位置
    const computedStyle = window.getComputedStyle(chatWindow);
    baseLeft = parseFloat(computedStyle.left) || 0;
    baseTop = parseFloat(computedStyle.top) || 0;

    // 如果没有设置left/top，则使用初始位置
    if (isNaN(baseLeft)) baseLeft = initialLeftWindow;
    if (isNaN(baseTop)) baseTop = initialTopWindow;

    // 阻止页面滚动
    e.preventDefault();
  }, { passive: false });

  document.addEventListener('touchmove', (e) => {
    if (!isDraggingWindow) return;

    // 计算当前位置变化
    const deltaX = e.touches[0].clientX - startXWindow;
    const deltaY = e.touches[0].clientY - startYWindow;

    // 保存变化量，但不立即应用
    lastWindowDeltaX = deltaX;
    lastWindowDeltaY = deltaY;

    // 使用节流控制渲染频率，减少不必要的重绘
    const now = performance.now();
    if (now - lastRenderTime < MIN_RENDER_INTERVAL && windowAnimationFrameId) {
        e.preventDefault();
        return; // 跳过过于频繁的更新
    }

    // 使用 requestAnimationFrame 来优化渲染
    if (!windowAnimationFrameId) {
        windowAnimationFrameId = requestAnimationFrame(() => {
            // 更新变换值
            currentTransformX = lastWindowDeltaX;
            currentTransformY = lastWindowDeltaY;

            // 应用变换，使用transform而不是改变位置属性
            chatWindow.style.transform = `translate3d(${currentTransformX}px, ${currentTransformY}px, 0)`;

            // 重置动画帧 ID并更新渲染时间
            windowAnimationFrameId = null;
            lastRenderTime = performance.now();
        });
    }

    // 阻止页面滚动
    e.preventDefault();
  }, { passive: false });

  document.addEventListener('touchend', (e) => {
    if (isDraggingWindow) {
        // 计算最终位置（基础位置+变换）
        const finalLeft = baseLeft + currentTransformX;
        const finalTop = baseTop + currentTransformY;

        // 限制在窗口范围内
        const maxLeft = window.innerWidth - chatWindow.offsetWidth;
        const maxTop = window.innerHeight - chatWindow.offsetHeight;
        const clampedLeft = Math.max(0, Math.min(finalLeft, maxLeft));
        const clampedTop = Math.max(0, Math.min(finalTop, maxTop));

        // 重置变换并设置实际位置
        chatWindow.style.transform = 'translate3d(0, 0, 0)';
        chatWindow.style.left = `${clampedLeft}px`;
        chatWindow.style.top = `${clampedTop}px`;
        chatWindow.style.right = 'auto';
        chatWindow.style.bottom = 'auto';

        // 恢复子元素的pointer-events
        Array.from(chatWindow.querySelectorAll('*')).forEach(el => {
            if (el._pointerEvents !== undefined) {
                el.style.pointerEvents = el._pointerEvents;
                delete el._pointerEvents;
            }
        });

        // 恢复其他样式
        isDraggingWindow = false;
        currentTransformX = 0;
        currentTransformY = 0;
        chatWindow.style.userSelect = ''; // 恢复文本选择
        chatWindow.style.willChange = 'auto'; // 停止应用 will-change 以释放资源
        chatWindow.style.transition = ''; // 恢复过渡动画

        // 移除拖动中的CSS类
        chatWindow.classList.remove('dragging');

        // 保存窗口位置到GM存储
        if (!isNaN(clampedLeft) && !isNaN(clampedTop)) {
            GM_setValue('chatWindowLeft', clampedLeft);
            GM_setValue('chatWindowTop', clampedTop);
        }
    }
  });

  // 窗口触摸取消处理
  document.addEventListener('touchcancel', (e) => {
    if (isDraggingWindow) {
        // 模拟触摸结束事件
        const windowTouchEndEvent = new TouchEvent('touchend');
        document.dispatchEvent(windowTouchEndEvent);
    }
  });


        //设置自定义抓取网页内容
        customCaptureBtn.addEventListener('click', () => {
    const currentSelectors = config.customSelectors || '';
    const newSelectors = prompt(`注意一定要勾选抓取网页内容🌐，当前页面可用元素选择器(多个用逗号分隔):
  例如: .article.post, #main-content.featured, #example .example, div[class*="container"][class*="fluid"]
  当前规则: ${currentSelectors}`, currentSelectors);

            if (newSelectors !== null) {
                config.customSelectors = newSelectors;
                GM_setValue('customSelectors', config.customSelectors);
                alert('自定义抓取规则已保存!');
            }
        });

        closeBtn.addEventListener('click', () => {
            console.log("关闭悬浮窗");
            chatWindow.classList.remove('active');
            chatWindow.style.display = 'none';
            icon.style.display = 'flex';
        });

        fullscreenBtn.addEventListener('click', () => {
            console.log("悬浮窗全屏");
            chatWindow.classList.toggle('fullscreen');
            if (chatWindow.classList.contains('fullscreen')) {
                fullscreenBtn.innerText = '🗖';
                // 全屏时禁用拖动
                chatHeader.style.cursor = 'default';
            } else {
                fullscreenBtn.innerText = '🗖';
                // 退出全屏时恢复拖动
                chatHeader.style.cursor = 'move';
            }
        });

        contextCheckbox.addEventListener('change', () => {
            config.usePageContext = contextCheckbox.checked;
            GM_setValue('usePageContext', config.usePageContext);
        });

                     settingsBtn.addEventListener('click', () => {
                    config.hidden = !config.hidden;
                    console.log("config.hidden1:",config.hidden);

                    chatWindow.classList.remove('active');
                    chatWindow.style.display = 'none';
                    showSettingsModal();

                });
                function inspect_chatWindow() {
                    //ai-settings-modal不存在是chatWindow应该存在
                    const existingModals = document.getElementById('ai-settings-modal');
                    console.log("config.hidden3:",config.hidden);
                    if(config.hidden){
                        console.log("config.hidden2:",config.hidden);
                    if (!existingModals) {
                        chatWindow.classList.add('active');
                        chatWindow.style.display = 'flex';
                    }
                    }
                    }
                //检查chatWindow是否存在
                inspect_chatWindow();
// 创建设置浮窗
function showSettingsModal() {
    // 检查是否已有设置窗口
    const existingModal = document.getElementById('ai-settings-modal');
    if (existingModal) {
        existingModal.style.display = 'block';
        return;
    }

    // 创建模态窗口
    const modal = document.createElement('div');
    modal.id = 'ai-settings-modal';
    modal.style.position = 'fixed';
    modal.style.top = '50%';
    modal.style.left = '50%';
    modal.style.transform = 'translate(-50%, -50%)';
    modal.style.backgroundColor = '#fff';
    modal.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    modal.style.borderRadius = '8px';
    modal.style.padding = '20px';
    modal.style.zIndex = '10000';
    modal.style.width = '30%';
    modal.style.height = '70%';
    modal.style.maxHeight = '80vh';
    modal.style.overflowY = 'auto';
    modal.style.color = '#333';
    modal.style.fontFamily = 'Arial, sans-serif';

    // 设置标题
    const title = document.createElement('h2');
    title.textContent = 'AI 助手设置';
    title.style.margin = '0 0 20px 0';
    title.style.borderBottom = '1px solid #eee';
    title.style.paddingBottom = '10px';
    modal.appendChild(title);

    // 设置项容器
    const settingsContainer = document.createElement('div');
    settingsContainer.style.display = 'grid';
    settingsContainer.style.gap = '15px';
    modal.appendChild(settingsContainer);

    // 创建设置项
    const settings = [
        {
            id: 'apiUrl',
            label: 'API 地址',
            value: config.apiUrl,
            placeholder: 'https://api.deepseek.com/v1/chat/completions',
            type: 'text',
            help: '默认: https://api.deepseek.com/v1/chat/completions'
        },
        {
            id: 'apiKey',
            label: 'API 密钥',
            value: config.apiKey,
            placeholder: '输入您的 API 密钥',
            type: 'password',
            help: '您的 API 访问密钥'
        },
        {
            id: 'model',
            label: '模型名称',
            value: config.model,
            placeholder: 'deepseek-v3-250324',
            type: 'text',
            help: '默认: deepseek-v3-250324'
        },
        {
            id: 'temperature',
            label: 'Temperature',
            value: config.temperature,
            placeholder: '0.5-0.8',
            type: 'number',
            min: 0,
            max: 2,
            step: 0.1,
            help: '取值范围 0-2，建议 0.5-0.8，值越高回答越随机'
        },
        {
            id: 'maxTokens',
            label: '输出 Token 限制',
            value: config.maxTokens,
            placeholder: '4096',
            type: 'number',
            min: 1,
            max: 8192,
            help: '最大不能超过 8192，默认 4096（影响输出文本长度）'
        },
        {
            id: 'personalityPrompt',
            label: '自定义人格提示词',
            value: config.personalityPrompt,
            placeholder: 'AI助手',
            type: 'text',
            help: '默认: AI助手'
        }
    ];

    // 历史记录存储对象
    const historyEntries = {};

    // 初始化历史记录
    settings.forEach(setting => {
        const historyKey = `${setting.id}_history`;
        const savedHistory = GM_getValue(historyKey, []);
        historyEntries[setting.id] = savedHistory;

        // 如果当前值不在历史记录中且不为空，添加到历史记录
        if (setting.value && !savedHistory.includes(setting.value)) {
            historyEntries[setting.id].push(setting.value);
            GM_setValue(historyKey, historyEntries[setting.id]);
        }
    });

    // 创建每个设置项的 UI
    settings.forEach(setting => {
        const settingGroup = document.createElement('div');
        settingGroup.style.display = 'flex';
        settingGroup.style.flexDirection = 'column';

        // 标签
        const label = document.createElement('label');
        label.textContent = setting.label;
        label.style.marginBottom = '5px';
        label.style.fontWeight = 'bold';
        settingGroup.appendChild(label);

        // 输入容器 (用于包含输入框和下拉按钮)
        const inputContainer = document.createElement('div');
        inputContainer.style.position = 'relative';
        inputContainer.style.display = 'flex';

        // 输入框
        const input = document.createElement('input');
        input.type = setting.type;
        input.id = `setting-${setting.id}`;
        input.value = setting.value || '';
        input.placeholder = setting.placeholder || '';
        input.style.width = '100%';
        input.style.padding = '8px 12px';
        input.style.borderRadius = '4px';
        input.style.border = '1px solid #ddd';
        input.style.fontSize = '14px';

        if (setting.type === 'number') {
            if (setting.min !== undefined) input.min = setting.min;
            if (setting.max !== undefined) input.max = setting.max;
            if (setting.step !== undefined) input.step = setting.step;
        }

        inputContainer.appendChild(input);

        // 历史下拉按钮
        if (historyEntries[setting.id] && historyEntries[setting.id].length > 0) {
            const historyButton = document.createElement('button');
            historyButton.className = 'history-button';
            historyButton.textContent = '▼';
            historyButton.title = '历史记录';
            historyButton.style.marginLeft = '5px';
            historyButton.style.padding = '8px 12px';
            historyButton.style.borderRadius = '4px';
            historyButton.style.border = '1px solid #ddd';
            historyButton.style.cursor = 'pointer';

            // 下拉菜单
            const dropdown = document.createElement('div');
            dropdown.style.display = 'none';
            dropdown.style.position = 'absolute';
            dropdown.style.top = '100%';
            dropdown.style.left = '0';
            dropdown.style.right = '0';
            dropdown.style.backgroundColor = '#fff';
            dropdown.style.border = '1px solid #ddd';
            dropdown.style.borderRadius = '4px';
            dropdown.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
            dropdown.style.zIndex = '1';
            dropdown.style.maxHeight = '150px';
            dropdown.style.overflowY = 'auto';
            dropdown.style.marginTop = '5px';

            // 添加历史记录项
            historyEntries[setting.id].forEach(historyValue => {
                const historyItem = document.createElement('div');
                historyItem.style.padding = '8px 12px';
                historyItem.style.cursor = 'pointer';
                historyItem.style.borderBottom = '1px solid #eee';
                historyItem.style.display = 'flex';
                historyItem.style.justifyContent = 'space-between';
                historyItem.style.alignItems = 'center';

                // 创建内容容器
                const contentSpan = document.createElement('span');
                contentSpan.textContent = historyValue;
                contentSpan.style.flexGrow = '1';
                contentSpan.style.overflow = 'hidden';
                contentSpan.style.textOverflow = 'ellipsis';
                historyItem.appendChild(contentSpan);

                // 创建删除按钮
                const deleteBtn = document.createElement('span');
                deleteBtn.textContent = '×';
                deleteBtn.style.marginLeft = '8px';
                deleteBtn.style.color = '#999';
                deleteBtn.style.fontWeight = 'bold';
                deleteBtn.style.cursor = 'pointer';
                deleteBtn.style.padding = '0 4px';
                deleteBtn.title = '删除此记录';

                deleteBtn.addEventListener('mouseenter', () => {
                    deleteBtn.style.color = '#f44336';
                });

                deleteBtn.addEventListener('mouseleave', () => {
                    deleteBtn.style.color = '#999';
                });

                // 删除历史记录的点击事件
                deleteBtn.addEventListener('click', (e) => {
                    e.stopPropagation(); // 阻止冒泡，防止触发historyItem的点击事件

                    // 从历史记录中删除
                    const index = historyEntries[setting.id].indexOf(historyValue);
                    if (index > -1) {
                        historyEntries[setting.id].splice(index, 1);
                        GM_setValue(`${setting.id}_history`, historyEntries[setting.id]);

                        // 从UI中移除
                        dropdown.removeChild(historyItem);

                        // 如果没有历史记录了，隐藏下拉菜单
                        if (historyEntries[setting.id].length === 0) {
                            dropdown.style.display = 'none';
                            // 移除历史按钮
                            inputContainer.removeChild(historyButton);
                            inputContainer.removeChild(dropdown);
                        }
                    }
                });

                historyItem.appendChild(deleteBtn);

                historyItem.addEventListener('mouseenter', () => {
                    historyItem.style.backgroundColor = '#f5f5f5';
                });

                historyItem.addEventListener('mouseleave', () => {
                    historyItem.style.backgroundColor = '';
                });

                // 点击项目填充输入框
                contentSpan.addEventListener('click', () => {
                    input.value = historyValue;
                    dropdown.style.display = 'none';
                });

                dropdown.appendChild(historyItem);
            });

            historyButton.addEventListener('click', (e) => {
                e.preventDefault();
                if (dropdown.style.display === 'none') {
                    dropdown.style.display = 'block';
                } else {
                    dropdown.style.display = 'none';
                }
            });

            // 点击其他地方关闭下拉菜单
            document.addEventListener('click', (e) => {
                if (e.target !== historyButton && !dropdown.contains(e.target)) {
                    dropdown.style.display = 'none';
                }
            });

            inputContainer.appendChild(historyButton);
            inputContainer.appendChild(dropdown);
        }

        settingGroup.appendChild(inputContainer);

        // 帮助文本
        if (setting.help) {
            const helpText = document.createElement('small');
            helpText.textContent = setting.help;
            helpText.style.marginTop = '4px';
            helpText.style.color = '#888';
            helpText.style.fontSize = '12px';
            settingGroup.appendChild(helpText);
        }

        settingsContainer.appendChild(settingGroup);
    });
const customParamsSection = document.createElement('div');
    customParamsSection.style.marginTop = '20px';
    customParamsSection.style.borderTop = '1px solid #eee';
    customParamsSection.style.paddingTop = '15px';

    const customParamsTitle = document.createElement('h3');
    customParamsTitle.textContent = '自定义额外参数';
    customParamsTitle.style.marginBottom = '15px';
    customParamsSection.appendChild(customParamsTitle);

    // 读取已有的自定义参数
    if (!config.additionalParams) {
        config.additionalParams = {}; // Initialize if doesn't exist
        // Attempt to load from storage, defaulting to an empty object
        config.additionalParams = GM_getValue('additionalParams', {});
        // Ensure it's always an object even if GM_getValue returns null/undefined somehow
        if (typeof config.additionalParams !== 'object' || config.additionalParams === null) {
             config.additionalParams = {};
        }
        // No GM_setValue needed here, just loading
    }

    // 创建参数列表容器
    const paramsList = document.createElement('div');
    paramsList.id = 'custom-params-list';
    paramsList.style.display = 'grid';
    paramsList.style.gap = '10px';

    // 显示现有自定义参数
    function renderCustomParams() {
        paramsList.innerHTML = '';

        Object.entries(config.additionalParams).forEach(([key, value]) => {
            const paramRow = document.createElement('div');
            paramRow.style.display = 'flex';
            paramRow.style.gap = '10px';
            paramRow.style.marginBottom = '10px';

            // 参数键输入框
            const keyInput = document.createElement('input');
            keyInput.type = 'text';
            keyInput.value = key;
            keyInput.placeholder = '参数名';
            keyInput.style.flex = '1';
            keyInput.style.padding = '8px 12px';
            keyInput.style.borderRadius = '4px';
            keyInput.style.border = '1px solid #ddd';
            keyInput.style.width = '50px';
            keyInput.style.fontSize = '14px';
            keyInput.readOnly = true; // 不允许修改键名，需要删除重新添加

            // 参数值输入框
            const valueInput = document.createElement('input');
            valueInput.type = 'text';
            valueInput.value = typeof value === 'string' ? value : JSON.stringify(value);
            valueInput.placeholder = '参数值';
            valueInput.style.flex = '1';
            valueInput.style.padding = '8px 12px';
            valueInput.style.borderRadius = '4px';
            valueInput.style.width = '50px';
            valueInput.style.border = '1px solid #ddd';
            valueInput.style.fontSize = '14px';

            // 保存参数值的变更
            valueInput.addEventListener('change', () => {
                let parsedValue = valueInput.value;
                try {
                    // 尝试解析为JSON，处理数字、布尔值、对象等
                    if (parsedValue.trim() !== '' &&
                        (parsedValue.startsWith('{') ||
                         parsedValue.startsWith('[') ||
                         parsedValue === 'true' ||
                         parsedValue === 'false' ||
                         !isNaN(Number(parsedValue)))) {
                        parsedValue = JSON.parse(parsedValue);
                    }
                } catch (e) {
                    // 解析失败则保持为字符串
                    console.log("值保持为字符串", e);
                }

                config.additionalParams[key] = parsedValue;
                GM_setValue('additionalParams', config.additionalParams);
            });

            // 删除按钮
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = '删除';
            deleteBtn.style.padding = '8px 12px';
            deleteBtn.style.borderRadius = '4px';
            deleteBtn.style.border = '1px solid #ddd';
            deleteBtn.style.cursor = 'pointer';
            deleteBtn.style.backgroundColor = '#f44336';
            deleteBtn.style.color = 'white';
            deleteBtn.style.border = 'none';

            deleteBtn.addEventListener('click', () => {
                delete config.additionalParams[key];
                GM_setValue('additionalParams', config.additionalParams);
                renderCustomParams();
            });

            paramRow.appendChild(keyInput);
            paramRow.appendChild(valueInput);
            paramRow.appendChild(deleteBtn);
            paramsList.appendChild(paramRow);
        });
    }

    renderCustomParams();
    customParamsSection.appendChild(paramsList);

    // 添加新参数的表单
    const newParamForm = document.createElement('div');
    newParamForm.style.display = 'flex';
    newParamForm.style.gap = '10px';
    newParamForm.style.marginTop = '15px';

    // 新参数键输入框
    const newKeyInput = document.createElement('input');
    newKeyInput.type = 'text';
    newKeyInput.id = 'new-param-key';
    newKeyInput.placeholder = '新参数名';
    newKeyInput.style.flex = '1';
    newKeyInput.style.padding = '8px 12px';
    newKeyInput.style.borderRadius = '4px';
    newKeyInput.style.border = '1px solid #ddd';
    newKeyInput.style.fontSize = '14px';

    // 新参数值输入框
    const newValueInput = document.createElement('input');
    newValueInput.type = 'text';
    newValueInput.id = 'new-param-value';
    newValueInput.placeholder = '新参数值';
    newValueInput.style.flex = '1';
    newValueInput.style.padding = '8px 12px';
    newValueInput.style.borderRadius = '4px';
    newValueInput.style.border = '1px solid #ddd';
    newValueInput.style.fontSize = '14px';

    // 添加新参数按钮
    const addParamBtn = document.createElement('button');
    addParamBtn.textContent = '添加';
    addParamBtn.style.padding = '8px 16px';
    addParamBtn.style.borderRadius = '4px';
    addParamBtn.style.border = 'none';
    addParamBtn.style.cursor = 'pointer';
    addParamBtn.style.backgroundColor = '#4CAF50';
    addParamBtn.style.color = 'white';

    addParamBtn.addEventListener('click', () => {
        const key = newKeyInput.value.trim();
        let value = newValueInput.value.trim();

        if (key) {
            try {
                // 尝试解析为JSON，处理数字、布尔值、对象等
                if (value !== '' &&
                    (value.startsWith('{') ||
                     value.startsWith('[') ||
                     value === 'true' ||
                     value === 'false' ||
                     !isNaN(Number(value)))) {
                    value = JSON.parse(value);
                }
            } catch (e) {
                // 解析失败则保持为字符串
                console.log("值保持为字符串", e);
            }

            config.additionalParams[key] = value;
            GM_setValue('additionalParams', config.additionalParams);

            // 重置输入框
            newKeyInput.value = '';
            newValueInput.value = '';

            // 更新显示
            renderCustomParams();
        }
    });

    newParamForm.appendChild(newKeyInput);
    newParamForm.appendChild(newValueInput);
    newParamForm.appendChild(addParamBtn);

    customParamsSection.appendChild(newParamForm);
    modal.appendChild(customParamsSection);

    // 按钮容器
    const buttonContainer = document.createElement('div');
    buttonContainer.style.marginTop = '20px';
    buttonContainer.style.display = 'flex';
    buttonContainer.style.justifyContent = 'flex-end';
    buttonContainer.style.gap = '10px';
    modal.appendChild(buttonContainer);

    // 取消按钮
    const cancelButton = document.createElement('button');
    cancelButton.textContent = '取消';
    cancelButton.className = 'cancel-button';
    cancelButton.style.padding = '8px 16px';
    cancelButton.style.borderRadius = '4px';
    cancelButton.style.border = '1px solid #ddd';

    cancelButton.style.cursor = 'pointer';
    cancelButton.addEventListener('click', () => {
        document.body.removeChild(modalOverlay);
        document.body.removeChild(modal);
        config.hidden = true; // 设置为显示聊天窗口
        inspect_chatWindow(); //
    });
    buttonContainer.appendChild(cancelButton);

    // 保存按钮
    const saveButton = document.createElement('button');
    saveButton.textContent = '保存';
    saveButton.className = 'save-button';
    saveButton.style.padding = '8px 16px';
    saveButton.style.borderRadius = '4px';
    saveButton.style.border = 'none';

    saveButton.style.cursor = 'pointer';
    saveButton.addEventListener('click', () => {
        // 保存所有设置并更新历史记录
        settings.forEach(setting => {
            const input = document.getElementById(`setting-${setting.id}`);
            let value = input.value;

            // 转换数值类型
            if (setting.type === 'number') {
                value = parseFloat(value);

                // 验证范围
                if (setting.min !== undefined && value < setting.min) value = setting.min;
                if (setting.max !== undefined && value > setting.max) value = setting.max;
            }

            // 更新配置
            config[setting.id] = value;
            GM_setValue(setting.id, value);

            // 更新历史记录
            if (value && typeof value === 'string' && value.trim() !== '') {
                const historyKey = `${setting.id}_history`;
                let history = GM_getValue(historyKey, []);

                // 如果不在历史记录中，添加到历史
                if (!history.includes(value)) {
                    history.push(value);
                    // 限制历史记录数量为 10 条
                    if (history.length > 10) {
                        history = history.slice(-10);
                    }
                    GM_setValue(historyKey, history);
                }
            }


        });

        document.body.removeChild(modalOverlay);
        document.body.removeChild(modal);
        config.hidden = true; // 设置为显示聊天窗口
        inspect_chatWindow(); // 重新检查是否显示聊天窗口
    });
    buttonContainer.appendChild(saveButton);

    // 添加模态窗口背景遮罩
    const modalOverlay = document.createElement('div');
    modalOverlay.style.position = 'fixed';
    modalOverlay.style.top = '0';
    modalOverlay.style.left = '0';
    modalOverlay.style.right = '0';
    modalOverlay.style.bottom = '0';
    modalOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    modalOverlay.style.zIndex = '9999';

    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            document.body.removeChild(modalOverlay);
            document.body.removeChild(modal);
            config.hidden = true; // 设置为显示聊天窗口
            inspect_chatWindow(); // 重新检查是否显示聊天窗口
        }
    });

    // 添加到文档
    document.body.appendChild(modalOverlay);
    document.body.appendChild(modal);
}
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
           startButton.style.display = "none";

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
                    sendMessage(message,1);
  config.error_sign = true;
                    inputBox.value = '';
                }
           else{
           alert("发送消息不能为空！");
           }
           startButton.style.display = "flex";
  });
  //隐藏默认配置
        // 输入框事件
        inputBox.addEventListener('keydown', (e) => {
            startButton.style.display = "none";
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                const message = inputBox.value.trim();
                if (message) {
                    sendMessage(message,1);
                    config.error_sign = true;
                    inputBox.value = '';
                }
            }
            startButton.style.display = "flex";
        });
        /**
  * 获取网页主要内容
  * @returns {Object} 包含url、title和content的对象
  */
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
  function initCodeExecution() {
    // 为现有代码块添加按钮
    document.querySelectorAll('pre').forEach(preElement => {
        if (!preElement.nextElementSibling?.classList?.contains('code-buttons-container')) {
            addExecuteButton(preElement);
        }
    });



    // 创建代码执行弹窗
    createExecutionModal();
  }
  function Add_codebutton(){
    document.querySelectorAll('pre').forEach(preElement => {
        if (!preElement.nextElementSibling?.classList?.contains('code-buttons-container')) {
            addExecuteButton(preElement);
        }
    });
  }
    // 为代码块添加运行按钮
   function addExecuteButton(preElement) {
    // 创建按钮容器
        const code = preElement.textContent;
        const codeType = detectCodeType(code);
       if(codeType == "html"){
    const btnContainer = document.createElement('div');
    btnContainer.className = 'code-buttons-container';
    btnContainer.style.position = 'relative';

    // 创建运行按钮
    const runBtn = document.createElement('button');
    runBtn.className = 'code-execute-btn';
    runBtn.textContent = '运行';
    runBtn.onclick = function(e) {
        e.stopPropagation();
        executeCode(code, codeType);
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
                    <h3>代码执行结果<span id="code-timer-status"></span></h3>
                    <span class="fullscreen-btn" onclick="toggleFullscreen()">⛶</span>
                    <span class="code-execution-close">&times;</span>
                </div>
                <div class="code-execution-body">
               <iframe id="code-sandbox" sandbox="allow-scripts allow-same-origin"></iframe>
                    <div id="code-status-bar">等待执行...</div>
                </div>
            </div>
        `;
        document.body.appendChild(modal);

        // 事件监听
        modal.querySelector('.code-execution-close').onclick = closeExecutionModal;
        modal.querySelector('.fullscreen-btn').onclick = toggleFullscreen;

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
        // 简单检测Python代码
        if (code.includes('import ') || code.includes('def ') || code.includes('print(') ||
            code.includes('from ') || code.includes('class ') || code.includes('lambda ')) {
            return 'python';
        }
        // 简单检测HTML代码
        if (code.includes('<html') || code.includes('<div') || code.includes('<style') ||
            code.includes('<script') || code.includes('</') || code.includes('/>')) {
            return 'html';
        }
        return 'html'; // 默认Python
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
    chatWindow.classList.remove('active');
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
        // LAZY INITIALIZATION: Initialize Pyodide only if it hasn't been loaded yet.
        if (!pyodideInstance) { // Use the flag set by initializePyodide
            updateStatus(statusBar, "首次运行：正在加载Python环境(Pyodide)...", "running");
            const initialized = await initializePyodide(); // Wait for initialization
            if (!initialized) {
                updateStatus(statusBar, "Python环境(Pyodide)加载失败，无法执行代码。", "error");
                return false; // Stop if initialization failed
            }
            updateStatus(statusBar, "Python环境加载成功，准备执行代码...", "running");
        } else if (pyodideInstance === false) {
             updateStatus(statusBar, "Python环境(Pyodide)先前加载失败，无法执行代码。", "error");
             return false; // Stop if previous attempt failed
        }

        // Now we know Pyodide should be ready (or initialization failed)
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

            // 在iframe中通过 srcdoc 执行代码
            const htmlContent = `
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
            `;
            sandbox.srcdoc = htmlContent;

            updateStatus(statusBar, '✅执行完成', 'success');
        } catch (e) {
            appendStatus(statusBar, `❌执行错误: ${e}`, 'error');
        }
    }
    // 更新状态
    function updateStatus(element, message, type) {
        element.textContent = message;
        element.className = type ? `status-${type}` : '';
    }

    // 追加状态信息
    function appendStatus(element, message, type = '') {
        const line = document.createElement('div');
        line.textContent = message;
        if (type) line.className = `status-${type}`;
        element.appendChild(line);
        element.scrollTop = element.scrollHeight;
    }
         initCodeExecution();//添加运行

  //错误检查
  function inspect_error(datas,contentDiv) {
       const messageDiv = document.createElement('div'); // 用于主内容
      console.log("data:",datas);
       //console.log(datas.choices[0].delta);
      let data = JSON.parse(datas.slice(6));
      try {
          // 检查返回数据是否为空
  if(!data){
      console.log("error1");
      messageDiv.innerHTML = JSON.stringify(data);
      contentDiv.appendChild(messageDiv);
      return false;

  }

          // 第二层检查：是否是错误响应
          if (data.error) {
               console.log("error2");
              messageDiv.innerHTML = `<span class="error-message">error1 ${JSON.stringify(data)}</span>`;
              contentDiv.appendChild(messageDiv);
              return false;
          }
            // 第三层检查：验证必要字段
          if (!data.choices[0].delta) {
               console.log("error3");
              const errorMsg =JSON.stringify(data);
              messageDiv.innerHTML = errorMsg;
              contentDiv.appendChild(messageDiv);
              return false;
          }



          // 如果没有错误，返回成功
          return true;
      } catch (error) {
          console.error("处理错误:", error);
          messageDiv.innerHTML = `<span class="error-message">error3 ${error.message}</span>`;
          contentDiv.appendChild(messageDiv);
          return false;
  }
  }
  // 流式响应处理 (立即更新DOM版本，适配 GM_xmlhttpRequest 的 onload)
  // ... 已有代码 ...

  // 流式响应处理 (立即更新DOM版本，适配 GM_xmlhttpRequest 的 onload)
  function handleStreamResponse(responseStream, aiMsgDiv, thinkingMsgDiv,isSummaryTask = false) { // 移除了 isSummaryTask 等参数，让 sendMessage 管理历史
    return new Promise((resolve, reject) => {
        let aiMessage = '';
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
            config.chatHistory.push({ role: 'assistant', content: 'user中断了对话输出....'});
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
  console.log(reader);
        function readStream() {
              if (isStopped) return; // 如果已停止，不再继续读取
            reader.read().then(({ done, value }) => {
                if (done) {
                   // console.log(done,value);
                    stopButton.remove(); // 完成后移除停止按钮

                        const aiResponse = {
                        role: 'assistant',
                        content: aiMessage, // 去掉"🤖："
                        timestamp: new Date().toISOString(),
                        hasReasoning: isReasoningReceived,
                        reasoningContent: isReasoningReceived ? reasoningMessage : null
                    };
                    config.fullConversation.push(aiResponse);
                    GM_setValue('fullConversation', config.fullConversation);
                        if (!isSummaryTask && aiMessage.trim()) {
                        config.chatHistory.push({ role: 'assistant', content: aiMessage });
                        //config.fullConversation.push({role:'system',conetnt:aiMessage.slice(3)});
                        GM_setValue('chatHistory', config.chatHistory);
                            //console.log(config.fullConversation);
                      // GM_setValue('fullConversation',config.fullConversation);
                    }
                    // 如果是总结任务，只添加简化的用户消息
                    else if (isSummaryTask) {
                        //config.chatHistory.push({ role: 'user', content: '总结当前网页...' });
                        config.chatHistory.push({ role: 'assistant', content: aiMessage });
                        //config.fullConversation.push({role:'system',conetnt:aiMessage.slice(3)});
                        GM_setValue('chatHistory', config.chatHistory);
                       // GM_setValue('fullConversation',config.fullConversation);
                    }
                    addCopyButtonsToCodeBlocks(aiMsgDiv);
                     Add_codebutton();
                    // 如果接收到过思考内容，在结束时保留 "思考内容：" 提示
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
                    //console.log("a");
                    buffer += decoder.decode(value, { stream: true });

                    try{

                    if(config.error_sign ){
                        console.log("a",buffer);
                         config.error_sign = false;
                        if(!buffer.startsWith('data: ')){
                        console.log(buffer);
                        const errorDiv = document.createElement('div'); // 用于主内容
                        errorDiv.innerHTML = buffer;
                        errorDiv.style.color = "red";
                        aiMsgDiv.appendChild(errorDiv);

                        }
                        //return;
                   // throw new Error("数据流解析失败！"); // 抛出异常，结束外部函数
                    }
                    }catch(error){
                   console.log(error);
                    }
                } catch (decodeError) {
                   // console.log("b");
                    //stopButton.remove(); // 出错时也移除停止按钮
                    console.error('解码响应流时出错:', decodeError);
                    reject(decodeError);
                    return;
                }

                const lines = buffer.split('\n');
                buffer = lines.pop() || '';

                for (const line of lines) {
                
                    if(config.error_sign){
                        console.log("line",line);
                         config.error_sign = false;
                    if(!inspect_error(line,aiMsgDiv)){
                        console.log("进入异常");
                        //return ;
    //throw new Error("数据流解析失败！"); // 抛出异常，结束外部函数
  }}
                    //console.log("读行2");
                    if (!line.trim() || line === 'data: [DONE]') continue;
                    if (line.startsWith('data: ')) {
                        try {
                            //  console.log("读行3");
                            const data = JSON.parse(line.slice(6));
                            // console.log('解析到的数据:', data); // 打印解析到的数据，方便调试
                            if (data.choices?.[0]?.delta?.content) {
                                const newContent = data.choices[0].delta.content;
                                aiMessage += newContent;
                                contentDiv.innerHTML = "🤖："+marked.parse(aiMessage);
                                contentDiv.querySelectorAll('pre code').forEach((block) => {
                                    hljs.highlightElement(block);
                                });
                                //addCopyButtonsToCodeBlocks(contentDiv);
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
                                //addCopyButtonsToCodeBlocks(reasoningDiv);
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
//随机头
        /**
 * 生成随机请求头对象，可通过属性直接访问各字段
 * @returns {Object} - 包含随机请求头的对象，如 { userAgent, acceptLanguage, referer, ... }
 */
function getRandomHeaders() {
    // 可扩展的 User-Agent 列表
    const userAgents = [
        // Chrome
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
        // Firefox
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:120.0) Gecko/20100101 Firefox/120.0",
        // Safari
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.1 Safari/605.1.15",
    ];

    // 随机 Accept-Language 列表
    const acceptLanguages = [
        "en-US,en;q=0.9",
        "zh-CN,zh;q=0.9,en;q=0.8",
        "ja-JP,ja;q=0.9,en;q=0.8",
    ];

    // 随机 Referer 列表
    const referers = [
        "https://www.google.com/",
        "https://www.bing.com/",
        "https://www.youtube.com/",
    ];

    // 随机选择
    const userAgent = userAgents[Math.floor(Math.random() * userAgents.length)];
    const acceptLanguage = acceptLanguages[Math.floor(Math.random() * acceptLanguages.length)];
    const referer = referers[Math.floor(Math.random() * referers.length)];

    // 返回对象（支持属性直接访问）
    return {
        userAgent,
        acceptLanguage,
        referer,
        origin: new URL(referer).origin,
        headers: {
            'User-Agent': userAgent,
            'Accept-Language': acceptLanguage,
            'Referer': referer,
            'Origin': new URL(referer).origin,
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
        }
    };
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
  // ==========================================================
  // ... 已有代码 ...
  // 计算消息的 token 数量（简单估算）
  function countTokens(text) {
    return Math.ceil(text.length / 2);
  }



  async function sendMessage(message, retryCount = 0, isSummaryTask = false) {

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
        const isNearBottom = chatContent.scrollHeight - chatContent.scrollTop - chatContent.clientHeight < 200;
        if (isNearBottom) {
            chatContent.scrollTop = chatContent.scrollHeight;
        }
        return;
    }

    // 用户消息处理
    const userMsg = {
        role: 'user',
        content: isSummaryTask ? '总结当前网页...' : message
    };
    config.fullConversation.push({
        role: 'user',
        content: message,
        timestamp: new Date().toISOString()
    });
    GM_setValue('fullConversation', config.fullConversation);

    // 创建用户消息UI
    const userMsgDiv = document.createElement('div');
    userMsgDiv.className = 'ds-chat-message ds-user-message ds-chat-message';
    userMsgDiv.innerHTML = (isSummaryTask ? '总结当前网页...' : message);
    chatContent.appendChild(userMsgDiv);
    // 为用户消息添加选项菜单
    addMessageOptionsMenu(userMsgDiv);
    config.chatHistory.push(userMsg);
    GM_setValue('chatHistory', config.chatHistory);

    // 创建AI消息容器
    const thinkingMsgDiv = document.createElement('div');
    thinkingMsgDiv.className = 'ds-reasoning-title';
    thinkingMsgDiv.innerText = '思考中...';
    chatContent.appendChild(thinkingMsgDiv);

    const aiMsgDiv = document.createElement('div');
    aiMsgDiv.className = 'ds-chat-message ds-ai-message';
    chatContent.appendChild(aiMsgDiv);
    // 为AI消息添加选项菜单
    addMessageOptionsMenu(aiMsgDiv);

    // 自动滚动
    const isNearBottom = chatContent.scrollHeight - chatContent.scrollTop - chatContent.clientHeight < 200;
    if (isNearBottom) {
        chatContent.scrollTop = chatContent.scrollHeight;
    }

    // 构建请求数据
 // 构建请求数据 - 总是发送完整消息给AI
    const requestData = {
        model: config.model,
        messages: [
            ...truncateContext(config.chatHistory, config.maxContextTokens)
        ],
        temperature: config.temperature,
        max_tokens: config.maxTokens,
        stream: true,

    };
 if (config.additionalParams && Object.keys(config.additionalParams).length > 0) {
        Object.entries(config.additionalParams).forEach(([key, value]) => {
            requestData[key] = value;
        });
    }
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
    else if (config.personalityPrompt) {
        requestData.messages.splice(0, 0, {
            role: 'system',
            content: config.personalityPrompt,
        });
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
                    'User-Agent': getRandomHeaders().userAgent,
                    'Accept-Language': getRandomHeaders().acceptLanguage,
                    'Accept': config.streamOutput !== false ? 'text/event-stream' : 'application/json'
                },
                responseType: config.streamOutput !== false ? 'stream' : 'json',
                data: JSON.stringify(requestData),

                onload: config.streamOutput !== false ? undefined : function(response) {
                    clearTimeout(timeoutId);
                    try {
                        const data = JSON.parse(response.responseText);
                        //console.log(data);
                        handleNonStreamResponse(data, aiMsgDiv, thinkingMsgDiv, isSummaryTask)
                            .then(resolve)
                            .catch(reject);
                    } catch (error) {
                        reject(error);
                    }
                },

                onloadstart: config.streamOutput !== false ? function(responseInfo) {
                    try {
                        handleStreamResponse(responseInfo.response, aiMsgDiv, thinkingMsgDiv, isSummaryTask)
                            .then(resolve)
                            .catch(reject);
                        startButton.style.display = "flex";
                    } catch (error) {
                        const existingStopButton = document.querySelector('.ds-stop-button');
                        if (existingStopButton) existingStopButton.remove();
                        reject(error);
                    }
                } : undefined,

                onerror: (error) => {
                    clearTimeout(timeoutId);
                    chatContent.removeChild(thinkingMsgDiv);
                    const existingStopButton = document.querySelector('.ds-stop-button');
                    if (existingStopButton) existingStopButton.remove();
                    reject(new Error('请求失败: ' + error.statusText));
                },
                ontimeout: () => {
                    clearTimeout(timeoutId);
                    const existingStopButton = document.querySelector('.ds-stop-button');
                    if (existingStopButton) existingStopButton.remove();
                    chatContent.removeChild(thinkingMsgDiv);
                    reject(new Error('请求超时'));
                }
            }

            );

        });
    } catch (error) {
        const existingStopButton = document.querySelector('.ds-stop-button');
        if (existingStopButton) existingStopButton.remove();
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

        const isNearBottom = chatContent.scrollHeight - chatContent.scrollTop - chatContent.clientHeight < 200;
        if (isNearBottom) {
            chatContent.scrollTop = chatContent.scrollHeight;
        }

        if ((error.message.includes('Failed to fetch') || error.message.includes('请求失败') || error.message.includes('timeout')) && retryCount < 3) {
            const retryMsgDiv = document.createElement('div');
            retryMsgDiv.className = 'ds-chat-message ds-thinking';
            retryMsgDiv.innerText = `连接失败,正在第${retryCount + 1}次重试...`;
            chatContent.appendChild(retryMsgDiv);

            setTimeout(() => {
                chatContent.removeChild(retryMsgDiv);
                return sendMessage(message, retryCount + 1, isSummaryTask);
            }, 2000);
        }
    }
  }
  // ... existing code ...

  /**
  * 处理非流式响应
  */
  function handleNonStreamResponse(data, aiMsgDiv, thinkingMsgDiv, isSummaryTask = false) {
    return new Promise((resolve) => {
        // 清空容器
        aiMsgDiv.innerHTML = '';
        aiMsgDiv.className = 'ds-chat-message ds-ai-message';

        const contentDiv = document.createElement('div');


        const reasoningDiv = document.createElement('div');
        reasoningDiv.className = 'ds-reasoning-content';
        reasoningDiv.style.display = 'none';
        aiMsgDiv.appendChild(reasoningDiv);
        aiMsgDiv.appendChild(contentDiv);

        let aiMessage = '🤖：';
        let reasoningMessage = '';

        // 处理响应内容
        //思考部分
           if (data.choices?.[0]?.message?.reasoning_content) {
            reasoningMessage = data.choices[0].message.reasoning_content;
            reasoningDiv.innerHTML = marked.parse(reasoningMessage);
            reasoningDiv.querySelectorAll('pre code').forEach((block) => {
                hljs.highlightElement(block);
            });
            reasoningDiv.style.display = 'block';

            const reasoningTitleDiv = document.createElement('div');
            reasoningTitleDiv.className = 'ds-reasoning-title';
            reasoningTitleDiv.innerText = '思考内容：';
            aiMsgDiv.insertBefore(reasoningTitleDiv, reasoningDiv);
        } else {
            const reasoningTitleDiv = document.createElement('div');
            reasoningTitleDiv.className = 'ds-reasoning-title';
            reasoningTitleDiv.innerText = '注意:该模型没有思考内容';
            aiMsgDiv.insertBefore(reasoningTitleDiv, reasoningDiv);
        }
        //正式回答部分
    try {
  //console.log("content1", data);

  // 第一层检查：数据是否为null或undefined
  if (!data) {
    throw new Error("API返回空数据");
  }

  // 第二层检查：是否是错误响应
  if (data.error) {
    contentDiv.innerHTML = `<span class="error-message">error: ${JSON.stringify(data)}</span>`;
    return;
  }

  // 第三层检查：验证必要字段
  else if (!data.choices?.[0]?.message?.content) {
       const errorMsg = data.errorMessage;
    throw new Error(JSON.stringify(data));
  }

  // 正常处理流程
  //console.log("content2", data);
  aiMessage += data.choices[0].message.content;
  contentDiv.innerHTML = marked.parse(aiMessage);
  contentDiv.querySelectorAll('pre code').forEach(block => {
    hljs.highlightElement(block);
  });

  } catch (error) {
  console.error("处理错误:", error);
  contentDiv.innerHTML = `<span class="error-message">error: ${error.message || '未知错误'}</span>`;
  }



        // 更新聊天历史
        const aiResponse = {
            role: 'assistant',
            content: aiMessage.slice(3),
            timestamp: new Date().toISOString(),
            hasReasoning: !!data.choices?.[0]?.message?.reasoning_content,
            reasoningContent: data.choices?.[0]?.message?.reasoning_content || null
        };

        config.fullConversation.push(aiResponse);
        GM_setValue('fullConversation', config.fullConversation);

        if (!isSummaryTask) {
            config.chatHistory.push({ role: 'assistant', content: aiMessage.slice(3) });
        } else {
            config.chatHistory.push({ role: 'assistant', content: aiMessage.slice(3) });
        }
        GM_setValue('chatHistory', config.chatHistory);

        addCopyButtonsToCodeBlocks(aiMsgDiv);
        Add_codebutton();

        if (thinkingMsgDiv.parentNode) {
            thinkingMsgDiv.parentNode.removeChild(thinkingMsgDiv);
        }

        resolve();
    });
  }

  // ... existing code ...
  // 为代码块添加复制按钮
  function addCopyButtonsToCodeBlocks(container) {
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

              // 创建复制按钮
        const copyButton = document.createElement('button');
        copyButton.className = 'copy-code-btn';
        copyButton.textContent = '复制';

        // 绑定复制事件（带重试机制）
        copyButton.addEventListener('click', () => {
            const code = pre.textContent;
            navigator.clipboard.writeText(code).then(() => {
                // 显示成功提示
                const successMessage = document.createElement('span');
                successMessage.className = 'copy-success';
                successMessage.textContent = '已复制!';
                copyButton.parentNode.appendChild(successMessage);

                // 2秒后移除
                setTimeout(() => {
                    successMessage.remove();
                }, 2000);
            }).catch(err => {
                console.error('复制失败: ', err);
            });
        });
        // 创建按钮容器
        const btnContainer = document.createElement('div');
        btnContainer.className = 'code-buttons-container';
        btnContainer.style.position = 'relative';


           // 将按钮容器插入到pre元素前面
        pre.parentNode.insertBefore(btnContainer, pre);

        // 将复制按钮添加到容器顶部
        btnContainer.appendChild(copyButton);



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
    userSummaryMsgDiv.innerText = '总结当前网页...';
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
  }
  )();

  // 为消息添加三点菜单和复制功能
  function addMessageOptionsMenu(messageDiv) {
    // 创建容器使消息可以相对定位
    const messageContainer = document.createElement('div');
    messageContainer.className = 'ds-message-container';
    messageContainer.style.position = 'relative';

    // 将消息移动到容器内
    messageDiv.parentNode.insertBefore(messageContainer, messageDiv);
    messageContainer.appendChild(messageDiv);

    // 创建三点菜单按钮
    const optionsButton = document.createElement('button');
    optionsButton.className = 'ds-message-options-btn';
    optionsButton.innerHTML = '⋮';
    optionsButton.style.position = 'absolute';
    optionsButton.style.top = '0px';
    optionsButton.style.right = '0px';
    optionsButton.style.background = 'transparent';
    optionsButton.style.border = 'none';
    optionsButton.style.cursor = 'pointer';
    optionsButton.style.fontSize = '16px';
    optionsButton.style.color = 'black';
    optionsButton.style.padding = '3px 7px';
    optionsButton.style.borderRadius = '3px';
    optionsButton.style.display = 'none'; // 默认隐藏

    // 创建选项菜单
    const optionsMenu = document.createElement('div');
    optionsMenu.className = 'ds-message-options-menu';
    optionsMenu.style.position = 'absolute';
    optionsMenu.style.top = '25px';
    optionsMenu.style.right = '5px';
    optionsMenu.style.background = '#fff';
    optionsMenu.style.border = '1px solid #ddd';
    optionsMenu.style.borderRadius = '4px';
    optionsMenu.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
    optionsMenu.style.zIndex = '1000';
    optionsMenu.style.display = 'none';

    // 添加复制选项
    const copyOption = document.createElement('div');
    copyOption.className = 'ds-message-option';
    copyOption.textContent = 'copy';
    copyOption.style.padding = '8px 12px';
    copyOption.style.cursor = 'pointer';
    copyOption.style.whiteSpace = 'nowrap';

    copyOption.addEventListener('mouseover', () => {
      copyOption.style.backgroundColor = '#f0f0f0';
    });

    copyOption.addEventListener('mouseout', () => {
      copyOption.style.backgroundColor = '';
    });

    copyOption.addEventListener('click', () => {
      // 获取消息文本内容
      const text = messageDiv.innerText;
      navigator.clipboard.writeText(text).then(() => {
        // 显示成功提示
        const successMessage = document.createElement('span');
        successMessage.className = 'copy-success';
        successMessage.textContent = '已复制!';
        successMessage.style.position = 'absolute';
        successMessage.style.top = '25px';
        successMessage.style.right = '5px';
        successMessage.style.background = 'rgba(0,0,0,0.7)';
        successMessage.style.color = '#fff';
        successMessage.style.padding = '3px 8px';
        successMessage.style.borderRadius = '3px';
        successMessage.style.fontSize = '12px';
        messageContainer.appendChild(successMessage);

        // 隐藏菜单
        optionsMenu.style.display = 'none';

        // 2秒后移除成功提示
        setTimeout(() => {
          successMessage.remove();
        }, 2000);
      }).catch(err => {
        console.error('复制失败: ', err);
      });
    });

    // 添加选项到菜单
    optionsMenu.appendChild(copyOption);

    // 添加点击事件切换菜单显示状态
    optionsButton.addEventListener('click', (e) => {
      e.stopPropagation();
      if (optionsMenu.style.display === 'none') {
        optionsMenu.style.display = 'block';
      } else {
        optionsMenu.style.display = 'none';
      }
    });

    // 点击其他地方隐藏菜单
    document.addEventListener('click', () => {
      optionsMenu.style.display = 'none';
    });

    // 鼠标悬停在消息上时显示按钮
    messageContainer.addEventListener('mouseenter', () => {
      optionsButton.style.display = 'block';
    });

    messageContainer.addEventListener('mouseleave', () => {
      optionsButton.style.display = 'none';
      // 菜单是否应该在鼠标离开时消失取决于用户体验设计，可选
      // optionsMenu.style.display = 'none';
    });

    // 将按钮和菜单添加到消息容器
    messageContainer.appendChild(optionsButton);
    messageContainer.appendChild(optionsMenu);

    return messageContainer;
  }
