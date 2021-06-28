module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    "no-mixed-spaces-and-tabs": [0],
    'space-before-function-paren':'off',
    "no-multi-spaces": 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 添加代码格式的规则  不符合规则将会报错
    'prettier/prettier': [
      'off',
      {
        indent: [2, 4],//缩进风格
        semi: true,
        singleQuote: true,
        printWidth: 160
      }
    ]
  }
};
