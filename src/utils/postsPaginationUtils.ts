import { allPosts, Post } from "contentlayer/generated";

const posts: Post[] = allPosts.sort((a, b) => b.date.localeCompare(a.date));

const totalPosts = posts.length;
const postsPerPage = 2;
export const totalPages = Math.ceil(totalPosts / postsPerPage);

export const getPostsPagination = (currentPage: number = 1) => {
    const offset = (currentPage - 1) * postsPerPage;
    const currentPosts = posts.slice(offset, postsPerPage + offset);

    return {
        currentPosts, 
        currentPage,
    }
}