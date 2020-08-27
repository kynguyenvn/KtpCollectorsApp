import React, {Component} from 'react';
import {View} from 'react-native';
import { CGeneral, CDetails, CSmallBox } from '../Common/Selector';


/**
 * props:{}
 * state:{}
 */
class Changeover extends Component {

    render(){

        const {goBack=()=>{}} = this.props;

        return(

            <CGeneral>

                <View style={{flex:1}} />

                <CDetails title='Changeover' goBack={goBack}>

                    <CSmallBox />
                    
                    <CSmallBox isBorderLeftWidth />
                    
                    <CSmallBox isBorderLeftWidth />

                </CDetails>

            </CGeneral>
        );
    }
}

export {Changeover}