/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

import { Container } from './styles';

interface ProductsDTO {
   id: string;
   sku: string;
   title: string;
   description: string;
   availableSizes: string[];
   price: number;
   isFreeShipping: boolean;
   quantity: number;
   category: string;
   image: string;
}

function Home() {
  const [products, setProducts] = useState<Promise<ProductsDTO[]>>();
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const response = axios.get('http://localhost:3004/products/')
  //     .then(async (res: AxiosResponse): Promise<ProductsDTO[]> => Promise.resolve(res.data))
  //     .catch((err) => { throw new Error(err.message); });

  //   setProducts(response);
  //   console.log(products);
  // },
  // []);

  useEffect(() => {
    async function loadData(): Promise<void> {
      const response: AxiosResponse = await axios.get('http://localhost:3004/products/');

      if (response.data) {
        setProducts(response.data);
      }
      setLoading(false);
    }

    loadData();
  }, []);

  // eslint-disable-next-line no-console
  // console.log(process.env.PUBLIC_URL);

  return loading ? (
    <Container>
      <h2>loading...</h2>
    </Container>
  ) : (
    <Container>
      Home
      {
       products instanceof Array ? (products.map((item: ProductsDTO) => (
         <div key={item.id}>

           <h2>{item.id}</h2>

           <img src={`${item.image}`} style={{ width: '100px', height: '100px' }} alt="" />
         </div>
       ))
       ) : (null)
      }
    </Container>
  );
}

export default Home;
