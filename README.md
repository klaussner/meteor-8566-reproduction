# Reproduction for issue 8566

https://github.com/meteor/meteor/issues/8566

## Meteor example

```bash
cd meteor
meteor npm i && meteor
```

Expected result: Browser console at `http://localhost:3000` shows `42`  
Actual result: `Uncaught Error: Cannot find module './imports/module.js'`

## Webpack example

```bash
cd webpack
npm run compile
node out.js
```

Expected and actual result: Console shows `42`
