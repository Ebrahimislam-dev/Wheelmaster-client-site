import React from 'react';
import { Row, Spinner, Button } from "react-bootstrap";
import './Product.css'
import useProducthook from './../../../hooks/useProducthook';
import ProductCard from './ProductCard';
import Header from '../../SubPages/Header/Header';


const ExploreAllProduct = () => {
    
        // using custom hooks conditionally
    const [products, isLoading] = useProducthook(false);

    return (
        <div className=' bg-black'>
            <Header></Header>
            <div className="flex justify-center pt-36 mb-8 uppercase ">

                <span class=" line"></span>
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
                    <div className="container-fluid  mb-1">

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

export default ExploreAllProduct;