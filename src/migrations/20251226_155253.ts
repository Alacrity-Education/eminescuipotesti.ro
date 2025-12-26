import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_image_content_cells" ADD COLUMN "row_span" numeric DEFAULT 1;
  ALTER TABLE "_pages_v_blocks_image_content_cells" ADD COLUMN "row_span" numeric DEFAULT 1;
  ALTER TABLE "pages_blocks_image_content_cells" DROP COLUMN "row_spans";
  ALTER TABLE "_pages_v_blocks_image_content_cells" DROP COLUMN "row_spans";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_image_content_cells" ADD COLUMN "row_spans" numeric DEFAULT 1;
  ALTER TABLE "_pages_v_blocks_image_content_cells" ADD COLUMN "row_spans" numeric DEFAULT 1;
  ALTER TABLE "pages_blocks_image_content_cells" DROP COLUMN "row_span";
  ALTER TABLE "_pages_v_blocks_image_content_cells" DROP COLUMN "row_span";`)
}
