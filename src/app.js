import ko from "knockout";
import TodoListViewModel from "./components/todo-list/todo-list";
import ListSummaryViewModel from "./components/list-summary/list-summary";

ko.components.register("todo-list", TodoListViewModel);
ko.components.register("list-summary", ListSummaryViewModel);

ko.applyBindings();