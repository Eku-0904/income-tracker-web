import React from 'react';

export default function CardInfo({title, amount, type}: {title: string, amount: number, type:string}) {
    return (
        <div style={{
            backgroundColor: '#fff',
            borderRadius: '15px',
            width: '300px',
            height: '169px',
            position: 'relative',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
            <div style={{
                position: 'absolute',
                top: 'calc(20% - 1px)',
                left: '0',
                right: '0',
                height: '1px',
                backgroundColor: '#E2E8F0'
            }}></div>

            <div style={{
                display: 'flex',
                position: 'absolute',
                top: '8px',
                left: '25px',
                margin: 0,
                fontSize: '15px',
                color: 'black'
            }}>
                {title}
            </div>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                position: 'absolute',
                top: '50px',
                left: '15px',
                margin: 0,
                fontSize: '24px',
                color: 'black'
            }}>
                {type}
            </div>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                position: 'absolute',
                top: '85px',
                left: '15px',
                fontSize: '16px',
                color: 'black',
                opacity: 0.5,
            }}>
                Your {amount} Amount
            </div>

            <div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'absolute',
                    bottom: '20px',
                    left: '30px'
                }}>
                    32% from last month
                </div>
            </div>
        </div>
    )
}
