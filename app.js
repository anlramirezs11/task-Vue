var tareas = [
    {
        title: "Task 1",
        done: true
    },
    {
        title: "Task 2",
        done: true
    },
    {
        title: "Task 3",
        done: true
    },
    {
        title: "Task 4",
        done: true
    },
    {
        title: "Task 5",
        done: false
    }
];

new Vue({
    el: '#task-app',
    data: {
        nameApp: 'Tareas Vue',
        tareas: tareas
    },
    methods: {
        deleteTask: (tarea) => {
            tareas.splice(tareas.indexOf(tarea), 1);
        }
    }
})