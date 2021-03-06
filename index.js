module.exports = {
    extends: [
        'stylelint-config-standard', //官方推荐配置
        'stylelint-config-recess-order', //属性顺序规则
        'stylelint-config-prettier' //处理 Prettier 冲突
    ],

    plugins: [
        'stylelint-scss', //支持 scss
        'stylelint-order' //排序规则
    ],

    rules: {
        'no-descending-specificity': null //禁止低优先级的选择器出现在高优先级的选择器之后
    }
};