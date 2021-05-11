import * as React from "react"

const Teaser = ({ blok }) => (
    <div>
      <h2>
          { blok.headline }
      </h2>
      <p>
          { blok.intro }
      </p>
    </div>
)

export default Teaser