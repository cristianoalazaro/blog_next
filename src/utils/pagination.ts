import { allPosts, Post } from "contentlayer/generated";
import { notFound } from "next/navigation";

const isNumber = (value: string) => /^\d+$/.test(value);

export const getPagination = <T>(items: T[], postsPerPage = 2, currentPage: string = "1") => {
    if (!isNumber(currentPage)) {
        notFound();
      }
      
      const currentPageInt = parseInt(currentPage, 10);
      const totalPosts = items.length;
      const totalPages = Math.ceil(totalPosts / postsPerPage);

      const offset = (currentPageInt - 1) * postsPerPage;
    const currentPosts = items.slice(offset, postsPerPage + offset);

    return {
        currentPosts, 
        currentPage,
        totalPages
    }
}