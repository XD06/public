// name：命名 data：数据
function saveData(name, data) {
    localStorage.setItem(name, JSON.stringify({ 'time': Date.now(), 'data': data }))
}
let styleConfig = {
    fontFamily: 'inherit',
    themeColor: window.Butterfly_CONFIG?.theme_color?.main || '#49b1f5', // 新增主题色配置
    darkThemeColor: '#1a1a1a' // 暗黑模式颜色
};

// 初始化字体设置
function initFont() {
    const saved = loadData('fontConfig', 1440);
    if (saved) {
        styleConfig.fontFamily = saved;
        document.documentElement.style.setProperty('--global-font', `'${saved}'`); // 添加引号
    }
}

// 初始化主题颜色
function initThemeColor() {
    const savedColor = loadData('themeColorConfig', 1440);
    if (savedColor) {
        styleConfig.themeColor = savedColor;
    }
    document.documentElement.style.setProperty('--theme-main', styleConfig.themeColor);
    document.documentElement.style.setProperty('--theme-dark-main', styleConfig.darkThemeColor);
}
function updateFont(value) {
    styleConfig.fontFamily = value;
    applyFontStyle();
}
// 应用字体样式
function applyFontStyle() {
    document.documentElement.style.setProperty('--global-font', styleConfig.fontFamily);
    saveData('fontConfig', styleConfig.fontFamily);
}
// 应用主题颜色
function applyThemeColor(color) {
    styleConfig.themeColor = color;
    document.documentElement.style.setProperty('--theme-main', color);
    saveData('themeColorConfig', color);
}

// 取数据
// name：命名 time：过期时长,单位分钟,如传入30,即加载数据时如果超出30分钟返回0,否则返回数据
function loadData(name, time) {
    let d = JSON.parse(localStorage.getItem(name));
    // 过期或有错误返回 0 否则返回数据
    if (d) {
        let t = Date.now() - d.time
        if (t < (time * 60 * 1000) && t > -1) return d.data;
    }
    return 0;
}

// 上面两个函数如果你有其他需要存取数据的功能，也可以直接使用

// 读取背景
try {
    let data = loadData('blogbg', 1440)
    if (data) changeBg(data, 1)
    else localStorage.removeItem('blogbg');
} catch (error) { localStorage.removeItem('blogbg'); }

// 切换背景函数
// 此处的flag是为了每次读取时都重新存储一次,导致过期时间不稳定
// 如果flag为0则存储,即设置背景. 为1则不存储,即每次加载自动读取背景.
// 修改changeBg函数
function changeBg(s, flag) {
    const bgElement = document.getElementById('web_bg') || createBgElement()
    // 添加URL格式验证
    if (s.startsWith('url(')) {
        bgElement.style.backgroundImage = s
        bgElement.style.backgroundColor = 'unset'
    } else if (s.startsWith('#')) {
        bgElement.style.backgroundColor = s
        bgElement.style.backgroundImage = 'unset'
    } else if (s.startsWith('linear-gradient')) {
        bgElement.style.backgroundImage = s
        bgElement.style.backgroundColor = 'unset'
    }
    if (!flag) saveData('blogbg', s)
    
    // 强制重绘
    bgElement.style.display = 'none'
    bgElement.offsetHeight // 触发重绘
    bgElement.style.display = 'block'
}
function createBgElement() {
    const bgElement = document.createElement('div')
    bgElement.id = 'web_bg'
    document.body.prepend(bgElement)
    return bgElement
  }
// 以下为2.0新增内容

// 创建窗口
var winbox = ''

