let ids = 0;
let musica = [];

module.exports = {
    save(nome, artista, genero) {
        let obj = {id: ++ids, nome: nome, artista: artista, genero: genero}
        musica.push(obj)
        return obj
    },
    update(id, nome, artista, genero) {
        let pos = this.getPositionById(id)
        if (pos >= 0) {
            let obj = {id: parseInt(id), nome: nome, artista: artista, genero: genero}
            musica[pos] = obj
            return musica[pos]
        }
        return null
    },
    list() {
        return musica
    },
    listByName(nome) {
        let lista = []
        for (let i = 0; i<musica.length; i++) {
            if (musica[i].nome.toUpperCase().startsWith(nome.toUpperCase())) {
                lista.push(musica[i])
            }
        }
        return lista;
    },
    listByArtista(artista) {
        let lista = []
        for (let i = 0; i<musica.length; i++) {
            if (musica[i].artista == artista) {
                lista.push(musica[i])
            }
        }
        return lista;
    },
    getElementById(id) {
        let pos = this.getPositionById(id)
        if (pos >= 0) {
            return musica[pos];
        }
        return null;
    },
    getPositionById(id) {
        for (let i = 0; i<musica.length; i++) {
            if (musica[i].id == id) {
                return i;
            }
        }
        return -1;
    },
    delete(id) {
        let i = this.getPositionById(id);
        if (i >= 0) {
            musica.splice(i, 1);
            return true;
        }
        return false; 
    }
}