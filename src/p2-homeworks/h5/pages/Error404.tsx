import React from 'react';
import s from './../HW5.module.css'

function Error404() {
    return (
        <div className={s.error}>
            <div className={s.text}>
                <div>404</div>
                <div>Page not found!</div>
                <div>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
            </div>
        </div>
    )
}

export default Error404
