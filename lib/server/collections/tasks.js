WSL.permissions.forTasks = () => {
    return {
        insert: function (userId, doc) {
            return Roles.userIsInRole(userId, ["project-admin", "role_tasks"], doc.doc);
        },
        update: function (userId, doc, fields, modifier) {
            return Roles.userIsInRole(userId, ["project-admin", "role_tasks"], doc.doc);
        },
        remove: function (userId, doc) {
            return Roles.userIsInRole(userId, ["project-admin", "role_tasks"], doc.doc);
        }
    }
}