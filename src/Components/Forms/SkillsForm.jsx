import * as React from 'react';
import './style.css'

export default class SkillsForm extends React.Component{
    componentWillMount(){
        fetch("https://vollyapp.azurewebsites.net/api/Skills")
            .then((response)=>{
                return response.json();
            }).then((data)=>{
            let skillState = [];
            data.forEach((element)=>{
                let skill = new Skill();
                skill.id = element.id;
                skill.SkillName = element.name;
                skill.isSelected = false;
                skillState.push(skill);
            });
            const newState = {skills:skillState};
            this.setState(newState);
        }).catch((error)=>{
            console.log(error);
            let skillState = [];
            skillState.push(new Skill(1, "Shit", false));
            skillState.push(new Skill(2, "is", false));
            skillState.push(new Skill(3, "broken", false));
            const newState = {skills:skillState};
            this.setState(newState);
        })
    }


    constructor(props) {
        super(props);
        this.state = {skills:[]}
    }

    renderSkills(){
        return this.state.skills.map((current)=>{
            return (
                <label key={current.id} className={"skill_box"}>

                <input
                    name={current.id}
                    type="checkbox"
                    checked={current.isSelected}
                    onClick={this.handelCheckedAction}
                />

                    {current.SkillName}
            </label> )
        });
    }
    handelCheckedAction= (event)=>{
        const target = event.target;
        const id = parseInt(target.name, 0);

        let newState = this.state;
        newState.skills.forEach((current)=>{
            if(current.id === id){
                console.log(current);
                current.isSelected = !current.isSelected;
            }
        });
        this.setState(newState);
    };

    render(){
        return(
            <form>
                {this.renderSkills()}
            </form>
        )

    }
}
class Skill {
    id;
    SkillName;
    isSelected;

    constructor(id, SkillName, isSelected) {
        this.id = id;
        this.SkillName = SkillName;
        this.isSelected = isSelected;
    }

    toggleChecked(){
        this.isSelected = !this.isSelected;
    }
}
