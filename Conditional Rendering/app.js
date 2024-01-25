const app=Vue.createApp({
    data(){
        return {
            enteredTask:'Todo listiTEMS  ',
            tasks:[]
        }
    },

    methods:{
        addTask(){
            this.tasks.push(this.enteredTask)
        },

        changeText(event){
            this.enteredTask=event.target.value

        },
        removeTask(id){
            console.log("function called")
            this.tasks.splice(id,1)
        }
    }
})

app.mount("#main")