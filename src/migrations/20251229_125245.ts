import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_hero_links" ALTER COLUMN "link_url" SET DEFAULT '#';
  ALTER TABLE "pages_blocks_cta_links" ALTER COLUMN "link_url" SET DEFAULT '#';
  ALTER TABLE "pages_blocks_content_columns" ALTER COLUMN "link_url" SET DEFAULT '#';
  ALTER TABLE "pages_blocks_card_block_cards" ALTER COLUMN "link_url" SET DEFAULT '#';
  ALTER TABLE "_pages_v_version_hero_links" ALTER COLUMN "link_url" SET DEFAULT '#';
  ALTER TABLE "_pages_v_blocks_cta_links" ALTER COLUMN "link_url" SET DEFAULT '#';
  ALTER TABLE "_pages_v_blocks_content_columns" ALTER COLUMN "link_url" SET DEFAULT '#';
  ALTER TABLE "_pages_v_blocks_card_block_cards" ALTER COLUMN "link_url" SET DEFAULT '#';
  ALTER TABLE "header_nav_items_sub_items" ALTER COLUMN "link_url" SET DEFAULT '#';
  ALTER TABLE "header_nav_items" ALTER COLUMN "link_url" SET DEFAULT '#';
  ALTER TABLE "footer_sections_links" ALTER COLUMN "link_url" SET DEFAULT '#';`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_hero_links" ALTER COLUMN "link_url" DROP DEFAULT;
  ALTER TABLE "pages_blocks_cta_links" ALTER COLUMN "link_url" DROP DEFAULT;
  ALTER TABLE "pages_blocks_content_columns" ALTER COLUMN "link_url" DROP DEFAULT;
  ALTER TABLE "pages_blocks_card_block_cards" ALTER COLUMN "link_url" DROP DEFAULT;
  ALTER TABLE "_pages_v_version_hero_links" ALTER COLUMN "link_url" DROP DEFAULT;
  ALTER TABLE "_pages_v_blocks_cta_links" ALTER COLUMN "link_url" DROP DEFAULT;
  ALTER TABLE "_pages_v_blocks_content_columns" ALTER COLUMN "link_url" DROP DEFAULT;
  ALTER TABLE "_pages_v_blocks_card_block_cards" ALTER COLUMN "link_url" DROP DEFAULT;
  ALTER TABLE "header_nav_items_sub_items" ALTER COLUMN "link_url" DROP DEFAULT;
  ALTER TABLE "header_nav_items" ALTER COLUMN "link_url" DROP DEFAULT;
  ALTER TABLE "footer_sections_links" ALTER COLUMN "link_url" DROP DEFAULT;`)
}
