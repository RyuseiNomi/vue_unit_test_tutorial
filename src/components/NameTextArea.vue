<template>
  <div>
    ユーザー名を入力してください: <input v-model="username">
    <div v-if="isShowError" class="error">
      少なくとも7文字でユーザー名を入力してください
    </div>
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
    isShowError () {
      return this.username.trim().length < 7
    }
  }
}
</script>
