module.exports = {
    extends: [
        'stylelint-config-standard', //stylelint 推荐配置
        'stylelint-config-recess-order', //属性顺序的规则
        'stylelint-config-prettier' //处理 Prettier 冲突
    ],

    plugins: [
        'stylelint-scss', //支持scss
        'stylelint-order' //排序规则
    ],

    ignoreFiles: [
        '**/*.js',
        '**/*.jsx',
        '**/*.ts',
        '**/*.tsx',
        '**/*.md'
    ],

    rules: {
        "comment-empty-line-before": null, //禁止在注释之前有空行
        'declaration-empty-line-before': null, //禁止声明前不允许空一行
        'selector-pseudo-element-no-unknown': true, //禁止未知的伪元素选择器
        'indentation': null, //禁止缩进
        'number-leading-zero': null, //禁止低于1的数字禁止前导零
        'value-list-max-empty-lines': null, //禁止限制相邻的数量值列表内空行
        'no-descending-specificity': null, //禁止低优先级的选择器出现在高优先级的选择器之后
    },
};