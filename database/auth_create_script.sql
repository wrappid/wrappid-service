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


-- Table: public.Otps

-- DROP TABLE IF EXISTS public."Otps";

CREATE TABLE IF NOT EXISTS public."Otps"
(
    id integer NOT NULL DEFAULT nextval('"Otps_id_seq"'::regclass),
    otp character varying(255) COLLATE pg_catalog."default" DEFAULT NULL::character varying,
    type character varying(255) COLLATE pg_catalog."default" DEFAULT 'sms'::character varying,
    "extraInfo" jsonb,
    "isActive" boolean DEFAULT true,
    _status character varying(255) COLLATE pg_catalog."default",
    "deletedAt" timestamp without time zone,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "mailCommId" integer,
    "createdBy" integer,
    "updatedBy" integer,
    "userId" integer,
    "smsCommId" integer,
    "deletedBy" integer,
    CONSTRAINT "Otps_pkey" PRIMARY KEY (id),
    CONSTRAINT "Otps_createdBy_fkey" FOREIGN KEY ("createdBy")
        REFERENCES public."Users" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL,
    CONSTRAINT "Otps_deletedBy_fkey" FOREIGN KEY ("deletedBy")
        REFERENCES public."Users" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL,
    CONSTRAINT "Otps_mailCommId_fkey" FOREIGN KEY ("mailCommId")
        REFERENCES public."MailComms" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL,
    CONSTRAINT "Otps_smsCommId_fkey" FOREIGN KEY ("smsCommId")
        REFERENCES public."MailComms" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL,
    CONSTRAINT "Otps_updatedBy_fkey" FOREIGN KEY ("updatedBy")
        REFERENCES public."Users" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL,
    CONSTRAINT "Otps_userId_fkey" FOREIGN KEY ("userId")
        REFERENCES public."Users" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."Otps"
    OWNER to postgres;


    



/*
RolePermission
Permissions
Users
usersTokens
User settings
Userpermissions
User payments
UserCoupns
Roles
Relation
Persons
PersonRelation
LoginLogs
SessionManagers
SettingsMeta
PersonsContacts
*/