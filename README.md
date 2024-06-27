Project 3 - Lot-To-Do


Hosting Link: https://cgodom.github.io/lot-to-do/


Name: Caden Odom


Overview/Description of the Project: 

This is a To-Do List application that allows users to manage their tasks efficiently. Users can add, edit, delete, and filter tasks. The application provides a clean and modern interface with features like marking tasks as completed and filtering tasks based on their status (all, to-do, done).


How to Use It:

1. Adding a Task: Use the input field to type a new task and click the "Add" button.
2. Marking a Task as Completed: Click the checkbox button next to a task to mark it as completed.
3. Deleting a Task: Click the "Delete" button next to a task to remove it from the list.
Filtering Tasks: Use the filter buttons (All, To-do, Done) to view tasks based on their completion status.


Technologies Used:

- HTML
- CSS
- JavaScript
- React
- Bootstrap


Ideas for Future Improvement:

1. User Authentication: Implement user authentication to allow multiple users to manage their own to-do lists.
2. Due Dates and Reminders: Add functionality to set due dates for tasks and send reminders.
3. Task Categories: Introduce categories or tags for tasks to help users organize their to-dos more effectively.



User Types:

1. Busy Professional
2. Student
3. Homemaker


User Stories:

1. Busy Professional

- WHO: Busy Professional
- WHAT: Needs to manage multiple work tasks efficiently.
- WHY: To stay organized and ensure no tasks are forgotten.

User Story: As a busy professional, I want to add new to-do items quickly so that I can immediately capture tasks as they come up.


2. Student

- WHO: Student
- WHAT: Needs to track assignments and study schedules.
- WHY: To manage academic responsibilities and improve productivity.

User Story: As a student, I want to add to-do items for my classes so that I can keep track of my assignments and exams.


3. Homemaker

- WHO: Homemaker
- WHAT: Needs to manage household chores and family schedules.
- WHY: To ensure all household tasks are completed and family members are coordinated.

User Story: As a homemaker, I want to mark tasks as 'To-Do' or 'Done' so that I can visually track my progress.


These user stories provide a comprehensive understanding of the diverse needs and goals of different user types, guiding the development of a versatile and user-friendly To-Do List application.



State Tree:

{
  todos: {
    byId: {
      '1': {
        id: '1',
        text: 'Buy groceries',
        completed: false
      },
      '2': {
        id: '2',
        text: 'Finish project report',
        completed: false
      }
    },
    allIds: ['1', '2']
  },
  filter: 'all',
  ui: {
    loading: false,
    error: null
  }
}


Explanation:

1. todos:
    - byId: An object where each key is a todo ID and the value is the todo item.
    - allIds: An array of all todo IDs for easy access.
2. filter: The current filter applied to the to-do list (e.g., all, todo, done).
3. ui: Contains UI-related states such as loading status and error messages.



Wireframe Prototypes:


1. State Tree:
+-----------------------------------+
|               State               |
+-----------------------------------+
|                                   |
|   +---------------------------+   |
|   |          todos            |   |
|   +---------------------------+   |
|   |  byId                     |   |
|   |   +-------------------+   |   |
|   |   |  1: {             |   |   |
|   |   |     id: '1',      |   |   |
|   |   |     text: 'Buy    |   |   |
|   |   |     groceries',   |   |   |
|   |   |     completed:    |   |   |
|   |   |     false         |   |   |
|   |   |  },               |   |   |
|   |   |  2: {             |   |   |
|   |   |     id: '2',      |   |   |
|   |   |     text: 'Finish |   |   |
|   |   |     project       |   |   |
|   |   |     report',      |   |   |
|   |   |     completed:    |   |   |
|   |   |     false         |   |   |
|   |   |  }                |   |   |
|   |   +-------------------+   |   |
|   |  allIds: ['1', '2']        |   |
|   +---------------------------+   |
|                                   |
|   +---------------------------+   |
|   |         filter            |   |
|   +---------------------------+   |
|   |           all             |   |
|   +---------------------------+   |
|                                   |
|   +---------------------------+   |
|   |           ui              |   |
|   +---------------------------+   |
|   |   loading: false          |   |
|   |   error: null             |   |
|   +---------------------------+   |
|                                   |
+-----------------------------------+


2. HOME PAGE:
+-------------------------------------------------+
|    Logo    [Home] [To-Do List] [Contact]        |
+-------------------------------------------------+
|                Welcome to Our App               |
|        Manage your tasks efficiently and        |
|               stay organized!                   |
|                                                 |
|                [Get Started]                    |
+-------------------------------------------------+
|                     Footer                      |
+-------------------------------------------------+


3. LIST PAGE:
+-------------------------------------------------+
|                    To-Do List                   |
+-------------------------------------------------+
| [All] [To-do] [Done]                            |
+-------------------------------------------------+
| + Add New To-Do Item                            |
|  [___________________________________] [Add]    |
+-------------------------------------------------+
| - To-Do Item 1      [Edit] [Delete] [Complete]  |
| - To-Do Item 2      [Edit] [Delete] [Complete]  |
| - To-Do Item 3      [Edit] [Delete] [Complete]  |
| - To-Do Item 4      [Edit] [Delete] [Complete]  |
+-------------------------------------------------+


4. CONTACT PAGE:
+-------------------------------------------------+
|                   Contact Us                    |
+-------------------------------------------------+
| First Name:  [_________________________]        |
| Last Name:   [_________________________]        |
| Email:       [_________________________]        |
| Comments:    [_________________________]        |
|              [_________________________]        |
|              [_________________________]        |
+-------------------------------------------------+
| [Submit]                                        |
+-------------------------------------------------+
