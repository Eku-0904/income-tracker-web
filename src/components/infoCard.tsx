import React, { useState } from 'react';

export default function CardInfo({ title, type }: { title: string; type: string;}) {
    const dotColor = title === 'Your Income' ? '#84CC16' : '#0166FF';
    const [amount] = useState(0);
    return (
        <div
            style={{
                backgroundColor: '#fff',
                borderRadius: '15px',
                width: '300px',
                height: '169px',
                position: 'relative',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div
                style={{
                    position: 'absolute',
                    top: 'calc(20% - 1px)',
                    left: '0',
                    right: '0',
                    height: '1px',
                    backgroundColor: '#E2E8F0',
                }}
            ></div>

            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    position: 'absolute',
                    top: '8px',
                    left: '25px',
                    margin: 0,
                    fontSize: '15px',
                    color: 'black',
                }}
            >
                <div
                    style={{
                        width: '7.5px',
                        height: '7.5px',
                        borderRadius: '50%',
                        backgroundColor: dotColor,
                        marginRight: '5px',
                    }}
                ></div>
                {title}
            </div>

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'absolute',
                    top: '50px',
                    left: '15px',
                    margin: 0,
                    fontSize: '24px',
                    color: 'black',
                }}
            >
                {amount}
            </div>

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'absolute',
                    top: '85px',
                    left: '15px',
                    fontSize: '16px',
                    color: 'black',
                    opacity: 0.5,
                }}
            >
                Your {type} Amount
            </div>
        </div>
    );
}
