
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


ALTER TABLE `Applications`
    ADD CONSTRAINT Applications_pkey PRIMARY KEY (id);
ALTER TABLE `BusinessEntitySchemas`
    ADD CONSTRAINT BusinessEntitySchemas_pkey PRIMARY KEY (id);
ALTER TABLE `CommunicationTemplates`
    ADD CONSTRAINT CommunicationTemplates_pkey PRIMARY KEY (id);
ALTER TABLE `CronSchemas`
    ADD CONSTRAINT Cronschemas_pkey PRIMARY KEY (id);
ALTER TABLE `DataTableOptions`
    ADD CONSTRAINT DataTableOptions_pkey PRIMARY KEY (id);
ALTER TABLE `FormSchemas`
    ADD CONSTRAINT FormSchemas_pkey PRIMARY KEY (id);
ALTER TABLE `MasterData`
    ADD CONSTRAINT MasterData_pkey PRIMARY KEY (id);
ALTER TABLE `Otps`
    ADD CONSTRAINT Otps_pkey PRIMARY KEY (id);
ALTER TABLE `Pages`
    ADD CONSTRAINT Pages_pkey PRIMARY KEY (id);
ALTER TABLE `Routes`
    ADD CONSTRAINT Routes_pkey PRIMARY KEY (id);
ALTER TABLE `SettingMeta`
    ADD CONSTRAINT SettingMeta_pkey PRIMARY KEY (id);
ALTER TABLE `StringValues`
    ADD CONSTRAINT StringValues_pkey PRIMARY KEY (id);
ALTER TABLE `SupportedLanguages`
    ADD CONSTRAINT SupportedLanguages_pkey PRIMARY KEY (id);
    ADD CONSTRAINT WhatsAppComms_pkey PRIMARY KEY (id);
ALTER TABLE `ApiRequestLogs`
    ADD CONSTRAINT api_request_logs_pkey PRIMARY KEY (id);