function createWinbox() {
    let div = document.createElement('div')
    document.body.appendChild(div)
    winbox = WinBox({
        id: 'changeBgBox',
        index: 999,
        title: "切换设置",
        x: "center",
        y: "center",
        minwidth: '300px',
        height: "60%",
        background: 'black',
        onmaximize: () => { div.innerHTML = `<style>body::-webkit-scrollbar {display: none;}div#changeBgBox {width: 100% !important;}</style>` },
        onrestore: () => { div.innerHTML = '' }
    });
    winResize();
    window.addEventListener('resize', winResize)

    // 每一类我放了一个演示，直接往下复制粘贴 a标签 就可以，需要注意的是 函数里面的链接 冒号前面需要添加反斜杠\进行转义
    winbox.body.innerHTML = `
    <div id="article-container" style="padding:10px;">
    <h2>文字样式</h2>
    <div class="stylebox">
      <div class="font-control">
        <select id="fontSelector" onchange="updateFont(this.value)">
   	  <option value="ZiHunBaiGeTianXing">字魂白鸽天行体</option>
          <option value="inherit">默认字体</option>
          <option value="Hei">微软雅黑</option>
          <option value="FangSong">仿宋</option>
          <option value="Kaiti">楷体</option>
        </select>
        </div>
    </div>
    <p><button onclick="localStorage.removeItem('blogbg');location.reload();" style="background:#5fcdff;display:block;width:100%;padding: 15px 0;border-radius:6px;color:white;"><i class="fa-solid fa-arrows-rotate"></i> 点我恢复默认背景</button></p>
    <h2 id="图片（手机）"><a href="#图片（手机）" class="headerlink" title="图片（手机）"></a>图片（手机）</h2>
    <div class="bgbox">
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://pic1.imgdb.cn/item/67bf4fd8d0e0a243d4065cd7.png)" class="pimgbox" onclick="changeBg('url(https\\://pic1.imgdb.cn/item/67bf4fd8d0e0a243d4065cd7.png)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://pic1.imgdb.cn/item/67bf4fd8d0e0a243d4065cd8.jpg)" class="pimgbox" onclick="changeBg('url(https\\://pic1.imgdb.cn/item/67bf4fd8d0e0a243d4065cd8.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://pic1.imgdb.cn/item/67bf4fd9d0e0a243d4065cd9.jpg)" class="pimgbox" onclick="changeBg('url(https\\://pic1.imgdb.cn/item/67bf4fd9d0e0a243d4065cd9.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://pic1.imgdb.cn/item/67bf4fd9d0e0a243d4065cda.png)" class="pimgbox" onclick="changeBg('url(https\\://pic1.imgdb.cn/item/67bf4fd9d0e0a243d4065cda.png)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://pic1.imgdb.cn/item/67bf4fd9d0e0a243d4065cdb.jpg)" class="pimgbox" onclick="changeBg('url(https\\://pic1.imgdb.cn/item/67bf4fd9d0e0a243d4065cdb.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" 
   style="background-image:url(https://dsk.dskblog.top/wopaper/【哲风壁纸】二次元美女-动漫美女.67xlezlyjf.webp)" 
   class="pimgbox" 
   onclick="changeBg('url(https\://dsk.dskblog.top/wopaper/【哲风壁纸】二次元美女-动漫美女.67xlezlyjf.webp)')">
</a>
    </div>
    
    <h2 id="图片（电脑）"><a href="#图片（电脑）" class="headerlink" title="图片（电脑）"></a>图片（电脑）</h2>
    <div class="bgbox">
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://pic1.imgdb.cn/item/67bf4f65d0e0a243d4065cbd.png)" class="imgbox" onclick="changeBg('url(https://pic1.imgdb.cn/item/67bf4f65d0e0a243d4065cbd.png)')"></a>
<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://pic1.imgdb.cn/item/67bf4f65d0e0a243d4065cbc.jpg)" class="imgbox" onclick="changeBg('url(https://pic1.imgdb.cn/item/67bf4f65d0e0a243d4065cbc.jpg)')"></a>
<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://pic1.imgdb.cn/item/67bf4f53d0e0a243d4065cb8.png)" class="imgbox" onclick="changeBg('url(https://pic1.imgdb.cn/item/67bf4f53d0e0a243d4065cb8.png)')"></a>
<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://pic1.imgdb.cn/item/67bf4f53d0e0a243d4065cb7.jpg)" class="imgbox" onclick="changeBg('url(https://pic1.imgdb.cn/item/67bf4f53d0e0a243d4065cb7.jpg)')"></a>
<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://pic1.imgdb.cn/item/67bf4f53d0e0a243d4065cb6.jpg)" class="imgbox" onclick="changeBg('url(https://pic1.imgdb.cn/item/67bf4f53d0e0a243d4065cb6.jpg)')"></a>
<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://pic1.imgdb.cn/item/67bf4f52d0e0a243d4065cb5.jpg)" class="imgbox" onclick="changeBg('url(https://pic1.imgdb.cn/item/67bf4f52d0e0a243d4065cb5.jpg)')"></a>
<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://pic1.imgdb.cn/item/67bf4f52d0e0a243d4065cb3.jpg)" class="imgbox" onclick="changeBg('url(https://pic1.imgdb.cn/item/67bf4f52d0e0a243d4065cb3.jpg)')"></a>
<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://pic1.imgdb.cn/item/67bf4effd0e0a243d4065c9e.jpg)" class="imgbox" onclick="changeBg('url(https://pic1.imgdb.cn/item/67bf4effd0e0a243d4065c9e.jpg)')"></a>
<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://pic1.imgdb.cn/item/67bf4effd0e0a243d4065c9d.jpg)" class="imgbox" onclick="changeBg('url(https://pic1.imgdb.cn/item/67bf4effd0e0a243d4065c9d.jpg)')"></a>
<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://pic1.imgdb.cn/item/67bf4efed0e0a243d4065c9c.jpg)" class="imgbox" onclick="changeBg('url(https://pic1.imgdb.cn/item/67bf4efed0e0a243d4065c9c.jpg)')"></a>
<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://pic1.imgdb.cn/item/67bf4efed0e0a243d4065c9b.png)" class="imgbox" onclick="changeBg('url(https://pic1.imgdb.cn/item/67bf4efed0e0a243d4065c9b.png)')"></a>
<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://pic1.imgdb.cn/item/67bf4efdd0e0a243d4065c9a.jpg)" class="imgbox" onclick="changeBg('url(https://pic1.imgdb.cn/item/67bf4efdd0e0a243d4065c9a.jpg)')"></a>
<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://pic1.imgdb.cn/item/67b9d202d0e0a243d4022516.jpg)" class="imgbox" onclick="changeBg('url(https://pic1.imgdb.cn/item/67b9d202d0e0a243d4022516.jpg)')"></a>

    </div>
    
    
    
    <h2 id="渐变色"><a href="#渐变色" class="headerlink" title="渐变色"></a>渐变色</h2>
    <div class="bgbox">
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #4facfe, #00f2fe)" onclick="changeBg('linear-gradient(to right, #4facfe, #00f2fe)')"></a>
<a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #ff758c, #ff7eb3)" onclick="changeBg('linear-gradient(to right, #ff758c, #ff7eb3)')"></a>
<a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #43e97b, #38f9d7)" onclick="changeBg('linear-gradient(to right, #43e97b, #38f9d7)')"></a>
<a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #9d50bb, #6e48aa)" onclick="changeBg('linear-gradient(to right, #9d50bb, #6e48aa)')"></a>
<a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #ff9a9e, #ff6b6b)" onclick="changeBg('linear-gradient(to right, #ff9a9e, #ff6b6b)')"></a>
<a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(45deg, #f6d365, #fda085)" onclick="changeBg('linear-gradient(45deg, #f6d365, #fda085)')"></a>
<a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(45deg, #00ff87, #60efff)" onclick="changeBg('linear-gradient(45deg, #00ff87, #60efff)')"></a>
<a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(45deg, #ff0844, #ffb199)" onclick="changeBg('linear-gradient(45deg, #ff0844, #ffb199)')"></a>
    </div>
    
    <h2 id="纯色"><a href="#纯色" class="headerlink" title="纯色"></a>纯色</h2>
    <div class="bgbox">
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background-color: #ff0000" onclick="changeBg('#ff0000')"></a>
<a href="javascript:;" rel="noopener external nofollow" class="box" style="background-color: #0000ff" onclick="changeBg('#0000ff')"></a>
<a href="javascript:;" rel="noopener external nofollow" class="box" style="background-color: #00ff00" onclick="changeBg('#00ff00')"></a>
<a href="javascript:;" rel="noopener external nofollow" class="box" style="background-color: #ffff00" onclick="changeBg('#ffff00')"></a>
<a href="javascript:;" rel="noopener external nofollow" class="box" style="background-color: #800080" onclick="changeBg('#800080')"></a>
<a href="javascript:;" rel="noopener external nofollow" class="box" style="background-color: #ffa500" onclick="changeBg('#ffa500')"></a>
<a href="javascript:;" rel="noopener external nofollow" class="box" style="background-color: #ff69b4" onclick="changeBg('#ff69b4')"></a>
<a href="javascript:;" rel="noopener external nofollow" class="box" style="background-color: #00ffff" onclick="changeBg('#00ffff')"></a>
   </div>
   </div>
  </div>`;
    setTimeout(() => {
        const fontSelector = document.getElementById('fontSelector');
        if (fontSelector) {
            fontSelector.value = styleConfig.fontFamily;
        }
    }, 100);
}

