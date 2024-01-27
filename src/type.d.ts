interface UserStore {
    accessToken: string | null
    setAccessToken: (accessToken: string) => void
}