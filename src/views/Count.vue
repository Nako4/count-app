<template>
  <div class="count">
    <h1>This is an count page</h1>
    <!-- Vuexのstoreにstateとして管理されているcountデータを取得 -->
    {{ $store.state.count }}
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script>
export default {
  methods: {
      // store/index.jsに記述したmutationsを呼び出し(commit)
      // dispatchで呼び出すと、store/index.jsのactionsが呼び出される(dispatch)→クリックして5秒後にカウントが反映される
    increment() {
      this.$store.dispatch("increment");
    },
    decrement() {
      this.$store.commit("decrement");
    }
  }
};
</script>
