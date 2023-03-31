import React from 'react';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-neutral text-white shadow-lg px-20">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">
                        <img src="../../../images/Logo.svg" alt="" />
                    </a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><a href='/my-vue-app/src/Components/Shop/Shop.jsx'>Order</a></li>
                        <li><a href='/'>Order Review</a></li>
                        <li><a href='/'>Manage Inventory</a></li>
                        <li><a href='/'>Login</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;