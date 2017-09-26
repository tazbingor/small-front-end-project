/**
 * Created by tazbingo on 2017/9/26.
 */

$(function () {
    'use strict';

    window.Input = function (selector) {
        var $ele
            , $error_ele
            , me = this
            , rule =
            {
                required: true
            };

        this.loadValidator = function () {
            var val = this.getVal();
            this.validator = new Validator(val, rule);

        }
        this.getVal = function () {
            return $ele.val();
        }

        function init() {
            findEle();
            get_error_ele();
            parseRule();
            me.loadValidator();
            listen();
        }

        function listen() {
            $ele.on('blur', function () {
                var valid = me.validator.is_valid(me.getVal());
                console.log('blur' + valid);
                if (valid)
                    $error_ele.hide();
                else
                    $error_ele.show();
            });
        }

        function get_error_ele() {
            $error_ele = $(get_error_selector());
        }


        function get_error_selector() {
            return '#' + $ele.attr('name') + '-input-error';
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

        init();
    }

})
;