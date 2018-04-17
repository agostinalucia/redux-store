import * as FromStore from './store';

import { renderTodos } from './utils';
import { Store } from './store';

const input = document.querySelector('input') as HTMLInputElement;
const button = document.querySelector('button') as HTMLButtonElement;
const destroy = document.querySelector('.unsubscribe') as HTMLButtonElement;
const todoList = document.querySelector('.todos') as HTMLLIElement;

const reducers = {
  todos: FromStore.reducer,
};

const store = new FromStore.Store(
  reducers,
  {}
);

//console.log(store.value);

button.addEventListener(
  'click',
  () => {
    if (!input.value.trim()) return;

    const payload = { label: input.value, complete: false };

 //   console.log(payload);

    store.dispatch({
      action: 'ADD_TODO',
      payload, // shorthand doesnt need to assign to varible as name its the same
    })

    console.log(store.value);

    input.value = '';
  },
  false
);

todoList.addEventListener('click', function(event) {
  const target = event.target as HTMLButtonElement;
  if (target.nodeName.toLowerCase() === 'button') {
    console.log(target);
  }
});
