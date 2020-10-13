import React, { Component } from 'react'
import TodoItems from './TodoItems'
import './TodoList.css'

export default class TodoList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      items: []
    }
  }
  
  addItem = e => {
    let itemArray = this.state.items

    if (this._inputElement.value !== "") {
      itemArray.unshift({
        text: this._inputElement.value,
        key: Date.now()
      })

      this.setState({
        items: itemArray
      })
      
      this._inputElement.value = ""
    }

    console.log(itemArray)
    
    e.preventDefault()
  }

  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => item.key !== key)

    this.setState({
      items: filteredItems
    })
  }
  
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={ this.addItem }>
            <input ref={ a => this._inputElement = a }
              placeholder="enter task" />
            <button type="submit">add</button>
          </form>
        </div>
        <TodoItems entries={ this.state.items } deletion={ this.deleteItem } />
      </div>
    )
  }
}
