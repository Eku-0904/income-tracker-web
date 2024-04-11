import React from 'react';
import CardPic from '../../public/Large.png'; 

export default function Card() {
    return (
        <div style={{
            backgroundImage: `url(${CardPic.src})`,
            width: '300px',
            height: '169px',
            position: 'relative',
            backgroundSize: 'cover',
            backgroundPosition: 'center' 
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                position: 'absolute',
                bottom: '20px',
                left: '15px'
            }}>

                <p style={{ margin: 0, opacity: 0.5, fontSize: '16px', color: 'white'  }}>Cash</p>
                <p style={{ margin: 0, fontSize: '24px', color: 'white'  }}>10,000,000</p>
            </div>
        </div>
    )
}
