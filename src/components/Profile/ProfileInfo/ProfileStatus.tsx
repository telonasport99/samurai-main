import React, {ChangeEvent, ChangeEventHandler} from 'react';
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";

type profileStatusPropsType = {
    status: string
}

class ProfileStatus extends React.Component<any, any> {
    state = {
        editMode: false,
        status:this.props.status
    }

    activateEditMode =()=> {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = ()=> {
        this.setState({
            editMode: false
        })
        this.props.updateUserStatus(this.state.status)
    }
    onStatusChange=(e:ChangeEvent<HTMLInputElement>)=>{
        this.setState({status:e.currentTarget.value})
    }
    render() {
        return (
            <>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status||'no status'}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}/>
                    </div>
                }

            </>
        );
    }
};

export default ProfileStatus;