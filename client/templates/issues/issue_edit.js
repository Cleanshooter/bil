Template.issueEdit.events({
	'submit form': function(e) {
		e.preventDefault();

		var currentIssueId = this._id;

		var issueProperties = {
			process_name: $(e.target).find('[name=process_name]').val(),
			task_name: $(e.target).find('[name=task_name]').val(),
			priority: $(e.target).find('[name=priority]').val(),
			description: $(e.target).find('[name=description]').val(),
			status: $(e.target).find('[name=status]').val(),
			assigned_to: $(e.target).find('[name=assigned_to]').val(),
			resolve_by: $(e.target).find('[name=resolve_by]').val(),
			analysis: $(e.target).find('[name=analysis]').val(),
			resolved_on: $(e.target).find('[name=resolved_on]').val(),
			resolution: $(e.target).find('[name=resolution]').val(),
			fixed_snapshot: $(e.target).find('[name=fixed_snapshot]').val(),
			estimated_effort: $(e.target).find('[name=estimated_effort]').val()
		}

		Issues.update(currentIssueId, {$set: issueProperties}, function(error) {
			if(error) {
				alert(error.reason);
			} else {
				Router.go('issuePage', {_id: currentIssueId});
			}
		});
	},

	'click .delete': function(e) {
		e.preventDefault();

		if(confirm("Delete this issue?")) {
			var currentIssueId = this._id;
			Issues.remove(currentIssueId);
			Router.go('issuesList');
		}
	},

  	'focus #resolved_on': function () {
    // show datepicker
    	$('#resolved_on').datepicker('show');
    },

  	'focus #resolve_by': function () {
	// show datepicker
   		$('#resolve_by').datepicker('show');
   	}
});

Template.issueEdit.rendered = function() {
  // initialize datepicker
  $('#resolved_on').datepicker({
    format: 'mm/dd/yyyy'
  }),
   $('#resolve_by').datepicker({
    format: 'mm/dd/yyyy'
  });
};

Template.issueEdit.helpers({
  priorityOptions:function(){
	 return [{
	      value:"Low",
	      text:"Low"
	    },{
	      value:"Medium",
	      text:"Medium"
	    },{
	      value:"High",
	      text:"High"
	    }];
  },
  statusOptions:function(){
    // store options in a helper to iterate over in the template
	 return [{
	      value:"Analysis",
	      text:"Analysis"
	    },{
	      value:"Duplicate",
	      text:"Duplicate"
	    },{
	      value:"In Development",
	      text:"In Development"
	    },{
	      value:"Fixed - Waiting for Deploy",
	      text:"Fixed - Waiting for Deploy"
	    },{
	      value:"Fix Deployed",
	      text:"Fix Deployed"
	    }];
  },
  selected:function(value){
    // compare the current option value (this.value) with the parameter
    // the parameter is the value from the collection in this case
    return this.value == value ? "selected":"";
  }
});
