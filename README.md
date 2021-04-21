## Steps for deploying a project

1. install gh-pages
2. add homepage field in package.json
3. add 2 more scripts in package.json  
   for predeploy: npm run build,
   for deployment: gh-pages -d build
4. final step: npm run deploy
