- Version bumping must happen locally: `npm version patch`
- Publishing happens in CircleCI with manual approval
  - `vsce` will fail to publish if the version in `package.json` is already published
  - protected if you forget to bump version