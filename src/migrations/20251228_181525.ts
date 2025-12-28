import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_card_block_cards_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_card_block_cards_link_type" AS ENUM('reference', 'custom');
  ALTER TABLE "pages_blocks_card_block_cards" RENAME COLUMN "link" TO "link_url";
  ALTER TABLE "_pages_v_blocks_card_block_cards" RENAME COLUMN "link" TO "link_url";
  ALTER TABLE "pages_blocks_card_block_cards" ADD COLUMN "link_type" "enum_pages_blocks_card_block_cards_link_type" DEFAULT 'reference';
  ALTER TABLE "pages_blocks_card_block_cards" ADD COLUMN "link_new_tab" boolean;
  ALTER TABLE "pages_blocks_card_block_cards" ADD COLUMN "link_label" varchar;
  ALTER TABLE "_pages_v_blocks_card_block_cards" ADD COLUMN "link_type" "enum__pages_v_blocks_card_block_cards_link_type" DEFAULT 'reference';
  ALTER TABLE "_pages_v_blocks_card_block_cards" ADD COLUMN "link_new_tab" boolean;
  ALTER TABLE "_pages_v_blocks_card_block_cards" ADD COLUMN "link_label" varchar;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_card_block_cards" RENAME COLUMN "link_url" TO "link";
  ALTER TABLE "_pages_v_blocks_card_block_cards" RENAME COLUMN "link_url" TO "link";
  ALTER TABLE "pages_blocks_card_block_cards" DROP COLUMN "link_type";
  ALTER TABLE "pages_blocks_card_block_cards" DROP COLUMN "link_new_tab";
  ALTER TABLE "pages_blocks_card_block_cards" DROP COLUMN "link_label";
  ALTER TABLE "_pages_v_blocks_card_block_cards" DROP COLUMN "link_type";
  ALTER TABLE "_pages_v_blocks_card_block_cards" DROP COLUMN "link_new_tab";
  ALTER TABLE "_pages_v_blocks_card_block_cards" DROP COLUMN "link_label";
  DROP TYPE "public"."enum_pages_blocks_card_block_cards_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_card_block_cards_link_type";`)
}
