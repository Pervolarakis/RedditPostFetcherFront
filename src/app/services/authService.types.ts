export interface AuthServiceInterface {
    success: boolean,
    token: string
}

export interface CurrentUser {
    id: string, 
    email: string, 
    iat: number
}