var assert = require('chai').assert,
	sinon = require('sinon'),
	_ = require('underscore'),

	testUtils = require('../setup_utils'),

	MediaItemView = require('../../libs/Chat/mediaItemView');

suite('messageView', function() {
	setup(function() {
		this.sandbox = testUtils.loadTestContent('');

		//spy event handlers
		this.sinonSandbox = sinon.sandbox.create();
		this.sinonSandbox.spy(MediaItemView.prototype, 'onClick');

		this._mediaItem = new MediaItemView();
	});

	teardown(function() {
		this._mediaItem.destroy();
		this.sinonSandbox.restore();
	});


});
