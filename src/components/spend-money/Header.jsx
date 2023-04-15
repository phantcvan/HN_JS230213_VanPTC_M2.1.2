import React from 'react';

function Header(props) {
    const { total } = props;
    return (
        <div className='navbar-content'>
            {total > 0 ?
                (<div>To Spend <span><b> ${(128000000000 - total).toLocaleString("en-US")}</b> </span>You Have a Lot of money</div>
                ) : (<div>To Spend <span><b> ${(128000000000).toLocaleString("en-US")}</b> </span>You Have money</div>
                )
            }
        </div>
    );
}

export default Header;