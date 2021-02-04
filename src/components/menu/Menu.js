import React from 'react'
import Image from "gatsby-image"
import menu from "./menu.css"

export default function Menu({data}) {
    return (
        <div className="section-center2">
            {data.map((menuItems) => {

            const {id} = menuItems
            const {title,number,description,price,image} = menuItems.data

            const fluid = menuItems.data.image.localFiles[0].childImageSharp.fluid

        

                return (
                
                <article key={id} className="menu-item">
                <Image className="photo" fluid={fluid} alt={title} className="photo">
                </Image>
                <div className="item-info">
                <header>  
                <h4>{title}</h4>
                <h4 className="price">{price}</h4>  
                </header>
                <p className="item-text">{description}</p>

                </div>
            </article>
                )
            })}
            
        </div>
    )
}
