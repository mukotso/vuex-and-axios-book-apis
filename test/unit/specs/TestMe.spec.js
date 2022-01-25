

require('jsdom-global')()

const assert = require('assert')

const Vue = require('vue')
const VueTestUtils = require('@vue/test-utils')
describe('show user list when no users', () => {


  it('test two', () => {
    const App = Vue.component('app', {
      data() {
        return {
          msg: 'Hello Vue Test Utils'
        }
      },

      template: `
              <div>{{ msg }}</div>
            `
    })

    const wrapper = VueTestUtils.shallowMount(App)

    assert.strictEqual('Hello Vue Test Utils', wrapper.text())
  })
});
