var issuesData = [
	{
		name: 'First Issue',
		app: 'Claims Appeals',
	},
	{
		name: 'Second Issue',
		app: 'Demographic Updates'
	}
];

Template.issuesList.helpers({
	issues: issuesData
});