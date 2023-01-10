const DB_URL = "https://express-react-app-backend.onrender.com/"

export const projectLoader = async ({request}) => {
    const response = await fetch(`${DB_URL}projects`);
    const projects = await response.json()
    return projects

}

export const aboutLoader = async ({request}) => {
    const response = await fetch(`${DB_URL}about`);
    const about =  await response.json()
    return about
}

