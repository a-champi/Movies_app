
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
- We can create any many components


#### __Hook__
A Hook is a special function that lets you "hook into" __React__ features.
#### __UseState__
useState is a hook that lets you add React state to function components. <br>
##### __Declaring  a useState Variable__

        ```
        import React, { useState } from react;
        const Example = () =>{
            const [test, setTest] = useState("");
         }

        ```
#### __useEffect__
##### __Declaring  a useEffect__
        ```
        import React, { useState, useEffect } from react;
        const Example = () => {
            const [test, setTest] = useState("");
            ...
            useEffect(() =>{
                ...
            })
         }

        ```
#### __Props__
Props are arguments passed into React components. <br>
__How to pass the data from one React component to another component?__ 
  ```
    import React from 'react';

    const App = () => {
        const sayHello = 'Hello React';

        return (
            <div>
                <Welcome text={sayHello} />
            </div>
            );
    };

    const Welcome = (props) => {
        return( 
            <>
            <h1>{props.text}</h1>;
            </>
        );   
    };

    export default App;

  ```
