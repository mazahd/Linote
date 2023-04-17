import Content from "/src/components/Content.svelte.js";
import { storage } from "/src/storage.ts.js";
import "/src/content/styles.css.js";
storage.get().then(console.log);
new Content({ target: document.body });
