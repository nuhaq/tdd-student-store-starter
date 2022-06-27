import * as React from "react"

export default function NotFound(props) {
    return (
        <h1 className="not-found">
            404: Not Found ({props.error})
        </h1>
    )
}
