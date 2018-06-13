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
                <StatusBar backgroundColor='rgba(109, 209, 248, 0.77)'/>
                <Content padder style={{ backgroundColor: '#fff', }}>
                    <View style={{ height: height / 3, alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={require('../../../assets/images/dummy.png')} />
                    </View>

                    <View style={{ flex: 1 ,alignItems:'center',justifyContent:'center'}}>
                        <Item floatingLabel style={{ marginVertical: 20 }} >
                            <Label>Email</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel style={{}}>
                        <Label>Password</Label>
                            <Input />
                        </Item>
                        <Button block info style={{ marginVertical: 20,}}>
                            <Text style={{ color: '#fff' }}>Login</Text>
                        </Button>

                    </View>
                    <View style={{ flexDirection:'row', justifyContent: 'center', alignItems: 'center' }}>

                        <TouchableOpacity>
                            <Text>Forgot Password</Text>
                        </TouchableOpacity>
                        <View>
                            <Text> | </Text>
                            </View>
                        <TouchableOpacity>
                            <Text>Register</Text>
                        </TouchableOpacity>
                        {/* <Button transparent>
                            <Text>Register</Text>
                        </Button> */}

                    </View>
                </Content>

            </Container>
        )
    }


}