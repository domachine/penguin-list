import React from 'react'
import { storiesOf } from '@storybook/react'
import TodoList from './TodoList'

storiesOf('TodoList', module)
  .add('default', () => <TodoList />)
  .add('with items', () => (
    <TodoList
      items={[
        { id: 'first-item', title: 'First item' },
        { id: 'second-item', title: 'Second item' },
        { id: 'third-item', title: 'Third item' },
        { id: 'fourth-item', title: 'Fourth item' },
        { id: 'fifth-item', title: 'Fifth item' },
        { id: 'sixth-item', title: 'Sixth item' }
      ]}
    />
  ))
