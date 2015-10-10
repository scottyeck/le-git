'use strict';

/**
 * A commit class.
 * Represents a single commit.
 * 
 * @param {String} id			The ID of the commit.
 * @param {Commit} parent 		The parent commit.
 * @param {String} message		The commit message.
 */
function Commit(id, parent, message) {
	this.id = id;
	this.parent = parent;
	this.message = message;
}

module.exports = Commit;