<script setup lang="ts">
import { useLoginStore } from "./login";
import { reactive, watch } from 'vue'

const store = useLoginStore();
const form = reactive({
  username: store.account || "",
  password: store.password || "",
})

watch(store, (oldStore, newStore) => {
  form.username = newStore.account as string;
  form.password = newStore.password as string;
})

const handleLogin = () => {
  store.upgradeLocalStore(true, form.username, form.password);
}
</script>

<template>
  <div class="wrapper">
    <h1>This is an hmr testing page</h1>
    <input v-model="form.username" type="text" placeholder="please input Username" />
    <input v-model="form.password" type="password" placeholder="please input Password" />
    <button @click="handleLogin">Login</button>
  </div>
</template>

<style>
.wrapper {
  display: flex;
  row-gap: 16px;
  flex-direction: column;
  input {
    font-size: 24px;
  }
  button {
    margin-top: 24px;
    height: 42px;
  }
}
</style>
