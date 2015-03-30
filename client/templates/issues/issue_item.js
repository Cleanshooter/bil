Template.issueItem.helpers({
	description: function() {
		if(this.description.length > 50)
		{
			var str = this.description;
			var subStr = str.substring(0, 50) + "...";
			return subStr;
		} else {
			return this.description
		}
	}
})

Template.issueItem.rendered = function() {
  if(this.data.priority === "High")
  	this.$('.issue').css( "background-color", "#fff9f9" );
  else if(this.data.priority === "Medium")
    this.$('.issue').css( "background-color", "#ffffe5" );
  else if(this.data.priority === "Low")
  	this.$('.issue').css("background-color", "#f4fef4");
  else
  	this;

};