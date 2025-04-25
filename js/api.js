/**
 * 调用硅基流动API生成图片
 * @param {string} prompt - 图片描述文本
 * @param {object} [options] - 可选参数
 * @param {string} [options.model="Kwai-Kolors/Kolors"] - 模型名称
 * @param {string} [options.image_size="1024x1024"] - 图片尺寸
 * @param {number} [options.batch_size=1] - 生成图片数量
 * @param {number} [options.num_inference_steps=20] - 推理步数
 * @param {number} [options.guidance_scale=7.5] - 指导系数
 * @param {function} [callback] - 回调函数(错误优先)
 * @returns {Promise} 如果没有提供callback则返回Promise
 */
function generateImage(prompt, options = {}, callback) {
    // 合并默认参数和用户自定义参数
    const params = {
      model: "Kwai-Kolors/Kolors",
      prompt: prompt,
      image_size: "1024x1024",
      batch_size: 1,
      num_inference_steps: 20,
      guidance_scale: 7.5,
      ...options
    };
  
    // 请求配置
    const requestOptions = {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer sk-vlyhjprkmppnkatcgirrjckzisxjdrhjtnujzsvibjyncfjw',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    };
  
    // 同时支持Promise和Callback两种方式
    if (typeof callback === 'function') {
      fetch('https://api.siliconflow.cn/v1/images/generations', requestOptions)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          if (data?.images?.[0]?.url) {
            callback(null, data.images[0].url);
          } else {
            callback(new Error('API返回的数据结构异常'));
          }
        })
        .catch(err => callback(err));
    } else {
      return fetch('https://api.siliconflow.cn/v1/images/generations', requestOptions)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          if (data?.images?.[0]?.url) {
            return data.images[0].url;
          }
          throw new Error('API返回的数据结构异常');
        });
    }
  }
  
  // 使用示例 (Promise方式)
  generateImage("mokey boy")
    .then(imageUrl => {
      console.log("生成的图片URL:", imageUrl);
      // 在网页上显示图片
     
    })
    .catch(error => console.error("生成失败:", error));
  
