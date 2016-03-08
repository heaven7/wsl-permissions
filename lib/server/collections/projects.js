WSL.permissions.forProjects = () => {
    return {
        insert: (userId, doc) => {
            if (doc.owners.indexOf(userId) > -1)
                return true
        },
        update: (userId, doc, fields, modifier) => {
            return Roles.userIsInRole(userId, ["project-admin", "admin"], doc._id);
        },
        remove: (userId, doc) => {
            return Roles.userIsInRole(userId, ["project-admin", "admin"], doc._id);
        }
    }
}