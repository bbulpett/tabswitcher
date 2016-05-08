import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		clicked: function(tabItem) {
			console.log(tabItem.title + " was selected");
			this.sendAction("setSelectedTabItemAction", tabItem);
		}
	}
});
