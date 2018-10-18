import { createTodoItemFinalizer } from './TodoItemFinalizer'

const state = { _state: true, items: { find: jest.fn() } }
const id = '_id'

const todoItemFinalizer = createTodoItemFinalizer()

test('Call items.find()', () => {
  run()

  expect(state.items.find).toHaveBeenCalled()
})

function run() {
  return todoItemFinalizer(state, id)
}

describe('items.find() fn', () => {
  test('Return false', () => {
    const result = run({ id: 'whatever' })

    expect(result).toBe(false)
  })

  function run(item) {
    const fn = state.items.find.mock.calls[0][0]

    return fn(item)
  }

  test('Return true for matching item', () => {
    const result = run({ id })

    expect(result).toBe(true)
  })
})

test('Return state', () => {
  const result = run()

  expect(result).toMatchObject(state)
})

test('Mutate state', () => {
  const result = run()

  expect(result.items)
})
