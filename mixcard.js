if (Meteor.isClient) {
	Quotes = new Meteor.Collection("quote");

	QuoteUsers = new Meteor.Collection("quoteusers");

	Template.quoteTimeline.quote = function () {
		return Quotes.find({}, {sort: {"date": -1}});
	};
	
	
	$( function() {
		$('#container').masonry({
			itemSelector : '.item',
			columnWidth : 240
		});
	});
   

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
