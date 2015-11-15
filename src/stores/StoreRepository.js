const key = "TODO_ITEMS_KEY";

class StoreRepository {	
    constructor() {		
		this._list = localStorage.getItem(key) || [];
    }

    get list() {
        return this._list;
    }

    addItem(item) {
        this._list.push(item);
		localStorage.setItem(key, this._list);
    }

    removeItem(index) {
        this._list.splice(index, 1);
		localStorage.setItem(key, this._list);
    }
}

export default new StoreRepository();