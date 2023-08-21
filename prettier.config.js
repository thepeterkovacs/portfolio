/** @type {import('prettier').Config} */
module.exports = {
	endOfLine: "crlf",
	semi: false,
	singleQuote: false,
	tabWidth: 4,
	useTabs: true,
	trailingComma: "es5",
	printWidth: 100,
	arrowParens: "always",
	jsxSingleQuote: true,
	bracketSpacing: true,
	bracketSameLine: true,
	importOrder: [
		"^(react/(.*)$)|^(react$)",
		"^(next/(.*)$)|^(next$)",
		"^@/styles/(.*)$",
		"^@/types/(.*)$",
		"^@/lib/(.*)$",
		"^@/database/(.*)$",
		"^@/components/(.*)$",
		"^@/app/(.*)$",
		"^[./]",
	],
	importOrderSeparation: true,
	importOrderSortSpecifiers: true,
	plugins: ["@trivago/prettier-plugin-sort-imports"],
}
