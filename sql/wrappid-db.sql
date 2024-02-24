# Converted with pg2mysql-1.9
# Converted on Sat, 24 Feb 2024 02:53:41 -0500
# Lightbox Technologies Inc. http://www.lightbox.ca

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone="+00:00";

CREATE TABLE `ActivityLogs` (
    id int(11) NOT NULL,
    title text,
    `subTitle` text,
    icon varchar(255),
    _status varchar(255),
    `deletedAt` timestamp,
    `createdAt` timestamp NOT NULL,
    `updatedAt` timestamp NOT NULL,
    `createdBy` int(11),
    `updatedBy` int(11),
    `userId` int(11),
    `deletedBy` int(11)
);

CREATE TABLE `ApiRequestLogs` (
    id int(11) NOT NULL,
    access_key text,
    endpoint text,
    request text,
    header_stack JSON,
    response JSON,
    start_ts timestamp,
    created_ts timestamp,
    updated_ts timestamp,
    end_ts timestamp,
    req_body JSON,
    ip text,
    response_status text,
    response_header JSON
);

CREATE TABLE `Applications` (
    id int(11) NOT NULL,
    code varchar(255) DEFAULT '',
    name varchar(255) DEFAULT '',
    `extraInfo` JSON,
    `isActive` bool DEFAULT 1,
    _status varchar(255),
    `deletedAt` timestamp,
    `createdAt` timestamp NOT NULL,
    `updatedAt` timestamp NOT NULL,
    `userId` int(11),
    `createdBy` int(11),
    `updatedBy` int(11),
    `deletedBy` int(11),
    `employeeId` int(11)
);

CREATE TABLE `BusinessEntitySchemas` (
    id int(11) NOT NULL,
    name varchar(255) DEFAULT '',
    `schema` JSON ,
    `extraInfo` JSON ,
    _status varchar(255) DEFAULT 'new',
    `deletedAt` timestamp,
    `createdAt` timestamp NOT NULL,
    `updatedAt` timestamp NOT NULL,
    `createdBy` int(11),
    `updatedBy` int(11),
    `deletedBy` int(11),
    `ref` varchar(255) DEFAULT ' ',
    `commitId` VARCHAR(36) NOT NULL,
    `comments` JSON,
    `entityRef` varchar(255) DEFAULT ' '
);

CREATE TABLE `CommunicationTemplates` (
    id int(11) NOT NULL,
    `type` varchar(255) DEFAULT ' ',
    subject varchar(255) DEFAULT ' ',
    name varchar(255) DEFAULT ' ',
    `extraInfo` JSON,
    `isActive` bool DEFAULT 1,
    _status varchar(255),
    `deletedAt` timestamp,
    `createdAt` timestamp NOT NULL,
    `updatedAt` timestamp NOT NULL,
    `createdBy` int(11),
    `updatedBy` int(11),
    `deletedBy` int(11),
    header varchar(255) DEFAULT ' ',
    `contentType` varchar(255) DEFAULT ' ',
    message text,
    footer varchar(255) DEFAULT ' ',
    `sampleSubject` varchar(255) DEFAULT ' ',
    `sampleMessage` text,
    config JSON,
    `externalTemplateId` varchar(255) DEFAULT ' ',
    `externalStatus` varchar(255) DEFAULT ' ',
    `externalReason` varchar(255) DEFAULT ' '
);

CREATE TABLE `Coupons` (
    id int(11) NOT NULL,
    `couponId` varchar(255) DEFAULT ' ',
    name varchar(255) DEFAULT ' ',
    label varchar(255) DEFAULT ' ',
    description varchar(255) DEFAULT ' ',
	`rule` JSON ,
    `validFrom` timestamp DEFAULT '2023-09-04 17:51:20.373',
    `validUpto` timestamp DEFAULT '2023-09-04 17:51:20.373',
    `isActive` bool DEFAULT 1,
    _status varchar(255),
    `deletedAt` timestamp,
    `createdAt` timestamp NOT NULL,
    `updatedAt` timestamp NOT NULL,
    `userId` int(11),
    `createdBy` int(11),
    `updatedBy` int(11),
    `deletedBy` int(11)
);

CREATE TABLE `CronSchemas` (
    id int(11) NOT NULL,
    name text,
    expression text,
    `cronModule` text,
    `createdAt` time,
    `updatedAt` time
);

