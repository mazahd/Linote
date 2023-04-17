import { makeApplyHmr } from '/vendor/svelte-hmr-runtime-index.js__v--dc87137d.js'

export const applyHmr = makeApplyHmr(args =>
  Object.assign({}, args, {
    hot: args.m.hot,
  })
)
