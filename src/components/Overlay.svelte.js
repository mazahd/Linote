import { createHotContext as __vite__createHotContext } from "/vendor/vite-client.js";import.meta.hot = __vite__createHotContext("/src/components/Overlay.svelte.js");/* src/components/Overlay.svelte generated by Svelte v3.52.0 */
import {
	SvelteComponentDev,
	add_location,
	attr_dev,
	create_component,
	destroy_component,
	detach_dev,
	dispatch_dev,
	element,
	init,
	insert_dev,
	mount_component,
	safe_not_equal,
	transition_in,
	transition_out,
	validate_slots
} from "/vendor/.vite-deps-svelte_internal.js__v--dc87137d.js";

import { storage } from "/src/storage.ts.js";
import { onMount } from "/vendor/.vite-deps-svelte.js__v--dc87137d.js";
import Options from "/src/components/Options.svelte.js";
const file = "src/components/Overlay.svelte";

function create_fragment(ctx) {
	let div;
	let options;
	let current;

	options = new Options({
			props: { count: /*count*/ ctx[0] },
			$$inline: true
		});

	const block = {
		c: function create() {
			div = element("div");
			create_component(options.$$.fragment);
			attr_dev(div, "class", "overlay s-VWn4yAlgoo3V");
			add_location(div, file, 9, 0, 239);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			mount_component(options, div, null);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const options_changes = {};
			if (dirty & /*count*/ 1) options_changes.count = /*count*/ ctx[0];
			options.$set(options_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(options.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(options.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			destroy_component(options);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('Overlay', slots, []);
	let count = 0;

	onMount(() => {
		storage.get().then(storage => $$invalidate(0, count = storage.count));
	});

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Overlay> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ storage, onMount, Options, count });

	$$self.$inject_state = $$props => {
		if ('count' in $$props) $$invalidate(0, count = $$props.count);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [count];
}

class Overlay extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Overlay",
			options,
			id: create_fragment.name
		});
	}
}

import * as ___SVELTE_HMR_HOT_API from '/vendor/svelte-hmr-runtime-hot-api-esm.js__v--dc87137d.js';import { adapter as ___SVELTE_HMR_HOT_API_PROXY_ADAPTER } from '/vendor/svelte-hmr-runtime-proxy-adapter-dom.js__v--dc87137d.js';if (import.meta && import.meta.hot) { if (false) import.meta.hot.acceptExports(['default']);; Overlay = ___SVELTE_HMR_HOT_API.applyHmr({ m: import.meta, id: "/Users/money/Projects/WebExtensions/SveltePlay/src/components/Overlay.svelte", hotOptions: {"preserveLocalState":false,"noPreserveStateKey":["@hmr:reset","@!hmr"],"preserveAllLocalStateKey":"@hmr:keep-all","preserveLocalStateKey":"@hmr:keep","noReload":false,"optimistic":false,"acceptNamedExports":true,"acceptAccessors":true,"injectCss":false,"cssEjectDelay":100,"native":false,"importAdapterName":"___SVELTE_HMR_HOT_API_PROXY_ADAPTER","noOverlay":true,"allowLiveBinding":false,"partialAccept":true}, Component: Overlay, ProxyAdapter: ___SVELTE_HMR_HOT_API_PROXY_ADAPTER, acceptable: true, preserveLocalState: false, emitCss: true, }); }
export default Overlay;


import "/src/components/Overlay.svelte__svelte_type--style_lang.css.js";
