function PostsList() {
    const items = [
        "An item",
        "A second item",
        "A third item",
        "A fourth item",
        "And a fifth one",
    ]
    return (
        <div>
            <ul className="list-group">
                {items.map((item, index) => { return <li className="list-group-item">{index} {item}</li> })}
            </ul>
        </div>
    )
}

export default PostsList