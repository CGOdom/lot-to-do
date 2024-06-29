# Project 3 - Lot-To-Do 
Task Management App


Hosting Link: https://cgodom.github.io/lot-to-do/


# Name:
Caden Gene Odom

# Overview/Description:
The Task Management App is a web application designed to help users manage their tasks efficiently. Users can create, check off, and delete tasks, and personalize their experience with features like dark mode. Built with React and Bootstrap, the app offers a clean, user-friendly interface and robust task tracking capabilities, ensuring that users can stay organized and productive.


# User Types and User Stories:

  # Busy Professional
  - **Who**: Busy Professional
  - **What**: Needs to manage multiple work tasks efficiently.
  - **Why**: To stay organized and ensure no tasks are forgotten.
  - **User Story**: As a busy professional, I want to add new to-do items quickly so that I can immediately capture tasks as they come up.

  # Student
  - **Who**: Student
  - **What**: Needs to track assignments and study schedules.
  - **Why**: To manage academic responsibilities and improve productivity.
  - **User Story**: As a student, I want to add to-do items for my classes so that I can keep track of my assignments and exams.

  # Homemaker
  - **Who**: Homemaker
  - **What**: Needs to manage household chores and family schedules.
  - **Why**: To ensure all household tasks are completed and family members are coordinated.
  - **User Story**: As a homemaker, I want to mark tasks as 'To-Do' or 'Done' so that I can visually track my progress.


# How to Use:
- **Task Management**: Add, check-off, and delete tasks.
- **Dark Mode**: Toggle dark mode for a comfortable viewing experience.

# Technologies Used:
  - **React**: Frontend library for building user interfaces.
  - **React Bootstrap**: Bootstrap components for React.
  - **HTML5**: Markup language for structuring web content.
  - **CSS3**: Styling language for designing web content.

# Ideas for Future Improvement:
  - **Task Categories**: Allow users to categorize tasks and filter them based on categories.
  - **Collaborative Tasks**: Enable users to share tasks and collaborate with others.
  - **Task Prioritization**: Users can set priorities for tasks, helping them focus on the most important items.
  - **Reminders and Notifications**: Users receive reminders and notifications for upcoming deadlines, important tasks, and pending tasks.


# Project Structure:

  # Container Components
  - **App.js**
      - Manages the overall application state and routing.
      - Coordinates the rendering of different views based on the route.
  - **TodoList.js**
      - Manages the state and logic for displaying the todo list.
      - Handles fetching tasks and passing them to the TodoList component.
  - **TodoForm.js**
      - Manages the state and logic for adding or editing todos.
      - Handles form submissions, including adding or updating todos.

  # Presentational Components
  - **Navbar.js**
      - Displays the navigation bar with links to different parts of the application.
  - **TodoList.js**
      - Renders a list of todos.
      - Receives the todo data as props from the container component.
  - **TodoForm.js**
      - Renders the form for adding or editing todos.
      - Receives form data and handlers as props from the container component.
  - **Contact.js**
      - Displays the contact page content.



# State Tree:

  # Root State
  - **app**
    - **navbar**
      - **currentRoute**: string
    - **todos**
      - **todoList**: array of todo objects
      - **loading**: boolean
      - **error**: string or null
    - **todoForm**
      - **currentTodo**: todo object or null
      - **formState**: object (fields for the form like title, description, etc.)
      - **isSubmitting**: boolean
      - **error**: string or null


# Detailed State Breakdown:

  - **app**
    - **navbar**
      - **currentRoute**: Manages the current route to determine which component to render.
    - **todos**
      - **todoList**: An array of todo objects fetched from the server.
      - **loading**: A boolean indicating if the todos are currently being fetched.
      - **error**: Stores any error message that occurs during fetching.
    - **todoForm**
      - **currentTodo**: The todo object currently being edited or null if creating a new todo.
      - **formState**: Stores the current state of the form fields.
        - **title**: string
        - **description**: string
        - **dueDate**: string
        - **priority**: string
      - **isSubmitting**: A boolean indicating if the form is currently being submitted.
      - **error**: Stores any error message that occurs during form submission
