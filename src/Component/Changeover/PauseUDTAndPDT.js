import React, {Component} from 'react';
import {Text} from 'react-native';
import { Modal } from '../Common/Selector';
import { EverythingOkItem } from '../EverythingOk/EverythingOkElements';


// data test
const data = [
    {type:'Unplanned D/T', id:1},
    {type:'Planned D/T', id:3},
    {type:'Shutdown (Logout)', id:2},
]

/**
 * props:{
 *          navigation
 * }
 * state:{}
 */
class PauseUDTAndPDT extends Component {

    constructor(props){
        super(props);

        this.state = {

            data
        };
    }

    render(){

        const {data=[]} = this.state;

        const {navigation} = this.props;

        return(

            <Modal 
                title='Pause changeover'
                width={420}
                isButton
                goBack={()=>navigation.goBack()}
            >
                <Text style={{fontSize:16, color:'#3F4246', fontWeight:'500', lineHeight:24, marginHorizontal:30, marginTop:20}}>Please select a reason to pause the changeover and tap “continue”</Text>

                <EverythingOkItem data={data} style={{marginLeft:30}} />
                
            </Modal>
        );
    }
}


export {PauseUDTAndPDT}