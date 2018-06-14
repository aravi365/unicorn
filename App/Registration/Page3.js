import React,{Component} from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { View,StyleSheet,StatusBar } from 'react-native'
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
        <LinearGradient colors={['#1ec7f6', '#4c669f',]} style={styles.linearGradient}>
          <Container>
          <StatusBar backgroundColor='#1ec7f6'/>

              <Content padder>
              <Item>
                    <Input placeholder="Enter password" name="password"  component={this.renderInput} />
                   </Item>
                   <Item>
                    <Input name="confirm_password" placeholder="Confirm Password"   component={this.renderInput} />
                    </Item>
                    <Button  block info  style={styles.buttonStyle} onPress={handleSubmit(this.onSubmit)} >
                        <Text>Register</Text>
                    </Button>
                   
                    
              </Content>
          </Container>
          </LinearGradient>
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

const styles = StyleSheet.create({
    textStyle: {
        fontFamily: 'Lato-Black',
        color: '#fff'
    },
    buttonStyle: {
        marginVertical: 20,
        backgroundColor: '#61b7e5'

    },
    placeholderStyle:{
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
    form:'registration',
    validate,
  
    
})(Page3)