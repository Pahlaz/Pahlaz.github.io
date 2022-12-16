module.exports = {
	root: true,
	env: {
		browser: true, // Enables browser globals like window and document
		// amd: true, // Enables require() and define() as global variables as per the amd spec.
		node: true, // Enables Node.js global variables and Node.js scoping.
		es6: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:jsx-a11y/recommended',
		'plugin:prettier/recommended',
		'next/core-web-vitals',
		'prettier',
	],
	settings: {
		react: {
			version: 'detect', // Automatically detect the react version
		},
	},
	rules: {
		'no-console': 'warn',
		'no-sync': 'warn',
		'valid-jsdoc': 'warn',
		'no-unused-vars': 'warn',
		quotes: ['warn', 'single'],
		'prettier/prettier': ['warn', {}, { usePrettierrc: true }], // Use our .prettierrc file as source
		'react/react-in-jsx-scope': 'off',
		'react/prop-types': 'warn',
		'jsx-a11y/anchor-is-valid': [
			'error',
			{
				components: ['Link'],
				specialLink: ['hrefLeft', 'hrefRight'],
				aspects: ['invalidHref', 'preferButton'],
			},
		],
		'import/no-anonymous-default-export': 'off',
		'react/display-name': 'warn',
		'no-control-regex': 'warn',
		'no-restricted-imports': [
			'error',
			{
				patterns: ['@mui/*/*/*', '!@mui/material/test-utils/*'],
			},
		],
		'jsx-a11y/label-has-associated-control': 'warn',
		'jsx-a11y/click-events-have-key-events': 'warn',
		'jsx-a11y/no-static-element-interactions': 'warn',
		'no-await-in-loop': 'warn',
		'require-atomic-updates': 'warn',
		'no-return-await': 'warn',
		'react/no-unescaped-entities': 'warn',
	},
}
