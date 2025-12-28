import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_static_map_variant" AS ENUM('default', 'mono', 'mono-black');
  CREATE TYPE "public"."enum__pages_v_blocks_static_map_variant" AS ENUM('default', 'mono', 'mono-black');
  CREATE TABLE "pages_blocks_static_map_markers" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"latitude" numeric,
  	"longitude" numeric,
  	"title" varchar,
  	"subtitle" varchar
  );
  
  CREATE TABLE "pages_blocks_static_map" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"variant" "enum_pages_blocks_static_map_variant" DEFAULT 'default',
  	"initial_view_latitude" numeric,
  	"initial_view_longitude" numeric,
  	"initial_view_zoom" numeric DEFAULT 14,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_static_map_markers" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"latitude" numeric,
  	"longitude" numeric,
  	"title" varchar,
  	"subtitle" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_static_map" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"variant" "enum__pages_v_blocks_static_map_variant" DEFAULT 'default',
  	"initial_view_latitude" numeric,
  	"initial_view_longitude" numeric,
  	"initial_view_zoom" numeric DEFAULT 14,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "pages_blocks_static_map_markers" ADD CONSTRAINT "pages_blocks_static_map_markers_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_static_map"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_static_map" ADD CONSTRAINT "pages_blocks_static_map_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_static_map_markers" ADD CONSTRAINT "_pages_v_blocks_static_map_markers_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_static_map"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_static_map" ADD CONSTRAINT "_pages_v_blocks_static_map_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_static_map_markers_order_idx" ON "pages_blocks_static_map_markers" USING btree ("_order");
  CREATE INDEX "pages_blocks_static_map_markers_parent_id_idx" ON "pages_blocks_static_map_markers" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_static_map_order_idx" ON "pages_blocks_static_map" USING btree ("_order");
  CREATE INDEX "pages_blocks_static_map_parent_id_idx" ON "pages_blocks_static_map" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_static_map_path_idx" ON "pages_blocks_static_map" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_static_map_markers_order_idx" ON "_pages_v_blocks_static_map_markers" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_static_map_markers_parent_id_idx" ON "_pages_v_blocks_static_map_markers" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_static_map_order_idx" ON "_pages_v_blocks_static_map" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_static_map_parent_id_idx" ON "_pages_v_blocks_static_map" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_static_map_path_idx" ON "_pages_v_blocks_static_map" USING btree ("_path");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_static_map_markers" CASCADE;
  DROP TABLE "pages_blocks_static_map" CASCADE;
  DROP TABLE "_pages_v_blocks_static_map_markers" CASCADE;
  DROP TABLE "_pages_v_blocks_static_map" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_static_map_variant";
  DROP TYPE "public"."enum__pages_v_blocks_static_map_variant";`)
}
