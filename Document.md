
# React
React is a front-end Javascript library for building user interfaces <br>
React Js is a component-based front-end library <br>
### Why would you even learn  React ?
  - Easy to understand
  - excellent cross-plattform support
  - most popular library in JS

### Terms:
- components
  - __class-based component__
    ```
    import React, {Component } from 'react';

    class home extends Component {
        render(){
            return <h1> Hallo React </h1>
        }
    }
    ```
  - __functional component(JSX)__
    ```
    import React from 'react';

    const  home = () =>  {
        render(
            <div>
                </h1> Hallo React !</h1>
            </div>
        )
    } 
    ```   
- Virtual DOM
- Using the __create-react-app__ command
- __Package.json__, you cann see all dependency from your aplication.