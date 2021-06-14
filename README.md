# #55

[Link to issue #55](https://github.com/trivago/prettier-plugin-sort-imports/issues/55)

Saving `this-doesnt-work.ts` or `this-doesnt-work-either.ts` causes unexpected results

`this-doesnt-work.ts` is sorted correctly, but having import comments above will cause duplication

`this-doesnt-work-either.ts` is sorted incorrectly, for some reason after saving the file the imports from `module-a.ts` disappear and a new destructured (and duplicated) import is added to `module-b.ts`

Uninstalling `prettier-plugin-sort-imports` and reloading `vscode` stops these issues
