import { createStore } from 'redux';
import { addTodo,toggleTodo,setVisibilityFilter } from './actions/index.js';

let store  = createStore(function() {
    return 'Hello, redux';
});

//todo追加
var addTodoElem = document.getElementById('addTodo');
var input = addTodoElem.getElementsByTagName('input')[0];
var button = addTodoElem.getElementsByTagName('button')[0];
button.addEventListener('click', () => {
    //ボタンクリックしたら「Todo追加」アクションをストアに渡す
    var todoText = input.value;
    store.dispatch(addTodo(todoText));
});

//todoかんりょう
var todoList = document.getElementById('todoList');
var elements = todoList.getElementsByTagName('li');
var listArray = [...elements];
listArray.forEach((v, index) => {
    v.addEventListener('click', e => {
        //todoクリックしたら「完了状態を切り替える」アクションをStoreに渡す
        store.dispatch(toggleTodo(index));
    })
})

//フィルタリング
var links = document.getElementById('links');
var childs = links.childNodes;
var childList = [...childs];
childList.filter(v => v.nodeName != '#text').forEach(v => {
    v.addEventListener('click', e => {
        //リンククリックで「todoのフィルタリング状態を切り替える
        //アクションをStoreに渡す
        var filterText = v.innerHTML;

        store.dispatch(setVisibilityFilter(filterText));
    });
});



var contents = document.getElementById('contents')
contents.innerHTML = store.getState().toString()
