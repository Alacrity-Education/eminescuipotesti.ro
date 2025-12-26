import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "posts" ADD COLUMN "event_date" timestamp(3) with time zone;
  ALTER TABLE "_posts_v" ADD COLUMN "version_event_date" timestamp(3) with time zone;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "posts" DROP COLUMN "event_date";
  ALTER TABLE "_posts_v" DROP COLUMN "version_event_date";`)
}
