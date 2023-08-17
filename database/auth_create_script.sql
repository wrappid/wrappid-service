-- Table: public.RolePermissions

-- DROP TABLE IF EXISTS public."RolePermissions";

CREATE TABLE IF NOT EXISTS public."RolePermissions"
(
    id integer NOT NULL DEFAULT nextval('"RolePermissions_id_seq"'::regclass),
    "isActive" boolean DEFAULT true,
    filter jsonb,
    priority integer DEFAULT 0,
    "isVisible" boolean DEFAULT true,
    _status character varying(255) COLLATE pg_catalog."default",
    "deletedAt" timestamp without time zone,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "permissionId" integer,
    "roleId" integer,
    "createdBy" integer,
    "updatedBy" integer,
    "deletedBy" integer,
    CONSTRAINT "RolePermissions_pkey" PRIMARY KEY (id),
    CONSTRAINT "RolePermissions_createdBy_fkey" FOREIGN KEY ("createdBy")
        REFERENCES public."Users" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL,
    CONSTRAINT "RolePermissions_deletedBy_fkey" FOREIGN KEY ("deletedBy")
        REFERENCES public."Users" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL,
    CONSTRAINT "RolePermissions_permissionId_fkey" FOREIGN KEY ("permissionId")
        REFERENCES public."Permissions" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL,
    CONSTRAINT "RolePermissions_roleId_fkey" FOREIGN KEY ("roleId")
        REFERENCES public."Roles" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL,
    CONSTRAINT "RolePermissions_updatedBy_fkey" FOREIGN KEY ("updatedBy")
        REFERENCES public."Users" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."RolePermissions"
    OWNER to postgres;


-- Table: public.Permissions

-- DROP TABLE IF EXISTS public."Permissions";

CREATE TABLE IF NOT EXISTS public."Permissions"
(
    id integer NOT NULL DEFAULT nextval('"Permissions_id_seq1"'::regclass),
    name character varying(255) COLLATE pg_catalog."default" DEFAULT ''::character varying,
    label character varying(255) COLLATE pg_catalog."default" DEFAULT ''::character varying,
    type character varying(255) COLLATE pg_catalog."default" DEFAULT 'menuitem'::character varying,
    link character varying(255) COLLATE pg_catalog."default" DEFAULT ''::character varying,
    icon character varying(255) COLLATE pg_catalog."default" DEFAULT ''::character varying,
    "appComponent" character varying(255) COLLATE pg_catalog."default" DEFAULT ''::character varying,
    _status character varying(255) COLLATE pg_catalog."default",
    "deletedAt" timestamp without time zone,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "createdBy" integer,
    "updatedBy" integer,
    "parentId" integer,
    "deletedBy" integer,
    CONSTRAINT "Permissions_pkey" PRIMARY KEY (id),
    CONSTRAINT "Permissions_createdBy_fkey" FOREIGN KEY ("createdBy")
        REFERENCES public."Users" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL,
    CONSTRAINT "Permissions_deletedBy_fkey" FOREIGN KEY ("deletedBy")
        REFERENCES public."Users" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL,
    CONSTRAINT "Permissions_parentId_fkey" FOREIGN KEY ("parentId")
        REFERENCES public."Permissions" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL,
    CONSTRAINT "Permissions_updatedBy_fkey" FOREIGN KEY ("updatedBy")
        REFERENCES public."Users" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."Permissions"
    OWNER to postgres;


-- Table: public.Users

-- DROP TABLE IF EXISTS public."Users";

CREATE TABLE IF NOT EXISTS public."Users"
(
    id integer NOT NULL DEFAULT nextval('"Users_id_seq"'::regclass),
    email character varying(255) COLLATE pg_catalog."default" DEFAULT ''::character varying,
    phone character varying(255) COLLATE pg_catalog."default" DEFAULT ''::character varying,
    password character varying(255) COLLATE pg_catalog."default" DEFAULT ''::character varying,
    "availableTokens" double precision DEFAULT '0'::double precision,
    "isActive" boolean DEFAULT true,
    "firstLogin" boolean DEFAULT false,
    _status character varying(255) COLLATE pg_catalog."default",
    "deletedAt" timestamp without time zone,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "roleId" integer,
    "deletedBy" integer,
    "createdBy" integer,
    "updatedBy" integer,
    CONSTRAINT "Users_pkey" PRIMARY KEY (id),
    CONSTRAINT "Users_createdBy_fkey" FOREIGN KEY ("createdBy")
        REFERENCES public."Users" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL,
    CONSTRAINT "Users_deletedBy_fkey" FOREIGN KEY ("deletedBy")
        REFERENCES public."Users" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL,
    CONSTRAINT "Users_roleId_fkey" FOREIGN KEY ("roleId")
        REFERENCES public."Roles" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL,
    CONSTRAINT "Users_updatedBy_fkey" FOREIGN KEY ("updatedBy")
        REFERENCES public."Users" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."Users"
    OWNER to postgres;

-- Table: public.UserTokens

-- DROP TABLE IF EXISTS public."UserTokens";

CREATE TABLE IF NOT EXISTS public."UserTokens"
(
    id integer NOT NULL DEFAULT nextval('"UserTokens_id_seq"'::regclass),
    amount character varying(255) COLLATE pg_catalog."default" DEFAULT ''::character varying,
    "paymentDate" timestamp without time zone DEFAULT '2023-03-07 13:58:34.175'::timestamp without time zone,
    token double precision DEFAULT '0'::double precision,
    status character varying(255) COLLATE pg_catalog."default" DEFAULT 'add'::character varying,
    "isActive" boolean DEFAULT true,
    _status character varying(255) COLLATE pg_catalog."default",
    "deletedAt" timestamp without time zone,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "userId" integer,
    "createdBy" integer,
    "updatedBy" integer,
    "deletedBy" integer,
    CONSTRAINT "UserTokens_pkey" PRIMARY KEY (id),
    CONSTRAINT "UserTokens_createdBy_fkey" FOREIGN KEY ("createdBy")
        REFERENCES public."Users" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL,
    CONSTRAINT "UserTokens_deletedBy_fkey" FOREIGN KEY ("deletedBy")
        REFERENCES public."Users" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL,
    CONSTRAINT "UserTokens_updatedBy_fkey" FOREIGN KEY ("updatedBy")
        REFERENCES public."Users" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL,
    CONSTRAINT "UserTokens_userId_fkey" FOREIGN KEY ("userId")
        REFERENCES public."Users" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."UserTokens"
    OWNER to postgres;   


-- Table: public.UserSettings

-- DROP TABLE IF EXISTS public."UserSettings";

CREATE TABLE IF NOT EXISTS public."UserSettings"
(
    id integer NOT NULL DEFAULT nextval('"UserSettings_id_seq"'::regclass),
    name character varying(255) COLLATE pg_catalog."default",
    label character varying(255) COLLATE pg_catalog."default" DEFAULT ''::character varying,
    value json DEFAULT '{}'::json,
    _status character varying(255) COLLATE pg_catalog."default",
    "deletedAt" timestamp without time zone,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "userId" integer,
    "createdBy" integer,
    "updatedBy" integer,
    "deletedBy" integer,
    CONSTRAINT "UserSettings_pkey" PRIMARY KEY (id),
    CONSTRAINT "UserSettings_createdBy_fkey" FOREIGN KEY ("createdBy")
        REFERENCES public."Users" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL,
    CONSTRAINT "UserSettings_deletedBy_fkey" FOREIGN KEY ("deletedBy")
        REFERENCES public."Users" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL,
    CONSTRAINT "UserSettings_updatedBy_fkey" FOREIGN KEY ("updatedBy")
        REFERENCES public."Users" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL,
    CONSTRAINT "UserSettings_userId_fkey" FOREIGN KEY ("userId")
        REFERENCES public."Users" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."UserSettings"
    OWNER to postgres;     

-- Table: public.UserPermissions

-- DROP TABLE IF EXISTS public."UserPermissions";

CREATE TABLE IF NOT EXISTS public."UserPermissions"
(
    id integer NOT NULL DEFAULT nextval('"UserPermissions_id_seq"'::regclass),
    "isActive" boolean DEFAULT true,
    filter jsonb,
    priority integer DEFAULT 0,
    _status character varying(255) COLLATE pg_catalog."default",
    "deletedAt" timestamp without time zone,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "permissionId" integer,
    "createdBy" integer,
    "updatedBy" integer,
    "userId" integer,
    "deletedBy" integer,
    CONSTRAINT "UserPermissions_pkey" PRIMARY KEY (id),
    CONSTRAINT "UserPermissions_createdBy_fkey" FOREIGN KEY ("createdBy")
        REFERENCES public."Users" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL,
    CONSTRAINT "UserPermissions_deletedBy_fkey" FOREIGN KEY ("deletedBy")
        REFERENCES public."Users" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL,
    CONSTRAINT "UserPermissions_permissionId_fkey" FOREIGN KEY ("permissionId")
        REFERENCES public."Permissions" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL,
    CONSTRAINT "UserPermissions_updatedBy_fkey" FOREIGN KEY ("updatedBy")
        REFERENCES public."Users" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL,
    CONSTRAINT "UserPermissions_userId_fkey" FOREIGN KEY ("userId")
        REFERENCES public."Users" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."UserPermissions"
    OWNER to postgres;  

-- Table: public.UserPayments

-- DROP TABLE IF EXISTS public."UserPayments";

CREATE TABLE IF NOT EXISTS public."UserPayments"
(
    id integer NOT NULL DEFAULT nextval('"UserPayments_id_seq"'::regclass),
    amount character varying(255) COLLATE pg_catalog."default" DEFAULT ''::character varying,
    type character varying(255) COLLATE pg_catalog."default" DEFAULT 'debit'::character varying,
    "paymentDate" timestamp without time zone DEFAULT '2023-03-07 13:58:34.17'::timestamp without time zone,
    token double precision DEFAULT '0'::double precision,
    status character varying(255) COLLATE pg_catalog."default" DEFAULT 'pending'::character varying,
    "getwayData" jsonb,
    "isActive" boolean DEFAULT true,
    _status character varying(255) COLLATE pg_catalog."default",
    "deletedAt" timestamp without time zone,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "userId" integer,
    "paymentGetwayId" integer,
    "couponId" integer,
    "createdBy" integer,
    "updatedBy" integer,
    "deletedBy" integer,
    CONSTRAINT "UserPayments_pkey" PRIMARY KEY (id),
    CONSTRAINT "UserPayments_couponId_fkey" FOREIGN KEY ("couponId")
        REFERENCES public."Coupons" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL,
    CONSTRAINT "UserPayments_createdBy_fkey" FOREIGN KEY ("createdBy")
        REFERENCES public."Users" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL,
    CONSTRAINT "UserPayments_deletedBy_fkey" FOREIGN KEY ("deletedBy")
        REFERENCES public."Users" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL,
    CONSTRAINT "UserPayments_paymentGetwayId_fkey" FOREIGN KEY ("paymentGetwayId")
        REFERENCES public."PaymentGateways" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL,
    CONSTRAINT "UserPayments_updatedBy_fkey" FOREIGN KEY ("updatedBy")
        REFERENCES public."Users" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL,
    CONSTRAINT "UserPayments_userId_fkey" FOREIGN KEY ("userId")
        REFERENCES public."Users" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."UserPayments"
    OWNER to postgres;

-- Table: public.UserCoupons

-- DROP TABLE IF EXISTS public."UserCoupons";

CREATE TABLE IF NOT EXISTS public."UserCoupons"
(
    id integer NOT NULL DEFAULT nextval('"UserCoupons_id_seq"'::regclass),
    info character varying(255) COLLATE pg_catalog."default" DEFAULT ''::character varying,
    "extraInfo" jsonb,
    _status character varying(255) COLLATE pg_catalog."default",
    "deletedAt" timestamp without time zone,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "couponId" integer,
    "userId" integer,
    "createdBy" integer,
    "updatedBy" integer,
    "deletedBy" integer,
    CONSTRAINT "UserCoupons_pkey" PRIMARY KEY (id),
    CONSTRAINT "UserCoupons_couponId_fkey" FOREIGN KEY ("couponId")
        REFERENCES public."Coupons" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL,
    CONSTRAINT "UserCoupons_createdBy_fkey" FOREIGN KEY ("createdBy")
        REFERENCES public."Users" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL,
    CONSTRAINT "UserCoupons_deletedBy_fkey" FOREIGN KEY ("deletedBy")
        REFERENCES public."Users" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL,
    CONSTRAINT "UserCoupons_updatedBy_fkey" FOREIGN KEY ("updatedBy")
        REFERENCES public."Users" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL,
    CONSTRAINT "UserCoupons_userId_fkey" FOREIGN KEY ("userId")
        REFERENCES public."Users" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."UserCoupons"
    OWNER to postgres;    


-- Table: public.Roles

-- DROP TABLE IF EXISTS public."Roles";

CREATE TABLE IF NOT EXISTS public."Roles"
(
    id integer NOT NULL DEFAULT nextval('"Roles_id_seq"'::regclass),
    role character varying(255) COLLATE pg_catalog."default" DEFAULT ''::character varying,
    priority integer DEFAULT 0,
    "isActive" boolean DEFAULT true,
    _status character varying(255) COLLATE pg_catalog."default",
    "deletedAt" timestamp without time zone,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "createdBy" integer,
    "updatedBy" integer,
    "deletedBy" integer,
    CONSTRAINT "Roles_pkey" PRIMARY KEY (id),
    CONSTRAINT "Roles_createdBy_fkey" FOREIGN KEY ("createdBy")
        REFERENCES public."Users" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL,
    CONSTRAINT "Roles_deletedBy_fkey" FOREIGN KEY ("deletedBy")
        REFERENCES public."Users" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL,
    CONSTRAINT "Roles_updatedBy_fkey" FOREIGN KEY ("updatedBy")
        REFERENCES public."Users" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."Roles"
    OWNER to postgres;


-- Table: public.Relations

-- DROP TABLE IF EXISTS public."Relations";

CREATE TABLE IF NOT EXISTS public."Relations"
(
    id integer NOT NULL DEFAULT nextval('"Relations_id_seq"'::regclass),
    name character varying(255) COLLATE pg_catalog."default" DEFAULT ''::character varying,
    "extraInfo" jsonb,
    "isActive" boolean DEFAULT true,
    _status character varying(255) COLLATE pg_catalog."default",
    "deletedAt" timestamp without time zone,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "createdBy" integer,
    "updatedBy" integer,
    "deletedBy" integer,
    CONSTRAINT "Relations_pkey" PRIMARY KEY (id),
    CONSTRAINT "Relations_createdBy_fkey" FOREIGN KEY ("createdBy")
        REFERENCES public."Users" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL,
    CONSTRAINT "Relations_deletedBy_fkey" FOREIGN KEY ("deletedBy")
        REFERENCES public."Users" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL,
    CONSTRAINT "Relations_updatedBy_fkey" FOREIGN KEY ("updatedBy")
        REFERENCES public."Users" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."Relations"
    OWNER to postgres;


-- Table: public.Persons

-- DROP TABLE IF EXISTS public."Persons";

CREATE TABLE IF NOT EXISTS public."Persons"
(
    id integer NOT NULL DEFAULT nextval('"Persons_id_seq"'::regclass),
    "firstName" character varying(255) COLLATE pg_catalog."default" DEFAULT ''::character varying,
    "middleName" character varying(255) COLLATE pg_catalog."default" DEFAULT ''::character varying,
    "lastName" character varying(255) COLLATE pg_catalog."default" DEFAULT ''::character varying,
    "photoUrl" character varying(255) COLLATE pg_catalog."default" DEFAULT ''::character varying,
    "extraInfo" jsonb,
    height double precision,
    weight double precision,
    rating double precision,
    "medicalId" character varying(255) COLLATE pg_catalog."default" DEFAULT ''::character varying,
    "phoneVerified" boolean DEFAULT false,
    "emailVerified" boolean DEFAULT false,
    "isActive" boolean DEFAULT true,
    "isVerified" boolean DEFAULT false,
    dob timestamp without time zone DEFAULT '2023-03-07 17:10:05.71'::timestamp without time zone,
    gender character varying(255) COLLATE pg_catalog."default" DEFAULT ''::character varying,
    "profileId" character varying(255) COLLATE pg_catalog."default" DEFAULT ''::character varying,
    "userInvitationToken" character varying(255) COLLATE pg_catalog."default" DEFAULT ''::character varying,
    website character varying(255) COLLATE pg_catalog."default" DEFAULT ''::character varying,
    _status character varying(255) COLLATE pg_catalog."default",
    "deletedAt" timestamp without time zone,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "departmentId" integer,
    "userId" integer,
    "createdBy" integer,
    "updatedBy" integer,
    "deletedBy" integer,
    CONSTRAINT "Persons_pkey" PRIMARY KEY (id),
    CONSTRAINT "Persons_createdBy_fkey" FOREIGN KEY ("createdBy")
        REFERENCES public."Users" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL,
    CONSTRAINT "Persons_deletedBy_fkey" FOREIGN KEY ("deletedBy")
        REFERENCES public."Users" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL,
    CONSTRAINT "Persons_departmentId_fkey" FOREIGN KEY ("departmentId")
        REFERENCES public."Departments" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL,
    CONSTRAINT "Persons_updatedBy_fkey" FOREIGN KEY ("updatedBy")
        REFERENCES public."Users" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL,
    CONSTRAINT "Persons_userId_fkey" FOREIGN KEY ("userId")
        REFERENCES public."Users" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."Persons"
    OWNER to postgres; 


-- Table: public.PersonRelations

-- DROP TABLE IF EXISTS public."PersonRelations";

CREATE TABLE IF NOT EXISTS public."PersonRelations"
(
    id integer NOT NULL DEFAULT nextval('"PersonRelations_id_seq"'::regclass),
    "extraInfo" jsonb,
    "isActive" boolean DEFAULT true,
    _status character varying(255) COLLATE pg_catalog."default",
    "deletedAt" timestamp without time zone,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "personId" integer,
    "relatedPersonId" integer,
    "relationId" integer,
    "createdBy" integer,
    "updatedBy" integer,
    "deletedBy" integer,
    CONSTRAINT "PersonRelations_pkey" PRIMARY KEY (id),
    CONSTRAINT "PersonRelations_createdBy_fkey" FOREIGN KEY ("createdBy")
        REFERENCES public."Users" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL,
    CONSTRAINT "PersonRelations_deletedBy_fkey" FOREIGN KEY ("deletedBy")
        REFERENCES public."Users" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL,
    CONSTRAINT "PersonRelations_personId_fkey" FOREIGN KEY ("personId")
        REFERENCES public."Persons" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL,
    CONSTRAINT "PersonRelations_relatedPersonId_fkey" FOREIGN KEY ("relatedPersonId")
        REFERENCES public."Persons" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL,
    CONSTRAINT "PersonRelations_relationId_fkey" FOREIGN KEY ("relationId")
        REFERENCES public."Relations" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL,
    CONSTRAINT "PersonRelations_updatedBy_fkey" FOREIGN KEY ("updatedBy")
        REFERENCES public."Users" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."PersonRelations"
    OWNER to postgres;


-- Table: public.LoginLogs

-- DROP TABLE IF EXISTS public."LoginLogs";

CREATE TABLE IF NOT EXISTS public."LoginLogs"
(
    id integer NOT NULL DEFAULT nextval('"LoginLogs_id_seq"'::regclass),
    route character varying(255) COLLATE pg_catalog."default" DEFAULT NULL::character varying,
    message character varying(255) COLLATE pg_catalog."default" DEFAULT NULL::character varying,
    status character varying(255) COLLATE pg_catalog."default" DEFAULT NULL::character varying,
    "extraInfo" jsonb,
    "isActive" boolean DEFAULT true,
    _status character varying(255) COLLATE pg_catalog."default",
    "deletedAt" timestamp without time zone,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "createdBy" integer,
    "updatedBy" integer,
    "userId" integer,
    "deletedBy" integer,
    CONSTRAINT "LoginLogs_pkey" PRIMARY KEY (id),
    CONSTRAINT "LoginLogs_createdBy_fkey" FOREIGN KEY ("createdBy")
        REFERENCES public."Users" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL,
    CONSTRAINT "LoginLogs_deletedBy_fkey" FOREIGN KEY ("deletedBy")
        REFERENCES public."Users" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL,
    CONSTRAINT "LoginLogs_updatedBy_fkey" FOREIGN KEY ("updatedBy")
        REFERENCES public."Users" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL,
    CONSTRAINT "LoginLogs_userId_fkey" FOREIGN KEY ("userId")
        REFERENCES public."Users" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."LoginLogs"
    OWNER to postgres;


-- Table: public.SessionManagers

-- DROP TABLE IF EXISTS public."SessionManagers";

CREATE TABLE IF NOT EXISTS public."SessionManagers"
(
    id integer NOT NULL DEFAULT nextval('"SessionManagers_id_seq"'::regclass),
    "refreshToken" text COLLATE pg_catalog."default" DEFAULT ''::text,
    "deviceId" character varying(255) COLLATE pg_catalog."default" DEFAULT ''::character varying,
    name character varying(255) COLLATE pg_catalog."default" DEFAULT ''::character varying,
    "extraInfo" jsonb,
    "isActive" boolean DEFAULT true,
    _status character varying(255) COLLATE pg_catalog."default",
    "deletedAt" timestamp without time zone,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "createdBy" integer,
    "updatedBy" integer,
    "userId" integer,
    "deletedBy" integer,
    CONSTRAINT "SessionManagers_pkey" PRIMARY KEY (id),
    CONSTRAINT "SessionManagers_createdBy_fkey" FOREIGN KEY ("createdBy")
        REFERENCES public."Users" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL,
    CONSTRAINT "SessionManagers_deletedBy_fkey" FOREIGN KEY ("deletedBy")
        REFERENCES public."Users" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL,
    CONSTRAINT "SessionManagers_updatedBy_fkey" FOREIGN KEY ("updatedBy")
        REFERENCES public."Users" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL,
    CONSTRAINT "SessionManagers_userId_fkey" FOREIGN KEY ("userId")
        REFERENCES public."Users" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."SessionManagers"
    OWNER to postgres;


-- Table: public.SettingMeta

-- DROP TABLE IF EXISTS public."SettingMeta";

CREATE TABLE IF NOT EXISTS public."SettingMeta"
(
    id integer NOT NULL DEFAULT nextval('"SettingMeta_id_seq"'::regclass),
    name character varying(255) COLLATE pg_catalog."default",
    label character varying(255) COLLATE pg_catalog."default" DEFAULT ''::character varying,
    status character varying(255) COLLATE pg_catalog."default" DEFAULT 'Active'::character varying,
    "isActive" boolean DEFAULT true,
    value json DEFAULT '{}'::json,
    _status character varying(255) COLLATE pg_catalog."default",
    "deletedAt" timestamp without time zone,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "createdBy" integer,
    "updatedBy" integer,
    "deletedBy" integer,
    CONSTRAINT "SettingMeta_pkey" PRIMARY KEY (id),
    CONSTRAINT "SettingMeta_name_key" UNIQUE (name),
    CONSTRAINT "SettingMeta_name_key1" UNIQUE (name),
    CONSTRAINT "SettingMeta_name_key10" UNIQUE (name),
    CONSTRAINT "SettingMeta_name_key2" UNIQUE (name),
    CONSTRAINT "SettingMeta_name_key3" UNIQUE (name),
    CONSTRAINT "SettingMeta_name_key4" UNIQUE (name),
    CONSTRAINT "SettingMeta_name_key5" UNIQUE (name),
    CONSTRAINT "SettingMeta_name_key6" UNIQUE (name),
    CONSTRAINT "SettingMeta_name_key7" UNIQUE (name),
    CONSTRAINT "SettingMeta_name_key8" UNIQUE (name),
    CONSTRAINT "SettingMeta_name_key9" UNIQUE (name),
    CONSTRAINT "SettingMeta_createdBy_fkey" FOREIGN KEY ("createdBy")
        REFERENCES public."Users" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL,
    CONSTRAINT "SettingMeta_deletedBy_fkey" FOREIGN KEY ("deletedBy")
        REFERENCES public."Users" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL,
    CONSTRAINT "SettingMeta_updatedBy_fkey" FOREIGN KEY ("updatedBy")
        REFERENCES public."Users" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."SettingMeta"
    OWNER to postgres;


-- Table: public.PersonContacts

-- DROP TABLE IF EXISTS public."PersonContacts";

CREATE TABLE IF NOT EXISTS public."PersonContacts"
(
    id integer NOT NULL DEFAULT nextval('"PersonContacts_id_seq"'::regclass),
    type character varying(255) COLLATE pg_catalog."default" DEFAULT ''::character varying,
    data character varying(255) COLLATE pg_catalog."default" DEFAULT ''::character varying,
    verified boolean DEFAULT false,
    "primaryFlag" boolean DEFAULT false,
    "notificationFlag" boolean DEFAULT false,
    "isActive" boolean DEFAULT true,
    _status character varying(255) COLLATE pg_catalog."default",
    "deletedAt" timestamp without time zone,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "personId" integer,
    "createdBy" integer,
    "updatedBy" integer,
    "deletedBy" integer,
    CONSTRAINT "PersonContacts_pkey" PRIMARY KEY (id),
    CONSTRAINT "PersonContacts_createdBy_fkey" FOREIGN KEY ("createdBy")
        REFERENCES public."Users" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL,
    CONSTRAINT "PersonContacts_deletedBy_fkey" FOREIGN KEY ("deletedBy")
        REFERENCES public."Users" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL,
    CONSTRAINT "PersonContacts_personId_fkey" FOREIGN KEY ("personId")
        REFERENCES public."Persons" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL,
    CONSTRAINT "PersonContacts_updatedBy_fkey" FOREIGN KEY ("updatedBy")
        REFERENCES public."Users" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."PersonContacts"
    OWNER to postgres;    


-- Table: public.PaymentGateways

-- DROP TABLE IF EXISTS public."PaymentGateways";

CREATE TABLE IF NOT EXISTS public."PaymentGateways"
(
    id integer NOT NULL DEFAULT nextval('"PaymentGateways_id_seq"'::regclass),
    name character varying(255) COLLATE pg_catalog."default" DEFAULT ''::character varying,
    label character varying(255) COLLATE pg_catalog."default" DEFAULT ''::character varying,
    "extraOb" jsonb,
    "isActive" boolean DEFAULT true,
    _status character varying(255) COLLATE pg_catalog."default",
    "deletedAt" timestamp without time zone,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "createdBy" integer,
    "updatedBy" integer,
    "deletedBy" integer,
    CONSTRAINT "PaymentGateways_pkey" PRIMARY KEY (id),
    CONSTRAINT "PaymentGateways_createdBy_fkey" FOREIGN KEY ("createdBy")
        REFERENCES public."Users" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL,
    CONSTRAINT "PaymentGateways_deletedBy_fkey" FOREIGN KEY ("deletedBy")
        REFERENCES public."Users" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL,
    CONSTRAINT "PaymentGateways_updatedBy_fkey" FOREIGN KEY ("updatedBy")
        REFERENCES public."Users" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."PaymentGateways"
    OWNER to postgres;


-- Table: public.Coupons

-- DROP TABLE IF EXISTS public."Coupons";

CREATE TABLE IF NOT EXISTS public."Coupons"
(
    id integer NOT NULL DEFAULT nextval('"Coupons_id_seq"'::regclass),
    "couponId" character varying(255) COLLATE pg_catalog."default" DEFAULT ''::character varying,
    name character varying(255) COLLATE pg_catalog."default" DEFAULT ''::character varying,
    label character varying(255) COLLATE pg_catalog."default" DEFAULT ''::character varying,
    description text COLLATE pg_catalog."default" DEFAULT ''::text,
    rule jsonb DEFAULT '{"upto": "150", "minAmount": "100", "discountType": 0, "discountPercentage": "10%"}'::jsonb,
    "validFrom" timestamp without time zone DEFAULT '2023-07-06 12:00:50.772'::timestamp without time zone,
    "validUpto" timestamp without time zone DEFAULT '2023-07-06 12:00:50.772'::timestamp without time zone,
    "isActive" boolean DEFAULT true,
    _status character varying(255) COLLATE pg_catalog."default",
    "deletedAt" timestamp without time zone,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "userId" integer,
    "createdBy" integer,
    "updatedBy" integer,
    "deletedBy" integer,
    CONSTRAINT "Coupons_pkey" PRIMARY KEY (id),
    CONSTRAINT "Coupons_createdBy_fkey" FOREIGN KEY ("createdBy")
        REFERENCES public."Users" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL,
    CONSTRAINT "Coupons_deletedBy_fkey" FOREIGN KEY ("deletedBy")
        REFERENCES public."Users" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL,
    CONSTRAINT "Coupons_updatedBy_fkey" FOREIGN KEY ("updatedBy")
        REFERENCES public."Users" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL,
    CONSTRAINT "Coupons_userId_fkey" FOREIGN KEY ("userId")
        REFERENCES public."Users" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."Coupons"
    OWNER to postgres;


 -- Table: public.Departments

-- DROP TABLE IF EXISTS public."Departments";

CREATE TABLE IF NOT EXISTS public."Departments"
(
    id integer NOT NULL DEFAULT nextval('"Departments_id_seq"'::regclass),
    name character varying(255) COLLATE pg_catalog."default" DEFAULT ''::character varying,
    "otherName" character varying(255) COLLATE pg_catalog."default" DEFAULT ''::character varying,
    "extraInfo" jsonb,
    "isActive" boolean DEFAULT true,
    _status character varying(255) COLLATE pg_catalog."default",
    "deletedAt" timestamp without time zone,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "parentId" integer,
    "createdBy" integer,
    "updatedBy" integer,
    "deletedBy" integer,
    CONSTRAINT "Departments_pkey" PRIMARY KEY (id),
    CONSTRAINT "Departments_createdBy_fkey" FOREIGN KEY ("createdBy")
        REFERENCES public."Users" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL,
    CONSTRAINT "Departments_deletedBy_fkey" FOREIGN KEY ("deletedBy")
        REFERENCES public."Users" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL,
    CONSTRAINT "Departments_parentId_fkey" FOREIGN KEY ("parentId")
        REFERENCES public."Departments" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL,
    CONSTRAINT "Departments_updatedBy_fkey" FOREIGN KEY ("updatedBy")
        REFERENCES public."Users" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."Departments"
    OWNER to postgres;



/*
RolePermission 
Permissions 
Users  
UserTokens 
UserSettings 
UserPermissions  
UserPayments  
UserCoupons  
Roles   
Relations 
Persons  
PersonRelations  
LoginLogs   
SessionManagers   
SettingMeta  
PersonContacts 

UserPayments-> PaymentGateways
UserCoupons-> Coupons
Persons -> Departments
*/