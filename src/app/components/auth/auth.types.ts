export interface Login {
    username: string
    password: string
}

export interface Register {
    username: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    repeatPassword: string,
}