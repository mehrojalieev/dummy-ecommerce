import { useEffect, useState } from "react"
import "./Hero.scss"
import { ApiInstance } from "../../api"

const Hero = () => {
    const [AllCategories, setAllCategories] = useState([])

    

    useEffect(() => {
       async function renderCategories() {   
           try {
               const response = await ApiInstance("/products/category-list")
               setAllCategories(response.data);
               
               
            } 
            catch (error) {
                console.log(error);
            }   
        }
        renderCategories()
    }, [])
    
  return (
    <section className="hero ">
        <div className="banner-navbar">
            {
                AllCategories.slice(0, 8).map((category: string | null, index: number) =>
                <p key={index}>{category}</p>
                )
            }
        </div>
            <div className="hero-wrapper">
                    <img src="https://telegra.ph/file/d2766a0f5ff0330f85398.jpg" alt="" />
            </div>
    </section>
  )
}

export default Hero
