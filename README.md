# Linting

This project contains linting templates for Quartz projects. Currently, it
contains:

- `@quartz/eslint-config-base`: Base ESLint config for JavaScript projects
- `@quartz/eslint-config-react`: ESLint config for React projects
- `.editorconfig`: EditorConfig for all projects

## Usage

### Installing in your Non-React project

In your shiny-new project (or the project you're retrofitting):

```
npm install --save-dev \
      @quartz/eslint-config-base \
      @typescript-eslint/eslint-plugin \
      eslint \
      eslint-plugin-es \
      eslint-plugin-import \
      eslint-plugin-jest \
      jest
```

And then use it in your ESLint config, e.g. in `.eslintrc`:

```
{
  "extends": [
    "@quartz/eslint-config-base"
  ]
}
```

### Installing in your React project

Yay! More dependencies!

```
npm install --save-dev \
      @quartz/eslint-config-react \
      eslint-plugin-jsx-a11y \
      eslint-plugin-react \
      eslint-plugin-react-hooks
```

And then add this to your ESLint config, like so:

```
{
  "extends": [
    "@quartz/eslint-config-base",
    "@quartz/eslint-config-react"
  ]
}
```

## Maintenance

Versions of these libraries are published to NPM.

### Testing changes before publishing

To test changes locally, clone this Git repo and then install the project(s)
locally in your project -- e.g., in your `qz-react` directory:

```
npm install --save-dev /path/to/lint/eslint-react
```

See how that affects your project code. Talk it over with the team. And then:

1. Publish a new version of `@quartz/eslint-config-react`
2. In your project, install the newly-published version (so the project doesn't
   expect stuff in the local filesystem).

### Publishing NPM modules

1. Make sure you have an [NPM account](https://npmjs.com) and it has been added
   to the `@quartz` organization.
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
