

export const createId = (arr) =>{
    return arr.length ? arr[arr.length - 1].id  + 1 : 1
}

export const saveToLocalStorage = (name, arr) => {
    localStorage.setItem(name, JSON.stringify(arr))
}

export const getFromLocalStorage = (name) => {
    let local = localStorage.getItem(name)
    return local ? JSON.parse(local) : []
}

