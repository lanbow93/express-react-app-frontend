const DB_URL = "https://express-react-app-backend.onrender.com/"

export const projectLoader = async ({request}) => {
    const response = await fetch(`${DB_URL}projects`);
    const projects = await response.json()
    return projects

}

export const homeLoader = async ({request}) => {
    const response = await fetch(`${DB_URL}home`);
    const about =  await response.json()
    return about
}

