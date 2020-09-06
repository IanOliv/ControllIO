class Infos {

    
    constructor(){
        this.users = []
        this.types = []
    }

    addUser(user){this.users.push(user)}
    addType(type) { this.types.push(type) }
    removeUser(id){
       const index= this
        .users
        .findIndex(user=>user.id==id)

        this
        .users
        .splice(index,1)
    }
    removeType(id) {
        const index = this
            .types
            .findIndex(type => type.id == id)
        this.types.splice(index, 1)
    }

    getData(){
        return`      
            Users connecteds ${this.users.length}
            Types connected ${this.types.length}
        `
    }



}


module.exports = new Infos();