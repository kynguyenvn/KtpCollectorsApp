import React, {Component} from 'react';
import {View, Text} from 'react-native';
import moment from 'moment';

/**
 * props:{}
 * state:{
 *          date: moment().format('DD MMM, YYYY - h:mm:ss')
 * }
 */
class Footer extends Component {

    constructor(props){
        super(props);

        this.state = {
            
            date: moment().format('DD MMM, YYYY - h:mm:ss')
        }
    }

     /**
     * 
     */
    componentWillUnmount() {
        clearInterval(this.countTime)
    }

    /**
     * 
     */
    componentDidMount() {
        this.countTime = setInterval(() => {
            this.setState({
                date: moment().format('DD MMM, YYYY - h:mm:ss')
            })
        }, 1000)
    }

    render(){

        const {date} = this.state;

        return <View style={{height:60, flexDirection:'row', alignItems:'center', justifyContent:'space-between', backgroundColor:'#F3F5F7', paddingHorizontal:50}}>

            <Text style={{fontSize:14, color:'#6B7B8B', lineHeight:20, flex:1}}>Powered by Kyzentree &#64;2020</Text>

            <Text style={{fontSize:16, color:'#3F4246', fontWeight:'600', lineHeight:20, flex:1, marginLeft:16}}>{date} - Changeover</Text>
            
            <View style={{flex:1, alignItems:'flex-end'}}>
                
                <Text style={{fontSize:14, color:'#6B7B8B', lineHeight:20}}>v2.0.1</Text>
            
            </View>
        
        </View>
    }
};

export {Footer}