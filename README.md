SECTION A 

Ques 1 :  MongoDB Aggregation Framework
The MongoDB Aggregation Framework helps you analyze data in MongoDB. It allows you to perform complex operations on data, similar to SQL's GROUP BY and JOIN operations, but tailored for MongoDB's document-based structure.

Aggregation Pipeline Stages 
MongoDB aggregation pipelines consist of multiple stages, each performing a specific operation on the data. Imagine you have sales data and want to find out which product categories made the most money last year. Here’s how you might construct an aggregation pipeline for our example use case:

1.	Match Stage: Filter documents based on specific criteria .

2.	Project Stage: Reshape documents by including or excluding fields.

3.	Group Stage: Group documents by a specified key.

4.	Sort Stage: Sort documents based on a field.

5.	Limit Stage: Limits the number of documents passed to the next stage.


Ques 2 :Higher-Order Components in React


HOCs are functions that take a component as an argument and return a new enhanced component. These are a powerful pattern in React for enhancing components with reusable logic and functionalities. They can significantly improve code organization, promote reusability, and facilitate the implementation of cross-cutting concerns in React applications.


Example: Adding Logging with HOCs  

1.	Creating HOC
Let's create a Higher-Order Component that logs when a component mounts and unmounts.

 
In this HOC (withLogger):
•	It accepts a component (WrappedComponent) and returns a new class component.
•	In componentDidMount and componentWillUnmount, it logs messages indicating when the component is mounted and unmounted, respectively.
•	It renders the WrappedComponent with all its original props passed through.

2.	Use the HOC with a Component:
 

Hello is wrapped with the withLogger HOC to log messages when the component mounts and unmounts.


#SECTION B

MERN Stack Application with JWT Authentication and Role-Based Access Control

1.	INTRODUCTION

o	This MERN stack application showcases a robust authentication system using JWT (JSON Web Token) and implements role-based access control (RBAC) for three user roles: admin, editor, and viewer. Each user role has distinct dashboard access and permissions, ensuring secure and tailored user experiences. The application features a secure signup process with unique username checks, responsive design with React and Tailwind CSS, and efficient backend services using Node.js, Express, and MongoDB. This project demonstrates proficiency in full-stack development, emphasizing security, scalability, and user role management.
o	 Tech-Stack - MongoDB, Express.js, React.js, Node.js (MERN stack).
o	Purpose : To demonstrate JWT authentication and role-based access control.

2.	Authentication Flow (JWT )
     Client-Side Authentication
o	Signup/Login Component:
	User enters username, password, and role (admin, editor, viewer).
	Sends credentials to the server using a POST request.

o	Token Generation:
	Server validates credentials against the database.
	If valid, generates a JWT (JSON Web Token) containing user information and role.
	Token is signed using a secret key and returned to the client.
Token Storage and Usage
o	Client-Side Storage:
	Token stored in localStorage for persistence across sessions.
o	Authorization Header:
	Token sent with each subsequent request to authenticated routes as Authorization: Bearer <token>.
Server-Side Authentication
o	Middleware:
	authMiddleware.js: Verifies JWT on protected routes.
	roleMiddleware.js: Restricts access based on user role.
o	Token Validation:
	Server verifies the integrity and validity of the token.
	If valid, allows access to protected resources; otherwise, returns an authentication error.

3	Role-Based Access Control in MERN Stack Application
Role-Based Access Control is a security paradigm used to restrict system access to authorized users based on their roles within an organization. This MERN stack application manage and control access to different parts of the application based on the user's role.
Roles and Dashboards
The application defines three distinct roles: Admin ,Editor ,Viewer .
Flow and Implementation
o	User Signup: During the signup process, users select their role (Admin, Editor, Viewer). The backend ensures the uniqueness of the username to prevent ambiguity.
o	Token Generation: Upon successful login, a JWT is generated, embedding the user's role information. This token is sent to the client and stored securely.
o	Protected Routes: The application checks the presence and validity of the JWT before granting access to protected routes. This ensures that only authenticated users with the correct role can access specific dashboards. Redirects unauthorized users to the login page.
o	Role Verification: The JWT is verified on each request to protected routes. The backend decodes the token to retrieve the user's role and grants or denies access based on this role.
o	Dynamic Dashboard Rendering: Depending on the role embedded in the JWT, the frontend renders the appropriate dashboard (Admin, Editor, Viewer), providing a personalized and secure user experience.

At the end , I am Attaching Drive Link for all the refrence images and Github link of the application .

Drive Link : https://drive.google.com/drive/folders/1WImUVYYZmPe_YNzCVo8hXTCTZSxcDFCu?usp=drive_link

GitHub Link : https://github.com/RajaSodani/jwt-auth 
