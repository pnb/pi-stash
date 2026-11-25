# pi-stash

I'm always in the middle of typing a long prompt when I realize I need to ask the model something else first, and I don't want to lose what I've got. This Pi extension stashes the text in the input editor so you can clear it, do your thing, and get the text back.

- `ctrl+shift+s` stashes the editor text and clears the editor.
- `ctrl+shift+r` puts the stashed text back.

Only one stash is kept, and it lives in RAM, so it's gone after `/new`, `/resume`, `/reload`, or exit.
