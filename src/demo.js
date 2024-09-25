// MyComponent.js
import { h, defineComponent, ref } from 'vue';

export default defineComponent({
  setup(props, { emit }) {
    // 使用 ref 创建一个响应式的数据
    const count = ref(0);

    // 定义一个方法，用于处理点击事件
    function handleClick() {
      count.value++; // 增加计数
    }

    // 返回一个渲染函数
    // h(type, props, children);
    /**
     * 
     * type：必需，表示要创建的元素类型或组件类型。它可以是一个字符串（HTML 标签名），一个组件选项对象、异步组件函数或者一个函数式组件。
      props：可选的对象，包含了传递给元素或组件的所有属性（attributes）和 props。例如，可以包含类名、样式、事件监听器等。
      children：可选，代表子节点，它可以是字符串（文本内容）、数组（包含多个子节点，每个子节点可以是字符串或其他由 h 创建的虚拟节点）或者其他合法的虚拟 DOM 节点
     * 
     * 
     * **/
    return () =>
      h(
        'div',
        {
          // 创建一个 div 元素
          class: 'my-component',
          style: { color: 'red' },
          onClick: handleClick // 绑定点击事件
        },
        [
          h('span', {}, '这是一个子元素'), // 创建一个 span 子元素
          count.value, // 显示点击次数
          //       `Clicked ${count.value} times` // 文本内容，显示点击次数
          h('button', { onClick: handleClick }, 'Increase Count') // 增加计数的按钮
        ]
      );
  }
});
