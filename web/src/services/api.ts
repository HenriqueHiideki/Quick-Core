const API_BASE_URL = 'http://localhost:3333'

export async function getPolls() {
  const response = await fetch(`${API_BASE_URL}/polls`)
  if (!response.ok) throw new Error('Erro ao buscar as enquetes.')
  return response.json()
}

export async function getPoll(pollId: string) {
  const response = await fetch(`${API_BASE_URL}/polls/${pollId}`)
  if (!response.ok) throw new Error('Enquete não encontrada.')
  return response.json()
}

export async function voteOnPoll(pollId: string, optionId: number, userId: number = 1) {
  const response = await fetch(`${API_BASE_URL}/polls/${pollId}/votes`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      option_id: optionId,
      user_id: userId,
    }),
  })

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}))
    throw new Error(errorData.message || 'Erro ao registrar voto.')
  }
  return response.json()
}

export async function deletePoll(pollId: string) {
  const response = await fetch(`${API_BASE_URL}/polls/${pollId}`, {
    method: 'DELETE',
  })
  if (!response.ok) throw new Error('Erro ao deletar enquete.')
}

export async function createPoll(question: string, options: string[], userId: number = 1) {
  const response = await fetch(`${API_BASE_URL}/polls`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      question: question,
      user_id: userId,
      options: options,
    }),
  })

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}))
    throw new Error(errorData.message || 'Erro ao criar enquete.')
  }

  return response.json()
}

export async function registerUser(name: string, email: string, password: string) {
  const response = await fetch(`${API_BASE_URL}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password }),
  })

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}))
    throw new Error(errorData.message || 'Erro ao criar conta.')
  }

  return response.json()
}

export async function loginUser(email: string, password: string) {
  const response = await fetch(`${API_BASE_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  })

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}))
    throw new Error(errorData.message || 'E-mail ou senha inválidos.')
  }

  return response.json()
}