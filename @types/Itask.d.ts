export interface Itask {
    id: string
    name: string
    timeStamps: string
    board: string
    description: string
    lablels: string
    isDone: boolean
    attachments: { originalName: string; fileId: string }[]
    assignTo: string[]
    createdBy: string
    coverImage: string
    deadLine: string
    completedTask: number
}