CREATE TABLE `DataTableOptions` (
    id int(11) NOT NULL,
    name varchar(255) DEFAULT ' ',
    `tableID` varchar(255) NOT NULL,
    options JSON ,
    `extraInfo` JSON,
    `authRequired` bool DEFAULT 1,
    _status varchar(255) DEFAULT 'new',
    `deletedAt` timestamp,
    `createdAt` timestamp NOT NULL,
    `updatedAt` timestamp NOT NULL,
    `createdBy` int(11),
    `updatedBy` int(11),
    `deletedBy` int(11)
);

CREATE TABLE `FormSchemas` (
    id int(11) NOT NULL,
    name varchar(255) DEFAULT ' ',
    `formID` varchar(255) DEFAULT ' ',
    `schema` JSON ,
    `extraInfo` JSON ,
    `authRequired` bool DEFAULT 1,
    _status varchar(255) DEFAULT 'new',
    `deletedAt` timestamp,
    `createdAt` timestamp NOT NULL,
    `updatedAt` timestamp NOT NULL,
    `createdBy` int(11),
    `updatedBy` int(11),
    `deletedBy` int(11),
    `commitId` VARCHAR(36) NOT NULL,
    `entityRef` varchar(255) DEFAULT ' ',
    comments JSON
);

CREATE TABLE `LoginLogs` (
    id int(11) NOT NULL,
    route varchar(255) DEFAULT ' ',
    message varchar(255) DEFAULT ' ',
    `status` varchar(255) DEFAULT ' ',
    `extraInfo` JSON,
    `isActive` bool DEFAULT 1,
    _status varchar(255),
    `deletedAt` timestamp,
    `createdAt` timestamp NOT NULL,
    `updatedAt` timestamp NOT NULL,
    `createdBy` int(11),
    `updatedBy` int(11),
    `userId` int(11),
    `deletedBy` int(11)
);

CREATE TABLE `MailComms` (
    id int(11) NOT NULL,
    `type` varchar(255) DEFAULT ' ',
    `from` varchar(255) DEFAULT ' ',
    `to` varchar(255) DEFAULT ' ',
    `retryCount` varchar(255) DEFAULT ' ',
    `status` varchar(255) DEFAULT ' ',
    attachemnts varchar(255) DEFAULT ' ',
    variable JSON,
    `extraInfo` JSON,
    `isActive` bool DEFAULT 1,
    _status varchar(255),
    `deletedAt` timestamp,
    `createdAt` timestamp NOT NULL,
    `updatedAt` timestamp NOT NULL,
    `mailCommId` int(11),
    `createdBy` int(11),
    `updatedBy` int(11),
    `userId` int(11),
    `templateId` int(11),
    `deletedBy` int(11)
);

CREATE TABLE `MasterData` (
    id int(11) NOT NULL,
    name varchar(255) DEFAULT '',
    label varchar(255) DEFAULT '',
    `isInput` bool DEFAULT 0,
    `inputType` varchar(255) DEFAULT '',
    `order` int(11) DEFAULT 0,
    `isVisible` bool DEFAULT 0,
    `extraInfo` JSON,
    `isActive` bool DEFAULT 1,
    icon varchar(255) DEFAULT '',
    `stringValue` varchar(255) DEFAULT '',
    `crowdSource` bool DEFAULT 0,
    _status varchar(255),
    `deletedAt` timestamp,
    `createdAt` timestamp NOT NULL,
    `updatedAt` timestamp NOT NULL,
    `createdBy` int(11),
    `updatedBy` int(11),
    `parentId` int(11),
    `deletedBy` int(11),
    `getValue` varchar(255) DEFAULT ''
);

CREATE TABLE `Otps` (
    id int(11) NOT NULL,
    otp varchar(255) DEFAULT ' ',
    `type` varchar(255) DEFAULT 'sms',
    `extraInfo` JSON,
    `isActive` bool DEFAULT 1,
    _status varchar(255),
    `deletedAt` timestamp,
    `createdAt` timestamp NOT NULL,
    `updatedAt` timestamp NOT NULL,
    `mailCommId` int(11),
    `createdBy` int(11),
    `updatedBy` int(11),
    `userId` int(11),
    `smsCommId` int(11),
    `deletedBy` int(11)
);

