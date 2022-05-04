import { post } from "../types/Post";
import { BaseDatabase } from "./BaseDatabase";


export class PostDatabase extends BaseDatabase {

    createPost = async (
        post: post
    ) => {
        await this.connection()
            .insert({
                id: post.id,
                photo: post.photo,
                description: post.description,
                type: post.type,
                created_at: post.created_at,
                author_id: post.author_id
            })
            .into("labook_posts");
    }
}