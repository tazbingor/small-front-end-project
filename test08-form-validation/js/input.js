/**
 * Created by tazbingo on 2017/9/26.
 */

$(function () {
    'use strict';

    window.Input = function (selector) {
        var $ele;
        var me = this;
        var rule = {};

        this.loadValidator = function () {
            var val = this.getVal();
            this.validator = new Validator(val, rule);

        }
        this.getVal = function () {
            return $ele.val();
        }

        function init() {
            findEle();
            parseRule();
            me.loadValidator();
        }

        function listen() {
            $ele.on('blur', function () {
                var valid = me.validator.is_valid(me.getVal());
                // console.log('blur' + valid);
                if(valid)
                    $ele.next('.input-error')
            });
        }


        function findEle() {
            if (selector instanceof jQuery)
                $ele = selector;
            else
                $ele = $(selector);
        }

        function parseRule() {
            var i;
            var ruleString = $ele.data('rule');
            if (!ruleString) return;

            var rule_arr = ruleString.split('|');//['min:18','maxlength:10']
            for (i = 0; i < rule_arr.length; i++) {
                var item_str = rule_arr[i];
                var item_arr = item_str.split(':'); //['min','18']
                rule[item_arr[0]] = JSON.parse(item_arr[1]); //['min:18']
            }
        }
    }

})
;