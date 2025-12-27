import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_cta_cta_type" AS ENUM('links', 'modal');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_cta_type" AS ENUM('links', 'modal');
  ALTER TYPE "public"."enum_pages_blocks_archive_style" ADD VALUE 'cards';
  ALTER TYPE "public"."enum_pages_blocks_archive_style" ADD VALUE 'list';
  ALTER TYPE "public"."enum__pages_v_blocks_archive_style" ADD VALUE 'cards';
  ALTER TYPE "public"."enum__pages_v_blocks_archive_style" ADD VALUE 'list';
  ALTER TABLE "pages_blocks_cta" ADD COLUMN "cta_type" "enum_pages_blocks_cta_cta_type" DEFAULT 'links';
  ALTER TABLE "pages_blocks_cta" ADD COLUMN "modal_button_text" varchar;
  ALTER TABLE "pages_blocks_cta" ADD COLUMN "form_id" integer;
  ALTER TABLE "pages_blocks_form_block" ADD COLUMN "show_title" boolean;
  ALTER TABLE "_pages_v_blocks_cta" ADD COLUMN "cta_type" "enum__pages_v_blocks_cta_cta_type" DEFAULT 'links';
  ALTER TABLE "_pages_v_blocks_cta" ADD COLUMN "modal_button_text" varchar;
  ALTER TABLE "_pages_v_blocks_cta" ADD COLUMN "form_id" integer;
  ALTER TABLE "_pages_v_blocks_form_block" ADD COLUMN "show_title" boolean;
  ALTER TABLE "pages_blocks_cta" ADD CONSTRAINT "pages_blocks_cta_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta" ADD CONSTRAINT "_pages_v_blocks_cta_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "pages_blocks_cta_form_idx" ON "pages_blocks_cta" USING btree ("form_id");
  CREATE INDEX "_pages_v_blocks_cta_form_idx" ON "_pages_v_blocks_cta" USING btree ("form_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_cta" DROP CONSTRAINT "pages_blocks_cta_form_id_forms_id_fk";
  
  ALTER TABLE "_pages_v_blocks_cta" DROP CONSTRAINT "_pages_v_blocks_cta_form_id_forms_id_fk";
  
  ALTER TABLE "pages_blocks_archive" ALTER COLUMN "style" SET DATA TYPE text;
  ALTER TABLE "pages_blocks_archive" ALTER COLUMN "style" SET DEFAULT 'long'::text;
  DROP TYPE "public"."enum_pages_blocks_archive_style";
  CREATE TYPE "public"."enum_pages_blocks_archive_style" AS ENUM('long');
  ALTER TABLE "pages_blocks_archive" ALTER COLUMN "style" SET DEFAULT 'long'::"public"."enum_pages_blocks_archive_style";
  ALTER TABLE "pages_blocks_archive" ALTER COLUMN "style" SET DATA TYPE "public"."enum_pages_blocks_archive_style" USING "style"::"public"."enum_pages_blocks_archive_style";
  ALTER TABLE "_pages_v_blocks_archive" ALTER COLUMN "style" SET DATA TYPE text;
  ALTER TABLE "_pages_v_blocks_archive" ALTER COLUMN "style" SET DEFAULT 'long'::text;
  DROP TYPE "public"."enum__pages_v_blocks_archive_style";
  CREATE TYPE "public"."enum__pages_v_blocks_archive_style" AS ENUM('long');
  ALTER TABLE "_pages_v_blocks_archive" ALTER COLUMN "style" SET DEFAULT 'long'::"public"."enum__pages_v_blocks_archive_style";
  ALTER TABLE "_pages_v_blocks_archive" ALTER COLUMN "style" SET DATA TYPE "public"."enum__pages_v_blocks_archive_style" USING "style"::"public"."enum__pages_v_blocks_archive_style";
  DROP INDEX "pages_blocks_cta_form_idx";
  DROP INDEX "_pages_v_blocks_cta_form_idx";
  ALTER TABLE "pages_blocks_cta" DROP COLUMN "cta_type";
  ALTER TABLE "pages_blocks_cta" DROP COLUMN "modal_button_text";
  ALTER TABLE "pages_blocks_cta" DROP COLUMN "form_id";
  ALTER TABLE "pages_blocks_form_block" DROP COLUMN "show_title";
  ALTER TABLE "_pages_v_blocks_cta" DROP COLUMN "cta_type";
  ALTER TABLE "_pages_v_blocks_cta" DROP COLUMN "modal_button_text";
  ALTER TABLE "_pages_v_blocks_cta" DROP COLUMN "form_id";
  ALTER TABLE "_pages_v_blocks_form_block" DROP COLUMN "show_title";
  DROP TYPE "public"."enum_pages_blocks_cta_cta_type";
  DROP TYPE "public"."enum__pages_v_blocks_cta_cta_type";`)
}
