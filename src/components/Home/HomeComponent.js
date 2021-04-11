import React from 'react'
import ContainerComponent from '../Layout/Container/ContainerComponent'
import './HomeComponent.scss'

export default function HomeComponent(){
    return(
       <ContainerComponent>
            <div className="home-parent-container">
                Welcome to My Dukaan App
            </div>
       </ContainerComponent>
    )
}