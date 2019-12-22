# company-website

company website by next.js

## Script

dev and product

## install

``` bash
  npm install
```

## dev

``` bash
  npm run dev
```

## Export into a Static HTML App

``` bash
    npm run build
    npm run export
```

you can user a simple serve to run staic html

``` bash
cd out
npm install -g serve
serve -p 8080
```

## Production deployment

``` bash
npm run build
npm run start
```

## Use pm2 to Deploying

``` bash
npm install -g pm2
npm run build
pm2 start npm --name "next" -- start -p 3000
```

## Use  ZEIT now to Deploying

sigin Zeit and create a project.

``` bash
npm install -g now
now

```
