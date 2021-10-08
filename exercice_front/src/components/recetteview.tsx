import React, {useState} from "react"
import { JsxElement } from "typescript"



export default class RecetteView extends React.Component{


    render(){
        return (
            <div>
            <h1>Titre de la recette</h1>
            <br />
            <br />
            <img src="{recette.image}" alt="image recette {titre}" />
            <br />
            <span>Durée de cuissons :</span>
        </div>
        )
    }

}