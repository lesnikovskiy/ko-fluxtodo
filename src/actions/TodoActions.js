import AppDispatcher from "../dispatcher/AppDispatcher";
import * as constants from "../constants/Constants";

class TodoActions {
    addItem(item) {
        AppDispatcher.handleAction({
            actionType: constants.ADD_ITEM,
            data: item
        })
    }

    removeItem(index) {
        AppDispatcher.handleAction({
            actionType: constants.REMOVE_ITEM,
            data: index
        })
    }
}

export default new TodoActions();