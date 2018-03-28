import * as React from 'react'

export default class Checkbox extends React.Component{

    state = {Checkbox};

    constructor(props){
        super(props);
        this.state = {
            checkBox: new CheckboxProps(
                props.id,
                props.name,
                false)}
    }

    handelClick = () =>{
        let newState = this.state;
        newState.checkBox.toggleChecked();
        this.setState(newState)
    };

    render(){
        return (
            <label key={this.props.id}>
                <input
                    name={this.props.name}
                    type="checkbox"
                    checked={this.state.checkBox.isSelected}
                    onClick={this.handelClick}
                />
                {this.props.name}
            </label>
        )
    }

}

class CheckboxProps {

    id;
    name;
    isSelected;

    constructor(id, Name, isSelected) {
        this._id = id;
        this._Name = Name;
        this._isSelected = isSelected;
    }

    toggleChecked(){
        this.isSelected = !this.isSelected;
    }
}