var tareas = [
    {
        title: "Task 1",
        done: false
    },
    {
        title: "Task 2",
        done: false
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
        nameApp: 'Administrador de tareas con Vue.js',
        tareas: tareas
    },
    methods: {
        deleteTask: (tarea) => {
            tareas.splice(tareas.indexOf(tarea), 1);
        },
        addTask: (e) => {
            e.preventDefault();
            this.tareas.push({
                title: this.tareas.title,
                done: false
            });
            this.tareas.title = '';
        }
    }
});