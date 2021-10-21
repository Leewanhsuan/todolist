// 初始變數
let list = document.querySelector('#my-todo')
let addBtn = document.querySelector('#add-btn')
let input = document.querySelector('#new-todo')

// 資料
const todos = ['Hit the gym', 'Read a book', 'Buy eggs', 'Organize office', 'Pay bills']
for (let todo of todos) {
    addItem(todo)
}


// 函式
function addItem(text) {
    let newItem = document.createElement('li')
    newItem.innerHTML = `
    <label for="todo">${text}</label>
    <i class="delete fa fa-trash"></i>
  `
    list.appendChild(newItem)
}


// write your code here
// 1. add to do
addBtn.addEventListener('click', function () {
    let inputValue = input.value;
    if (inputValue.length > 0) {
        addItem(inputValue)
    }
})

// 2. 刪除 todo
list.addEventListener('click', function (event) {
    // console.log(event.target) 找到點擊的元素
    // console.log(list) addEventListner 所綁定的元素
    let target = event.target
    if (target.classList.contains('delete')) {
        let parentElement = target.parentElement
        parentElement.remove()
        // 3. 增加刪除線
    } else if (target.tagName === 'LABEL') {
        target.classList.toggle('checked')
    }
})





