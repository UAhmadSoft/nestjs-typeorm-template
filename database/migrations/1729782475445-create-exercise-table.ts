import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class createExercisesTable1729782475445 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'exercises',
        columns: [
          {
            name: 'id',
            type: 'int4',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'created_on',
            type: 'timestamptz',
            default: 'now()',
          },
          {
            name: 'updated_on',
            type: 'timestamptz',
            default: 'now()',
          },{
name:'title',
type:'varchar',
}
,{
name:'description',
type:'varchar',
}
,{
name:'image',
type:'varchar',
}
,{
name:'area',
type:'timestamp',
}
,{
name:'deal',
type:'int4',
},
,],
      }),
    );
await queryRunner.createForeignKeys('exercises', [new TableForeignKey({
name:'exercises_categories_fk1',
columnNames:['deal'],
referencedColumnNames:['id'],
referencedTableName:'categories',
onDelete:'CASCADE',
onUpdate:'CASCADE',
})
,]);
}
public async down(queryRunner: QueryRunner): Promise<void> {
await queryRunner.dropForeignKey('exercises', 'exercises_categories_fk1');
   await queryRunner.dropTable('exercises', true);
  }
}