CREATE TABLE `Pages` (
    id int(11) NOT NULL,
    name varchar(255) DEFAULT ' ',
    ref varchar(255),
    `appComponent` varchar(255) DEFAULT ' ',
    `schema` JSON ,
    `extraInfo` JSON ,
    _status varchar(255) DEFAULT 'new',
    `deletedAt` timestamp,
    `createdAt` timestamp NOT NULL,
    `updatedAt` timestamp NOT NULL,
    `createdBy` int(11),
    `updatedBy` int(11),
    `deletedBy` int(11),
    `commitId` VARCHAR(36),
    comments JSON ,
    `noScroll` bool DEFAULT 0,
    `entityRef` varchar(255) DEFAULT ' '
);

CREATE TABLE `Permissions` (
    id int(11) NOT NULL,
    name varchar(255) DEFAULT '',
    label varchar(255) DEFAULT '',
    `type` varchar(255) DEFAULT 'menuitem',
    link varchar(255) DEFAULT '',
    icon varchar(255) DEFAULT '',
    `appComponent` varchar(255) DEFAULT '',
    _status varchar(255),
    `deletedAt` timestamp,
    `createdAt` timestamp NOT NULL,
    `updatedAt` timestamp NOT NULL,
    `createdBy` int(11),
    `updatedBy` int(11),
    `parentId` int(11),
    `deletedBy` int(11)
);

CREATE TABLE `PersonContacts` (
    id int(11) NOT NULL,
    `type` varchar(255) DEFAULT '',
    data varchar(255) DEFAULT '',
    verified bool DEFAULT 0,
    `primaryFlag` bool DEFAULT 0,
    `notificationFlag` bool DEFAULT 0,
    `isActive` bool DEFAULT 1,
    _status varchar(255),
    `deletedAt` timestamp,
    `createdAt` timestamp NOT NULL,
    `updatedAt` timestamp NOT NULL,
    `personId` int(11),
    `createdBy` int(11),
    `updatedBy` int(11),
    `deletedBy` int(11)
);

CREATE TABLE `PersonRelations` (
    id int(11) NOT NULL,
    `extraInfo` JSON,
    `isActive` bool DEFAULT 1,
    _status varchar(255),
    `deletedAt` timestamp,
    `createdAt` timestamp NOT NULL,
    `updatedAt` timestamp NOT NULL,
    `personId` int(11),
    `relatedPersonId` int(11),
    `relationId` int(11),
    `createdBy` int(11),
    `updatedBy` int(11),
    `deletedBy` int(11)
);

CREATE TABLE `Persons` (
    id int(11) NOT NULL,
    `firstName` varchar(255) DEFAULT '',
    `middleName` varchar(255) DEFAULT '',
    `lastName` varchar(255) DEFAULT '',
    `photoUrl` varchar(255) DEFAULT '',
    `extraInfo` JSON,
    height double precision,
    weight double precision,
    rating double precision,
    `medicalId` varchar(255) DEFAULT '',
    `phoneVerified` bool DEFAULT 0,
    `emailVerified` bool DEFAULT 0,
    `isActive` bool DEFAULT 1,
    `isVerified` bool DEFAULT 0,
    dob timestamp DEFAULT '2023-09-04 17:51:20.406',
    gender varchar(255) DEFAULT '',
    `profileId` varchar(255) DEFAULT '',
    `userInvitationToken` varchar(255) DEFAULT '',
    website varchar(255) DEFAULT '',
    _status varchar(255),
    `deletedAt` timestamp,
    `createdAt` timestamp NOT NULL,
    `updatedAt` timestamp NOT NULL,
    `departmentId` int(11),
    `userId` int(11),
    `createdBy` int(11),
    `updatedBy` int(11),
    `deletedBy` int(11),
    `marritalStatus` varchar(255) DEFAULT '',
    `bloodGroup` varchar(255) DEFAULT ''
);

CREATE TABLE `Relations` (
    id int(11) NOT NULL,
    name varchar(255) DEFAULT '',
    `extraInfo` JSON,
    `isActive` bool DEFAULT 1,
    _status varchar(255),
    `deletedAt` timestamp,
    `createdAt` timestamp NOT NULL,
    `updatedAt` timestamp NOT NULL,
    `createdBy` int(11),
    `updatedBy` int(11),
    `deletedBy` int(11)
);

