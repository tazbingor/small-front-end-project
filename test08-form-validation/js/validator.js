/**
 * Created by tazbingo on 2017/9/26.
 */

$(function () {
    'use strict';

    window.Validator = function (val, rule) {


        this.validate_max = function () {
            preMaxMin();
            return val <= rule.max;
        }

        this.validate_min = function () {
            preMaxMin();
            return val >= rule.min;
        }


        this.validate_maxLength = function () {
            preLength();
            return val.length <= rule.maxLength;
        }

        this.validate_minLength = function () {
            preLength();
            return val.length >= rule.minLength;
        }

        this.validate_numeric = function () {
            return $.isNumeric(val);
        }

        this.validate_required = function () {
            //防止空格
            var real = $.trim(val);
            if (!real && real !== 0)
                return false;
            return true;
        }

        this.validate_pattern = function () {
            var reg = new RegExp(rule.pattern);
            return reg.text(val);

        }

        /*用于完成min,max方法的前置工作*/
        function preMaxMin() {
            val = parseFloat(val);
        }

        /*用于完成minleng,maxleng方法的前置工作*/
        function preLength() {
            val = val.toString();
        }
    }


});