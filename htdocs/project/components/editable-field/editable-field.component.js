function EditableFieldComponentController() {
	var _ctrl = {
		editMode: false,
		handleModeChange: handleModeChange
	}

	var ctrl = this;

	_.assign(ctrl, _ctrl);

	ctrl.$onInit = function(changes) {
		// Set a default fieldType
		if (!ctrl.fieldType) {
	  		ctrl.fieldType = 'text';
		}
	}

	function handleModeChange() {
		if (!ctrl.isEditable) {
			return;
		}
		if (ctrl.editMode) {
			ctrl.onUpdate({value: ctrl.fieldValue});
			ctrl.fieldValueCopy = ctrl.fieldValue;
		}
		ctrl.editMode = !ctrl.editMode;
	}
}

angular.module('app').component('flEditableField', {
	templateUrl: 'project/components/editable-field/editable-field.html',
	bindings: {
		fieldValue: '<',
	    fieldType: '@?',
	    onUpdate: '&',
	    isEditable: '<?'
	},
	controller: EditableFieldComponentController
});
