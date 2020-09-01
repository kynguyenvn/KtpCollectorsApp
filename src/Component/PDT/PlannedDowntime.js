import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { CGeneral, CDetails, CSmallBox, CSmallBoxItem2, CSmallBoxItem3, CTiming } from '../Common/Selector';


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

                        <CSmallBoxItem3 buttonName='Complete' backgroundColor='#FCA800'>

                            <CTiming />
                            <CTiming isMarginLeft />

                            <Text style={{fontSize:60, color:'#58616A', paddingHorizontal:5}}>:</Text>

                            <CTiming />
                            <CTiming isMarginLeft />

                        </CSmallBoxItem3>

                    </CSmallBox>

                </CDetails>

            </CGeneral>
        );
    }
}

export {PlannedDowntime}