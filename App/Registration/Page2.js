import React,{Component} from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { View,StyleSheet,StatusBar } from 'react-native'
import { connect } from 'react-redux';
import { DocumentPicker, DocumentPickerUtil } from 'react-native-document-picker';
import { Container, Item, Input, Header, Body, Content, Title, Button, Text,Toast } from 'native-base';

import { Field,reduxForm  } from 'redux-form'
import { sumbit } from './actions'
import  { validate } from './validate'


class Page2 extends Component{
    state={
        isReady:false,
        showToast: false
    }

    uploadDoc = ()=> {
       
        DocumentPicker.show({
            filetype: [DocumentPickerUtil.pdf()],
          },(error,res) => {
        
            Toast.show({
                text: `Uploading file:  ${res.fileName}`,
                duration:2000,
                position:'bottom',
                textStyle:{fontFamily:'Lato-Regular'}
        
        
              })
            // Android
            console.log(
              res.fileName,
               res.fileSize,
               error
            );
          });
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

componentDidMount=()=>{

    
}
    render(){
        const { handleSubmit,reset } = this.props
      return(
        <LinearGradient colors={['#1ec7f6', '#4c669f',]} style={styles.linearGradient}>
          <Container>
          <StatusBar backgroundColor='#1ec7f6'/>

              <Content padder>
                    <Item>
                        <Input placeholder="enter email" name="email" type="email-address"  component={this.renderInput} />
                    </Item>
                    <Item>
                    <Input name="phone" placeholder="Enter phone no." type="phone-pad"  component={this.renderInput} />
                   </Item>
                   <Button primary info  style={styles.buttonStyle} onPress={()=>
                      this.uploadDoc()}>
                        <Text>UPLOAD</Text>
                    </Button>
                    {/* <Text>{this.state.docName}</Text> */}
                    <Button block info  style={styles.buttonStyle} onPress={handleSubmit} >
                        <Text>NEXT</Text>
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
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true, 
    
})(Page2)