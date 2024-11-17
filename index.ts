import pluginNext from '@next/eslint-plugin-next'
import pluginReact from 'eslint-plugin-react'

export const eslint = {
	plugins: {
		'einzelwerk-next': pluginNext,
		react: pluginReact,
	},
	rules: {
		...Object.entries(pluginNext.configs.recommended.rules).reduce(
			(acc, [key, value]) => {
				acc[key.replace('@next/next', 'einzelwerk-next')] = value
				return acc
			},
			{}
		),
		...Object.entries(pluginReact.configs.recommended.rules).reduce(
			(acc, [key, value]) => {
				acc[key] = value
				return acc
			},
			{}
		),
	},
	extends: ['plugin:react/recommended', 'plugin:einzelwerk-next/recommended'],
}
