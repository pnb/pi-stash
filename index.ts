/**
 * pi-stash
 *
 * Stash the text in the input editor and pop it back later.
 *
 * ctrl+shift+s - stash the editor text (clears the editor)
 * ctrl+shift+r - paste the stashed text into the editor
 *
 * Only one stash is kept, and it lives in RAM, so it is lost on
 * /new, /resume, /reload, or exit.
 */

import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";

export default function (pi: ExtensionAPI) {
  let stashed: string | undefined;

  pi.registerShortcut("ctrl+shift+s", {
    description: "Stash editor text",
    handler: async (ctx) => {
      const text = ctx.ui.getEditorText();
      if (!text) {
        ctx.ui.notify("Nothing to stash", "info");
        return;
      }
      stashed = text;
      ctx.ui.setEditorText("");
      ctx.ui.notify(`Stashed ${text.split("\n").length} line(s)`, "info");
    },
  });

  pi.registerShortcut("ctrl+shift+r", {
    description: "Pop stashed editor text",
    handler: async (ctx) => {
      if (stashed === undefined) {
        ctx.ui.notify("Nothing to pop", "info");
        return;
      }
      ctx.ui.pasteToEditor(stashed);
      stashed = undefined;
      ctx.ui.notify("Popped stash", "info");
    },
  });
}
