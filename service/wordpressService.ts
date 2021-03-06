import axios, { AxiosResponse } from 'axios';
import url from 'url';
import { wpPostObject } from "../types/global.type";

export const getAllWordpressPostsOnPage = async (host: string, page?: number): Promise<string[]> => {
    const pageNum = page || 1;
    const postUrlArray = [];
    const getUrl = url.format({
        protocol: 'https:',
        host,
        pathname: '/wp-json/wp/v2/posts',
        query: {
            page: pageNum
        }
    });

    try {
        const response: AxiosResponse<wpPostObject[]> = await axios.get(getUrl);
        for (const wpPostObject of response.data) {
            postUrlArray.push(wpPostObject.link);
        }
        console.log(`Completed page: ${ pageNum }`);
    } catch (error) {
        console.error(`Hit and error on page: ${ pageNum }`);
    }


    return postUrlArray;
};
