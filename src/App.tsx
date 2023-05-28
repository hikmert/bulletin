import React from 'react';
import {BulletinTable} from './Components/BulletInTable/BulletinTable';
import {CouponProvider} from "./Contexts/CouponContext";
import {Coupon} from "./Components/Coupon/Coupon";
import './App.css';

function App() {
    return (
        <div className="app-container">
            <CouponProvider>
                <BulletinTable/>
                <div className="coupon">
                    <Coupon/>
                </div>
            </CouponProvider>
        </div>
    );
}

export default App;
