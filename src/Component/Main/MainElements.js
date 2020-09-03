import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import R from "../R";

/**
 *
 * @param unitCount
 * @returns {*}
 * @constructor
 */


const DigitsCard = ({unitCount=0}) => {

    function getDigits() {
        if (unitCount < 1000) {
          return (`00${unitCount}`).slice(-3).split('');
        }
        return (`${unitCount}`).split('');
    }
    

    return <View style={{flex:1, flexDirection:'row', justifyContent:'space-between', marginTop:20}}>

        {getDigits().map((item, index)=>(
        
            <View key={index} style={{flex:1, marginLeft:index===0?null:10, backgroundColor:'#FFF', justifyContent:'center', alignItems:'center', borderWidth:1, borderColor:'#DBE2E8', borderRadius:3}}>
               
                <Text style={{fontSize: 80, color: R.C.numberColor}}>{item}</Text>
            
            </View>
        ))}
       
    </View>

};

/**
 *
 * @param title
 * @param targetAmount
 * @param currentAmount
 * @param style
 * @returns {*}
 * @constructor
 */


const ProgressBar = ({ title='', targetAmount=0, currentAmount=0, style, ...props}) => {


    return (
        <View style={{ flex: 1, flexDirection: 'row',  ...style, height: 30,justifyContent: 'center', alignItems: 'center'}}>  
        
             <View style={{ width: 70}}>
                 <Text style={{color: R.C.textCardColor, fontSize: 16, fontWeight: 'bold'}}>{title}</Text>
             </View>
     
             <LinearGradient 
             colors={R.C.gradientBackgroundProgress} 
             style={{flex: 1, height: 30, flexDirection: 'row', borderRadius: 20, marginHorizontal: 20, justifyContent: 'center', alignItems: 'center', ...R.C.shadow}}>
     
             {props.children}
              
             </LinearGradient>
     
             <View style={{flexDirection: 'row', width: 80, justifyContent: 'flex-end'}}>
                 <Text style={{color: R.C.numberProgressColor, fontSize: 16, fontWeight: 'bold'}}>{currentAmount}</Text>
                 <Text style={{color: R.C.textCardColor, fontSize: 16, fontWeight: 'bold'}}>{`/${targetAmount}`}</Text>
             </View>

        </View> 

    )
};


/**
 * @param type
 * @param name
 */
const ReasonCodeItem = ({type='', name=''}) => {

    return <TouchableOpacity activeOpacity={0.8} style={{flexDirection:'row', alignItems:'center'}}>

        <View style={{flex:170, backgroundColor:'#F3F5F7'}}>
            
            <Text style={{fontSize:16, color:'#3F4246', fontWeight:'500', lineHeight:24, margin:20}}>{type.toUpperCase()}</Text>
        
        </View>
        
        <View style={{width:1, height:'100%', backgroundColor:'#CAD3DB'}} />
        
        <Text style={{flex:439, fontSize:16, color:'#3F4246', fontWeight:'300', lineHeight:24, margin:20}}>{name}</Text>

    </TouchableOpacity>
};



export {
    DigitsCard,
    ProgressBar,

    ReasonCodeItem
}