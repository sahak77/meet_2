import React from 'react'
import { connect } from 'react-redux'
import { createPost, showAlert } from '../redux/action'

class PostForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: ''
        }
    }
    onSubmitHendler = () => {
        const title = this.state.title
        // if input == '' 
        if (!title.trim()) {
            return (
                this.props.showAlert('error') // show error
            )
        }
        const newPost = {
            title, id: Date.now().toString()
        }

        this.props.createPost(newPost) // create new post
        this.setState({ title: '' })
        console.log(newPost);
    }

    inputHendler = (value) => {
        this.setState({
            title: value
        })
    }
    render() {
        return (
            <div>
                {this.props.alert ?
                    <div className="alert alert-primary" role="alert">
                        {this.props.alert}
                    </div>
                    : <></>
                }
                <div className='form-group'>
                    <input type='text'
                        className='form-control'
                        value={this.state.title}
                        placeholder={'type something'}
                        onChange={(event) => this.inputHendler(event.target.value)}
                    />
                </div>
                <button
                    className='btn btn-success'
                    type='button'
                    onClick={() => this.onSubmitHendler()}
                >Create</button>
            </div>
        )
    }
}

const mapDispatchToProps = { // dispatch action creator --> ../redux/action.js  
    createPost, // this is in props // ** line 25
    showAlert, // this is in props // ** line 18
}

const mapStateToProps = (state) => { // get state
    return {
        alert: state.alertReducer.alert // this is in props
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm) //connect our component to redux store 