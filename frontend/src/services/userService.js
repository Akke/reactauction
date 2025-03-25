export const registerUser = async (username, password, email) => {
    console.log("func call")
    const url = "http://localhost:3000/user";

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password, email })
    });

    const result = await response.json();

    return result;
}