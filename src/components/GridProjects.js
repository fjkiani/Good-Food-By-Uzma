import React from "react"
import Title from "./Title"
import Image from "gatsby-image"
import styled from "styled-components"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"


export const query = graphql`
{
  allAirtable(
    filter: { table: { eq: "Services" } }
    limit: 3
    sort: { fields: data___date, order: DESC }
  ) {
    nodes {
      id
      data {
        date
        name
        type
        heading
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


const GridProjects = ({title}) => {

  const {
    allAirtable: { nodes: services},
  } = useStaticQuery(query)

  // console.log(services)
  return (
    <Wrapper>
      <Title title={title || "projects"} />
      <div className="tile-layout">
        {services.map((service, index) => {
          const { id } = service
          const { 
            data: {heading, name, image } 
           } = service
          const fluid = image.localFiles[0].childImageSharp.fluid
          
          return (
            <article key={id} className={`div-${index}`}>
              <Image className="img" fluid={fluid} />
              <div className="info">
                {/* <p>- {type} -</p> */}
               
                <Link to={`/projects/${services.slug}`}>
                <h3>{name}</h3>
                {/* <h3>{heading}</h3> */}
                </Link>
              </div>
             
  
            </article>
            
          )
        })}
      </div>
      <Link to="/projects" className="btn">
        all projects
      </Link>
    </Wrapper>
  )
}





const Wrapper = styled.section`
  background: var(--clr-grey-10);
  padding: 5rem 0;
  .tile-layout {
    margin-top: 2rem;
    display: grid;
    width: 90vw;
    max-width: var(--max-width);
    margin: 0 auto;
    gap: 1rem;
    /* safari workaround */
    grid-gap: 1rem;
    grid-template-rows: 300px 300px;
    grid-auto-rows: 300px;
  }
  /* GOTCHA!!!!! */
  .img {
    height: 100%;
    border-radius: var(--radius);
    transition: var(--transition);
  }
  article {
    position: relative;
    overflow: hidden;
    border-radius: var(--radius);
    background: var(--clr-primary-7);
    &:hover .img {
      opacity: 0.2;
    }
    .info {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      // opacity: 0;
      transition: var(--transition);
      color: var(--clr-white);
      text-align: center;
      p {
        margin-bottom: 0.5rem;
        color: var(--clr-white);
        text-transform: uppercase;
      }
    }
    &:hover .info {
      opacity: 1;
    }
  }
  @media (min-width: 768px) {
    .tile-layout {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 992px) {
    .tile-layout {
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 3 20em 35em;
      grid-auto-rows: 350px;
    }
  }
  @media (min-width: 1200px) {
    .tile-layout {
      display: grid;
      grid-template-areas:
        "a b c";
        // "a c d";
      .div-0 {
        grid-area: a;
      }
      .div-1 {
        grid-area: b;
      }
      .div-2 {
        grid-area: c;
      }
      .div-3 {
        grid-area: d;
      }
    }
  }
  a {
    display: block;
    width: 9rem;
    text-align: center;
    margin: 0 auto;
    margin-top: 3rem;
  }
`

export default GridProjects
