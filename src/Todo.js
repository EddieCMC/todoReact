import React, { Component } from 'react';

class Todo extends Component{
    constructor(props) {
        super(props)

        this.delete = this.delete.bind(this)
        this.mark = this.mark.bind(this)
    }

    delete(){
        const {todo, deleteTodo} = this.props
        deleteTodo(todo.id)
    }

    mark(){
        const {todo ,markTodo} = this.props
        markTodo(todo.id)
    }

    render(){
    const {todo} = this.props
    return(
        <div className={`list-item ${todo.isComplete ? 'uncompleted' : ''}`} >
            <div className="list-item__state">
                {todo.isCompleted ? 'O' : 'X'}
            </div>
            <div className="list-item__content">
                {todo.text}
            </div>
            <div className="list-item__action">
                <button className="list-item__delete" onClick={this.delete}>delete</button>
                <button className="list-item__mark" onClick={this.mark}>
                    {todo.isCompleted ? '標示成未完成' : '標示成已完成'}
                </button>
            </div>
        </div>
        )
    }
}

export default Todo