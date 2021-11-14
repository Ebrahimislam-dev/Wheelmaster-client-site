import React from 'react';

const ManageProductsCard = ({ product, handleDelete }) => {
    return (
        <div>
            <div>
                <div className="  mx-5 icons text-black mb-5 bg-white"  >
                    <img className="w-100" src={product.img} alt="" />
                    <h6  >Product Name: {product.name}</h6>
                    <button className="btn btn-outline-danger" onClick={() => handleDelete(product._id)}>Delete</button>

                </div>
                <div>
                </div>
            </div>
        </div>
    );
};

export default ManageProductsCard;