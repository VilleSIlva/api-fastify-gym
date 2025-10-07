// eslint.config.mjs
import rocketseat from '@rocketseat/eslint-config/node.mjs'

export default [
  ...rocketseat,

  {
    rules: {
      // Ajusta o limite máximo de caracteres para 120
      '@stylistic/max-len': ['error', {
        code: 120,
        ignoreComments: true, // Ignora comentários longos
        ignoreUrls: true, // Ignora URLs longas
      }],
    },
  },
]
