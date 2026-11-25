# pi-stash

This extra simple Pi extension stashes the text in the input editor so you can do something else you forgot to do first (e.g., change models), then get the text back.

- `ctrl+shift+s` stashes the editor text and clears the editor.
- `ctrl+shift+r` pastes the stashed text back into the editor, at the cursor.

Only one stash is kept, in RAM, so it's gone after `/new`, `/resume`, `/reload`, or exit.
