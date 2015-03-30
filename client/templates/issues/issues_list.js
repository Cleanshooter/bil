Template.issuesList.helpers({
	issues: function() {
		return Issues.find({}, {sort: {process_name: 1}});
	}
});