

const app=Vue.createApp({
    data:function(){
        return {
            count:0,
            month:'',
            fullMonth:"" 
        }
    },

    watch:{
        count(val){
            if(val>50){
                this.count=0
            }
        }

    },

    computed:{
        fullMonth(){
            console.log("called")
            return this.fullMonth=this.month

        }
    },
    methods:{
        add(num){
            this.count=this.count+num;
        },
        reduce(num){
            this.count=this.count-num;
        },
        setMonth(event){
            this.month=event.target.value
        },
        displayMonth(){
            if(this.month=='') return
            
            return this.fullMonth=`${this.month} 2024`

        }

    }
})

app.mount("#main")