export const registerUser = async () => {
    const url = "localhost:3000/user";

    const result = await fetch(url).then((response) => response.json());

    return result;
}