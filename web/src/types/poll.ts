export interface PollOption {
    id: number
    option_text: string
    votes?: number
}

export interface Poll {
    id: number
    question: string
    created_in: string
    user_id: number
    options: PollOption[]
}