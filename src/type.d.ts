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
interface Msg {
    id: string,
    from: string,
    to: string,
    type: string,
    content: string,
    message: string
    time: string,
}
interface Chat {
    chatId: string | null,
    setChatId: (chatId: string) => void,
    messages: Msg[],
    addMessage: (message: Msg) => void,
    webSocket: WebSocket | null,
    setWebSocket: (webSocket: WebSocket) => void,
}
