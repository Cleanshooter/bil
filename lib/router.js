Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound',
	waitOn: function() { return Meteor.subscribe('issues'); }
});

Router.route('/', {name: 'issuesList'});

Router.route('/issues/:_id', {
	name: 'issuePage',
	data: function() { return Issues.findOne(this.params._id); }
});

Router.route('/issues/:_id/edit', {
	name: 'issueEdit',
	data: function() { return Issues.findOne(this.params._id); }
})

Router.route('/submit', function(){
	if(!Meteor.user())
	{
		Session.set('processApp',this.params.query.processApp);
		Session.set('taskName',this.params.query.taskName);
		Session.set('taskId',this.params.query.taskId);
		Session.set('usrName',this.params.query.userId);
	} else
	{
		Session.set('usrName', Meteor.user().username);
	}

	this.render('issueSubmit');
}, {name: 'issueSubmit'})

var requireLogin = function() {
	if(! Meteor.user()) {
		if(Meteor.loggingIn()) {
			this.render(this.loadingTemplate)
		} else {
			this.render('accessDenied');
		}
	} else {
		this.next();
	}
}

Router.onBeforeAction('dataNotFound', {only: 'issuePage'});
Router.onBeforeAction(requireLogin, {only: 'issueEdit'});