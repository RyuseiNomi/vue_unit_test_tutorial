import { shallowMount } from '@vue/test-utils'
import NameTextArea from '@/components/NameTextArea.vue'

test('Hello', () => {
  // コンポーネントの描画
  const wrapper = shallowMount(NameTextArea)

  // 入力が 7 文字以下の場合にエラーを表示すること
  wrapper.setData({ username: 'short' })
  expect(wrapper.find('.error').exists()).toBe(true)

  // 入力が 7 文字以上の場合にエラーを表示しないこと
  wrapper.setData({ username: 'oversevencharacters' })
  expect(wrapper.find('.error').exists()).toBe(false)
})
