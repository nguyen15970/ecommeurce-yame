import React, { useEffect, useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import ProductView from './ProductView'

import Button from './Button'

// import { remove } from '../redux/product-modal/productModalSlice'

import productData from '../assets/fake-data/products'

const ProductViewModal = () => {

  

    const [product, setProduct] = useState(undefined)

   

    return (
        <div className={`product-view__modal ${product === undefined ? '' : 'active'}`}>
            <div className="product-view__modal__content">
                <ProductView product={product}/>
                <div className="product-view__modal__content__close">
                    <Button
                        size="sm"    
                       
                    >
                        đóng
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ProductViewModal
