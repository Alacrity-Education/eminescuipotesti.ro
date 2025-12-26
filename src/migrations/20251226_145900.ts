import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_image_content_cells" ADD COLUMN "row_spans" numeric DEFAULT 1;
  ALTER TABLE "pages_blocks_image_content" ADD COLUMN "cols_lg" numeric DEFAULT 2;
  ALTER TABLE "pages_blocks_image_content" ADD COLUMN "rows_lg" numeric DEFAULT 2;
  ALTER TABLE "_pages_v_blocks_image_content_cells" ADD COLUMN "row_spans" numeric DEFAULT 1;
  ALTER TABLE "_pages_v_blocks_image_content" ADD COLUMN "cols_lg" numeric DEFAULT 2;
  ALTER TABLE "_pages_v_blocks_image_content" ADD COLUMN "rows_lg" numeric DEFAULT 2;
  ALTER TABLE "pages_blocks_image_content_cells" DROP COLUMN "span_rows";
  ALTER TABLE "_pages_v_blocks_image_content_cells" DROP COLUMN "span_rows";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_image_content_cells" ADD COLUMN "span_rows" boolean;
  ALTER TABLE "_pages_v_blocks_image_content_cells" ADD COLUMN "span_rows" boolean;
  ALTER TABLE "pages_blocks_image_content_cells" DROP COLUMN "row_spans";
  ALTER TABLE "pages_blocks_image_content" DROP COLUMN "cols_lg";
  ALTER TABLE "pages_blocks_image_content" DROP COLUMN "rows_lg";
  ALTER TABLE "_pages_v_blocks_image_content_cells" DROP COLUMN "row_spans";
  ALTER TABLE "_pages_v_blocks_image_content" DROP COLUMN "cols_lg";
  ALTER TABLE "_pages_v_blocks_image_content" DROP COLUMN "rows_lg";`)
}
