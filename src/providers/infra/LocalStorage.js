export const handleSetInitialState = (itemName, initialState = []) => {
  const item = localStorage.getItem(itemName);

  if (item) {
    return JSON.parse(item);
  }

  if (initialState) {
    return JSON.parse(JSON.stringify(initialState));
  }

  return [];
}

export const handleSetItem = (name, item) => {
  localStorage.setItem(name, JSON.stringify(item));
}