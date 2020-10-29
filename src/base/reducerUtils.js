export function updateItemInArray(array, itemId, updateItemCallback) {
  const updatedItems = array.map((item) => {
    if (item.Id !== itemId) {
      return item;
    }
    const updatedItem = updateItemCallback(item);
    return updatedItem;
  });

  return updatedItems;
}

export function updateObject(oldObject, newValues) {
  return Object.assign({}, oldObject, newValues);
}

export function createReducer(initialState, handlers) {
  const result = function reducer(state = initialState, action) {
    if (
      Object.prototype.hasOwnProperty.call(action, 'type') &&
      handlers[action.type] !== undefined
    ) {
      return handlers[action.type](state, action);
    } else {
      return state;
    }
  };

  return result;
}
