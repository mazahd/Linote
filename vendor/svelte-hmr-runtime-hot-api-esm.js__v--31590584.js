import { makeApplyHmr } from '/vendor/svelte-hmr-runtime-index.js__v--31590584.js'

export const applyHmr = makeApplyHmr(args =>
  Object.assign({}, args, {
    hot: args.m.hot,
  })
)
