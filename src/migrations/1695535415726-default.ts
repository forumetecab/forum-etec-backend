import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1695535415726 implements MigrationInterface {
    name = 'Default1695535415726'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "fullName" character varying(255) NOT NULL, "email" character varying(255) NOT NULL, "birthday" date NOT NULL, "day" character(2) NOT NULL, "thematic" character varying(255) NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
