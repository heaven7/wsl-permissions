WSL.permissions = {}
WSL.permissions.general =  {
   insert: function(userId, doc) {
        if (doc.owners.indexOf(userId) > -1)
            return true
        return false
    },
    update: function(userId, doc, fields, modifier) {
        if (doc.owners.indexOf(userId) > -1)
            return true
        return false
    },
    remove: function(userId, doc) {
        if (doc.owners.indexOf(userId) > -1)
            return true
        return false
    }
}