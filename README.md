# Student Management Form using JsonPowerDB

## Title of the Project
Student Management Form using JsonPowerDB

## Description
This project demonstrates the creation of a Student Management Form using **JsonPowerDB** to store and manage student records efficiently. The form captures essential student details like Roll No, Full Name, Class, Birth Date, Address, and Enrollment Date. The data entered is stored in a multi-mode JSON-based database called JsonPowerDB, ensuring easy and seamless management of student information.

## Benefits of using JsonPowerDB
1. **High Performance**: JsonPowerDB provides fast query execution and high performance due to its real-time capabilities.
2. **Serverless Architecture**: It supports serverless architecture, reducing the complexity of backend management.
3. **Multi-mode Database**: It integrates various database operations like JSON, RDBMS, Key-value, GeoSpatial, and Time Series under one umbrella.
4. **Ease of Use**: JsonPowerDB comes with ready-to-use APIs, which simplifies database operations, allowing developers to focus more on application logic.

## Release History
- **v1.0** - Initial release of the project with core functionality for managing student records.
- **v1.1** - Added validation, form submission handling, and dynamic field enabling/disabling based on Roll No existence.
- **v1.2** - Enhanced UI/UX, improved error handling, and added reset functionality for the form.

### Table of Contents
1. [Project Overview](#title-of-the-project)
2. [Description](#description)
3. [Benefits of using JsonPowerDB](#benefits-of-using-jsonpowerdb)
4. [Release History](#release-history)
5. [Scope of Functionalities](#scope-of-functionalities)
6. [Examples of Use](#examples-of-use)
7. [Project Status](#project-status)
8. [Sources](#sources)
9. [Other Information](#other-information)

### Scope of Functionalities
- Form for capturing student details (Roll No, Full Name, Class, Birth Date, Address, Enrollment Date).
- Validation to ensure no empty fields are submitted.
- Dynamic enabling/disabling of form fields based on Roll No existence.
- Database operations like `insert` and `update` using JsonPowerDB APIs.

### Examples of Use
1. **New Student Entry**: 
   - If a Roll No does not exist, users can fill and submit all fields.
   - Data is validated, and upon successful submission, stored in JsonPowerDB.
   
2. **Updating Existing Records**:
   - If a Roll No exists, users can update existing data.
   - Fields like Roll No are disabled, and only other editable fields are available.

### Project Status
- **Completed**: This project is fully implemented with all required functionalities.
- **In Progress**: No further updates are required.

### Sources
- [JsonPowerDB Documentation](http://jsonpowerdb.com/docs/)
- [Login2Explore API Documentation](http://api.login2explore.com:5577)

### Other Information
- **Connection Token**: Replace `CONNECTION_TOKEN` with your actual connection token from Login2Explore.
- **API Base URL**: Ensure you're using `http://api.login2explore.com:5577` as the API endpoint.
- **Github Repository**: You can find the codebase at https://github.com/pranav-gujar/Micro-Project.git

