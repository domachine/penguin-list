export function createTodoItemFinalizer() {
  return (state, id) => {
    state.items.find(item => (item.id === id ? true : false))
    return {
      ...state
    }
  }
}