CREATE TABLE `RolePermissions` (
    id int(11) NOT NULL,
    `isActive` bool DEFAULT 1,
    filter JSON,
    priority int(11) DEFAULT 0,
    `isVisible` bool DEFAULT 1,
    _status varchar(255),
    `deletedAt` timestamp,
    `createdAt` timestamp NOT NULL,
    `updatedAt` timestamp NOT NULL,
    `permissionId` int(11),
    `roleId` int(11),
    `createdBy` int(11),
    `updatedBy` int(11),
    `deletedBy` int(11)
);

CREATE TABLE `Roles` (
    id int(11) NOT NULL,
    role varchar(255) DEFAULT '',
    priority int(11) DEFAULT 0,
    `isActive` bool DEFAULT 1,
    _status varchar(255),
    `deletedAt` timestamp,
    `createdAt` timestamp NOT NULL,
    `updatedAt` timestamp NOT NULL,
    `createdBy` int(11),
    `updatedBy` int(11),
    `deletedBy` int(11)
);

CREATE TABLE `Routes` (
    id int(11) NOT NULL,
    name varchar(255) DEFAULT ' ',
    url varchar(255) DEFAULT ' ',
    `authRequired` bool DEFAULT 1,
    title varchar(255) DEFAULT ' ',
    description varchar(255) DEFAULT ' ',
    keywords JSON ,
    `extraInfo` JSON ,
    source varchar(255) DEFAULT 'server-side',
    _status varchar(255) DEFAULT 'new',
    `deletedAt` timestamp,
    `createdAt` timestamp NOT NULL,
    `updatedAt` timestamp NOT NULL,
    `pageRef` varchar(255),
    `createdBy` int(11),
    `updatedBy` int(11),
    `deletedBy` int(11),
    `entityRef` varchar(255) DEFAULT ' ',
    comments JSON ,
    `reqMethod` varchar(255),
    `controllerRef` varchar(255)
);

CREATE TABLE `SequelizeMeta` (
    name varchar(255) NOT NULL
);

CREATE TABLE `SessionManagers` (
    id int(11) NOT NULL,
    `refreshToken` varchar(255) DEFAULT '',
    `deviceId` varchar(255) DEFAULT '',
    name varchar(255) DEFAULT '',
    `extraInfo` JSON,
    `isActive` bool DEFAULT 1,
    _status varchar(255),
    `deletedAt` timestamp,
    `createdAt` timestamp NOT NULL,
    `updatedAt` timestamp NOT NULL,
    `createdBy` int(11),
    `updatedBy` int(11),
    `userId` int(11),
    `deletedBy` int(11)
);

CREATE TABLE `SettingMeta` (
    id int(11) NOT NULL,
    name varchar(255),
    label varchar(255) DEFAULT '',
    `status` varchar(255) DEFAULT 'Active',
    `isActive` bool DEFAULT 1,
    value JSON,
    _status varchar(255),
    `deletedAt` timestamp,
    `createdAt` timestamp NOT NULL,
    `updatedAt` timestamp NOT NULL,
    `createdBy` int(11),
    `updatedBy` int(11),
    `deletedBy` int(11)
);

CREATE TABLE `SmsComms` (
    id int(11) NOT NULL,
    `type` varchar(255) DEFAULT ' ',
    `from` varchar(255) DEFAULT ' ',
    `to` varchar(255) DEFAULT ' ',
    `retryCount` varchar(255) DEFAULT ' ',
    `status` varchar(255) DEFAULT ' ',
    attachemnts varchar(255) DEFAULT ' ',
    variable JSON,
    `extraInfo` JSON,
    `isActive` bool DEFAULT 1,
    _status varchar(255),
    `deletedAt` timestamp,
    `createdAt` timestamp NOT NULL,
    `updatedAt` timestamp NOT NULL,
    `smsCommId` int(11),
    `createdBy` int(11),
    `updatedBy` int(11),
    `userId` int(11),
    `templateId` int(11),
    `deletedBy` int(11)
);

