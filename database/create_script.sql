-- Table: public.FileHandlers

-- DROP TABLE IF EXISTS public."FileHandlers";

CREATE TABLE IF NOT EXISTS public."FileHandlers"
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    "fileUrl" text COLLATE pg_catalog."default",
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone,
    CONSTRAINT "FileHandler_pkey" PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."FileHandlers"
    OWNER to postgres;



-- Table: public.CronSchemas

-- DROP TABLE IF EXISTS public."CronSchemas";

CREATE TABLE IF NOT EXISTS public."CronSchemas"
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    name text COLLATE pg_catalog."default",
    expression text COLLATE pg_catalog."default",
    "cronModule" text COLLATE pg_catalog."default",
    "createdAt" time with time zone,
    "updatedAt" time with time zone,
    CONSTRAINT "Cronschemas_pkey" PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."CronSchemas"
    OWNER to postgres;



-- Table: public.ApirequestLogs

-- DROP TABLE IF EXISTS public."ApirequestLogs";

CREATE TABLE IF NOT EXISTS public."ApiRequestLogs"
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    access_key text COLLATE pg_catalog."default",
    endpoint text COLLATE pg_catalog."default",
    request text COLLATE pg_catalog."default",
    header_stack jsonb,
    response jsonb,
    start_ts timestamp with time zone,
    created_ts timestamp with time zone,
    updated_ts timestamp with time zone,
    end_ts timestamp with time zone,
    req_body jsonb,
    ip text COLLATE pg_catalog."default",
    response_status text COLLATE pg_catalog."default",
    response_header jsonb,
    CONSTRAINT api_request_logs_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."ApiRequestLogs"
    OWNER to postgres;