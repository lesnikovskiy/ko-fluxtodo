import {TODO_ITEMS_KEY} from "../constants/Constants";

class StoreRepository {
    get todoList() {
		let storageItems = localStorage.getItem(TODO_ITEMS_KEY);
		return storageItems ? JSON.parse(storageItems) : [];
    }

    addItem(item) {
        let _list = this.todoList;
		_list.push(item);
		localStorage.setItem(TODO_ITEMS_KEY, JSON.stringify(_list));
    }

    removeItem(item) {
		let _list = this.todoList;
        _list.splice(_list.indexOf(item), 1);
		localStorage.setItem(TODO_ITEMS_KEY, JSON.stringify(_list));
    }
}

export default new StoreRepository();