// 适应窗口大小
function winResize() {
    let box = document.querySelector('#changeBgBox')
    if (!box || box.classList.contains('min') || box.classList.contains('max')) return // 2023-02-10更新
    var offsetWid = document.documentElement.clientWidth;
    if (offsetWid <= 768) {
        winbox.resize(offsetWid * 0.95 + "px", "90%").move("center", "center");
    } else {
        winbox.resize(offsetWid * 0.6 + "px", "70%").move("center", "center");
    }
}

// 切换状态，窗口已创建则控制窗口显示和隐藏，没窗口则创建窗口
function toggleWinbox() {
    if (document.querySelector('#changeBgBox')) winbox.toggleClass('hide');
    else createWinbox();
}
// 重置主题颜色
function resetThemeColor() {
    const defaultColor = window.Butterfly_CONFIG?.theme_color?.main || '#49b1f5';
    applyThemeColor(defaultColor);
    document.getElementById('colorPicker').value = defaultColor;
}
// 在文件末尾添加以下代码
document.addEventListener('DOMContentLoaded', function() {
    // 初始化字体设置
    initFont();
    initThemeColor(); // 新增颜色初始化
    const darkModeObserver = new MutationObserver(() => {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        document.documentElement.style.setProperty(
            '--theme-main',
            isDark ? styleConfig.darkThemeColor : styleConfig.themeColor
        );
    });
    
    darkModeObserver.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['data-theme']
    });
    
    // 绑定字体选择器（需要确保select元素有正确ID）
    const fontSelector = document.getElementById('fontSelector');
    if (fontSelector) {
        fontSelector.value = styleConfig.fontFamily;
        fontSelector.addEventListener('change', function() {
            styleConfig.fontFamily = this.value;
            applyFontStyle();
        });
    } else {
        console.warn('未找到字体选择器元素');
    }
});

