export function retriveItemFromStorage<T>(key: string): T {
    let localStrageValue: T = JSON.parse(localStorage.getItem(key))
    return localStrageValue

}

export function addItemToStorage(key: string,value:any){
    localStorage.setItem(key,JSON.stringify(value))
}

export function removeItem(key: string){
    localStorage.removeItem(key)
}