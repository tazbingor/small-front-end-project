/**
 * Created by tazbingo on 2017/9/25.
 */
//原则:只要有input包含data-rule的自定义属性,就必须接受验证

$(function () {
    'use strict';

    var validator = new Validator(' ', {
       maxLength:5,
    });

    // var result = validator.validate_max();
    // var result = validator.validate_numeric();
    var result = validator.validate_required();

    alert('result:' + result);

});


//选中所有input中的data-rule


//解析每一个input的验证规则


//验证
















