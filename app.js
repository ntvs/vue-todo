const app = Vue.createApp({
    data() {
        return {
            melee: "1.02",
            animes: [
                { id: 1, index: 0, title: "Death Note", image: "https://qph.fs.quoracdn.net/main-qimg-f6b7ddfdc6338864813aba63c6af255c", isFav: false },
                { id: 2, index: 1, title: "One Piece", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVWcYD_1oq1Q9itvYBMW0-3DFqpA8dhXrM4ByuAxtC0xzFokr4eUAa2E8pXrYpUTj5p_I&usqp=CAU", isFav: false },
                { id: 3, index: 2, title: "My Hero", image: "https://i1.sndcdn.com/avatars-000410733648-9kv78w-t500x500.jpg", isFav: false },
                { id: 4, index: 3, title: "Dragon Ball Z", image: "https://pbs.twimg.com/profile_images/1366466342354751491/JyhZpbtu_400x400.jpg" },
                { id: 5, index: 4, title: "CODE GEASS", image: "https://i1.sndcdn.com/avatars-000151838815-1kli9j-t500x500.jpg" },
                { id: 6, index: 5, title: "MELEE", image: "https://commondatastorage.googleapis.com/images.pricecharting.com/AMIfv94OrwfVaIwl-NvTFTeRhzeNT5M2ZMjj9gwBwXBcmT5kntbY0sdQZrq0mv3nYE2WoBeUQc511bnQNS11D7-iEydu33azzeK5Rm7MPeIjRpkpBUXuTXDOz4vruA2D8ddAK_B9PmTNttt5pakDvyDgaj7ymtAxIQ/240.jpg"}
            ],
            animeName: "",
            animeURL: "",
            allShown: true,
            favsShown: false
        }
    },
    methods: {
        toggleFav(anime) {
            anime.isFav = !anime.isFav
        },
        toggleAllShown() {
            this.allShown = !this.allShown
        },
        toggleFavsShown() {
            this.favsShown = !this.favsShown
        },
        addAnime() {
            
            if (this.animeName !== "" && this.animeURL !== "") {
                this.animes.push({
                    id: Date.now(),
                    index: this.animes.length, //Keeps track of the index of the anime's original position
                    title: this.animeName,
                    image: this.animeURL,
                    isFav: false
                })

                this.animeName = ""
                this.animeURL = ""
            }
        },
        deleteAnime(index) {
            this.animes.splice(index, 1)
        }

    },
    computed: {
        favoriteAnimes() {
            //filter returns a new array.
            //the way it decides what elements are put in the new array is
            //if the function passed to it returns true. This could be anonymous func or normal one.

            //Since this is a computed array instead of adding the animes to a new array,
            //the original ordering in which they were added to the anime array is preserved in the favs array
            //This is just to showcase computed values.

            return this.animes.filter(anime => anime.isFav)
        },
        animeCount() {
            return this.animes.length
        },
        favCount() {
            return this.favoriteAnimes.length
        }
    }
})

app.mount("#app")