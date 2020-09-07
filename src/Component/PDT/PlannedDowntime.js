import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { General, ProjectDetails, ChildDetails, ChildDetailsItem2, ChildDetailsItem3, RunningTime } from '../Common/Selector';


/**
 * props:{}
 * state:{}
 */
class PlannedDowntime extends Component {

    render(){

        const {goBack=()=>{}} = this.props;

        return(

            <General>

                <View style={{flex:1}} />

                <ProjectDetails title='PlannedDowntime' goBack={goBack}>

                    <ChildDetails />
                    
                    <ChildDetails isBorderLeftWidth>

                        <ChildDetailsItem2 label={`SM02 - \nTesting New Part`} backgroundColor='#00538B' buttonName='SM02' isIcon />

                    </ChildDetails>
                    
                    <ChildDetails isBorderLeftWidth>

                        <ChildDetailsItem3 buttonName='Complete' backgroundColor='#FCA800'>

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

export {PlannedDowntime}