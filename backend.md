### Assignment Description:

**Title:** Build a Help Center API

**Objective:**  
The objective of this assignment is to create a RESTful API that allows users to manage "Help Center" cards. These cards represent different sections of a help center, such as "Branches," "Manage Your Account," "Manage Billing," etc. The API should allow users to create, retrieve these cards.

**Project Requirements:**

1. **Set up the project:**
   - Create a new Node.js project using Express.js.
   - Set up a basic server with a single endpoint to check if the server is running (e.g., `GET /ping`).

2. **Create a Card Model:**
   - Design a model for a card. Each card should have the following fields (You can chooose any ORM and database):
     - `id` (string): A unique identifier for the card.
     - `title` (string): The title of the card (e.g., "Branches").
     - `description` (string): A brief description of what the card represents (e.g., "Abstract Branches lets you manage, version, and document your designs in one place.").

3. **Build the API Endpoints:**
   - **Create a card:** Create an endpoint to add a new card to the help center.
     - `POST /cards`: This should accept the card details (title, description, link) in the request body and create a new card.
   - **Get all cards:** Create an endpoint to retrieve all the cards.
     - `GET /cards`: This should return a list of all cards in the help center.
   - **Get a specific card:** Create an endpoint to retrieve the details of a single card by its title.
     - `GET /cards/:title`: This should return the details of a specific card.

4. **Error Handling:**
   - Implement error handling for cases such as trying to access a non-existent card, validation errors, and server errors.


### Submission:
- Provide the source code in a GitHub repository and on the submission of the form, paste the github link.
- Include a README file with instructions on how to set up and run the project locally.



### How to start ther backend server

# Backend Project Name
help-center-server

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/ManishIAF/Build-a-Help-Center-API.git


## Installation


## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js** (version 14 or higher) depending on your stack
- **npm** or **yarn** (for Node.js) 
- **Database** (e.g. MongoDB) - make sure to install and configure it if required 


_**How to Runthe server**

And before runnig the server make sure you run the local MongoDB server

_**How to run MongoDB server ?**

MongoDB generally remain in C:/

navigate to C and change directory to .\Program Files\MongoDB\Server\5.0\bin\

open git bash and run the command "start mongod"


navigate to backend folder and follow below command

_**install packages dependencies** rum command "npm install"

_**start server** run command "npm start"


