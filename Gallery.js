import React from 'react'

export function Gallery(props){
    return (
        <div>
            <img src={props.ulr} width={100} />
        </div>
    );
}

export function Profile(){
    return (
        <div>
            <p>This logo belong to Website</p>
        </div>
    );
}