<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  props: {
    title: String,
    message: String
  },
  setup(props) {
    const count = ref(0);

    function increment() {
      count.value++;
    }

    return {
      count
    };
  }
});
</script>
