import { useCallback, useState } from "react"
import { IncrementConCallback } from "./IncrementConCallback"


export const UseCallback = () => {

    const [counter, setCounter] = useState(0)

    const incrementarPadre = useCallback((val) =>{
        setCounter(c => c + val)
    }, [])

  return (
    <>
        <h1>Contador: {counter}</h1>
        <IncrementConCallback increment={incrementarPadre}/>
    </>
  )
}
