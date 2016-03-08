WSL.permissions.forTaskCategories = () => {
    return {
        insert: (userId, doc) => {
            return Roles.userIsInRole(userId, ["project-admin", "role_taskCategories"], doc.doc);
        },
        update: (userId, doc, fields, modifier) => {
            return Roles.userIsInRole(userId, ["project-admin", "role_taskCategories"], doc.doc);
        },
        remove: (userId, doc) => {
            return Roles.userIsInRole(userId, ["project-admin", "role_taskCategories"], doc.doc);
        }
    }
}