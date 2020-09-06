class Store {


    constructor() {
        this.clients = []
        this.types = []
    }

    addClient(client) { this.clients.push(client) }
    addType(type) { this.types.push(type) }
    listOthersClients(id){
      return this
            .clients
            .filter(client => client.id != id)
    }
    removeClient(id) {
        const index = this
            .clients
            .findIndex(client => client.id == id)

        this
            .clients
            .splice(index, 1)
    }
    removeType(id) {
        const index = this
            .types
            .findIndex(type => type.id == id)
        this.types.splice(index, 1)
    }
    getData() {
        return `      
            Clients connecteds ${this.clients.length }
            Types connected ${this.types.length }
        `
    }


}

module.exports  = new Store();