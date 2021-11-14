import axios from 'axios';
import { useState } from "react";
import { useEffect } from "react";
// creating custom hooks and custom parameter
const useProducthook = (options) => {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        setIsLoading(true)
        axios.get('https://salty-river-79195.herokuapp.com/products')
            .then(res => {
                console.log(res);
                setProducts(res.data)
                setIsLoading(false)
            })
    }, [])

    return options ? [products.slice(0, 6),isLoading] : [products, isLoading]
};
export default useProducthook;