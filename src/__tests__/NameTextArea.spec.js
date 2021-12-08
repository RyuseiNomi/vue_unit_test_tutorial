/**
 * @jest-environment jsdom
 */
import { shallowMount } from '@vue/test-utils'
import NameTextArea from '@/components/NameTextArea.vue'

describe('NameTextArea', () => {

  it('名前が 7 文字以上の場合にエラーを表示しないこと', () => {
    // コンポーネントの描画
    const wrapper = shallowMount(NameTextArea, {
      data () {
        return {
          username: 'oversevencharacters'
        }
      },
    })
    expect(wrapper.find('.error').exists()).toBeFalsy()
  })

  it('名前が 7 文字未満の場合にエラーを表示すること', () => {
    // コンポーネントの描画
    const wrapper = shallowMount(NameTextArea, {
      data () {
        return {
          username: 'short'
        }
      },
    })
    expect(wrapper.find('.error').exists()).toBeTruthy()
  })

  it('名前の先頭と末尾の空白スペースを取り除いて文字数をカウントすること', () => {
    // コンポーネントの描画
    const wrapper = shallowMount(NameTextArea, {
      data () {
        return {
          username: '   abcdef    '
        }
      },
    })
    expect(wrapper.find('.error').exists()).toBeTruthy()
  })

  it('名前文字列の間のスペースはカウントすること', () => {
    // コンポーネントの描画
    const wrapper = shallowMount(NameTextArea, {
      data () {
        return {
          username: 'a     b'
        }
      },
    })
    expect(wrapper.find('.error').exists()).toBeFalsy()
  })
})
