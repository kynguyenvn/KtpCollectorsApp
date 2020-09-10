import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import R from "../R";

/**
 *
 * @param unitCount
 * @returns {*}
 * @constructor
 */
const DigitsCard = ({unitCount=0, style, isFlex=false}) => {

    function getDigits() {
        if (unitCount < 1000) {
          return (`00${unitCount}`).slice(-3).split('');
        }
        return (`${unitCount}`).split('');
    }
    

    return <View style={{flex:isFlex?null:1, flexDirection:'row', justifyContent:'space-between', marginTop:20, ...style}}>

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
 * @param title
 * @param isReject
 * @param onPressNumpad
 * @param isButtonNetwork
 * @param backgroundColor
 * @param onPress
 */
const GoodUnitAndRejectItem = (props) => {

    const {title='', isReject=false, isButtonNetwork=false, onPressNumpad=()=>{}, backgroundColor='#20AD55', onPress=()=>{}} = props;

    return <View style={{flex:1, backgroundColor:'#F3F5F7', padding:30, borderWidth:1, borderColor:'#DBE2E8', borderRadius:3}}>

        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>

            <TouchableOpacity activeOpacity={0.8} onPress={onPressNumpad} style={{height:40, width:40, borderRadius:20, justifyContent:'center', alignItems:'center', backgroundColor:'#FFF', borderWidth:1, borderColor:'#DBE2E8', ...R.Style.shadowIcon}}>

                <Ionicons name='calculator' style={{fontSize:18, color:'#00538B'}} />

            </TouchableOpacity>

            <Text style={{fontSize:22, color:'#3F4246', fontWeight:'700', lineHeight:40}}>{title.toUpperCase()}</Text>

            <TouchableOpacity activeOpacity={0.8} style={{height:40, width:40, borderRadius:20, justifyContent:'center', alignItems:'center', backgroundColor:'#FFF', borderWidth:1, borderColor:'#DBE2E8', ...R.Style.shadowIcon}}>

                <Ionicons name='arrow-undo' style={{fontSize:18, color:'#CAD3DB'}} />

            </TouchableOpacity>

        </View>

        {props.children}

        <View style={{flexDirection:'row', height:50, marginTop:20, paddingHorizontal:isReject?56:null}}>
            
            <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={{flex:361, flexDirection:'row', backgroundColor:backgroundColor, justifyContent:isReject?'space-between':'center', alignItems:'center', paddingHorizontal:isReject?24:null, borderRadius:35, ...R.Style.shadowButton}}>

                <Text numberOfLines={1} style={{flex:1, fontSize:16, color:'#FFF', fontWeight:'600', lineHeight:30, textAlign:'center', marginLeft:isReject?24:null}}>+1</Text>

                {isReject?<Ionicons name='caret-down' style={{fontSize:14, color:'#FFFFFF'}} />:null}

            </TouchableOpacity>

            {isButtonNetwork?<TouchableOpacity activeOpacity={0.8}  style={{flex:173, backgroundColor:'#405CD7', justifyContent:'center', alignItems:'center', borderRadius:35, marginLeft:15, ...R.Style.shadowButton}}>

                <Text style={{fontSize:16, color:'#FFF', fontWeight:'600', lineHeight:30}}>+1 Network</Text>

            </TouchableOpacity>:null}
        
        </View>

    </View>
};


/**
 * @param type
 * @param name
 */
const ReasonCodeItem = ({type='', name=''}) => {

    return <TouchableOpacity activeOpacity={0.8} style={{flexDirection:'row', alignItems:'center'}}>

        <View style={{flex:170, backgroundColor:'#F3F5F7'}}>
            
            <Text style={{fontSize:16, color:'#3F4246', fontWeight:'500', lineHeight:24, marginVertical:20, marginLeft:30}}>{type.toUpperCase()}</Text>
        
        </View>
        
        <View style={{width:1, height:'100%', backgroundColor:'#CAD3DB'}} />
        
        <Text style={{flex:439, fontSize:16, color:'#3F4246', fontWeight:'300', lineHeight:24, marginVertical:20, marginLeft:30}}>{name}</Text>

    </TouchableOpacity>
};



export {
    DigitsCard,
    ProgressBar,

    GoodUnitAndRejectItem,

    ReasonCodeItem
}