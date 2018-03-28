import * as React from 'react';


//todo make MobX store
export default class TimesOfDay extends React.Component {

    render() {
        return (
            <React.Fragment>
                <TimeOfDay>Morning</TimeOfDay>
                <TimeOfDay>Afternoon</TimeOfDay>
                <TimeOfDay>Evening</TimeOfDay>
            </React.Fragment>
        )
    }
}

class TimeOfDay extends React.Component {

    constructor(props){
        super(props);
        this.state = { selected: false }

    }

    toggleSelected = () => {

        let newState = this.state;
        newState.selected = ! newState.selected;

        this.setState(newState);
        console.log(this.state)
    };

    render(){
        return(
            <div onClick={this.toggleSelected.bind(this)}>
                {this.props.children}
            </div>
        );
    }

}