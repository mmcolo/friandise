import React,{useState} from 'react';

import './card.css';

function Card(){
    
    const cartListe =[
        {
            title: "Box Zaza",
            img:"img/baby_solid.png",
            list: [{
                name: "PASTELS",
                nbperso: 4
            },
            {
                name: "BOINTRIYE",
                nbperso: 6
            },
            {
                name: "SAMOUSSAS",
                nbperso: 10
            },
            {
                name: "(POULET.VIANDE.THON.POOISSON)",
                nbperso: 10
            }]
        },
        {
            title: "Box SKari",
            img:"img/vector.png",
            list: [{
                name: "DJOUNGOU",
                nbperso: 4
            },
            {
                name: "SINIYA (GALETTES)",
                nbperso: 3
            },
            {
                name: "KUTRUMBOUWA",
                nbperso: 4
            },
            {
                name: "GOULA GOULA",
                nbperso: 6
            },
            {
                name: "BANKORA",
                nbperso: 4
            },
            {
                name: "bOINTAME SUCRE",
                nbperso: 4
            }]
        },
        {
            title: "Box Masterehi",
            img:"img/cake.png",
            lil: "Box conposer par vous selon la carte les mets",
            list: [{
                name: "20 PIECS",
                nbperso: 15
            },
            {
                name: "40 PIECES",
                nbperso: 35
            },
            {
                name: "60 PIECES",
                nbperso: 50
            }]
        }
    ];

    return <div className='card'>
        <div className='title-card'>{cartListe[1].list[0].name}</div>
        <div className='icon'><img src="img/baby_solid.png" alt="box zaza"/></div>
        <div className='list-group'>
            {cartListe[1].list.map((us)=>{
                console.log(us);
                <div className='list-item'>{us.name}</div>
            })
            }
        </div>
    </div>
}

export default Card;