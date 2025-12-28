import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_header_nav_items_sub_items_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_header_nav_items_item_type" AS ENUM('link', 'parent');
  CREATE TABLE "header_nav_items_sub_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_header_nav_items_sub_items_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar
  );
  
  ALTER TABLE "header_nav_items" ADD COLUMN "item_type" "enum_header_nav_items_item_type" DEFAULT 'link';
  ALTER TABLE "header_nav_items_sub_items" ADD CONSTRAINT "header_nav_items_sub_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header_nav_items"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "header_nav_items_sub_items_order_idx" ON "header_nav_items_sub_items" USING btree ("_order");
  CREATE INDEX "header_nav_items_sub_items_parent_id_idx" ON "header_nav_items_sub_items" USING btree ("_parent_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "header_nav_items_sub_items" CASCADE;
  ALTER TABLE "header_nav_items" DROP COLUMN "item_type";
  DROP TYPE "public"."enum_header_nav_items_sub_items_link_type";
  DROP TYPE "public"."enum_header_nav_items_item_type";`)
}
