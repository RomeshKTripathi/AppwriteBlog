import conf from "../../config.js";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteEndpoint)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({ title, slug, content, image, publish_status, userId }) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteArticlesCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredimage: image,
                    publish_status,
                    userid: userId,
                }
            );
        } catch (error) {
            console.log("Appwrite Service :: createPost :: error", error);
        }
    }

    async updatePost(slug, { title, content, image, status }) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteArticlesCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredimage: image,
                    status: status ? status : true,
                }
            );
        } catch (error) {
            console.log("Appwrite Service :: updatePost :: error", error);
        }
    }

    async deletePost(slug) {
        try {
            return await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteArticlesCollectionId,
                slug
            );
        } catch (error) {
            console.log("Appwrite Service :: deletePost :: error", error);
            return false;
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteArticlesCollectionId,
                slug
            );
        } catch (error) {
            console.log("Appwrite Service :: getPost :: error", error);
            return false;
        }
    }

    async getPosts(queries = []) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteArticlesCollectionId,
                [...queries, Query.equal("status", "active")]
            );
        } catch (error) {
            console.log("Appwrite Service :: getPosts :: error", error);
            return false;
        }
    }

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwriteImageBucketId,
                ID.unique(),
                file
            );
        } catch (error) {
            console.log("Appwrite Service :: uploadFile :: error", error);
            return false;
        }
    }

    async deleteFile(fileId) {
        try {
            return await this.bucket.deleteFile(
                conf.appwriteImageBucketId,
                fileId
            );
        } catch (error) {
            console.log("Appwrite Services :: deleteFile :: error", error);
            return false;
        }
    }

    getFilePreview(fileId) {
        return this.bucket.getFilePreview(conf.appwriteImageBucketId, fileId);
    }

    // async createComment({ postId, username, comment }) {
    //     try {
    //         return await this.databases.createDocument(
    //             conf.appwriteDatabaseId,
    //             conf.appwriteCommentCollectionId,
    //             ID.unique(),
    //             {
    //                 postid: Number(postId),
    //                 username,
    //                 comment,
    //             }
    //         );
    //     } catch (error) {
    //         throw error;
    //     }
    // }

    // async getComments(queries = []) {
    //     try {
    //         return await this.databases.listDocuments(
    //             conf.appwriteDatabaseId,
    //             conf.appwriteCommentCollectionId,
    //             [...queries]
    //         );
    //     } catch (error) {
    //         console.log("Appwrite Service :: getComments :: error", error);
    //         return false;
    //     }
    // }
}

const service = new Service();
export default service;
