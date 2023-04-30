```
                                    _     _
    __      ___ __ __ _ _ __  _ __ (_) __| |
    \ \ /\ / / '__/ _` | '_ \| '_ \| |/ _` |
     \ V  V /| | | (_| | |_) | |_) | | (_| |
      \_/\_/ |_|  \__,_| .__/| .__/|_|\__,_|
                       |_|   |_|

```

# `Wrappid` Service Boilerplate

This is a **service middleware boilerplate application** to support frontend applications built using the `wrappid` framework, which enables simultaneous development of web and mobile application.

## Getting Started

## Backend Architecture

### Application Specific

- Application
  - Environment Specific Config
  - Context
- Database (Multiple)
  - ORM
  - Migration
- 3rd Party - Client Authentication
- REST API(s)
  - Route
  - Controller
  - Repository
  - Models
- MIDDLEWARE(s) eg. JWT Verification
- Cron/Event Schedulers
- Caching
- Diagnostic
  - Request Logging
  - Database Query Time
  - API
  - SCHEDULERS
- Notification
  - SMS
  - Email
  - WhatsApp
  - Push
- Swagger

### Wrappid Specific

- Authentication
  - User
- Authorization
  - Role
  - Permission
  - Role - Permission
  - User - Permission
- Builder
  - Menu Mgmt
  - Routes Mgmt
  - Pages Mgmt
  - Form Mgmt
  - Business Entity Mgmt
  - Table Mgmt
