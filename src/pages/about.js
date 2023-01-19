 import { useEffect } from "react";

const About =() => {
    useEffect (() => {
        throw new Error('You really broke it')
    })
  return (
    <>
      <h1> Yo its me</h1>
    </>
  )
}

export default About;