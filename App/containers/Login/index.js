import React, { Component } from 'react'
import { Button, Icon, Container, Header, Item, Label, Input, Form, Content } from 'native-base'
import { StyleSheet, View, Text, Dimensions, KeyboardAvoidingView, TouchableOpacity, Image, StatusBar } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
const { width, height } = Dimensions.get('screen')

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showPass: true,
            press: false,
        };
        this.showPass = this.showPass.bind(this);
    }

    showPass() {
        this.state.press === false
            ? this.setState({ showPass: false, press: true })
            : this.setState({ showPass: true, press: false });
    }
    render() {
        return (
            <LinearGradient colors={['#1ec7f6','#4c669f',]} style={styles.linearGradient}>
            <Container>
            <StatusBar backgroundColor='#1ec7f6'/>
                {/* <StatusBar backgroundColor='#61b7e5'/> */}
                <Content padder showsVerticalScrollIndicator={false} >
              
                    <View style={{ height: height / 2.5, alignItems: 'center', justifyContent: 'center' }}>
                        <Image style={{width:300,height:200}}source={require('../../../assets/images/dummy.png')} />
                    </View>

                    <View style={{ flex: 1 ,alignItems:'center',justifyContent:'center'}}>
                        <Item  style={{ marginVertical: 20 }} >
                        <Icon name='mail' style={{color:'#61b7e5'}}/>
                           
                            <Input   placeholder='Email' placeholderTextColor='#bff7fd' keyboardType='email-address' style={{fontFamily:'Lato-Regular',color:'#fff'}}/>
                        </Item>
                        <Item  style={{}}>
                        <Icon name='lock' style={{color:'#61b7e5'}}/>
                       
                            <Input  placeholder='Password' secureTextEntry={true} placeholderTextColor='#bff7fd' style={{fontFamily:'Lato-Regular',color:'#fff'}} />
                        </Item>
                        <Button block info style={styles.buttonStyle}>
                            <Text style={{ color: '#fff',fontFamily:'Lato-Black' }}>Login</Text>
                        </Button>

                    </View>
                    <View style={{ flexDirection:'row', justifyContent: 'center', alignItems: 'center' }}>

                        <TouchableOpacity>
                            <Text style={styles.textStyle}>Forgot Password</Text>
                        </TouchableOpacity>
                        <View>
                            <Text style={styles.textStyle}> | </Text>
                            </View>
                        <TouchableOpacity>
                            <Text style={styles.textStyle}>Register</Text>
                        </TouchableOpacity>
                     
            
                    </View>
                </Content>
                
            </Container>
            </LinearGradient>
        )
    }


}
const styles  = StyleSheet.create({
  textStyle: {
    fontFamily:'Lato-Black',
     color:'#fff'
    },
    buttonStyle:{
        marginVertical: 20,
        backgroundColor:'#61b7e5'

    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
      },
   
  });
