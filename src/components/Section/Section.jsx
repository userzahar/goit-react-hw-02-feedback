
export function Section({ title, children }) {
    return <div className="feedback">
        <p className="feedback__header">{title}</p>
        {children}
    </div>
}