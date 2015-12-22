WSL.permissions = {
    insert: function(userId, doc) {
        if (doc.owners.indexOf(userId) > -1) {
            return true;
        }
    },
    update: function(userId, doc, fields, modifier) {
        if (doc.owners.indexOf(userId) > -1) {
            return true;
        }
    },
    remove: function(userId, doc) {
        if (doc.owners.indexOf(userId) > -1) {
            return true;
        }
    },
    forProjects: function() {
        return {
            insert: function (userId, doc) {
                if (doc.owners.indexOf(userId) > -1) {
                    return true;
                }
            },
            update: function (userId, doc, fields, modifier) {
                return Roles.userIsInRole(userId, ["project-admin", "admin"], doc._id);
            },
            remove: function (userId, doc) {
                return Roles.userIsInRole(userId, ["project-admin", "admin"], doc._id);
            }
        }
    }
};