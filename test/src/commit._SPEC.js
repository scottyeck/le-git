'use strict';

var rfr = require('rfr'),
	expect = require('chai').expect;

var Commit = rfr('src/commit');

describe('Commit', function() {

	it('Its constructor acts as desired.', function() {

		var id = 1,
			message = 'Example commit message';

		var parent = new Commit(0, null, 'Initial commit');
		var commit = new Commit(id, parent, message);

		expect(commit).to.be.ok;
		expect(commit.id).to.equal(id);
		expect(commit.parent).to.equal(parent);
		expect(commit.message).to.equal(message);
	});
});