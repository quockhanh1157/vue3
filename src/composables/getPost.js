import {ref} from "vue";

const getPost = (url) => {
    const post = ref(null)
    const error = ref(null)

    const load = async () => {
        try{
            let data = await fetch(url)
            if(!data.ok) throw Error("data do not exist")
            post.value = await data.json()
        }
        catch (err){
            error.value = err.message
        }
    }

    return {post,error,load}
}

export default getPost