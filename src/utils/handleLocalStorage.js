export const getFromLocalStorage = key => {
  const localNotes = localStorage.getItem(key)
  if (localNotes && localNotes.length !== 2) {
    return JSON.parse(localNotes)
  }
}

export const setToLocalStorage = (key, updatedList) => {
  return localStorage.setItem(key, JSON.stringify(updatedList))
}
