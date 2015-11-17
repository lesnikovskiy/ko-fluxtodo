import ko from "knockout";
import template from "./list-summary.html";
import todoStore from "../../stores/todoStore";

class ListSummaryViewModel {
	constructor() {
		this.todoItems = ko.observableArray(todoStore.getList());
		
		todoStore.addChangeListener(this.onChange.bind(this));
	}
	
	onChange() {
		this.todoItems(todoStore.getList());
	}
}

export default {
	viewModel: ListSummaryViewModel,
	template: template
}