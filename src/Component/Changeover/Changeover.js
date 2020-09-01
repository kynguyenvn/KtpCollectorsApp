import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { CGeneral, CDetails, CSmallBox, CSmallBoxItem2, CSmallBoxItem3, CTiming } from '../Common/Selector';


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

                <CDetails title='Batch Changeover' goBack={goBack}>

                    <CSmallBox />
                    
                    <CSmallBox isBorderLeftWidth>

                        <CSmallBoxItem2 label={`Select Batch \nor Part Number`} backgroundColor='#00538B' buttonName='New Batch' isIcon />

                    </CSmallBox>
                    
                    <CSmallBox isBorderLeftWidth>

                        <CSmallBoxItem3 buttonName='Ready To Build' backgroundColor='#FCA800'>

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

export {Changeover}