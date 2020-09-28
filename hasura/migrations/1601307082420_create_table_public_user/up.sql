CREATE TABLE "public"."user"("id" text NOT NULL, "name" text NOT NULL, "username" text NOT NULL, "password" text NOT NULL, "role" text NOT NULL DEFAULT 'user', PRIMARY KEY ("id") , UNIQUE ("id"));
