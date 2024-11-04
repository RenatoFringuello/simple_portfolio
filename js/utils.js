/**
 * random not inclusive
 */
export function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min)
    const maxFloored = Math.floor(max)
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)
}

/**
 * fetch data JSON
 */
export async function fetchData(url) {
    const requestURL = url
    const request = new Request(requestURL)
  
    const response = await fetch(request)
    const data = await response.json()
    return data
}