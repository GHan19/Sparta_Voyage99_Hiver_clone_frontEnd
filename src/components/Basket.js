import axios from 'axios';
import React from 'react';
import BasketList from './BasketList'
import MainEventAd from './MainEventAd';
import MainNavbar from './MainNavbar';


export const Basket = () => {

    const [Basket,setBasket] = React.useState([])


    React.useEffect(()=>{
        const token = localStorage.getItem("login-token");
        axios.get('http://54.180.100.13/api/cart',{
            headers: { Authorization: "Bearer " + `${token}` }
        })
        .then((res)=>{
            console.log(res)
            setBasket(res.data.cartList)
        })
    },[])


console.log(Basket)








 return(
    <>
    <MainEventAd/>
    <MainNavbar/>
    <div className='Basket_container'>
        <div className='Basket_title'><h1> 장바구니</h1></div>

        <div className='Basket_sec_container'>
            <div className='Basket_third_container'>
                <div className='All_check'> <input type="checkbox" value="check"  /> <strong>전체선택</strong></div>
                <div>
                    <button> 선택삭제</button>
                    <button> 품절삭제</button>
                </div>
            </div>
            <div className='Basket_four_container'>
                <div className='Basket_one'>상품정보</div>
                <div className='Basket_two'>옵션</div>
                <div className='Basket_third'>상품금액</div>
            </div>


        {Basket.map((Basket,idx) =>(

        <BasketList
            key={idx}
            boardid={Basket.boardid}
            cartid={Basket.cartid}
            discountper={Basket.discountper}
            enterprise={Basket.enterprise}
            image1={Basket.image1}
            nickname={Basket.nickname}
            option={Basket.option}
            price={Basket.price}
            quantity={Basket.quantity}
            title={Basket.title}
        />
        ))}
          




        </div>


    <div className='Basket_buy_btn'>
        <button>구매하기</button>
    </div>






    </div>
    </>
 ) 
};

export default Basket;
