import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_card_block_cards" ADD COLUMN "with_link" boolean DEFAULT false;
  ALTER TABLE "_pages_v_blocks_card_block_cards" ADD COLUMN "with_link" boolean DEFAULT false;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_card_block_cards" DROP COLUMN "with_link";
  ALTER TABLE "_pages_v_blocks_card_block_cards" DROP COLUMN "with_link";`)
}
