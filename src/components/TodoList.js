import React from 'react'

const TodoList = props => (
  <div data-test="TodoList" className="bg-near-white pa4 mw6">
    <h1 className="green">Penguin list</h1>
    <ul className="list pa0">
      {props.items.map(item => (
        <li key={item.id} className="pa2 mv1 br2 bg-green">
          <div>
            <input className="mr2" type="checkbox" />
            <span className="near-white">{item.title}</span>
          </div>
        </li>
      ))}
    </ul>
  </div>
)

TodoList.defaultProps = {
  items: []
}

export default TodoList
