Template.issueSubmit.events({
	'submit form': function(e) {
		e.preventDefault();

		var issue = {
			process_name: $(e.target).find('[name=process_name]').val(),
			task_name: $(e.target).find('[name=task_name]').val(),
			priority: $(e.target).find('[name=priority]').val(),
			description: $(e.target).find('[name=description]').val(),
			task_id: $(e.target).find('[name=task_id]').val(),
			username: $(e.target).find('[name=username]').val()
		};

		Meteor.call('issueInsert', issue, function(error, result) {
			//display the error to the user and abort
			if(error)
					return alert(error.reason);
			Router.go('issuePage', {_id: result._id});
		});
	}
});