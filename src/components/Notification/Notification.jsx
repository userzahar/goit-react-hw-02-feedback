
export function Notification({ message, children, value }) {
    if (!value) {
        return <p>{message}</p>
    }
    return <div>{children}</div>
}