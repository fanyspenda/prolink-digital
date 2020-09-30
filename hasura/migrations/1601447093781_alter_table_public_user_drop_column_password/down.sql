ALTER TABLE "public"."user" ADD COLUMN "password" text;
ALTER TABLE "public"."user" ALTER COLUMN "password" DROP NOT NULL;
