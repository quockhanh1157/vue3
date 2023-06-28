import {ref} from "vue";

const getPosts = (url) => {
    const posts = ref([])
    const error = ref("")

    const load = async () => {
        try{
            let data = await fetch(url)
            if(!data.ok) throw Error("no data")
            posts.value = await data.json()
        }
        catch (err){
            error.value = err.message
        }
    }

    return {posts,error,load}
}

export default getPosts