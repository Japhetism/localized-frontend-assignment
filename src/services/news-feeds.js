export const getAllNewsFeeds = (pageSize, token) => {
    const response = fetch(`https://babatunde-assignment.herokuapp.com/api/v1/news-feeds?pageSize=${pageSize}`, {
        headers: {
            Authorization: `Bearer ${token}`
        },
        method: "get"
    })
    return response;
}