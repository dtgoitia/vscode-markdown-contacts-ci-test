```
TODO: mention somewhere how to add a list of name
TODO: mention somewhere that you need to reload the editor to get latest list of names
  - you could reload on each call, but that's an unnecessary overhead because names don't change that often
TODO: to bundle the extension with webpack before publishing it:
  - npm run vscode:prepublish
TODO: package the extension with vcse to publish it:
  - ./node_modules/.bin/vsce package
TODO: add schema helper for `settings.json`
```

## Set up environment for development

```shell
npm install  # do not use `npm ci`
```

To debug the extension in VSCode:

  - Run TypeScript compiler: `npm run watch`.
  - Open `src/extension.ts` in your editor.
  - Press `F5`.
  - Once the new VSCode instance is launched, select the Markdown language.

## Features

...

## Requirements

...

## Extension Settings

In the global settings (optional):

```json
{
  "markdown-contacts.globalNames": [
    "GlobalName_A",
    "GlobalName_B",
  ],
}
```

In the workspace settings (optional):

```json
{
  "markdown-contacts.workspaceNames": [
    "NameA",
    "NameB",
  ],
}
```

## Known Issues

...

## Release Notes

...

### 0.0.3

* Add contributes to enable schema for the settings of the extension.

### 0.0.2

* Fix: merge global and workspace settings

### 0.0.1

* Initial release
