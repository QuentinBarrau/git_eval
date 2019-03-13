let list = new TaskList();
let tasks = new CompoTaskList({
    element: document.getElementById('tasks'),
    taskList: list,
});

tache1 = new Task("Première_tache","14/03");
tache2 = new Task("Deuxième_tache","17/03");
tache3 = new Task("Troisième_tache","25/03");



list.add(tache1);
console.log("ENTRE");





console.log(tache1);
console.log("ENTRE");
console.log(list);
console.log("ENTRE");
console.log(taskList);
console.log("ENTRE");
console.log(tasks);