import React from "react";
import { Text, StyleSheet, View, Linking, ImageBackground, Image, TouchableOpacity } from "react-native";

import * as Animatable from 'react-native-animatable';

import spotsat from '../assets/spotsat.png';
import lavoura from '../assets/lavoura.jpg';

const HomeScreen = () => {
    return (
        <View style={style.container}>
            <View style={style.containerImage}>
                <Animatable.Image
                    animation="flipInY"
                    duration={1000}
                    source={spotsat} 
                     style={style.logo}
                />
                <Animatable.Text style={style.text} animation="pulse" duration={2000}>
                    A SpotSat é uma empresa de tecnologia 
                    dedicada ao agronegócio e ao meio ambiente. 
                    Utilizamos dados e imagens de satélites para levar 
                    informação aos nossos clientes.
                </Animatable.Text>
            </View>
            <ImageBackground source={lavoura} style={style.imageLavoura}  imageStyle={{ borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
                <Animatable.View animation="fadeInLeft" delay={500}>
                    <TouchableOpacity

                        style={{...style.button, borderBottomRightRadius:50, borderTopLeftRadius:50}}
                        onPress={() => Linking.openURL('https://spotsat.com.br')}
                    >
                        <Text style={style.textButton}>Acessar Spotsat</Text>
                    </TouchableOpacity>
                </Animatable.View>
                
                <Animatable.View animation="fadeInRight" delay={1000}>
                    <TouchableOpacity 
                        style={{...style.button, borderBottomLeftRadius:50, borderTopRightRadius:50}}
                        onPress={() => Linking.openURL('https://www.notion.so/Home-8379725011dd48c0b1d3cfb427e0fd79')}
                    >
                        <Text style={style.textButton}>Acessar Notion</Text>
                    </TouchableOpacity>
                </Animatable.View>
                
                <Animatable.View animation="fadeInLeft" delay={1500}>
                    <TouchableOpacity 
                        style={{...style.button, borderBottomRightRadius:50, borderTopLeftRadius:50}}
                        onPress={() => Linking.openURL('https://spotcore.atlassian.net/jira/software/c/projects/DEV/boards/1')}
                    >
                        <Text style={style.textButton}>Acessar Jira</Text>
                    </TouchableOpacity>
                </Animatable.View>
                
                <Animatable.View animation="fadeInRight" delay={2000} >
                    <TouchableOpacity
                        style={{...style.button, borderBottomLeftRadius:50, borderTopRightRadius:50}}
                        onPress={() => Linking.openURL('https://redmine.spotsat.com.br')}
                    >
                        <Text style={style.textButton}>Acessar Redmine</Text>
                    </TouchableOpacity>
                </Animatable.View>
            </ImageBackground>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#003366",
    },
    containerImage:{
        flex:1,
        justifyContent:"center",
        borderRadius:50,
    },
    text:{
        color:"#FFFFF5",
        fontWeight:'600',
        marginTop:50,
        marginHorizontal:40,
    },
    logo: {
        width:'70%',
        height:'21%',
        alignSelf:'center',
    },
    imageLavoura:{
        flex:1,
        justifyContent:"center",
    },
    button:{
        width:180,
        height:45,
        justifyContent:"center",
        alignSelf:'center',
        alignItems:"center",
        marginBottom: 25,
        borderRadius: 20,
        borderWidth:3,
        borderColor:"#FFFFF5",
        backgroundColor:"#003366"
    },
    textButton: {
        color:"#F4F5F6",
        fontWeight:"bold",
    }
});

export default HomeScreen;