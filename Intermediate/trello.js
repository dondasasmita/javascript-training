const myTodos = []
myTodos.push('Buy Milk')
myTodos.push('Go Swimming')
myTodos.push('Learn Node.JS')

myTodos.forEach(function(todo, index) {
    console.log(`To do ${index + 1} : ${todo}`);
});