CREATE TABLE `StringValues` (
    id int(11) NOT NULL,
    `key` varchar(255) NOT NULL,
    value varchar(255) DEFAULT '',
    _status varchar(255) DEFAULT 'new',
    `deletedAt` timestamp,
    `createdAt` timestamp NOT NULL,
    `updatedAt` timestamp NOT NULL,
    locale int(11),
    `createdBy` int(11),
    `updatedBy` int(11),
    `deletedBy` int(11)
);

CREATE TABLE `SupportedLanguages` (
    id int(11) NOT NULL,
    locale varchar(255) NOT NULL,
    name varchar(255) DEFAULT 'en',
    _status varchar(255) DEFAULT 'new',
    `deletedAt` timestamp,
    `createdAt` timestamp NOT NULL,
    `updatedAt` timestamp NOT NULL,
    `createdBy` int(11),
    `updatedBy` int(11),
    `deletedBy` int(11)
);

CREATE TABLE `UserCoupons` (
    id int(11) NOT NULL,
    info varchar(255) DEFAULT '',
    `extraInfo` JSON,
    _status varchar(255),
    `deletedAt` timestamp,
    `createdAt` timestamp NOT NULL,
    `updatedAt` timestamp NOT NULL,
    `couponId` int(11),
    `userId` int(11),
    `createdBy` int(11),
    `updatedBy` int(11),
    `deletedBy` int(11)
);

CREATE TABLE `UserPermissions` (
    id int(11) NOT NULL,
    `isActive` bool DEFAULT 1,
    filter JSON DEFAULT NULL,
    priority int(11) DEFAULT 0,
    _status varchar(255),
    `deletedAt` timestamp,
    `createdAt` timestamp NOT NULL,
    `updatedAt` timestamp NOT NULL,
    `permissionId` int(11),
    `createdBy` int(11),
    `updatedBy` int(11),
    `userId` int(11),
    `deletedBy` int(11)
);

CREATE TABLE `UserSettings` (
    id int(11) NOT NULL,
    name varchar(255),
    label varchar(255) DEFAULT '',
    value JSON,
    _status varchar(255),
    `deletedAt` timestamp,
    `createdAt` timestamp NOT NULL,
    `updatedAt` timestamp NOT NULL,
    `userId` int(11),
    `createdBy` int(11),
    `updatedBy` int(11),
    `deletedBy` int(11)
);

CREATE TABLE `UserTokens` (
    id int(11) NOT NULL,
    amount varchar(255) DEFAULT '',
    `paymentDate` timestamp DEFAULT '2023-09-04 17:51:20.437',
    token double precision DEFAULT '0',
    `status` varchar(255) DEFAULT 'add',
    `isActive` bool DEFAULT 1,
    _status varchar(255),
    `deletedAt` timestamp,
    `createdAt` timestamp NOT NULL,
    `updatedAt` timestamp NOT NULL,
    `userId` int(11),
    `createdBy` int(11),
    `updatedBy` int(11),
    `deletedBy` int(11)
);

CREATE TABLE `Users` (
    id int(11) NOT NULL,
    email varchar(255) DEFAULT '',
    phone varchar(255) DEFAULT '',
    password varchar(255) DEFAULT '',
    `availableTokens` double precision DEFAULT '0',
    `isActive` bool DEFAULT 1,
    `firstLogin` bool DEFAULT 0,
    _status varchar(255),
    `deletedAt` timestamp,
    `createdAt` timestamp NOT NULL,
    `updatedAt` timestamp NOT NULL,
    `roleId` int(11),
    `deletedBy` int(11),
    `createdBy` int(11),
    `updatedBy` int(11)
);

CREATE TABLE `WhatsAppComms` (
    id int(11) NOT NULL,
    `type` varchar(255) DEFAULT ' ',
    `from` varchar(255) DEFAULT ' ',
    `to` varchar(255) DEFAULT ' ',
    `retryCount` varchar(255) DEFAULT ' ',
    variable JSON,
    `extraInfo` JSON,
    response text,
    _status varchar(255) DEFAULT ' ',
    `deletedAt` timestamp,
    `createdAt` timestamp NOT NULL,
    `updatedAt` timestamp NOT NULL,
    `createdBy` int(11),
    `updatedBy` int(11),
    `userId` int(11),
    `templateId` int(11),
    `deletedBy` int(11),
    `smsCommId` int(11)
);

ALTER TABLE `ActivityLogs`
    ADD CONSTRAINT ActivityLogs_pkey PRIMARY KEY (id);
