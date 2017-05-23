#真正的响应式页面

###项目中使用的新技能
* HTML5新标签: i em nav
* Normalize.css


###准备工作

* robots设置
* humans设置
* EditorConfig设置
* LICENSE设置
* 更新浏览器版本: [browsehappy](https://browsehappy.com/)
* 约定俗成的命名方式,class用-分割,id使用驼峰命名法
* 何时嵌入图片到页面？必要的img，若是可有可无的图片直接用标签style引入

###px en rem 的区别
* px:相当于一个像素
* em:相对的长度单位
    
    1. em相对参照物为父元素的font-size
    2. em具有继承的特点 
    3. em会一直往上找父元素的font-size,若都没有,则直接使用浏览器的默认em设置,
        **1em = 16px**
* **rem的相对参照物为根元素html.相当于参照固定不变,方便计算**(IE8以下不支持,IE9部分支持**__**)
