type Message = { optionId: number; votes: number }
type Subscriber = (message: Message) => void

class VotingPubSub {
  private channels: Record<number, Subscriber[]> = {}

  subscribe(pollId: number, subscriber: Subscriber) {
    if (!this.channels[pollId]) {
      this.channels[pollId] = []
    }
    this.channels[pollId].push(subscriber)
  }

  publish(pollId: number, message: Message) {
    if (!this.channels[pollId]) return

    for (const subscriber of this.channels[pollId]) {
      try {
        subscriber(message)
      } catch (err) {
        console.error('Erro ao enviar mensagem via WebSocket:', err)
      }
    }
  }
}

export const voting = new VotingPubSub()