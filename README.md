```
TODO: mention somewhere how to add a list of name
TODO: mention somewhere that you need to reload the editor to get latest list of names
  - you could reload on each call, but that's an unnecessary overhead because names don't change that often
TODO: package the extension with vcse to publish it:
  - ./node_modules/.bin/vsce package
```

## Extension development

* Install project dependencies:

  ```shell
  npm install  # do not use `npm ci`
  ```

* To debug the extension in VSCode:

  1. Run TypeScript compiler: `npm run watch`.
  1. Open `src/extension.ts` in your editor.
  1. Press `F5`.
  1. Once the new VSCode instance is launched, select the Markdown language.

* To manually publish the extension:

  ```shell
  npm run publish
  ```

  This will bundle the extension with `webpack` (same as `npm run vscode:prepublish`) and upload it to the extension marketplace.

  NOTE: version will not be automatically bumped at `package.json`.

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

### 0.0.4

* Add instructions to manually publish package
* Add NPM script to manually publish package
* Document previous releases
* Document how to debug the extension in VSCode
* Update dependencies

### 0.0.3

* Add contributes to enable schema for the settings of the extension

### 0.0.2

* Fix: merge global and workspace settings

### 0.0.1

* Initial release
