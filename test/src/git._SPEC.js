'use strict';

var rfr = require('rfr'),
	expect = require('chai').expect;

var Git = rfr('src/git');

describe('Git', function() {

	var repo;

	beforeEach(function() {
		repo = new Git();
	});

	it('Its constructor acts as intended.', function() {
		expect(repo).to.be.ok;
		expect(repo.lastCommitId).to.equal(-1);
	});

	it('It commits code as intended.', function() {

		var lastCommitId = repo.lastCommitId,
			message = 'Initial commit';

		repo.commit(message);
		expect(repo.lastCommitId).to.equal(lastCommitId + 1);
	});

	it('It logs history as intended.', function() {

		var history = repo.log(),
			firstCommit, secondCommit;

		// Initially, history should be considered as empty.
		expect(history.length).to.equal(0);

		// After we commit, history should recognize our commit.
		firstCommit = repo.commit('This is the first commit');
		history = repo.log();
		expect(history.length).to.equal(1);
		expect(history[0]).to.equal(firstCommit);
		expect(firstCommit.parent).to.equal(null);

		// We commit again, and the two commits should now be linked
		// in history.
		secondCommit = repo.commit('This is the second commit.');
		history = repo.log();
		expect(history.length).to.equal(2);
		expect(history[1]).to.equal(firstCommit);
		expect(history[0]).to.equal(secondCommit);
	});
});