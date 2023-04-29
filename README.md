# Wrappid Service

This is a service middleware to support wrappid framework development.

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
