/**
 * @jest-environment jsdom
 */
import { shallowMount } from '@vue/test-utils'
import NameTextArea from '@/components/NameTextArea.vue'

let wrapper;

// テストケース毎にコンポーネントを描画する
beforeEach(() => {
  wrapper = shallowMount(NameTextArea);
})

// テストケースの終了と共にコンポーネントを消去する
afterEach(() => {
  wrapper.destroy;
})

describe('NameTextArea', () => {

  it('コンポーネントが描画されること', () => {
    expect(wrapper.exists()).toBe(true)
  })

  // wrapper の更新を伴うため async/await を利用
  it('テキストエリアが描画されていること', async () => {
    await wrapper.setData({ username: 'oversevencharacters' })
    expect(wrapper.find('.error').exists()).toBe(false)
  })

  it('文字数をカウントすること', async () => {
    await wrapper.setData({ username: 'abcdefg' })
    expect(wrapper.find('.char-counter').text()).toBe('文字数(7 / 7)')
  })

  it('名前が 7 文字以上の場合にエラーを表示しないこと', async () => {
    await wrapper.setData({ username: 'oversevencharacters' })
    expect(wrapper.find('.error').exists()).toBe(false)
  })

  it('名前が 7 文字未満の場合にエラーを表示すること', async () => {
    await wrapper.setData({ username: 'short' })
    expect(wrapper.find('.error').exists()).toBe(true)
  })

  it('スペースも含めて文字数をカウントすること', async () => {
    await wrapper.setData({ username: '1 23 45  67' })
    expect(wrapper.find('.error').exists()).toBe(false)
  })

  it('文字数が足りない場合に送信ボタンが押せないこと', async () => {
    await wrapper.setData({ username: 'short' })
    // disabled 属性を見て判定する
    expect(wrapper.find('.submit-button').element.disabled).toBe(true)
  })

  it('文字数が 7文字以上の場合に送信ボタンが押せること', async () => {
    await wrapper.setData({ username: 'oversevencharacters' })
    expect(wrapper.find('.submit-button').element.disabled).toBe(false)
  })

  it('送信ボタンを押下するとアラートが表示されること', async() => {
    window.alert = jest.fn();
    await wrapper.setData({ username: 'oversevencharacters'})
    const button = wrapper.find('button')
    await button.trigger('click')
    expect(window.alert).toBeCalled()
  })
})
