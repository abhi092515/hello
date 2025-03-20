class Todo {
  todos = []

  constructor(todos){
   this.todos = todos
  }
  
  getTodos(){
    console.log(this.todos)
   return this.todos
  }
  
  removeTodo(indexOfTodo){
     console.log('Removing todo: ', this.todos[indexOfTodo] )
      this.todos.splice(indexOfTodo, 1)
     console.log('Update todos: ', this.todos)
     return this.todos
  }
  
  addTodo(todo){
     this.todos.push(todo)
     console.log('Added todo: ', todo)
     return this.todos
  }
  
  clearAllTodos(){
     this.todos = []
  }
  
  static totalTodos(user1, user2){
    const user1Items = user1.getTodos().length
   const user2Items = user2.getTodos().length
   
   return user1Items + user1Items
  }
    
}

const user1 = new Todo(['go to market', 'do homework'])
user1.getTodos()
user1.addTodo('wash dishes')
user1.getTodos()
user1.removeTodo(0)


const user2 = new Todo(['do gardening', 'make coffee'])
user1.getTodos()
user1.addTodo('wash dishes')
user1.getTodos()


console.log(Todo.totalTodos(user1, user2))