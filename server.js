const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const app = new express()
const config = require('./webpack.config')
const compliler = new webpack(config)
app.use(webpackDevMiddleware(compliler, {
  publicPath : config.output.publicPath
}))
app.listen(3000, function () {
  console.log('Example app listening on port 3000!\n');
})