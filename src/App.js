import React, { Component } from 'react'
import './App.css'
import TodoList from './components/TodoList'

class App extends Component {
  state = {
    items: [
      { id: 'buy-vegan-milk', title: 'Buy (vegan) milk' },
      { id: 'merge-vendor-pr', title: 'Merge vendor PR' }
    ]
  }

  render() {
    return <TodoList items={this.state.items} />
  }
}

export default App
