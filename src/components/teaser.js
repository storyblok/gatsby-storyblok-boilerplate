import * as React from "react"

const Teaser = ({ blok }) => (
    <div>
        <h2>{blok.headline}</h2>
        <pre>{JSON.stringify(blok, null, 2)}</pre>
    </div>
)

export default Teaser