import todoApp from './reducers/index.js';

//初期値state取得
var initialState = todoApp({}, {});
console.log(initialState)
// => { todos:[], visibilityFilter:"SHOW_ALL" };

//TODO一つ追加
var nextState = todoApp(initialState, {type:'ADD_TODO', id:1, text:'first todo'});
console.log(nextState);
