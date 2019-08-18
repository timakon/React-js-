import './Loading.css';
import React, {PureComponent} from 'react';


export default class Loading extends PureComponent {
    render() {
        return (
                <div className="svg">
                    <svg width="50" height="100" fill="#FFC107">
                        <rect x="1%" width="7%" height="1%" rx="4%">
                            <animate attributeName="height" values="20%; 70%; 20%" dur="0.7s" begin="-0.5s" repeatCount="indefinite"/>
                            <animate attributeName="y" values="40%; 15%; 40%" dur="0.7s"    begin="-0.5s"repeatCount="indefinite"/>
                        </rect>
                        <rect x="25%" width="7%" height="1%" rx="4%">
                            <animate attributeName="height" values="20%; 70%; 20%" dur="0.7s" begin="-0.375s" repeatCount="indefinite"/>
                            <animate attributeName="y" values="40%; 15%; 40%" dur="0.7s"  begin="-0.375s" repeatCount="indefinite"/>
                        </rect>
                        <rect x="48%" width="7%"  height="1%" rx="4%">
                            <animate attributeName="height" values="20%; 70%; 20%" dur="0.7s"  begin="-0.25s" repeatCount="indefinite"/>
                            <animate attributeName="y" values="40%; 15%; 40%" dur="0.7s" begin="-0.25s" repeatCount="indefinite"/>
                        </rect>
                        <rect x="70%" width="7%" height="1%" rx="4%">
                            <animate attributeName="height" values="20%; 70%; 20%" dur="0.7s" begin="-0.125s" repeatCount="indefinite"/>
                            <animate attributeName="y" values="40%; 15%; 40%" dur="0.7s" begin="-0.125s" repeatCount="indefinite"/>
                        </rect>
                        <rect x="93%" width="7%" height="1%" rx="4%">
                            <animate attributeName="height" values="20%; 70%; 20%" dur="0.7s"  repeatCount="indefinite"/>
                            <animate attributeName="y" values="40%; 15%; 40%" dur="0.7s"  repeatCount="indefinite"/>
                        </rect>
                    </svg>
                </div>
        )
    }
}
