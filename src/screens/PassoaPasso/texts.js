


/**ISSO AQUI ERA UMA GAMBIARRA Q EU TAVA FAZENDO,
 * CASO NÃO DÊ CERTO O NEGÓCIO DO JSON, IGNORA */

import React, { Component } from 'react';
import {View, Text} from 'react-native';


export default class TrocaTextoPaP extends Component {
    QUEIMADURA=()=> {
        <Text>ESSE É O TEXTO DE QUEIMADURA</Text>
    }
    ENGASGO=()=> {
        <Text>ESSE É O TEXTO DE QUEIMADURA</Text>
    }

    changeSwitchParam=(param)=> {
        textPaP = param;
    }
    checkSwitch=(param)=>{
        switch(param) {
            case '1':
                this.QUEIMADURA();
                break;
            case '2':
                this.ENGASGO();
                break;
            default:
                <Text>Não deu certo</Text>
        }
    }
}