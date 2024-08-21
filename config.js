export const config = {
    appwriteEndpoint: String(import.meta.env.VITE_APPWRITE_ENDPOINT),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteArticlesCollectionId: String(
        import.meta.env.VITE_APPWRITE_ARTICLES_COLLECTION_ID
    ),
    appwriteImageBucketId: String(
        import.meta.env.VITE_APPWRITE_IMAGE_BUCKET_ID
    ),
};
export default config;
