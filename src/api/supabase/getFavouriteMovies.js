import { supabase } from "../../supabase";

export async function getFavouriteMovies(id_curent_user) {
    try {
        let { data: favourite, error } = await 
        supabase
            .from("favourite")
            .select("id_movie")
            .eq("id_user", id_curent_user)
        if (error) throw error; 
        if (favourite) return favourite
    } catch(err) {
        return null
    }
}