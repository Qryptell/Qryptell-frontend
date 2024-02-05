interface UserStore {
    accessToken: string | null
    setAccessToken: (accessToken: string) => void
    username: string | null
    setUsername: (username: string) => void,
    themeColor: string,
    setThemeColor: (themeColor: string) => void,
}
interface Collection {
    SERVER_AUTH_URL: string,
    SERVER_USER_URL: string,
    PROTECT: boolean
}
