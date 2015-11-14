class StoreRepository {
    constructor() {
        this._list = [];
    }

    get list() {
        return this._list;
    }

    addItem(item) {
        this._list.push(item);
    }

    removeItem(index) {
        this._list.splice(index, 1);
    }
}

export default new StoreRepository();