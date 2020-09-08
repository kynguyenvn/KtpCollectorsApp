import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { General, ProjectDetails, ChildDetails, ChildDetailsItem2, ChildDetailsItem3, RunningTime } from '../Common/Selector';


/**
 * props:{}
 * state:{}
 */
class Changeover extends Component {

    render(){

        const {goBack=()=>{}, navigation} = this.props;

        return(

            <General>

                <View style={{flex:1}} />

                <ProjectDetails title='Batch Changeover' goBack={goBack}>

                    <ChildDetails />
                    
                    <ChildDetails isBorderLeftWidth>

                        <ChildDetailsItem2 
                            label={`Select Batch \nor Part Number`} 
                            backgroundColor='#00538B' 
                            buttonName='New Batch' 
                            isIcon 
                            onPressButton2={()=>navigation.navigate('selectorBatch')}
                        />

                    </ChildDetails>
                    
                    <ChildDetails isBorderLeftWidth>

                        <ChildDetailsItem3 buttonName='Ready To Build' backgroundColor='#FCA800'>

                            <RunningTime />
                            <RunningTime isMarginLeft />

                            <Text style={{fontSize:60, color:'#58616A', paddingHorizontal:5}}>:</Text>

                            <RunningTime />
                            <RunningTime isMarginLeft />

                        </ChildDetailsItem3>

                    </ChildDetails>

                </ProjectDetails>

            </General>
        );
    }
}

export {Changeover}