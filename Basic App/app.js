// const app=Vue.createApp({
//     data:function(){
//         return {
//             topic:"Vue.Js",
//             time:new Date().toISOString()
//         }
//     }

// })

// app.mount(".main")


const app=Vue.createApp({
    data:function(){
        return {
            topic:"Vue.Js Essentials",
            time:new Date().toLocaleDateString(),
            topic1:"Introduction",
            topic2:"Interpolation",
            link:"https://vuejs.org/guide/quick-start.html",
            content:'<h2>This is the first topic</h2>',
            count:2
        }
    },

    methods:{
        getTopic(){
            const randomNum=Math.random()
            if(randomNum<0.5){
                return this.topic1
            } else {
                return this.topic2
            }
        }

    }

})

app.mount(".main")
// css selector should be unique


