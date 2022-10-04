const app = Vue.createApp({
    data() {
        return {
            name: "Some-one",
            gender: "male",
            email:"some-one@mail.com",
            picture: "https://randomuser.me/api/portraits/men/10.jpg"
        }
    },
    methods: {
        async getUser() {
            console.log("getting new random User");

            const res = await fetch("https://randomuser.me/api")
            const { results } = await res.json()
      
            this.name= results[0].name.first+"-"+results[0].name.last,
            this.gender=  results[0].gender,
            this.email=results[0].email,
            this.picture= results[0].picture.large
        }
    }
    
})

app.mount("#app")