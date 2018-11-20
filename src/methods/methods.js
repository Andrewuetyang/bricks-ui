let loadingCounter = 0 // loading 计数器
let loadingTag = null // loading 外层标签
let loadingCover = null // 遮罩层标签
let loadingBox = null // 中间图标盒子
let loadHideTimer = null // 删除loading的定时器

/**
 * 显示loading图标
 * @param params{
 *               cover 数值型 遮罩屏幕 0=无遮罩 1=遮罩全屏 2=不遮住navbar 默认遮罩全屏
 *               timeout  数值型 一段时间后取消loading 默认=一直存在
 *               delay 延迟出现
 *              }
 */
export function showLoading(params) {
  if (loadingCounter === 0) {
    if (loadHideTimer) {
      clearTimeout(loadHideTimer)
      loadHideTimer = null
    } else {
      loadingTag = document.createElement("div")
      loadingTag.id = "bricks-ui-loading"
      loadingCover = document.createElement("div")
      loadingCover.id = 'bricks-ui-cover'
      loadingTag.appendChild(loadingCover)
      loadingBox = document.createElement("div")
      loadingBox.id = 'bricks-ui-loading-box'
      loadingBox.innerHTML = '<p class="icon-logo"></p><span></span>'
      loadingTag.appendChild(loadingBox)
    }
  }

  if (params) {
    if (params.cover === 0) {
      loadingCover.className = 'hide'
    } else if (params.cover === 1 || params.cover === undefined) {
      loadingCover.className = ''
    } else if (params.cover === 2) {
      loadingCover.className = 'nav'
    }
    /*if (params.timeoutCover) {
      setTimeout(function () {
        loadingCover.className = 'hide'
      }, params.timeoutCover)
    }*/
    if (params.timeout) {
      setTimeout(hideLoading, params.timeout + (params.delay ? params.delay : 0))
    }
  }

  if (loadingCounter === 0) {
    document.body.appendChild(loadingTag);
    setTimeout(() => {
      if (loadingBox) {
        loadingBox.style.opacity = '1'
      }
    }, params.delay ? params.delay : 20)
  }
  loadingCounter++
}

/**
 * 隐藏loading图标
 */
export function hideLoading() {
  loadingCounter--
  if (loadingCounter < 0) {
    loadingCounter = 0
  }
  if (loadingCounter > 0) {
    return
  }

  if (loadingBox) {
    loadingBox.style.opacity = '0'
  }
  loadHideTimer = setTimeout(() => {
    if (loadingTag) {
      document.body.removeChild(loadingTag)
      loadingTag = null
      loadingCover = null
      loadingBox = null
      loadHideTimer = null
    }
  }, 300)
}

let toastTag = null // toast标签
/**
 * 吐司信息
 * @param options string或者object{message,timeout,iconClass,callback}
 */
export function toast(options) {
  if (toastTag) {
    document.body.removeChild(toastTag)
  }
  let message = '',
    timeout = 2000,
    iconDiv = '',
    boxClass = 'bricks-ui-toast-box'

  if (typeof options === 'string') {
    message = options
  } else if (typeof options === 'object') {
    if (options.message) message = options.message
    if (options.timeout) timeout = options.timeout
    if (options.iconClass) {
      iconDiv = `<div class="bricks-ui-toast-icon ${options.iconClass}"></div>`
      boxClass = 'bricks-ui-toast-box has-icon'
    }
  } else {
    return
  }

  //处理换行
  message = message.replace(/\n/g, '<br/>')

  let oBody = document.body
  let div = document.createElement("div")
  div.className = boxClass
  div.innerHTML = `${iconDiv}<div class="bricks-ui-toast-text">${message}</div>`
  oBody.appendChild(div);
  setTimeout(() => {
    div.style.opacity = '1'
  }, 20)

  toastTag = div

  setTimeout(() => {
    div.style.opacity = '0'
    setTimeout(() => {
      if (toastTag === div) {
        toastTag = null
        document.body.removeChild(div)
      }
      if (options.callback) {
        options.callback()
      }
    }, 500)
  }, timeout)
}

/**
 * 消息框
 * @param options {title,button1,button2}
 */
export function messageBox(options) {
  let oBody = document.body
  let wrap = document.createElement("div")
  wrap.className = "bricks-ui-msg-wrap"

  let box = document.createElement("div")
  box.className = 'bricks-ui-msg-box'
  box.innerHTML = `<div class="bricks-ui-msg-title">${options.title}</div>`
  wrap.appendChild(box)

  if (options.button1
    && options.button1.name
    && options.button1.click) {
    let btn = document.createElement("div")
    btn.className = 'bricks-ui-msg-btn1'
    btn.innerHTML = options.button1.name
    box.appendChild(btn)
    btn.addEventListener('click', function (e) {
      wrap.style.opacity = '0'
      setTimeout(() => {
        document.body.removeChild(wrap)
      }, 300)
      options.button1.click(e)
    })
  }
  if (options.button1
    && options.button2
    && options.button2.name
    && options.button2.click) {
    let btn = document.createElement("div")
    btn.className = 'bricks-ui-msg-btn2'
    btn.innerHTML = options.button2.name
    box.appendChild(btn)
    btn.addEventListener('click', function (e) {
      wrap.style.opacity = '0'
      setTimeout(() => {
        document.body.removeChild(wrap)
      }, 300)
      options.button2.click(e)
    })
  }

  oBody.appendChild(wrap);
  setTimeout(() => {
    wrap.style.opacity = '1'
  }, 20)
}

export default {
  showLoading,
  hideLoading,
  toast,
  messageBox
}