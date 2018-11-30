import React,{ Component } from 'react'


const { Provider, Consumer} = React.createContext({arr:[]})


function Toolbar() {
    return (
      <div>
        <Consumer>
          {context => (
            <div>
              {
                context.arr.map((i,item) => {
                  return (<div key={i}>
                    now is {item}
                  </div>)
                })
              }
            </div>
          )}
        </Consumer>
      </div>
    );
  }
  
  export default class ContextComponent extends Component {
    render() {
      return (
        <Provider value={{arr: [4, 5, 6]}}>   {/* value 可为 多种类型  */}
          <Toolbar />
        </Provider>
      );
    }
  }

