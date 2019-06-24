# vue-html_parser
vue 的 html 解析器演示示例，可以替换自己想要的模版，解析出相应的 AST 语法树

# usage

install devDependencies

```bash
npm i
```

product a text.js file

it contains ast tree

```bash
npm run ast
```



# custom
```bash
cd ./example
```

modify template

```javascript
let template = `
<!-- 登录模块 -->
<div class="login">
  <!-- 登录切换 -->
  <LoginTab ref="loginTab" />
  <LoginByAcount ref="loginByAcount" :allDisabled="allDisabled" />
  <div class="other-opr">{{ otherVar | filter1 | filter2 }}</div>
</div>
`
```

ast 

```javascript
let ast = {
  type: 1,
  tag: 'div',
  attrsList: [],
  attrsMap: {
    class: 'login'
  },
  rawAttrsMap: {},
  parent: undefined,
  children: [
    {
      type: 1,
      tag: 'LoginTab',
      attrsList: [],
      attrsMap: {
        ref: 'loginTab'
      },
      rawAttrsMap: {},
      parent: [Circular],
      children: [],
      plain: false,
      ref: '"loginTab"',
      refInFor: false,
      static: false,
      staticRoot: false,
      pre: undefined
    },
    {
      type: 3,
      text: ' ',
      static: true
    },
    {
      type: 1,
      tag: 'LoginByAcount',
      attrsList: [
        {
          name: ':allDisabled',
          value: 'allDisabled'
        }
      ],
      attrsMap: {
        ref: 'loginByAcount',
        ':allDisabled': 'allDisabled'
      },
      rawAttrsMap: {},
      parent: [Circular],
      children: [],
      plain: false,
      ref: '"loginByAcount"',
      refInFor: false,
      hasBindings: true,
      attrs: [
        {
          name: 'allDisabled',
          value: 'allDisabled',
          dynamic: false
        }
      ],
      static: false,
      staticRoot: false,
      pre: undefined
    },
    {
      type: 3,
      text: ' ',
      static: true
    },
    {
      type: 1,
      tag: 'div',
      attrsList: [],
      attrsMap: {
        class: 'other-opr'
      },
      rawAttrsMap: {},
      parent: [Circular],
      children: [
        {
          type: 2,
          expression: '_s(_f("filter2")(_f("filter1")(otherVar)))',
          tokens: [Array],
          text: '{{ otherVar | filter1 | filter2 }}',
          static: false
        }
      ],
      plain: false,
      staticClass: '"other-opr"',
      static: false,
      staticRoot: false,
      pre: undefined
    }
  ],
  plain: false,
  staticClass: '"login"',
  static: false,
  staticRoot: false
}
```

render 

```javascript
with(this) {
    return _c(
            'div', 
            {
                staticClass: 'login'
            }, 
            [
                _c('LoginTab', 
                    {
                        ref: 'loginTab'
                    }
                ), 
                _v(' '), 
                _c(
                    'LoginByAcount', 
                    {
                        ref: 'loginByAcount',
                        attrs: {
                            allDisabled: allDisabled
                        }
                    }
                ), 
                _v(' '), 
                _c(
                    'div',
                    {
                        staticClass: 'other-opr'
                    }, 
                    [
                        _v(
                            _s(
                                _f('filter2')(_f('filter1')(otherVar))
                            )
                        )
                    ]
                )
            ], 
            1
        )
}
```