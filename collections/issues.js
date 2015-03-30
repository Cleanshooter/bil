Issues = new Meteor.Collection('issues');

Issues.allow({
	update: function(userId, issue) { return ownsDocument(userId,issue); },
	remove: function(userId, issue) { return ownsDocument(userId, issue); }
})

Meteor.methods({
	issueInsert: function(postAttributes) {	
		check(postAttributes, {
			process_name: String,
			task_name: String,
			priority: String,
			description: String,
			task_id: String,
			username: String
		});

		var issue = _.extend(postAttributes, {
			submit_date: new Date()
		});

		var issueId = Issues.insert(issue);
		return {
			_id: issueId
		};
	}
});