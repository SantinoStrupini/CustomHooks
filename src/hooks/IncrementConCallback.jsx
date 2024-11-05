import React from "react";

export const IncrementConCallback = React.memo(function IncrementConCallback({ increment }) {
    console.log("Me estoy re dibujando");

    return (
        <button
            type="button"
            className="btn btn-success"
            onClick={() => increment(1)}
        >
            Incrementar + 1
        </button>
    );
});

