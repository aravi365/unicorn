import React,{Component} from 'react'

import { View } from 'react-native'

import { Container, Item, Input, Header, Body, Content, Title, Button, Text } from 'native-base';

import { Field,reduxForm  } from 'redux-form'

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

    renderInput = ({ value,onChange, input,label,type,meta:{touched,error,warning}})=>{
        let hasError = false;
        if(error !== undefined){
            hasError = true
        }

        return(
            <Item  error={hasError}>
                <Input {...input} keyboardType={type}  onChangeText={onChange} {...input}/>
                {hasError ? <Text style={{color:'red',fontSize:12}}>{`*${error}`}</Text>:<Text/>}
            </Item>
        )
    }
onSubmit = (values)=>{
    if(Object.keys(values).length>0){
    console.log(values)
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
                    <Field name="email" type="email-address" component={this.renderInput} />
                    <Field name="name"  component={this.renderInput} />
                    <Field name="phone" type="phone-pad"  component={this.renderInput} />
                    <Button onPress={handleSubmit(this.onSubmit)} >
                        <Text>Submit</Text>
                    </Button>
              </Content>
          </Container>
      )
    }
}

export default reduxForm({
    form:'registration',
    validate
})(Registration)