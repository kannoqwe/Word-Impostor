module.exports = {
   root: true,
   parser: '@typescript-eslint/parser',
   parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      ecmaFeatures: {
         jsx: true,
      },
   },
   settings: {
      react: {
         version: 'detect',
      },
   },
   plugins: ['react', 'react-hooks', '@typescript-eslint'],
   extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier',
   ],
   env: {
      browser: true,
      es2021: true,
      node: true,
   },
   rules: {
      'semi': ['warn', 'always'],
      'quotes': ['warn', 'single'],
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['warn'],
      'indent': ['warn', 3],
      '@typescript-eslint/indent': ['warn', 3],

      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/display-name': 'off', 
      'react/jsx-uses-react': 'off', 
      'react/jsx-indent': ['warn', 2],
      'react/jsx-indent-props': ['warn', 2],

      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off', 
   },
   overrides: [
      {
         files: ['*.tsx', '*.jsx'],
         rules: {
            indent: ['warn', 3],
            '@typescript-eslint/indent': ['warn', 3],
            'react/jsx-indent': ['warn', 3],
            'react/jsx-indent-props': ['warn', 3],
         },
      },
   ],
};
