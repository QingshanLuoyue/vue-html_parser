/* @flow */

import { addProp } from '../../../../src/compiler/helpers'

export default function html (el, dir) {
  if (dir.value) {
    addProp(el, 'innerHTML', `_s(${dir.value})`, dir)
  }
}
