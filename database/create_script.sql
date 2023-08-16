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