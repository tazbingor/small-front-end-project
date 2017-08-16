#响应式页面
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

  ​

  ​


###准备工作

* robots设置

* humans设置

* EditorConfig设置

* LICENSE设置

* 更新浏览器版本: [browsehappy](https://browsehappy.com/)

* 约定俗成的命名方式,class用-分割,id使用驼峰命名法

* 何时嵌入图片到页面？必要的img，若是可有可无的图片直接用标签style引入

  ​

###***px em rem 的区别***
* px:相当于一个像素

* em:相对的长度单位

    1. em相对参照物为父元素的font-size
    2. em具有继承的特点 
    3. em会一直往上找父元素的font-size,若都没有,则直接使用浏览器的默认em设置,
        **1em = 16px**

* **rem的相对参照物为根元素html.相当于参照固定不变,方便计算**(IE8以下不支持,IE9部分支持)

    ​

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

### 

### ***inline-block清除间隙的方式***

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

### 设置副头航、主头行的文字效果

无文本装饰

```css
text-decoration: none;
```

设置样式

```CSS
header .top ul li a:hover,
header .top ul li a:active,
header .top ul li a.active{
    color: #f0ede9;
    background-color: #ffb300;
}
```



### css sprites CSS 切图

将许多小图片集成在一张大的图片上,方便切图 然后在利用

```CSS
background-position: -369px -45px;
```

这个属性将图切下来



### calc

#### 什么是calc()?

> calc是英文单词calculate(计算)的缩写，是css3的一个新增的功能，用来指定元素的长度。比如说，你可以使用calc()给元素的border、margin、pading、font-size和width等属性设置动态值。为何说是动态值呢?因为我们使用的表达式来得到的值。不过calc()最大的好处就是用在流体布局上，可以通过calc()计算得到元素的宽度。

#### calc()能做什么？

> calc()能让你给元素的做计算，你可以给一个div元素，使用百分比、em、px和rem单位值计算出其宽度或者高度，比如说“width:calc(33.3333333333333% - 3rem);”，这样一来你就不用考虑元素DIV的宽度值到底是多少，而把这个烦人的任务交由**浏览器去计算**

#### calc()的运算规则

calc()使用通用的数学运算规则，但是也提供更智能的功能：

>1. 使用“+”、“-”、“*” 和 “/”四则运算；
>2. 可以使用百分比、px、em、rem等单位；
>3. 可以混合使用各种单位进行计算；
>4. 表达式中有“+”和“-”时，其前后必须要有空格，如"widht: calc(12%+5em)"这种没有空格的写法是错误的；
>5. 表达式中有“*”和“/”时，其前后可以没有空格，但建议留有空格



