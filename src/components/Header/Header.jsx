import './Header.css'

import React, {Component} from 'react';
import Menu from "./Menu";

export default function (props) {
    const className = props.size === 'mini' ? 'header-mini' : 'header-maxi';
    const items =['Меню','Каталог','Данные'];
    return (
        <div>
            <div>{props.children}</div>
            <Menu items={items} />
        </div>
    );
}


