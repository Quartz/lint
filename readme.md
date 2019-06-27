# Linting

This project contains linting templates for Quartz projects. Currently, it
contains:

- `eslint-config-base`: Base ESLint config for JavaScript projects
- `eslint-config-react`: ESLint config for React projects
- `.editorconfig`: EditorConfig for all projects

## Updating NPM modules

When you make updates to NPM modules (e.g., `eslint-config-base`), you will need
to update the version of the package, publish it, then update the dependency in
projects that use it.

1. Make sure you have an [NPM account][npm] and it has been added to the
   `@quartz` organization. Contact @chriszarate if you would like to be added.

2. Log in to NPM: `npm login`

3. Update the package version:
   ```
   cd /path/to/my-package
   npm version [patch|minor|major]
   ```

4. Commit the version change.

5. Make sure everything is correct! There is no undo!

6. Publish the new version: `npm publish`

7. Update the dependency in projects that use the package, e.g.:
   ```
   cd /path/to/my-project-that-uses-my-package
   npm update --save-dev my-package@1.0.1
   ```

[npm]: https://www.npmjs.com/
