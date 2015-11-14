import AppDispatcher from "../Dispatcher/AppDispatcher";
import StoreRepository from "./StoreRepository";
import * as constants from "../constants/Constants";
import { EventEmitter } from "events";

class TodoStore extends EventEmitter {
    constructor() {
        super();

        AppDispatcher.register((payload) => {
            var action = payload.action;
            switch (action.actionType) {
                case constants.ADD_ITEM:
                    StoreRepository.addItem(action.data);
                    todoStore.emitChange();
                    break;
                case constants.REMOVE_ITEM:
                    StoreRepository.removeItem(action.data);
                    todoStore.emitChange();
                    break;
                default:
                    break;
            }
        });
    }

    emitChange() {
        this.emit(constants.CHANGE_EVENT);
    }

    addChangeListener(callback) {
        this.on(constants.CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeChangeListener(constants.CHANGE_EVENT, callback);
    }

    getList() {
        return StoreRepository.list;
    }
}

const todoStore = new TodoStore();

export default todoStore;