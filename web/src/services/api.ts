const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3333'

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

export async function createPoll(question: string, options: string[]) {
  const token = localStorage.getItem('token')

  const response = await fetch(`${API_BASE_URL}/polls`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({
      question: question,
      options: options,
    }),
  })

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}))
    throw new Error(errorData.message || 'Erro ao criar enquete.')
  }

  return response.json()
}

export async function voteOnPoll(pollId: string, optionId: number) {
  const token = localStorage.getItem('token')

  const response = await fetch(`${API_BASE_URL}/polls/${pollId}/votes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({
      option_id: optionId,
    }),
  })

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}))
    throw new Error(errorData.message || 'Erro ao registrar voto.')
  }
  return response.json()
}

export async function deletePoll(pollId: string) {
  const token = localStorage.getItem('token')

  const response = await fetch(`${API_BASE_URL}/polls/${pollId}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  })
  if (!response.ok) throw new Error('Erro ao deletar enquete.')
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

export async function getMe() {
  const token = localStorage.getItem('token')

  const response = await fetch(`${API_BASE_URL}/users/me`, {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  })

  if (!response.ok) throw new Error('Erro ao buscar dados do usuário.')
  return response.json()
}

export async function updateMe(name: string, email: string) {
  const token = localStorage.getItem('token')

  const response = await fetch(`${API_BASE_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({ name, email }),
  })

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}))
    throw new Error(errorData.message || 'Erro ao atualizar dados.')
  }

  return response.json()
}