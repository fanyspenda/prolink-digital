ALTER TABLE "public"."company" ALTER COLUMN "id" TYPE integer;
ALTER TABLE ONLY "public"."company" ALTER COLUMN "id" SET DEFAULT 'nextval('company_id_seq'::regclass)';
