import Footer from "../Footer/Footer";
import React, { useState } from 'react';

function Header() {
    // Оголошуємо нову змінну стану, яку назвемо "count"
    const [count, setCount] = useState(0);
    if (count >= 0) {
        return (<div className="headTop">
            <div>
                <button className="min" onClick={() => setCount(count - 1)}>

                </button>
            </div>
            <div>
                <p className="count"> {count}     </p>
            </div>
            <div>
                <button className="pls" onClick={() => setCount(count + 1)}>
                </button>
            </div>
        </div>
        );
    } else if (count < 0) {
        return (<div>
            <Footer />
        </div>
        )
    }
}
export default Header;