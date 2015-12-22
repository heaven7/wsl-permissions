Meteor.methods({
    addUserToRoles: function(userId, roles, group) {
        roles.forEach(function(role) {
            Roles.addUsersToRoles(userId, role, group);
        });
    }
});