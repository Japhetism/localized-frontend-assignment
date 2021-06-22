export const login = async (payload) => {
    const response  = await fetch("https://babatunde-assignment.herokuapp.com/api/v1/login", {
        method: "post",
        headers: {
            "content-Type": "application/json"
        },
        body: payload
    })
    
    return response;
}