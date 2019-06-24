import { compile } from '../platforms/web/compiler/index.js'
const fs = require('fs')
const util = require('util')
const path = require('path')


let template = `
<!-- 登录模块 -->
<div class="login">
  <!-- 登录切换 -->
  <LoginTab ref="loginTab" />
  <LoginByAcount ref="loginByAcount" :allDisabled="allDisabled" />
  <div class="other-opr">{{ otherVar | filter1 | filter2 }}</div>
</div>
`

let compileData = compile(template)
// ast
fs.writeFile(path.resolve(__dirname, './ast.js'), 'let ast = ' + util.inspect(compileData.ast, true, 4), (err) => {
  console.log('err :', err)
})

// render
fs.writeFile(path.resolve(__dirname, './render.js'), compileData.render, (err) => {
  console.log('err :', err)
})

// console.log('compileData :', compileData)