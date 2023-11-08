# `Wrappid` Service Boilerplate
```
                                    _     _
    __      ___ __ __ _ _ __  _ __ (_) __| |
    \ \ /\ / / '__/ _` | '_ \| '_ \| |/ _` |
     \ V  V /| | | (_| | |_) | |_) | | (_| |
      \_/\_/ |_|  \__,_| .__/| .__/|_|\__,_|
                       |_|   |_|

```

**This is a template documentation, @wrappid/toolkit uses this template to create backend service boilerplate.**


**Table of Contents**
- [`Wrappid` Service Boilerplate](#wrappid-service-boilerplate)
  - [1. Introduction](#1-introduction)
  - [Getting Started](#getting-started)
    - [2.1 What are my Pre-requisites?](#21-what-are-my-pre-requisites)
    - [2.2. How to Create?](#22-how-to-create)
    - [2.3. How to Setup?](#23-how-to-setup)
    - [2.4. How to Start?](#24-how-to-start)
  - [3. What are Wrappid Environments?](#3-what-are-wrappid-environments)
  - [4. What are Registries?](#4-what-are-registries)
    - [4.1 Controllers Registry](#41-controllers-registry)
    - [4.2. Functions Registry](#42-functions-registry)
    - [4.3. Middleweares Registry](#43-middleweares-registry)
    - [4.4. Models Registry](#44-models-registry)
    - [4.5. Tasks Registry](#45-tasks-registry)
    - [4.6 Validation Registry](#46-validation-registry)
  - [4. Wrappid Packages](#4-wrappid-packages)
    - [4.1. Wrappid Service-Core Package](#41-wrappid-service-core-package)

## 1. Introduction   

This is a **service middleware boilerplate application** to support frontend applications built using the `wrappid` framework, which enables simultaneous development of web and mobile application.

## Getting Started
This getting started section will help you setup a basicservic middleware built using the `Wrappid` framework for Frontend Wrappid Projects. Follow the below steps to get going.   

[2.1 What are my Pre-requisites?](#21-what-are-my-pre-requisites)   
[2.2. How to Create?](#22-how-to-create)   
[2.3. How to Setup?](#23-how-to-setup)   
[2.4. How to Start?](#24-how-to-start)    

### 2.1 What are my Pre-requisites?

- [Refer here](https://github.com/wrappid/#1-check-pre-requisites)
- install @wrappid/toolkit globally. [Click here](https://github.com/wrappid/#2-install-wrappid-toolkit)for installation guide of @wrappid/toolkit.   

### 2.2. How to Create?

It is expected that you have successfully installed @wrappid/toolkit(wrappid framework's CLI tool) and initialised it.
Run the below command to create Frontend Wrappid Project

```terminal
wrappid init service <wrappid>
```

**Output:**  
![wrappid-service](https://github.com/wrappid/.github/assets/61864488/b5c91ac7-f30f-48e7-b3f3-f0e736f27e95)


### 2.3. How to Setup?

> **_Note:_** _If you want to setup a wrappid-service project that is already in your github, you need to clone it. After clonning, run `npm i` at the root of the project_

Run the below command to setup a Backend Wrappid Project.

```bash
cd <wrappid>-<service>
wrappid setup
```

> **_Note:_** _Unlike wrappid frontend biolerplate(wrappid-app), there are no runtime environments for wrappid-service_

### 2.4. How to Start?

Run the below command to start the development backend service:
```bash
cd wrappid-service
wrappid start
```

This should start your backend service middlewear at `localhost:8080`

## 3. What are Wrappid Environments?
Wrappid Service can be runned in 3 environments:
- Dev: Suitable for Development
- Stage: Suitable for Testing
- Prod: Suitable for Production

By default, Wrappid Servoce project setups and starts in `dev` environment.
These environments are to be configured in wrappid.conf.json located at the root of `wrappid-app` project

To run a Wrappid Servoce project in a different environment, run the below command:
```terminal
cd wrappid-service
wrappid start --env=[dev|stage|prod]
```

## 4. What are Registries?


### 4.1 Controllers Registry
Used for controllers

### 4.2. Functions Registry
Used for functions

### 4.3. Middleweares Registry
Used for Middlewears functions

### 4.4. Models Registry
Used to get models

### 4.5. Tasks Registry
Used to get tasks

### 4.6 Validation Registry
Used for validation

## 4. Wrappid Packages

As of now 1 npm package is used by `wrappid-service`, i.e,
 3.1. @wrappid/service-core   

### 4.1. Wrappid Service-Core Package