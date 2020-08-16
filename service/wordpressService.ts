import axios from 'axios';
import url from 'url';

const getAllWordpressPosts() = () => {
    let pageNum = 1;
    while (true) {
        const getUrl = url.format({
            protocol: 'https:',
            host: 'faith4.net',
            pathname: '/wp-json/wp/v2/posts',
            query: {
                page: pageNum
            }
        });

        try {
            axios.get(getUrl)
        } catch(error) {

        }
    }
    const getUrl = url.format({

    });
};