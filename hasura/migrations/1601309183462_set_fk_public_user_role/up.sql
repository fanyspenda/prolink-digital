alter table "public"."user"
           add constraint "user_role_fkey"
           foreign key ("role")
           references "public"."user_role"
           ("name") on update restrict on delete restrict;
