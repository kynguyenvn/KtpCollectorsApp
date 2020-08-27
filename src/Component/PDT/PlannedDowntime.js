import React, {Component} from 'react';
import {View} from 'react-native';
import { CGeneral, CDetails, CSmallBox } from '../Common/Selector';


/**
 * props:{}
 * state:{}
 */
class PlannedDowntime extends Component {

    render(){

        const {goBack=()=>{}} = this.props;

        return(

            <CGeneral>

                <View style={{flex:1}} />

                <CDetails title='PlannedDowntime' goBack={goBack}>

                    <CSmallBox />
                    
                    <CSmallBox isBorderLeftWidth />
                    
                    <CSmallBox isBorderLeftWidth />

                </CDetails>

            </CGeneral>
        );
    }
}

export {PlannedDowntime}