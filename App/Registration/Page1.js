import React, { Component } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { View, StatusBar, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux';
import PhotoUpload from 'react-native-photo-upload'
import { Container, Item, Input, Header, Body, Content, Title, Button, Text } from 'native-base';

import { Field, reduxForm } from 'redux-form'
import { sumbit } from './actions'
import { validate } from './validate'
const { width, height } = Dimensions.get('screen')

class Registration extends Component {
    state = {
        isReady: false
    }

    renderInput = ({ value, onChange, placeholder, input, label, type, meta: { touched, error, warning } }) => {
        let hasError = false;
        if (error !== undefined) {
            hasError = true
        }

        return (
            <Item error={hasError}>
                <Input placeholder={placeholder} {...input} keyboardType={type} onChangeText={onChange} {...input} />
                {hasError ? <Text style={{ color: 'red', fontSize: 12 }}>{`*${error}`}</Text> : <Text />}
            </Item>
        )
    }
    onSubmit = (values) => {
        console.log(this.props.form)
        if (Object.keys(values).length > 0) {
            this.props.onSubmit(values)
        }
    }
    render() {
        const { handleSubmit, reset } = this.props
        return (
            <LinearGradient colors={['#1ec7f6', '#4c669f',]} style={styles.linearGradient}>

                <Container>

                    <StatusBar backgroundColor='#1ec7f6' />
                    <Content padder>
                        <PhotoUpload
                            onPhotoSelect={avatar => {
                                if (avatar) {
                                    console.log('Image base64 string: ', avatar)
                                }
                            }}
                        >
                            <Image
                                style={{
                                    paddingVertical: 30,
                                    width: 120,
                                    height: 120,
                                    borderRadius: 75
                                }}
                                resizeMode='cover'
                                source={require('../../assets/images/default_avatar.jpg')}
                            />
                        </PhotoUpload>
                        <Item>
                            <Input placeholderTextColor='#bff7fd' placeholder="Full Name" name="firstname" component={this.renderInput} style={styles.placeholderStyle} />
                        </Item>
                        <Item>
                            <Input placeholderTextColor='#bff7fd' name="lastname" placeholder="Enter last name" component={this.renderInput} style={styles.placeholderStyle} />
                        </Item>

                        <View style={{ marginVertical: 20, elevation: 2, alignSelf: 'center', width: width * .4, height: 40, flexDirection: 'row', backgroundColor: 'rgb(255,255,255)', justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}>
                            <TouchableOpacity hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }} style={{ width: width * .2, backgroundColor: '#61b7e5', justifyContent: 'center', alignItems: 'center', height: 40, borderColor: '#1ec7f6', borderWidth: 1, borderTopLeftRadius: 5, borderBottomLeftRadius: 5 }} onPress={console.log('pressed')}>
                                <Text style={{ fontFamily: 'Lato-Regular', color: '#fff' }}>Male</Text>
                            </TouchableOpacity>
                            <TouchableOpacity hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }} style={{ width: width * .2, backgroundColor: '#61b7e5', justifyContent: 'center', alignItems: 'center', height: 40, borderColor: '#1ec7f6', borderWidth: 1, borderTopRightRadius: 5, borderBottomRightRadius: 5 }} onPress={console.log('pressed')}>
                                <Text style={{ fontFamily: 'Lato-Regular', color: '#fff' }}>Female</Text>
                            </TouchableOpacity>
                        </View>




                        <Button block info style={styles.buttonStyle} onPress={handleSubmit}>

                            <Text>Next</Text>
                        </Button>


                    </Content>
                </Container>
            </LinearGradient>
        )
    }
}


mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (values) => dispatch(sumbit(values))
    }
}


const styles = StyleSheet.create({
    textStyle: {
        fontFamily: 'Lato-Black',
        color: '#fff'
    },
    buttonStyle: {
        marginVertical: 20,
        backgroundColor: '#61b7e5'

    },
    placeholderStyle: {
        fontFamily: 'Lato-Regular',
        color: '#fff'
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
    },

});

export default reduxForm({
    form: 'registration',
    validate,
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,

})(Registration)