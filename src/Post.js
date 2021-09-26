import React,{useState} from 'react'
import { ScrollView,View, Text, TouchableOpacity,Image, Alert } from 'react-native'

const data = [
    {

    }
]
export default function Post(props) {
    const [showTopNav,setShowTopNav] = useState(false)

    const changeOnScroll = ({nativeEvent})=>{
        const heightValue = nativeEvent.contentOffset.y
       
        if(heightValue > 250){
            setShowTopNav(true)
        }
        else{
            setShowTopNav(false)
        }
    }
    
    return (
        <View style={{position:'relative'}}>
            
            <ScrollView onScroll={changeOnScroll} showsVerticalScrollIndicator={false}>
                <View>
                    <Image source={{uri:'https://images.unsplash.com/photo-1613484259733-383234e8e8af?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1558&q=80'}}  style={{width:'100%',height:300}}/>

                </View>
                <View style={{marginHorizontal:20,flexDirection:'column',justifyContent:'center',alignItems:'center'}} >
                    <Text style={{lineHeight:25}} >Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</Text>
                    <Text style={{lineHeight:25,marginTop:20}}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</Text>
                </View>

            </ScrollView>
            <View style={{
                position:'absolute',
                top:0,
                flexDirection:'row',
                justifyContent:'flex-start',
                alignItems:'center',
                padding:10,
                backgroundColor:showTopNav ? 'gray' : 'transparent'
                }}>
                <TouchableOpacity onPress={()=>Alert.alert('goBack')} style={{backgroundColor:'transparent'}}>
                    <Text style={{fontSize:30,color:showTopNav ? 'black' :'white'}}>{"<--"}</Text>
                </TouchableOpacity>
                <View style={{flex:1,marginLeft:10}}>
                    <Text style={{fontSize:20,color:showTopNav ? 'black' :'white'}}>PostName</Text>

                </View>
            </View>
        </View>
    )
}
