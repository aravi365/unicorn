import React,{Component} from 'react'

import { View } from 'react-native'
import { connect } from 'react-redux';

import { Container, Item, Input, Header, Body, Content, Title, Button, Text } from 'native-base';

import { Field,reduxForm  } from 'redux-form'
import { sumbit } from './actions'
import  { validate } from './validate'


class Page3 extends Component{
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
                <Input placeholder={placeholder} secureTextEntry={true} {...input} keyboardType={type}  onChangeText={onChange} {...input}/>
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
        // console.log(this.props)
      return(
          <Container>
              <Header>
                  <Body>
                      <Title>Registration</Title>
                  </Body>
              </Header>

              <Content padder>
                    <Field placeholder="Enter password" name="password"  component={this.renderInput} />
                    <Field name="confirm_password" placeholder="Confirm Password"   component={this.renderInput} />
                   
                    <Button onPress={handleSubmit(this.onSubmit)} >
                        <Text>Submit</Text>
                    </Button>
                   
                    
              </Content>
          </Container>
      )
    }
}


mapDispatchToProps = (dispatch)=>{
    return{
        onSubmit: (values)=>dispatch(sumbit(values))
    }
}

Page3 = connect(
   
    mapDispatchToProps
)(Page3)

export default reduxForm({
    form:'registration',
    validate,
  
    
})(Page3)