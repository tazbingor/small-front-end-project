/**
 * Created by tazbingo on 2017/9/25.
 */
//原则:只要有input包含data-rule的自定义属性,就必须接受验证


var validator = {};
validator.validate_min = function (val, rule) {

    return true;
}

validator.validate_maxlength = function (val, rule) {

    return true;
}


//选中所有input中的data-rule


//解析每一个input的验证规则


//验证
