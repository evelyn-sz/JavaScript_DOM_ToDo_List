import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue ({
        el: "#app",
        data: {
            tasks: [ 
                { name: "Code",                 isCompleted: true,  priority: "High" },
                { name: "Walk my cute Pico",    isCompleted: false, priority: "Highest"},
                { name: "Code",                 isCompleted: false, priority: "High" },
                { name: "Do some exercise",     isCompleted: true,  priority: "Standard"},
                { name: "Code",                 isCompleted: true,  priority: "High"}
            ],
            newTask: "",
            priorityLevel: null,
        },
        methods: {
            saveNewTask: function () {
                this.tasks.push({name: this.newTask, isCompleted: false, priority: this.priorityLevel});
                this.newTask = "";
            },
            markCompleted: function(index) {
                this.tasks[index].isCompleted = true;
            }
        }
    });
});