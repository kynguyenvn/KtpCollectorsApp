import React, {Component} from 'react';
import {View} from 'react-native';
import { CGeneral, CDetails, CSmallBox, CSmallBoxItem2, CSmallBoxItem3 } from '../Common/Selector';
import R from '../R';


/**
 * props:{
 *          goBack=()=>{}
 * }
 * state:{}
 */
class UnPlannedDowntime extends Component {

    render(){

        const {goBack=()=>{}} = this.props;

        return(

            <CGeneral>

                <View style={{flex:1}} />

                <CDetails title='Unplanned downtime' goBack={goBack}>

                    <CSmallBox />
                    
                    <CSmallBox isBorderLeftWidth>

                        <CSmallBoxItem2 label={`DR25 - \nBulk Quality Issue`} buttonName='DR25' isIcon />

                    </CSmallBox>
                    
                    <CSmallBox isBorderLeftWidth>

                        <CSmallBoxItem3 buttonName='Resolved' backgroundColor='#FCA800' />

                    </CSmallBox>

                </CDetails>

            </CGeneral>
        );
    }
}

export {UnPlannedDowntime}