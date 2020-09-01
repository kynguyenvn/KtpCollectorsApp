import React, {Component} from 'react';
import {View} from 'react-native';
import { CGeneral, CDetails, CSmallBox, CSmallBoxItem2, CSmallBoxItem3 } from '../Common/Selector';


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
                    
                    <CSmallBox isBorderLeftWidth>

                        <CSmallBoxItem2 label={`SM02 - \nTesting New Part`} backgroundColor='#00538B' buttonName='SM02' isIcon />

                    </CSmallBox>
                    
                    <CSmallBox isBorderLeftWidth>

                        <CSmallBoxItem3 buttonName='Complete' backgroundColor='#FCA800' />

                    </CSmallBox>

                </CDetails>

            </CGeneral>
        );
    }
}

export {PlannedDowntime}