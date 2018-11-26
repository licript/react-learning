import React, { Component } from 'react'

const NewComponent = (WrapComponent) => {
    class HOC extends Component {
        render() {
            return(
                <div>
                    <WrapComponent />
                    <div>World!</div>
                </div>
            )
        }
    }

    return HOC
}
export default NewComponent