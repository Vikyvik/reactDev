1. **What is Emmet?**
    
    Emmet is a set of tools for web developers that greatly enhances the efficiency of writing HTML and CSS code. It allows you to write shorthand code snippets, which are then expanded into complete HTML and CSS code. For example, in Emmet, you can write:
    
    ```css
    cssCopy code
    ul>li*3>a
    
    ```
    
    When expanded, this turns into:
    
    ```html
    htmlCopy code
    <ul>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
    </ul>
    
    ```
    
2. **Difference between a Library and Framework:**
    - **Library:** A library is a collection of pre-written code that you can use in your application to perform specific tasks. It provides reusable functions or classes that you can call as needed. You have control over the flow of your application.
    - **Framework:** A framework is a more comprehensive structure that dictates the architecture and flow of your application. It provides a set of rules and guidelines you must follow. Your code often "plugs into" the framework, and the framework manages the execution.
    
    Example:
    
    - **Library:** React Router is a library for routing in React applications.
    - **Framework:** Angular is a full-fledged framework for building web applications.
3. **What is CDN? Why do we use it?**
    
    CDN stands for Content Delivery Network. It is a distributed network of servers that store and deliver web content (such as JavaScript libraries, CSS files, images, videos) to users based on their geographic location. CDNs are used for the following reasons:
    
    - **Speed**: CDNs deliver content from servers geographically closer to the user, reducing latency and speeding up website loading times.
    - **Reliability**: CDNs provide redundancy and high availability, reducing the risk of server downtime.
    - **Scalability**: CDNs can handle heavy traffic loads, ensuring a smooth user experience during traffic spikes.
4. **Why is React known as React?**
    
    React is known as "React" because it is designed around the concept of "reactive" user interfaces. It allows developers to create interactive and dynamic user interfaces that react to changes in data and state.
    
5. **What is crossorigin in the script tag?**
    
    The **`crossorigin`** attribute in the script tag is used when loading scripts from a different domain. It is a security feature to control how the browser handles cross-origin requests for scripts. It can have two values: "anonymous" and "use-credentials."
    
    - **`anonymous`**: Allows loading the script without sending user credentials (cookies or HTTP authentication) along with the request.
    - **`use-credentials`**: Sends user credentials with the request.
    
    Example:
    
    ```html
    htmlCopy code
    <script src="https://example.com/script.js" crossorigin="anonymous"></script>
    
    ```
    
6. **What is the difference between React and ReactDOM?**
    - **React**: React is the core library for building user interfaces in JavaScript. It provides the functionality for creating and managing components, rendering virtual DOM elements, and handling component lifecycle events.
    - **ReactDOM**: ReactDOM is a specific package that provides the integration between React and the DOM (Document Object Model). It contains methods for rendering React components into the actual HTML DOM and handling interactions with the browser.
7. **What is the difference between react.development.js and react.production.js files via CDN?**
    - **`react.development.js`**: This file contains the development version of the React library. It includes additional warnings and debugging information to help developers identify issues during development. It is larger in size but aids in debugging.
    - **`react.production.js`**: This file contains the production version of the React library. It is optimized for performance and does not include debugging information or warnings. It is smaller in size and suitable for use in production environments to improve loading times.
    
    Example (CDN links):
    
    ```html
    htmlCopy code
    <!-- Development version for debugging -->
    <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
    
    <!-- Production version for deployment -->
    <script src="https://unpkg.com/react@17/umd/react.production.min.js"></script>
    
    ```
    
    In a production environment, it's recommended to use the production version for better performance.
    

props — child cannot send data to parent

props in component→ 
Attributes ?

JSX is expressive — 

to return html you need to wrap it as div tag or use it as <> react fragment

you cannot use class you need to use className

include css in html = inline.internal using style or external;
in react you just provide the event handling attributes you don’t invoke the functions. Also you pass the data in another component via props

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/56e06c1f-3d14-42dd-8261-01a31e4e4278/Untitled.png)

HOOKS —>
useState is a hook, is hooks into the state and helps it to navigate 
prop drilling — upar se neeche tak transfer karna padea

Global State — use react context api

useReducer hook