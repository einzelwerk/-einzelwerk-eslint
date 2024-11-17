import pluginNext from '@next/eslint-plugin-next'
import pluginReact from 'eslint-plugin-react'

export const eslint = (...configs) => {
	configs.unshift({
		plugins: {
			'einzelwerk-next': pluginNext,
		},
		name: 'einzelwerk/next',
		rules: {
			...Object.entries({ ...pluginNext.configs.recommended.rules }).reduce(
				(acc, [key, value]) => {
					acc[key.replace('@next/next', 'einzelwerk-next')] = value
					return acc
				},
				{}
			),
		},
	})
	configs.unshift({
		plugins: {
			react: pluginReact,
		},
		name: 'react',
		rules: {
			...Object.entries({ ...pluginReact.configs.recommended.rules }).reduce(
				(acc, [key, value]) => {
					acc[key.replace('react', 'react')] = value
					return acc
				},
				{}
			),
		},
	})
}
