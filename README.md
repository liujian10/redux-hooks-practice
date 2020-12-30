## 为什么要用Redux？

> 一般而言，如果随着时间的推移，数据处于合理的变动之中、需要一个单一的数据源、在 React 顶层组件 state 中维护所有内容的办法已经无法满足需求，这个时候就需要使用 Redux 了

这是官方关于什么时候需要用到`Redux`的描述，分析下

1. 数据处于合理的变动之中 > 数据复杂度越来越高
2. 需要一个单一数据源 > 统一状态/数据管理
3. 在 React 顶层组件 state 中维护所有内容的办法已经无法满足需求 > `React`无法满足需求

简单来说，`Redux` 提供了统一的状态管理，让复杂的前端变得更加健壮和易维护，让组件之间数据共享变得更有效率，简单列下`Redux`的优点：

1. 统一的状态管理，让组件间数据共享更高效
2. `reducer`纯函数和`action`机制，使状态具有可预测性，易于测试
3. 可以把`state`从组件中解耦出来，使组件更轻量，代码易读性更好
4. 各种`middleware`，方便拓展

---

## React-Redux 也拥有自己的Hook 了

参考 [Clean Up Redux Code with React-Redux Hooks](https://medium.com/swlh/clean-up-redux-code-with-react-redux-hooks-71587cfcf87a)

`useSelector`对`store`进行切片保存到具体组件，可以看出我们上面实现的hook很像，但是这个生成的还是普通的`selector`，还是需要配合`createSelecter`使用;

`useDispatch`更方便的获取`dispatch`

hook的语法，代替了HOC的依赖注入方式，更简洁，更优雅

```jsx
// Main.js
import React from 'react';
import { createSelector } from 'reselect';
import * as actions from '../actions/actions';
import { useSelector, useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector(createSelector(store => store.count, state => state));

  return (
    <div>
      <h1>The count is {count}</h1>
      <button onClick={() => dispatch(actions.increment(count))}>+</button>
      <button onClick={() => dispatch(actions.decrement(count))}>-</button>
    </div>
  );
}

export default App;
```
