<template>
  <div>
    <div class="name">
      ユーザー名: <input v-model="username">
    </div>
    <br>
    <div class="char-counter">文字数({{username.length}} / 7)</div>
    <div v-if="isShowError" class="error">
      文字数が足りません
    </div>
    <br>
    <button class="submit-button" :disabled="isShowError">送信</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: ''
    }
  },

  computed: {
    /**
     * 入力された名前が 7 文字以上かどうかを判定する
     */
    isShowError() {
      return this.username.length < 7;
    },
    /**
     * 全ての項目が正しく入力されているかどうかを判定する
     */
    isAbleToSubmit() {
      return this.isShowError();
    }
  }
}
</script>
