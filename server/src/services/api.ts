const API_BASE_URL = 'http://localhost:3333'

export async function getPolls() {
    const response = await fetch(`${API_BASE_URL}/polls`)

    if (!response.ok) {
        throw new Error('Erro ao buscar enquetes')
    }

    return response.json()
}