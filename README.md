# cove
Skribble corporate website

## Use
### Prerequisites
Install the latest
- Node.js https://github.com/nodejs/node
- NPM https://github.com/npm/cli
- Yarn https://github.com/yarnpkg/yarn.

Use `yarn` to lock and install dependency versions instead of `npm install`.
```
# install dependencies via yarn
$ yarn
```

### Development
Use `yarn start` to develop locally.

Use `yarn build` to build locally.

### Updating content
Download the github desktop app to easily track changes in the repository: https://desktop.github.com/. Before working on the content files, make sure to checkout the current version of master. Just follow the steps below:

- fetch origin
- create new branch and prefix with your name. I (David) create a branch _david-instructions_.
- open the repository in your external editor
- update the content in the editor. You can switch back to the github desktop app and track the changes you made.
- when done with all the changes, write a short meaningful summary and commit
- publish/push the branch

After publishing, your changes appear on the cove github page of BlockSigner: https://github.com/BlockSigner/cove. A yellow bar on top allows you to start a pull request. An open pull request triggers a build on Netlify that generates a preview.

The changes are online after merging into master. Master is automatically built and deployed.