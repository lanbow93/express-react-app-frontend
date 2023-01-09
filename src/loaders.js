const DB_URL = "https://express-react-app-backend.onrender.com/"

export const projectLoader = async ({request}) => {
    const response = await fetch(`${DB_URL}projects`);
    const projects = await response.json()
    return projects

}

export const aboutLoader = async ({request}) => {
    const response = await fetch(`${DB_URL}about`);
    console.log(response)
    const about =  await response.json()
    console.log(about)
    return about
}

