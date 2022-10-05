const baseURL = "https://rickandmortyapi.com/api/character"

export async function getAll(page){
    let endpoint = `${baseURL}?page=${page}`
    let query = await fetch(endpoint)
    let data = await query.json()
    return data.results
}