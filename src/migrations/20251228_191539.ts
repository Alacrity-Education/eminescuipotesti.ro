import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "header_nav_items" ALTER COLUMN "link_label" DROP NOT NULL;
  ALTER TABLE "footer_sections_links" ALTER COLUMN "link_label" DROP NOT NULL;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "header_nav_items" ALTER COLUMN "link_label" SET NOT NULL;
  ALTER TABLE "footer_sections_links" ALTER COLUMN "link_label" SET NOT NULL;`)
}
