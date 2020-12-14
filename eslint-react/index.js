module.exports = {
	extends: [
		'@quartz/eslint-config-base',
		'plugin:jsx-a11y/recommended',
		'plugin:react-hooks/recommended',
	],

	plugins: [
		'jsx-a11y',
		'react',
	],

	rules: {
		// This rule is being deprecated due to improved browser behavior. It makes
		// it very difficult to implement a controlled input component (especially
		// <select>).
		//
		// https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/pull/757
		'jsx-a11y/no-onchange': 'off',

		'jsx-quotes': [
			'error',
			'prefer-double',
		],

		'react/forbid-prop-types': [
			'error',
			{
				forbid: [
					'any',
				],
			},
		],

		'react/sort-prop-types': 'error',

		'react/jsx-closing-bracket-location': [
			'error',
			'line-aligned',
		],

		'react/jsx-curly-brace-presence': [
			'error',
			'never',
		],

		'react/jsx-curly-spacing': [
			'error',
			{
				when: 'never',
				children: true,
			},
		],

		'react/jsx-indent-props': [
			'error',
			'tab',
		],

		'react/jsx-key': 'error',

		'react/jsx-no-undef': 'error',

		'react/jsx-pascal-case': [
			'error',
			{
				allowAllCaps: true,
				ignore: [],
			},
		],

		'react/jsx-uses-react': 'error',

		'react/jsx-uses-vars': 'error',

		'react/jsx-wrap-multilines': [
			'error',
			{
				declaration: true,
				assignment: true,
				return: true,
			},
		],

		'react/no-unsafe': [
			'error',
			{
				checkAliases: true,
			},
		],

		'react/no-unused-prop-types': [
			'error',
			{
				customValidators: [],
				skipShapeProps: true,
			},
		],

		'react/prefer-es6-class': [
			'error',
			'always',
		],

		'react/prefer-stateless-function': [
			'error',
			{
				ignorePureComponents: true,
			},
		],

		'react/prop-types': 'error',
	},

	settings: {
		react: {
			version: 'detect',
		},
	},
};
