import React from "react";
import Header from "./comp/Header/Header.jsx";
import Card from "./comp/Card/Card.jsx"; // Импортируем карточки товаров

const App = () => {
    // Массив с товарами
    const products = [
        {
            name: 'Спортивки "Джинсы"',
            price: '120',
            image: './src/assets/jeans.png',
        },
        {
            name: 'Футболка "Рокки Бальбоа"',
            price: '20',
            image: './src/assets/t_shirt.png',
        },
        {
            name: 'Лонгслив "Подшарил"',
            price: '40',
            image: './src/assets/long.png',
        },
        {
            name: 'Xуди "Ахуительный тренд"',
            price: '60',
            image: './src/assets/hood.png',
        },
    ];

    return (
        <>
            <Header />
            <div className="product-list">
                {products.map((product, index) => (
                    <Card key={index} product={product} />
                ))}
            </div>
        </>
    );
};

export default App;
