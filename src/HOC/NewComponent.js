import React, { Component } from 'react'

const NewComponent = (WrapComponent,data) => {
    class HOC extends Component {
        componentWillMount() {
            //操作 data 通过给 WrapComponent 
            //传入 Props 让 WrapCom 变成拥有不同数据的组件
        }
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