function EditableFieldComponentController() {
	var _ctrl = {
		editMode: false,
		handleModeChange: handleModeChange,
		reset: reset
	}

	var ctrl = this;

	_.assign(ctrl, _ctrl);

	ctrl.$onInit = function(changes) {
		// Make a copy of the initial value to be able to reset it later
		ctrl.fieldValueCopy = ctrl.fieldValue;

		// Set a default fieldType
		if (!ctrl.fieldType) {
	  		ctrl.fieldType = 'text';
		}
	}

	function handleModeChange() {
		if (ctrl.editMode) {
			ctrl.onUpdate({value: ctrl.fieldValue});
			ctrl.fieldValueCopy = ctrl.fieldValue;
		}
		ctrl.editMode = !ctrl.editMode;
	}

	function reset() {
		ctrl.fieldValue = ctrl.fieldValueCopy;
	}
}

angular.module('app').component('flEditableField', {
	templateUrl: 'project/components/editable-field/editable-field.html',
	bindings: {
		fieldValue: '<',
	    fieldType: '@?',
	    onUpdate: '&'
	},
	controller: EditableFieldComponentController
});
