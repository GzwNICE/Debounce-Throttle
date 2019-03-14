/*  
  去抖（debounce）
  1. 页面引入： import { debounce } from '@/utils/utils'
  2. 绑定需要去抖的执行方法
    this.getList = debounce(this.getList, 400)    第一个参数为方法，第二个参数为间隔时间
  3.在具体业务中调用方法即可
    onScrollToLower() {
      this.getList()
    }
  }
*/


export function debounce(fn, wait) {   
  wait = wait || 0;   
  var timerId;    
  function debounced() {   
      if (timerId) {   
          clearTimeout(timerId);

          timerId = null;   
      }   
      timerId = setTimeout(function() {   
          fn();     
    }, wait);
 }
  return debounced;
}