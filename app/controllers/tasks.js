import Controller from "@ember/controller";

export default Controller.extend({
  tarefas: [
    "Fazer café",
    "Aprender React",
    "Agredir comunista",
    "Aprender Node.js",
    "Arrumar emprego",
    "Ofender um vegano"
  ],

  actions: {
    addTask(value) {
      let arr = this.get("tarefas");
      arr.push(value);
      this.set("tarefas", []);
      this.set("tarefas", arr);
    },
    removeTask(value) {
      let arr = this.get("tarefas");
      let pos = arr.indexOf(value);
      arr.splice(pos, 1);
      this.set("tarefas", []);
      this.set("tarefas", arr);
    }
  }
});
