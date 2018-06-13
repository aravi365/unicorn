import React, { Component } from 'react'
import { Button, Icon, Container, Header, Item, Label, Input, Form, Content } from 'native-base'
import { StyleSheet, View, Text, Dimensions, KeyboardAvoidingView, TouchableOpacity, Image, StatusBar } from 'react-native'
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
            <Container>
                <StatusBar backgroundColor='#61b7e5'/>
                <Content padder style={{ backgroundColor: '#fff', }}>
                    <View style={{ height: height / 2.5, alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={require('../../../assets/images/dummy.png')} />
                    </View>

                    <View style={{ flex: 1 ,alignItems:'center',justifyContent:'center'}}>
                        <Item  style={{ marginVertical: 20 }} >
                        <Icon name='mail' style={{color:'#61b7e5'}}/>
                           
                            <Input   placeholder='Email' keyboardType='email-address' style={{fontFamily:'Lato-Regular'}}/>
                        </Item>
                        <Item  style={{}}>
                        <Icon name='lock' style={{color:'#61b7e5'}}/>
                       
                            <Input  placeholder='Password' style={{fontFamily:'Lato-Regular'}} />
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
        )
    }


}
const styles  = StyleSheet.create({
  textStyle: {
    fontFamily:'Lato-Black',
     color:'#61b7e5'
    },
    buttonStyle:{
        marginVertical: 20,
        backgroundColor:'#61b7e5'

    },
   
  });
