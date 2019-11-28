module.exports = {
    'extends': [
        'airbnb-base',
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    'parserOptions': {
        'ecmaVersion': 8,
        'sourceType': 'module',
        'ecmaFeatures': {
            'jsx': true
        }
    },
    "plugins": [
        "react"
    ],
    'env': {
        'es6': true
    },
    rules: {
        'linebreak-style': 0,
        'indent': ['error', 4],
        'no-console': 'off',
        'object-curly-spacing': 'off',
        'arrow-parens': 2,
        'semi': 2,
        'no-underscore-dangle': 'off',
        'consistent-return': "off",
        'max-len': ['error', { 'code': 140 }],
        'no-useless-constructor': 'off',
        'class-methods-use-this': 'off',
        'max-classes-per-file': 'off'
    }
};
