import ko from "knockout";
import template from "./todo-list.html";
import todoStore from "../../stores/TodoStore";
import todoActions from "../../actions/TodoActions";

class TodoListViewModel {
    constructor() {
        this.todoItems = ko.observableArray(todoStore.getList());
        this.todoItem = ko.observable();

        todoStore.addChangeListener(this.onChange.bind(this));
    }

    onChange() {
        this.todoItems(todoStore.getList());
    }

    addItem(viewModel, event) {
        todoActions.addItem(this.todoItem());
        this.todoItem(null);
    }

    removeItem(index) {
        todoActions.removeItem(index);
    }
}

export default {
    viewModel: TodoListViewModel,
    template: template
};