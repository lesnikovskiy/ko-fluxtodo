import ko from "knockout";
import TodoListViewModel from "./components/todo-list/todo-list";

ko.components.register("todo-list", TodoListViewModel);

ko.applyBindings();