export interface ICompany {
    domain: string
    name: string
    projects: string[]
    logoUrl: string
    members: {
        userId: string
        roles: string[]
    }[]
    createdAt: Date
    updatedAt: Date
    createdBy: string
}
