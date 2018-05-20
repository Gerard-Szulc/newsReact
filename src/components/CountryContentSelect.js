import React, {Component} from 'react'

 class CountryContentSelect extends Component {
    render(){
        return(
            <form onSubmit={this.props.handleSelectSubmit} >
            <label>
              <select value={this.props.selectValue} onChange={this.props.handleSelectChange}>
                <option value='us'>USA</option>
                <option value='pl'>Poland</option>
                <option value='de'>Germany</option>
                <option value='gb'>England</option>
              </select>
            </label>
            </form>
        )
}
}
export default CountryContentSelect