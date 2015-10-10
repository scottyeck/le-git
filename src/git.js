'use strict';

var rfr = require('rfr');

var Commit = rfr('src/commit');

/**
 * A repository class.
 * Represents a git repository.
 */
function Git() {
	this.lastCommitId = -1;
	this.HEAD = null;
}


Git.prototype.commit = function(message) {
	this.lastCommitId++;
	var commit = new Commit(this.lastCommitId, this.HEAD, message);
	this.HEAD = commit;
	return commit;
};

Git.prototype.log = function() {
	var history = [],
		commit = this.HEAD;

	while (commit) {
		history.push(commit);
		commit = commit.parent;
	}

	return history;
};

module.exports = Git;