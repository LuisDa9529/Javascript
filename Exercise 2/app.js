const pokeball = {
    name: "",
    type: "",
    type2: "",
    trainer: "Ash",
    lvl: "",
    
    transfer: function(newTrainer){
        this.trainer = newTrainer;
    },
    lvlUP: function(){
        this.lvl = this.lvl+1;
    },
    setName: function(newName){
        this.name = newName;
    },
    changeTypes: function(new1="none", new2="none"){
        this.type = new1;
        this.type2 = new2;
    },
    catchPokemon: function(){
        this.name = pokemon.name;
        this.type = pokemon.type;
        this.type2 = pokemon.type2;
        this.lvl = pokemon.lvl;
    },
    release: function(){
        this.name = "";
        this.type = "";
        this.type2 = "";
        this.lvl = "";
    }
};

const pokemon = {
    name: "Pikachu",
    type: "Electric",
    type2: "none",
    lvl: 5,

    setLVL : function(newLVL){
        this.lvl = newLVL;
    },
    lvlUP: function(){
        this.lvl = this.lvl+1;
    },
    setName: function(newName){
        this.name = newName;
    },
    changeTypes: function(new1="none", new2="none"){
        this.type = new1;
        this.type2 = new2;
    },
};