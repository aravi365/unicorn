import React,{Component} from 'react'

import { View } from 'react-native'
import { connect } from 'react-redux';

import { Container, Item, Input, Header, Body, Content, Title, Button, Text } from 'native-base';

import { Field,reduxForm  } from 'redux-form'
import { sumbit } from './actions'
const validate = values =>{
    const error = {};

    error.email=''
    error.name = ''
    error.phone = ''
    let ema = values.email;
    let nm = values.name
    let ph = values.phone
    if(ema === 'undefined' || ema == ''){
        error.email = 'email is required'
    }

    if(nm === 'undefined' || nm==''){
       error.name = "name is required"
    }

    if((ema && ema.length < 8) && ema!==''){
        error.email = 'too short'
    }

    if((ema && !ema.includes('@')) && ema !==''){
        error.email = '@ not included'
    }
    if((nm && nm.length) > 8){
        error.name = 'max 8 characters'
    }

    if((ph && ph.length<10)){
        error.phone = 'min 10 numbers'
    }

    return error;
}

class Registration extends Component{
    state={
        isReady:false
    }

    renderInput = ({ value,onChange,placeholder, input,label,type,meta:{touched,error,warning}})=>{
        let hasError = false;
        if(error !== undefined){
            hasError = true
        }

        return(
            <Item  error={hasError}>
                <Input placeholder={placeholder} {...input} keyboardType={type}  onChangeText={onChange} {...input}/>
                {hasError ? <Text style={{color:'red',fontSize:12}}>{`*${error}`}</Text>:<Text/>}
            </Item>
        )
    }
onSubmit = (values)=>{
    console.log(this.props.form)
    if(Object.keys(values).length>0){
        this.props.onSubmit(values)
    }
}
    render(){
        const { handleSubmit,reset } = this.props
      return(
          <Container>
              <Header>
                  <Body>
                      <Title>Registration</Title>
                  </Body>
              </Header>

              <Content padder>
                    <Field placeholder="Enter email" name="email" type="email-address" component={this.renderInput} />
                    <Field name="name" placeholder="Enter name"  component={this.renderInput} />
                    <Field name="phone" type="phone-pad" placeholder="Enter phone no"  component={this.renderInput} />
                    <Button onPress={handleSubmit(this.onSubmit)} >
                        <Text>Submit</Text>
                    </Button>
                    {this.props.registration.message && <Text>{this.props.registration.message}</Text>}
                    {this.props.form && <Text>{JSON.stringify(this.props.form.registration)}</Text>}
                    
              </Content>
          </Container>
      )
    }
}

mapStateToProps = (state)=>{
    return{
        registration:state.registration,
        regForm:state.form
    }
}

mapDispatchToProps = (dispatch)=>{
    return{
        onSubmit: (values)=>dispatch(sumbit(values))
    }
}

Registration = connect(
    mapStateToProps,
    mapDispatchToProps
)(Registration)

export default reduxForm({
    form:'registration',
    validate,
    
})(Registration)