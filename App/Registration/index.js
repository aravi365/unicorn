import React, {Component} from 'react'
import PropTypes from 'prop-types'
import WizardFormFirstPage from './Page1'
import WizardFormSecondPage from './Page2'
import WizardFormThirdPage from './Page3'
import {  View } from 'react-native'
class WizardForm extends Component {
 
   
    state = {
      page: 1
   
  }
  nextPage=()=> {
    this.setState({page: this.state.page + 1})
  }

  previousPage=()=> {
    this.setState({page: this.state.page - 1})
  }

  onSubmit=(values)=>{
      console.log(values)
  }

  handleSubmit=(values)=>{
      console.log(values)
  }

  render() {
    const {onSubmit,values} = this.props
    console.log("props=",this.props)
    const {page} = this.state
    return (
      <View style={{flex:1}}>
        {page === 1 && <WizardFormFirstPage onSubmit={this.nextPage} />}
        {page === 2 &&
          <WizardFormSecondPage
            previousPage={this.previousPage}
            handleSubmit={this.nextPage}
          />}
        {page === 3 &&
          <WizardFormThirdPage
            previousPage={this.previousPage}
           
          />}
      </View>
    )
  }
}

WizardForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default WizardForm