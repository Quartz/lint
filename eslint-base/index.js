module.exports = {
	env: {
		browser: true,
		es6: true,
		'jest/globals': true,
		mocha: true,
		node: true,
	},

	extends: [
		'plugin:jest/recommended',
		'plugin:@typescript-eslint/recommended',
	],

	parser: '@typescript-eslint/parser',

	parserOptions: {
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
			jsx: true,
		},
		ecmaVersion: 2017,
		sourceType: 'module',
	},

	plugins: [
		// This plugin gives us access to useful linter rules that apply to ES6,
		// regardless of whether the code is JS or TS.
		'@typescript-eslint',
		'es',
		'import',
		'jest',
	],

	rules: {
		/** BEGIN disabled rules (overriding extended plugins **/

		// We are migrating gradually and won't yet enforce argument and return
		// types. Explicit any is a crutch for complex types.
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-explicit-any': 'off',

		// Empty functions are useful in tests and as default parameters.
		'@typescript-eslint/no-empty-function': 'off',

		// Not all code is transpiled (e.g., WebPack config).
		'@typescript-eslint/no-var-requires': 'off',

		// Superseded by the TypeScript version of this rule.
		// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-parens.md
		'no-extra-parens': 'off',

		// Superseded by the TypeScript version of this rule.
		// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md
		'no-use-before-define': 'off',

		/** END disabled rules (overriding extended plugins **/

		'@typescript-eslint/consistent-type-assertions': [
			'error',
			{
				assertionStyle: 'never',
			}
		],

		'@typescript-eslint/no-extra-parens': [
			'error',
			'all',
			{
				ignoreJSX: 'all',
			},
		],

		'@typescript-eslint/no-unused-vars': [
			'error',
			{
				varsIgnorePattern: '[iI]gnored',
			},
		],

		'@typescript-eslint/no-use-before-define': [
			'error',
			{
				functions: false,
			},
		],

		'@typescript-eslint/prefer-optional-chain': 'error',

		'array-bracket-spacing': [
			'error',
			'always',
		],

		'arrow-body-style': [
			'error',
			'as-needed',
			{
				requireReturnForObjectLiteral: false,
			},
		],

		'brace-style': [
			'error',
			'1tbs',
			{
				allowSingleLine: false,
			},
		],

		'comma-dangle': [
			'error',
			{
				arrays: 'always-multiline',
				objects: 'always-multiline',
				imports: 'always-multiline',
				exports: 'always-multiline',
				functions: 'never',
			},
		],

		'comma-spacing': [
			'error',
			{
				before: false,
				after: true,
			},
		],

		curly: [
			'error',
			'all',
		],

		'dot-notation': 'error',

		eqeqeq: [
			'error',
			'always',
			{
				null: 'ignore',
			},
		],

		'eol-last': [
			'error',
			'always',
		],

		'es/no-regexp-lookbehind-assertions': [
			'error',
		],

		'es/no-regexp-named-capture-groups': [
			'error',
		],

		'es/no-regexp-s-flag': [
			'error',
		],

		'import/no-unresolved': [
			'error',
			{
				caseSensitive: true,
			},
		],

		indent: [
			'error',
			'tab',
			{
				SwitchCase: 1,
			},
		],

		'jest/no-disabled-tests': 'error',

		'jest/no-focused-tests': 'error',

		'jest/no-identical-title': 'error',

		'jest/valid-expect': 'error',

		'key-spacing': [
			'error',
			{
				beforeColon: false,
				afterColon: true,
				mode: 'strict',
			},
		],

		'keyword-spacing': [
			'error',
			{
				before: true,
				after: true,
			},
		],

		'no-const-assign': 'error',

		'no-dupe-class-members': 'error',

		'no-duplicate-imports': 'error',

		'no-else-return': 'error',

		'no-nested-ternary': 'error',

		'no-mixed-spaces-and-tabs': 'error',

		'no-multiple-empty-lines': [
			'error',
			{
				max: 1,
				maxEOF: 0,
				maxBOF: 0,
			},
		],

		'no-param-reassign': [
			'error',
			{
				props: true,
				ignorePropertyModificationsFor: [
					'el',
				],
			},
		],

		'no-trailing-spaces': 'error',

		'no-undef': 'error',

		'no-var': 'error',

		'object-curly-spacing': [
			'error',
			'always',
		],

		'prefer-arrow-callback': [
			'error',
			{
				allowNamedFunctions: false,
				allowUnboundThis: true,
			},
		],

		'prefer-const': [
			'error',
			{
				destructuring: 'any',
				ignoreReadBeforeAssign: true,
			},
		],

		'prefer-destructuring': [
			'error',
			{
				array: true,
				object: true,
			},
		],

		'prefer-rest-params': 'error',

		'prefer-spread': 'error',

		'prefer-template': 'error',

		'quote-props': [
			'error',
			'as-needed',
		],

		quotes: [
			'error',
			'single',
			{
				avoidEscape: true,
			},
		],

		'rest-spread-spacing': [
			'error',
			'never',
		],

		semi: [
			'error',
			'always',
		],

		'space-before-blocks': [
			'error',
			{
				functions: 'always',
				keywords: 'always',
				classes: 'always',
			},
		],

		'space-in-parens': [
			'error',
			'always',
		],

		'space-infix-ops': 'error',

		'spaced-comment': [
			'error',
			'always',
			{
				line: {
					exceptions: [
						'-',
						'+',
					],
					markers: [
						'/',
					],
				},
				block: {
					balanced: true,
					exceptions: [
						'*',
					],
					markers: [
						'!',
					],
				},
			},
		],
	},

	overrides: [
		{
			files: [ '*.ts', '*.tsx' ],
			rules: {
				'no-undef': 'off',
			},
		},
	],

	settings: {
		'import/resolver': {
			node: {
				extensions: [
					'.js',
					'.jsx',
					'.json',
					'.ts',
					'.tsx',
				],
			},
		},
	},
};
