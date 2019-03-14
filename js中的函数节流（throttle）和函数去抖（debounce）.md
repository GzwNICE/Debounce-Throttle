#### js中的函数节流（throttle）和函数去抖（debounce）

debounce 与 `throttle` 是开发中常用的高阶函数，作用都是为了防止函数被高频调用，换句话说就是，用来控制某个函数在一定时间内执行多少次。

1.节流（throttle）指，在动作执行过程中，隔断时间触发一次事件，这样可以减少事件的方法执行的频率。

window的scroll、mousemove等事件使用throttle,也，页面在滑动过程中每隔一段时间触发一次事件

2.去抖（debounce）指只在动作结束后触发一次，把中间的处理函数全部过滤掉了，只执行规判定时间内的最后一个事件。

window的resize，input的keyup事件使用debounce，输入框onchange时，输入完成后执行事件



