module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
  globals: {
    uni: true,
    wx: true,
  },
  rules: {
    // 自定义规则
  },
};
