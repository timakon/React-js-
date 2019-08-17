import './Header.css';
import React, {Component} from 'react';

//export default class Header extends Component {
// Так как этот компонент только выводит данные то отдельный класс не нужен
// render(){...} тоже не нужен
 export default function(props){
// Так как используем stateless компонент у перед props this  не ставим
        var className = props.size;//=== 'mini' ? 'header-mini' : 'header-maxy';
        if(props.size==='mini'){
            className = 'header-mini';
        }else if(props.size==='maxy'){
            className = 'header-maxy';
        }else{
            className = 'header-normal';
        }

        return(
            <div className={className}>
                Header
                {props.children}
            </div>
        );
}