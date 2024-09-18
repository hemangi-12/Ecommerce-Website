import { useEffect,useState } from 'react';

  const Subtotal = ({iteam}) => {
    const [price, setPrice] = useState(0);

    useEffect(() => {
        totalAmount();
    }, [iteam]);

    const totalAmount = () => {
        let price = 0
        if (Array.isArray(iteam)) {
          iteam.forEach(item => {
            if (item && item.price && item.price.cost) {
              price += item.price.cost;
            }
          })}
          setPrice(price);
    }

  return (
    <div className='sub_item'>
     <h3>Subtotal ({iteam.length} items): <strong style={{fontweight:700,color:"#111"}}>Rs{price}.00</strong></h3>
    </div>
  )
};

export default Subtotal