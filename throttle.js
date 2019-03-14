/*  
  节流（throttle）
  1. 页面引入： import { throttle } from '@/utils/utils'
  2. 绑定需要节流的执行方法
    this.getList = throttle(this.getList, 400)    第一个参数为方法，第二个参数为间隔时间
  3.在具体业务中调用方法即可
    onScrollToLower() {
      this.getList()
    }
  }
*/


export function throttle(fn, wait) {   
  wait = wait || 0;   
  var timerId, lastTime = 0;    
  
  function throttled() {   
      var currentTime = new Date();   
      if (currentTime >= lastTime + wait) {   
          fn();   
          lastTime = currentTime;   
      } else {   
          if (timerId) {   
              clearTimeout(timerId);   
              timerId = null;   
          }   
          timerId = setTimeout(function() {   
              fn()   
          }, wait);   
     }   
  }    
  return throttled;  
}
