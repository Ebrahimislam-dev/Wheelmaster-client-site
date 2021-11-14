import React from 'react';
import { Row, Spinner,Button } from "react-bootstrap";
import './Product.css'
import useProducthook from './../../../hooks/useProducthook';
import ProductCard from './ProductCard';


const Products = () => {

    
    // using custom hooks conditionally
    const [products, isLoading] = useProducthook(true);

    return (
        <div className=' bg-black'>

            <div className="flex justify-center mb-8 uppercase ">

                <span className=" line"></span>
                <h1 className="heading pt-5 pb-10 text-white animate-pulse">
                    Our <span className="text-danger"> Bike's </span>
                </h1>


            </div>



            {
                isLoading ? (
                    <Button variant="danger" disabled>
                        <Spinner
                            as="span"
                            animation="grow"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />
                        Loading...
                    </Button>

                ) : (
                    <div className="container-fluid ">

                        <Row xs={1} md={3} className="px-10">
                            {
                                products?.map(product => <ProductCard
                                    key={product._id}
                                    product={product}

                                >
                                </ProductCard>)

                            }
                        </Row>
                    </div>
                )
            }


        </div>
    );
};

export default Products;