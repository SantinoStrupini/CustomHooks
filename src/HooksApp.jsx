
import {  CounterComponent } from "./components/CounterComponent"
import {  FetchComponent } from "./components/FetchComponent"
import {  FormsComponent } from "./components/FormsComponent"


export const HooksApp = () => {
  return (
    <>
        <h1>Aplicacion de Hooks</h1>
        
        <hr />
        <FormsComponent />
        <hr />
        <FetchComponent />
        <hr />
        <CounterComponent />
        
        
    </>
  )
}
