import { ChangeEvent, useEffect, useState } from "react"
import "./AllProducts.scss"
import { ApiInstance } from "../../api"
import { ProductType } from "../../types"
import Card from "../../utils/card/Card"
const AllProducts = () => {
    const [AllCategories, setAllCategories] = useState([])
    const [AllProducts, setAllProducts] = useState<ProductType[]>([])
    const [searchValue, setSearchValue] = useState<string>("")
    const [selectCategory, setSelectCategory] = useState<string>("")
    console.log(searchValue);
    
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

    useEffect(() => {
        async function renderProducts() {   
            try {
                const response = await ApiInstance("/products")
                setAllProducts(response?.data.products);
                
            } 
            catch (error) {
                console.log(error);
            }  
        } 
        renderProducts()
    }, [])





    useEffect(() => {
           async function CateogryProducts(){
            try {   
                const response = await ApiInstance.get(`/products/category/${selectCategory}`)
                setAllProducts(response?.data?.products)
            } 
            catch (error) {
                console.log(error);
                    
            }
           }
           CateogryProducts()
    }, [selectCategory])


    useEffect(() => {
           async function SearchProducts(){
            try {   
                const response = await ApiInstance.get(`/products/search?q=${searchValue}`)
                
                setAllProducts(response?.data?.products)
            } 
            catch (error) {
                console.log(error);
                    
            }
           }
           SearchProducts()
    }, [searchValue])

  return (
    <div className="all-products container">
        <h1>All Products</h1>
        <div className="products-header">
            <form className="search-form">
                <input value={searchValue} onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)} type="text" placeholder="Search products" />
                <span className="material-symbols-outlined">search</span>
            </form>
            <select onChange={(e: ChangeEvent<HTMLSelectElement>) => setSelectCategory(e.target.value)} className="filter-select">
                <option value="">Filter</option>
                {
                    AllCategories?.map((category: string, index: number) =>
                        <option value={category} key={index}>{category}</option>
                    )
                }
            </select>
        </div>

        <div className="allproduct__cards-wrapper">
            {
                AllProducts?.map((product: ProductType, index: number) =>
                    <Card product={product} key={index}/>
                )
            }
        </div>
    </div>
  )
}

export default AllProducts
