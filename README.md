# Getting Started with React Hooks POC

This application illustrates the use of React Hooks. On the left-hand side of the page, a list of Hooks is displayed. On the right side, the information about the chosen hook is displayed containing:

- title
- description
- example
- reference
- usage
- troubleshooting

## 1. Prerequisites

* Install npm globally

## 2. Installation

Clone this repository https://github.com/iuliaafarcas/Framework_Design 

Open a terminal and run `npm install` 

During the process of creating this app, the following were also installed:

- React-router-dom: `npm install react-router-dom`
- React Icons: `npm install react-icons`
- Material UI: `npm install @mui/material`
- React Emotion: `npm install @emotion/react @emotion/styled`
  
## 3. Running the application

The application can be started using the `npm start` command in the Terminal. The application will run on http://localhost:3000/

## 4. Theoretical Part

### Introduction to React Hooks
React Hooks were introduced in React 16.8 to allow the use of state and other React features without writing a class. Hooks simplify the logic of React components, making code more readable and maintainable.


### Core Concepts

#### useState Hook:

* The useState hook is used to add state to a functional component. It returns an array containing the current state and a function to update it.
* ```
  const [hookData, setHookData] = useState<HookInterface>(emptyHook);
  ```
*  In this example, hookData is the state variable, and setHookData is the function to update it.

#### useEffect Hook:

* The useEffect hook allows you to perform side effects in function components. It is the equivalent of componentDidMount, componentDidUpdate, and componentWillUnmount lifecycle methods in class components.
* ```
  useEffect(() => {
    const parsedId = parseInt(id || "", 10);
    if (!isNaN(parsedId)) {
      setHookData(populatedHooks[parsedId - 1]);
    }
    console.log(id);
  }, [id]);
  ```
* The second argument to useEffect is an array of dependencies. The effect will only run if one of the dependencies has changed.

#### useContext Hook:

* The useContext hook lets you subscribe to React context without introducing nesting.
* ```
  const value = useContext(MyContext);
  ```
* Here, MyContext is a context object created using React.createContext

#### useParams Hook:

* The useParams hook from react-router-dom is used to access the URL parameters of the current route. It returns an object of key/value pairs, where the key is the parameter name, and the value is the parameter value.
* ```
  const { id } = useParams();  
  ```
* In this example, if the current URL is /hooks/1, id will be 1.



