# FSA-Reporting-form-with-geolocation-and-gmail-login
This repository contains a Flask-based web application designed for Field Sales Agents (FSA) to report various types of data while on the field. The web app captures essential information such as Name/Business Name, Contact Address, Mobile Number, Remarks, Merchant Business Type, Enrollment Status, Merchant Virtual Account Number, and Merchant Business Name, along with automatic geolocation capture to ensure the authenticity of the data.

The form submissions are stored securely and are intended to be processed for further analysis and for calculating the incentives of the sales agents. The application is built with ease of use on mobile devices in mind, ensuring FSAs can submit data seamlessly in real time.

# FSA Reporting Form with Geolocation and Gmail Login

## Project Overview
The FSA Reporting Form is a Flask-based web application designed to streamline the reporting process for Field Service Agents (FSAs). It includes geolocation functionality to capture the location of the report submission and a Gmail-based login for secure access.

## Features
- **User Authentication**: Only users with Gmail accounts can log in and access the form, ensuring data security and integrity.
- **Geolocation Capture**: Automatically captures the longitude and latitude of the user when the form is submitted.
- **Responsive Design**: Optimized for mobile and desktop use, making it accessible for FSAs on the field using their phones.
- **Data Storage**: Submissions are stored in a CSV format for easy analysis and integration with other tools or services.
- **Session Management**: The application maintains user sessions for convenience and security.

## Technologies Used
- **Flask**: A micro web framework written in Python, used for the backend.
- **HTML/CSS/JavaScript**: For the frontend design and interactivity.
- **Python**: Backend scripting and server-side logic.
- **Git**: Version control system.
- **Heroku/ngrok**: Deployment and local tunneling for development purposes.

## Local Development Setup
To set up the FSA Reporting Form on your local machine:

1. Clone the repository:
    ```
    git clone https://github.com/abioduog/FSA-Reporting-form-with-geolocation-and-gmail-login.git
    ```
2. Navigate into the project directory:
    ```
    cd FSA-Reporting-form-with-geolocation-and-gmail-login
    ```
3. Install the dependencies:
    ```
    pip install -r requirements.txt
    ```
4. Start the Flask server:
    ```
    flask run
    ```

## Usage
After logging in with a Gmail account, FSAs can fill out the form which includes various fields such as business name, contact address, mobile number, and more. Upon submission, the form data along with the geolocation details are saved.

## Contributing
Contributions to the FSA Reporting Form are welcome. Please fork the repository, make your changes, and submit a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact
For any queries regarding the FSA Reporting Form, please contact:

- Email: [abioduog@gmail.com](mailto:abioduog@gmail.com)

## Acknowledgments
- Flask Documentation
- Stack Overflow Community
- All the contributors who have invested time into improving this project.