ALTER TABLE `Applications`
    ADD CONSTRAINT Applications_pkey PRIMARY KEY (id);
ALTER TABLE `BusinessEntitySchemas`
    ADD CONSTRAINT BusinessEntitySchemas_pkey PRIMARY KEY (id);
ALTER TABLE `CommunicationTemplates`
    ADD CONSTRAINT CommunicationTemplates_pkey PRIMARY KEY (id);
ALTER TABLE `Coupons`
    ADD CONSTRAINT Coupons_pkey PRIMARY KEY (id);
ALTER TABLE `CronSchemas`
    ADD CONSTRAINT Cronschemas_pkey PRIMARY KEY (id);
ALTER TABLE `DataTableOptions`
    ADD CONSTRAINT DataTableOptions_pkey PRIMARY KEY (id);
ALTER TABLE `FormSchemas`
    ADD CONSTRAINT FormSchemas_pkey PRIMARY KEY (id);
ALTER TABLE `LoginLogs`
    ADD CONSTRAINT LoginLogs_pkey PRIMARY KEY (id);
ALTER TABLE `MailComms`
    ADD CONSTRAINT MailComms_pkey PRIMARY KEY (id);
ALTER TABLE `MasterData`
    ADD CONSTRAINT MasterData_pkey PRIMARY KEY (id);
ALTER TABLE `Otps`
    ADD CONSTRAINT Otps_pkey PRIMARY KEY (id);
ALTER TABLE `Pages`
    ADD CONSTRAINT Pages_pkey PRIMARY KEY (id);
ALTER TABLE `Permissions`
    ADD CONSTRAINT Permissions_pkey PRIMARY KEY (id);
ALTER TABLE `PersonContacts`
    ADD CONSTRAINT PersonContacts_pkey PRIMARY KEY (id);
ALTER TABLE `PersonRelations`
    ADD CONSTRAINT PersonRelations_pkey PRIMARY KEY (id);
ALTER TABLE `Persons`
    ADD CONSTRAINT Persons_pkey PRIMARY KEY (id);
ALTER TABLE `Relations`
    ADD CONSTRAINT Relations_pkey PRIMARY KEY (id);
ALTER TABLE `RolePermissions`
    ADD CONSTRAINT RolePermissions_pkey PRIMARY KEY (id);
ALTER TABLE `Roles`
    ADD CONSTRAINT Roles_pkey PRIMARY KEY (id);
ALTER TABLE `Routes`
    ADD CONSTRAINT Routes_pkey PRIMARY KEY (id);
ALTER TABLE `SequelizeMeta`
    ADD CONSTRAINT SequelizeMeta_pkey PRIMARY KEY (name);
ALTER TABLE `SessionManagers`
    ADD CONSTRAINT SessionManagers_pkey PRIMARY KEY (id);
ALTER TABLE `SettingMeta`
    ADD CONSTRAINT SettingMeta_pkey PRIMARY KEY (id);
ALTER TABLE `SmsComms`
    ADD CONSTRAINT SmsComms_pkey PRIMARY KEY (id);
ALTER TABLE `StringValues`
    ADD CONSTRAINT StringValues_pkey PRIMARY KEY (id);
ALTER TABLE `SupportedLanguages`
    ADD CONSTRAINT SupportedLanguages_pkey PRIMARY KEY (id);
ALTER TABLE `UserCoupons`
    ADD CONSTRAINT UserCoupons_pkey PRIMARY KEY (id);
ALTER TABLE `UserPermissions`
    ADD CONSTRAINT UserPermissions_pkey PRIMARY KEY (id);
ALTER TABLE `UserSettings`
    ADD CONSTRAINT UserSettings_pkey PRIMARY KEY (id);
ALTER TABLE `UserTokens`
    ADD CONSTRAINT UserTokens_pkey PRIMARY KEY (id);
ALTER TABLE `Users`
    ADD CONSTRAINT Users_pkey PRIMARY KEY (id);
ALTER TABLE `WhatsAppComms`
    ADD CONSTRAINT WhatsAppComms_pkey PRIMARY KEY (id);
ALTER TABLE `ApiRequestLogs`
    ADD CONSTRAINT api_request_logs_pkey PRIMARY KEY (id);
