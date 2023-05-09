export const GET_NEWS_LIST_REQUEST = 'GET_NEWS_LIST_REQUEST'
export const GET_NEWS_LIST_SUCCESS = 'GET_NEWS_LIST_SUCCESS'
export const GET_NEWS_LIST_FAILURE = 'GET_NEWS_LIST_FAILURE'

export const getNewsList = (query) => (dispatch) => {
    dispatch({ type: GET_NEWS_LIST_REQUEST });

    setTimeout(() => {
        dispatch({ type: GET_NEWS_LIST_SUCCESS });
    }, 2000);
}