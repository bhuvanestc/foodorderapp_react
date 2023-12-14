import React from 'react';
import Itemcard from './components/Itemcard';
import Cardinfo from './components/Cardinfo';
const Home = () => {
    return (
        <>
        <h1 className="text-center mt-3">Fast Food Menu</h1>
        <section className="py-4 container">
            <div className="row justify-content-center">
             {Cardinfo.cardInfo.map((item,index)=>{
                return(<Itemcard img={item.img}
                    title={item.title}
                    desc={item.desc}
                    price={item.price}
                    item={item}
                    key={index}/>)
              })}
            </div>

        </section>
            
        </>
    );
};

export default Home;