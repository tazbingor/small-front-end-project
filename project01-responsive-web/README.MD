#真正的响应式页面
更换了linux工作环境

###项目中使用的新技能
* HTML5新标签: i em nav

* Normalize.css

* !important

  * 优先级置顶

* color: transparent

  * **用来指定全透明色彩。**transparent是全透明黑色(black)的速记法，即一个类似rgba(0,0,0,0)这样的值。

* text-decoration

  | none         | 默认。定义标准的文本。                      |
  | ------------ | -------------------------------- |
  | underline    | 定义文本下的一条线。                       |
  | overline     | 定义文本上的一条线。                       |
  | line-through | 定义穿过文本下的一条线。                     |
  | blink        | 定义闪烁的文本。                         |
  | inherit      | 规定应该从父元素继承 text-decoration 属性的值。 |

* ​


###准备工作

* robots设置
* humans设置
* EditorConfig设置
* LICENSE设置
* 更新浏览器版本: [browsehappy](https://browsehappy.com/)
* 约定俗成的命名方式,class用-分割,id使用驼峰命名法
* 何时嵌入图片到页面？必要的img，若是可有可无的图片直接用标签style引入

###px em rem 的区别
* px:相当于一个像素
* em:相对的长度单位

    1. em相对参照物为父元素的font-size
    2. em具有继承的特点 
    3. em会一直往上找父元素的font-size,若都没有,则直接使用浏览器的默认em设置,
        **1em = 16px**
* **rem的相对参照物为根元素html.相当于参照固定不变,方便计算**(IE8以下不支持,IE9部分支持)

### 清除浮动

* 触发BFC

```CSS
.clearfix:before, .clearfix:after {
    content: ' ';
    display: table;
}

.clearfix:after {
    clear: both;
}
```

### inline-block清除间隙的方式

* 删除换行符

* 父节点的font-size 设置为0

* li闭合

* 设置负边距

  ```CSS
  header .top ul li + li{
      border-left: 1px solid #999;
      margin-left:-3px;
  }
  ```
  ​
