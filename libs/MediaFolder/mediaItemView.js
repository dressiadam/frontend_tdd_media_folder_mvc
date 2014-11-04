/**
 * @module views/MediaItem
 */

var Backbone = require('backbone'),
	_ = require('underscore'),

//This is an itemview. The itemview represents a model or an object.
	MediaItemView = Backbone.Marionette.ItemView.extend(/** @lends module:views/MediaItemView~MediaItemView */{

		/**
		 * @member
		 * @default
		 */
		//This will be the tag, when we create one of them.
		tagName   : 'div',

		/**
		 * @member
		 * @default
		 */
		//This will be the class, when we create of of them.
		className : 'media_item',

		events : {
			'click' : 'onClick'
		},

		/**
		 * @class MediaItemView
		 * @extends external:Backbone.Marionette.ItemView
		 * @constructs
		 */
		initialize : function() {
			MediaItemView.__super__.initialize.apply(this, arguments);
		},

		/**
		 * Handles click event
		 */
		onClick : function() {
		}
	});

module.exports = MediaItemView;