module.exports = {
	root: true,
	env: {browser: true, es2020: true},
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:react/jsx-runtime",
		"plugin:react-hooks/recommended",
	],
	ignorePatterns: ["dist", ".eslintrc.cjs"],
	parserOptions: {ecmaVersion: "latest", sourceType: "module"},
	settings: {react: {version: "18.2"}},
	plugins: ["react-refresh"],
	rules: {
		"react/jsx-no-target-blank": "off",
		"react-refresh/only-export-components": ["warn", {allowConstantExport: true}],
		"block-scoped-var": ["error"],
		camelcase: ["error"],
		"require-await": ["error"],
		"no-var": ["error"],
		"no-unused-vars": ["error"],
		"no-undef": ["error"],
		"no-console": ["error"],
	},
}
