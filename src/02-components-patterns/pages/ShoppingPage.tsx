import { ProductCard } from '../components';
import { useShoppingCart } from '../hooks/useShoppingCart';
import '../styles/custom-styles.css';
import { products } from '../data/products';

export const ShoppingPage = () => {
  const { shoppingCart, onProductCountChange } = useShoppingCart();

  return (
    <div className=''>
      <h1>Shopping Store</h1>
      <hr />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className='bg-dark'
            onChange={onProductCountChange}
            value={shoppingCart[product.id]?.count || 0}
          >
            <ProductCard.Image
              img={product.img}
              className='custom-img'
              style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}
            />
            <ProductCard.Title className='text-white text-bold' />
            <ProductCard.Buttons className='custom-button' />
          </ProductCard>
        ))}
      </div>
      <div className='shopping-cart'>
        {Object.entries(shoppingCart).map(([key, product]) => (
          <ProductCard
            key={key}
            product={product}
            className='bg-dark'
            value={product.count}
            onChange={onProductCountChange}
            style={{ width: '100px' }}
          >
            <ProductCard.Image
              img={product.img}
              className='custom-img'
              style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}
            />
            <ProductCard.Buttons
              className='custom-button'
              style={{ display: 'flex', justifyContent: 'center' }}
            />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};
