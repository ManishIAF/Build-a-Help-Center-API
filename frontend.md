## React Assignment

1. How can you implement shared functionality across a component tree?

Answer :- We can do this in many way : (1) Using Props (2) Using Context Api (3) Using Redux etc.

(Using Props) :- We can share the functionality across a component tree by passing the functionality from parent component to child component 
                 through Props also known as props drilling . It is effective for simple cases.

(using Context Api) :- The React Context API is a powerful way to share state and functionality across a component tree without having to pass 
                       props down manually at every level. But this is recommended only for small projects.

(Using Redux) :- Redux is another powerful option for implementing shared functionality across a component tree, especially in large-scale 
                 applications where we need to manage complex state across many components. Redux provides a central store that holds the global 
                 state of our application, and components can access and update this state through actions and reducers.

2. Why is the `useState` hook appropriate for handling state in a complex component?

Answer :- There are several reasons why useState hook appropriate for handling state in a complex component . Some of them are as follows :-

(Easy to use) :- The useState hook is simple and easy to use. It needs minimal boilerplate compared to class-based state management, making it 
                 easier to work with in complex components.

(Functional Updates) :- useState supports functional updates , which is useful when the new state depends on the previous state. This can help 
                        us in managing state updates in a more reliable way. And even React don't recommend us to use class based state management
                        which is being depricated now .

(State Updates) :- The useState hook provides a setter function that allows us to update the state. This helps in managing state transitions in a 
                   predictable manner and ensures that the component re-renders when the state changes.

(Component Reusability) :- By using useState, components become more reusable because they can manage their own state without relying on external state 
                           management solutions. This promotes modularity and separation of concerns.


3. Design a user interface resembling the provided page. Fetch the data from the server and dynamically map the information cards to the fetched data. Ensure that the search functionality is also implemented.

![Logo](UI-Screen-1.png)


## how to run the the frontend

 first make sure you have React installed in your system

 Navigate to frontend folder
 ## install the Dependencies
    run command "npm install"
 ## run frontend
    run command "npm start"
