import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from '../components';
import '../styles/custom-styles.css';

const product = {
  id: '1',
  title: 'Coffee Mug -  Card',
  img: './coffee-mug.png',
};
export const ShoppingPage = () => {
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
        <ProductCard
          product={product}
          className='bg-dark'
          style={{ backgroundColor: '#70d1f8' }}
        >
          <ProductCard.Image
            img={product.img}
            style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}
          />
          <ProductCard.Title
            title='Cafe'
            className='text-white text-bold'
            style={{ fontWeight: 'bold' }}
          />
          <ProductCard.Buttons
            className='custom-button'
            style={{
              display: 'flex',
              justifyContent: 'end',
            }}
          />
        </ProductCard>

        <ProductCard product={product} className='bg-dark'>
          <ProductCard.Image
            img={product.img}
            className='custom-img'
            style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}
          />
          <ProductCard.Title title='Cafe' className='text-white text-bold' />
          <ProductCard.Buttons className='custom-button' />
        </ProductCard>

        <ProductCard product={product} className='bg-dark'>
          <ProductImage
            img='./coffee-mug.png'
            className='custom-img'
            style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}
          />
          <ProductTitle title='Hola mundo' className='text-white text-bold' />
          <ProductButtons className='custom-button' />
        </ProductCard>
      </div>
    </div>
  );
};
