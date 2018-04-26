// 设置cookie
export function setCookie (cname, cvalue, exdays) {
  var data = new Date()
  data.setTime(data.getTime() + (exdays * 24 * 60 * 60 * 1000))
  // 根据世界时 (UTC) 把 Date 对象转换为字符串，并返回结果
  var expites = 'expires=' + data.toUTCString()
  document.cookie = cname + '=' + cvalue + ';' + expites
}
// 获取cookie
export function getCookie (c_name) {
  if (document.cookie.length > 0) {
    let c_start = document.cookie.indexOf(c_name + '=')
    if (c_start != -1) {
      c_start = c_start + c_name.length + 1
      let c_end = document.cookie.indexOf(';', c_start)
      if (c_end == -1) c_end = document.cookie.length
      return unescape(document.cookie.substring(c_start, c_end))
    }
  }
  return ''
}
/* 删除cookie */
export function delCookie (name) {
  var exp = new Date()
  exp.setTime(exp.getTime() - 1)
  var cval = getCookie(name)
  if (cval != null) {
    // console.log(name,cval,'11111',name + "="+cval+";expires="+exp.toGMTString(),'cval')
    document.cookie = name + '=' + '' + ';expires=' + exp.toGMTString()
  }
  // console.log(document.cookie,'document.cookie')
}
