<a name="readme-top"></a>



<div align="center">
  
  <img src="./src/assets/images/LOGOv2.png" alt="logo" width="250" height="250" />
  <br/>

  <h3><b>TV Maze App</b></h3>

</div>

<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
  - [🚀 Live Demo](#live-demo)
- [💻 Getting Started](#getting-started)
  - [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
  - [Usage](#usage)
  - [Run tests](#run-tests)
  - [Deployment](#deployment)
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)
- [❓ FAQ (OPTIONAL)](#faq)
- [📝 License](#license)


<!-- PROJECT DESCRIPTION -->

# 📖 [TV AMAZE APP ] <a name="about-project"></a>

Creamos un formulario sencillo y amigable para que los clientes puedan dejarnos sus datos, como su nombre, correo y número de teléfono. Así, podemos ponernos en contacto con ellos de la manera que prefieran, ya sea por mensaje o llamada. La idea es hacerles todo más fácil, asegurándonos de que su información esté segura y solo la usemos para ayudarles o responder sus dudas.
 

### Tech Stack <a name="tech-stack"></a>

<li> HTML </li>
<li> CSS </li>
<li> Javascript </li>
<li> Webpack </li>
<li> Express </li>
<li> REST API </li>
<li> Git </li>
<li> Github actions </li>
<li> Bash Script </li>
<!-- Features -->

### Key Features <a name="key-features"></a>


### Series List:
Este formulario se ha creado para llevar un mejor control de los usuarios y facilitar el contacto con ellos. Al registrarlos, podremos gestionar su información de manera organizada y asegurarnos de que reciban la mejor atención posible.
Incluiremos datos como nombre, correo, teléfono y otros detalles importantes para personalizar la experiencia de cada usuario. Queremos que el proceso sea fácil, rápido y seguro, asegurándonos de que la información esté siempre protegida.
### Likes:
Este es un aplicativo muy útil porque nos permite guardar y organizar los datos de los usuarios de manera eficiente. Gracias a esto, podemos acceder fácilmente a su información cuando la necesitemos, mejorar la comunicación y ofrecerles una mejor experiencia. Además, garantiza que los datos estén almacenados de forma segura y bien gestionados.

### Comments Popup: 
 TV Amaze App enables users to engage in discussions and share their thoughts on specific TV series by leaving comments. Leveraging REST methods, users can interact with the app to post comments, fostering a community-driven environment. The implementation of ES6 modules and async/await allows for seamless handling of comment-related operations in a popup window.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LIVE DEMO -->

### 🚀 Live Demo <a name="live-demo"></a>

> 

- [Live Demo Link](	https://google.com)



<p align="right">(<a href="#readme-top">back to top</a>)</p>
<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>


To get a local copy up and running, follow these steps.

### Prerequisites
To run this project  you need the following tools:
- [VS Code ]
- [Git and GitHub ]
- [Express ]
- [Webpack Installation ]



### Setup

Clone this repository to your desired folder:
sh
 cd TV-AMAZE-APP
 git clone git@github.com:alyconr/TV-AMAZE-APP.git



### Install

Install this project with:

Stylelint:
sh
     npm install --save-dev stylelint@13.x stylelint-scss@3.x stylelint-config-standard@21.x stylelint-csstree-validator@1.x


Eslint
sh
     npm install --save-dev eslint@7.x eslint-config-airbnb-base@14.x eslint-plugin-import@2.x babel-eslint@10.x

Webpack
sh
     npm init -y
     npm install webpack webpack-cli --save-dev


Webpack Css loader
sh
     npm install --save-dev style-loader css-loader

Webpack html loader
sh
     npm install --save-dev html-loader


Webpack html plugin
sh
     npm install --save-dev html-webpack-plugin


Webpack dev server
sh
     npm install --save-dev webpack-dev-server

Babel Dependency loader
sh
     npm install --save-dev babel-loader

Minify CSS: To reduce the size of your CSS file by removing unnecessary characters such as whitespace and comments. 
sh
     npm install --save-dev css-minimizer-webpack-plugin

Split Js : If your JS file is large, splitting it into smaller modular files can help improve the loading time. 
sh
     npm install --save-dev terser-webpack-plugin


Split CSS: If your CSS file is large, splitting it into smaller modular files can help improve the loading time. 
sh
     npm install mini-css-extract-plugin --save-dev

Babel core
sh
     npm install --save-dev @babel/core @babel/preset-env

Express and body-parser
sh
     npm install --save express body-parser


Concurrent, the npm package for running multiple commands in parallel
sh
     npm install --save-dev concurrently



### Usage

To run locally run the following command:
## Development mode
sh
    npm run build-dev
    npm run devserver-reload    

## Production mode
sh
    npm run build-prod
    npm run server-prod



### Run tests

To run tests, run the following command:


To test the Stylelint linter:
sh
    npx stylelint "**/*.{css,scss}"

To test the Webhint:
sh
    npx hint .

To test the ESLint linter:
sh
    npx eslint .



### Deployment

## Local deployment using Docker:

In root project folder run the following command:
sh
    docker  build -t TV-Maze-App nginx/Dockerfile .

Then run the following command:

sh

    docker -it --name tvapp  run -p 443:443 -p 80:80 -v ./dist:/usr/share/nginx/html -d TV-Maze-App

Be sure to replace the path of your project dist folder 

If you want to use docker hub image repository, run the following command:
sh
    docker pull 810129/tvapp
    docker -it --name tvapp  run -p 443:443 -p 80:80 -v ./dist:/usr/share/nginx/html -d 810129/tvapp

## Local deployment using Docker-compose:
In root folder run the following command:
sh
    docker compose up -d

The above command will deploy the app in localhost on port 443 and 80 through dockerized nginx webserver.

### Cloud Production deployment:
In root folder run the following command:
sh
    bash deployment.sh -u username -i ipaddress -d Namefolder -e environment

The arguments are:
- -u username
- -i ipaddress
- -d Namefolder
- -e environment (prod or dev) respectively

With the last script, the app will be deployed to any cloud provider you want to use,  you only need the IP address and the right permission to access it.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHORS -->

## 👥 Authors <a name="authors"></a>

JEYSSON CONTRERAS


👤 *Author1*

- GitHub: [@alyconr](https://github.com/Sflorez498)
- LinkedIn: [LinkedIn]()




<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FUTURE FEATURES -->

## 🔭 Future Features <a name="future-features"></a>


- [ ] *[Personalized Recommendations]*
- [ ] *[Advanced Search Filters]*
- [ ] *[Notifications and Reminders]*


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page]().

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

> Write a message to encourage readers to support your project

If you like this project please give  one start.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>

I would like to thank  God for giving me the strength to carry out this project.
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FAQ (optional) -->



<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](LICENSE.md) licensed.



<p align="right">(<a href="#readme-top">back to top</a>)</p>