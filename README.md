# `Wrappid` Service Boilerplate
```
                                    _     _
    __      ___ __ __ _ _ __  _ __ (_) __| |
    \ \ /\ / / '__/ _` | '_ \| '_ \| |/ _` |
     \ V  V /| | | (_| | |_) | |_) | | (_| |
      \_/\_/ |_|  \__,_| .__/| .__/|_|\__,_|
                       |_|   |_|

```
## 1. Introduction   

This is a **service middleware boilerplate application** to support frontend applications built using the `wrappid` framework, which enables simultaneous development of web and mobile application.

## Getting Started
This getting started section will help you setup a basicservic middleware built using the `Wrappid` framework for Frontend Wrappid Projects. Follow the below steps to get going.   

2.1. [Verify Pre-requisites]()   
2.2. [Initialize a backend `wrappid-service`]()   
2.3. [Setup `wrappid-service` application-development environment]()   
2.4. [Run `wrappid-service` Project]()   


### 2.2. Initialize a frontend `wrappid-service` project

It is expected that you have successfully installed @wrappid/toolkit(wrappid framework's CLI tool) and initialised it.
Run the below command to create Frontend Wrappid Project

```terminal
wrappid init service <wrappid>
```

**Output:**  
![wrappid-service](https://github.com/wrappid/.github/assets/61864488/b5c91ac7-f30f-48e7-b3f3-f0e736f27e95)


### 2.3. Setup wrappid-service development environment

Run the below command to setup a Backend Wrappid Project.

```bash
cd <wrappid>-<service>
wrappid setup
```

> **_Note:_** _Unlike wrappid frontend biolerplate(wrappid-app), there are no runtime environments for wrappid-service_

### 2.4. Start a Wrappid Frontend project

Run the below command to start the development backend service:
```bash
cd wrappid-service
wrappid start
```

This should start your backend service middlewear at `localhost:8080`


## 3. Wrappid Packages

As of now 1 npm package is used by `wrappid-service`, i.e,
 3.1. @wrappid/service-core   

### 3.1. Wrappid Service-Core Package