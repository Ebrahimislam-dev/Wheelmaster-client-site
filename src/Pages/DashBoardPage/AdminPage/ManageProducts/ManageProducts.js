import React, { useEffect, useState } from 'react';
import { Spinner,Button } from "react-bootstrap";
import ManageProductsCard from './ManageProductsCard';


const ManageProducts = () => {
    const [products, setProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        fetch(`https://salty-river-79195.herokuapp.com/products`)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
                setIsLoading(false);
            })
            .catch(error => {
                setError(error.message);

            })
    }, [setProduct, setIsLoading]);
    // Delete Api

    const handleDelete = id => {
        const url = `https://salty-river-79195.herokuapp.com/products/${id}`;
        fetch(url, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('deleted')
                    const remaining = products.filter(product => product._id !== id);
                    setProduct(remaining);
                    console.log(error);

                }

            })
    }
    return (
        <div>

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
                    <div className="grid grid-cols-1 md:grid-cols-4">
                        {
                            products?.map(product => <ManageProductsCard
                                key={product._id}
                                product={product}
                                handleDelete={handleDelete}
                            >
                            </ManageProductsCard>)

                        }

                    </div>
                )
            }
        </div>
    );
};

export default ManageProducts;




