<template>
  <!-- 使用模板语法 -->
  <MyCustomComponent :title="customTitle" :message="customMessage" @updateCount="handleCount" />

  <HR />
  <!-- 使用 render 函数 -->
  <!-- <div> -->
  <render-component :title="customTitle" :message="customMessage" @updateCount="handleCount" />
  <!-- </div> -->
</template>

<script>
import { defineComponent } from 'vue';
import MyCustomComponent from './components/HelloWorld.vue';

export default defineComponent({
  components: {
    MyCustomComponent,
    'render-component': MyCustomComponent // 注册自定义组件
  },
  data() {
    return {
      customTitle: 'Hello from Custom Component',
      customMessage: 'This is a custom component'
    };
  },
  methods: {
    handleCount() {
      console.log('Count incremented');
    }
  },
  render() {
    // 使用 h 函数创建自定义组件
    return h(MyCustomComponent, {
      title: this.customTitle,
      message: this.customMessage
    });
  }
});
</script>
