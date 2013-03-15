if (Meteor.isClient) {
	Quotes = new Meteor.Collection("quote");

	QuoteUsers = new Meteor.Collection("quoteusers");

	Template.quoteTimeline.quote = function () {
		var quotes = Quotes.find({});
		Session.set("totalQuotes", quotes.count());
		return Quotes.find({}, {sort: {"date": -1}});
	};
	
	
	Template.quoteTimeline.helpers = ({
	
	loadmasonry: function () {


   }
   });
   
   Template.quoteTimeline.rendered = function () {
	   var total = this.findAll('.item');
	   if (total.length === Session.get("totalQuotes")) {
	
		$( function() {
			$('#container').masonry({
				itemSelector : '.item',
				columnWidth : 240
			});
			alert(1);
		});
	   }
   };

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
