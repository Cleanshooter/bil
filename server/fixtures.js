if(Issues.find().count() === 0) {
	Issues.insert({
		type: 'Issue',
		username: 'nstraub',
		submit_date: new Date(),
		task_id: '1',
		process_name: 'Claims Appeals',
		task_name: 'Review Claim Appeal',
		description: 'A random description',
		priority: 'High',
		status: 'In Progress',
		assigned_to: 'nstraub',
		resolve_by: '03-31-2015',
		analysis: '',
		resolved_on: '',
		follow_up_email: '',
		resolution: '',
		fixed_snapshot: '',
		votes: '',
		estimated_effort: '',
		attachment: ''
	});
}