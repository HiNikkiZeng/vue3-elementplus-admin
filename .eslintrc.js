module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'global-require': 0,
    'import/no-dynamic-require': 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-plusplus': ['off', {
      allowForLoopAfterthoughts: true, // 可以使用一元运算符
    }],
    'no-shadow': ['error', { allow: ['state'] }],
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [ // 可修改函数的入参
          'modules', // for vuex modules
          'config',
          'state', // for vuex mutation state
        ],
      },
    ],
    'import/prefer-default-export': 'off',
    'prefer-destructuring': ['error', { object: false, array: false }],
  },

};
