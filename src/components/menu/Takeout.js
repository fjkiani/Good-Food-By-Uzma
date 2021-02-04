import React, { useState } from 'react';
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import Menu from "./Menu"
import Categories from "./Categories"





export const query = graphql`
{
  allAirtable(
    filter: { table: { eq: "Takeout" } }
    sort: { fields: data___date, order: DESC }
  ) {
    nodes {
      id
      data {
        title
        description
        price
        type
        image {
          localFiles {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
}
`



export default function Takeout({takeout: data, title, description, id, price, number}) {

    const {
        allAirtable: { nodes: takeout},
      } = useStaticQuery(query)

   


      const [takeoutItems, setTakeoutItems] = useState(data)
      const[categories,setCategories] =useState([])

    //     takeout.map((item) => {
    //     const {category} = item.data
    //     console.log(category)
    //  })





      const filterItems = (category) => {
          const newItems = takeout.filter((item)=> item.category === category)
          setTakeoutItems(newItems)
      }

   

    return (
        <main>
          
         <section className="menu section">
            <div className="title">
              <h2>our menu</h2>
              <div className="underline"> </div>
           </div>
           {/* <Menu takeout={takeoutItems}/> */}
           {/* {console.log(takeoutItems)} */}
        <Categories filterItems={filterItems}/> 
        <Menu data={takeout}/>


          </section> 
        </main>
    )
}