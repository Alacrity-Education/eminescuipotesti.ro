import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_card_block_cards_background_style" AS ENUM('none', 'image');
  CREATE TYPE "public"."enum__pages_v_blocks_card_block_cards_background_style" AS ENUM('none', 'image');
  ALTER TABLE "pages_blocks_card_block_cards" ADD COLUMN "background_style" "enum_pages_blocks_card_block_cards_background_style" DEFAULT 'none';
  ALTER TABLE "pages_blocks_card_block_cards" ADD COLUMN "background_image_id" integer;
  ALTER TABLE "pages_blocks_card_block_cards" ADD COLUMN "background_opacity" numeric DEFAULT 10;
  ALTER TABLE "_pages_v_blocks_card_block_cards" ADD COLUMN "background_style" "enum__pages_v_blocks_card_block_cards_background_style" DEFAULT 'none';
  ALTER TABLE "_pages_v_blocks_card_block_cards" ADD COLUMN "background_image_id" integer;
  ALTER TABLE "_pages_v_blocks_card_block_cards" ADD COLUMN "background_opacity" numeric DEFAULT 10;
  ALTER TABLE "pages_blocks_card_block_cards" ADD CONSTRAINT "pages_blocks_card_block_cards_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_card_block_cards" ADD CONSTRAINT "_pages_v_blocks_card_block_cards_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "pages_blocks_card_block_cards_background_image_idx" ON "pages_blocks_card_block_cards" USING btree ("background_image_id");
  CREATE INDEX "_pages_v_blocks_card_block_cards_background_image_idx" ON "_pages_v_blocks_card_block_cards" USING btree ("background_image_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_card_block_cards" DROP CONSTRAINT "pages_blocks_card_block_cards_background_image_id_media_id_fk";
  
  ALTER TABLE "_pages_v_blocks_card_block_cards" DROP CONSTRAINT "_pages_v_blocks_card_block_cards_background_image_id_media_id_fk";
  
  DROP INDEX "pages_blocks_card_block_cards_background_image_idx";
  DROP INDEX "_pages_v_blocks_card_block_cards_background_image_idx";
  ALTER TABLE "pages_blocks_card_block_cards" DROP COLUMN "background_style";
  ALTER TABLE "pages_blocks_card_block_cards" DROP COLUMN "background_image_id";
  ALTER TABLE "pages_blocks_card_block_cards" DROP COLUMN "background_opacity";
  ALTER TABLE "_pages_v_blocks_card_block_cards" DROP COLUMN "background_style";
  ALTER TABLE "_pages_v_blocks_card_block_cards" DROP COLUMN "background_image_id";
  ALTER TABLE "_pages_v_blocks_card_block_cards" DROP COLUMN "background_opacity";
  DROP TYPE "public"."enum_pages_blocks_card_block_cards_background_style";
  DROP TYPE "public"."enum__pages_v_blocks_card_block_cards_background_style";`)
}
