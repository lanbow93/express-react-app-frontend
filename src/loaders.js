const URL = process.env.REACT_APP_URL

export const projectLoader = async ({request}) => {
    const response = await fetch(URL + "/projects");
    const projects = await response.json()
    return projects

}

export const aboutLoader = async ({request}) => {
    const response = await fetch(URL + "/about");
    const about =  await response.json()
    return about
}

