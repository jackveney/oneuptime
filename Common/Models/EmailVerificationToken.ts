import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import ColumnType from '../Types/Database/ColumnType';
import ObjectID from '../Types/ObjectID';
import BaseModel from './BaseModel';
import User from './User';
import ColumnLength from '../Types/Database/ColumnLength';
import Email from '../Types/Email';
import TableColumn from '../Types/Database/TableColumn';
import CrudApiEndpoint from '../Types/Database/CrudApiEndpoint';
import Route from '../Types/API/Route';
import TableColumnType from '../Types/Database/TableColumnType';

@CrudApiEndpoint(new Route("/email-verification-token"))
@Entity({
    name: 'EmailVerificationToken',
})
export default class EmailVerificationToken extends BaseModel {
    @TableColumn({ manyToOneRelationColumn: 'userId', required: true, type: TableColumnType.Entity })
    @ManyToOne(
        (_type: string) => {
            return User;
        },
        {
            eager: false,
            nullable: false,
            onDelete: 'CASCADE',
            orphanedRowAction: 'nullify',
        }
    )
    @JoinColumn({ name: 'userId' })
    public user?: User;

    @TableColumn({type: TableColumnType.ObjectID})
    @Column({
        type: ColumnType.ObjectID,
        nullable: false,
        transformer: ObjectID.getDatabaseTransformer(),
    })
    public userId?: ObjectID;

    @TableColumn({type: TableColumnType.Email})
    @Column({
        type: ColumnType.Email,
        length: ColumnLength.Email,
        nullable: false,
        transformer: Email.getDatabaseTransformer(),
    })
    public email?: Email = undefined;

    @Index()
    @TableColumn({ required: true, unique: true, type: TableColumnType.ObjectID })
    @Column({
        type: ColumnType.ObjectID,
        nullable: false,
        unique: true,
        length: ColumnLength.ObjectID,
        transformer: ObjectID.getDatabaseTransformer(),
    })
    public token?: ObjectID;

    @TableColumn({ required: true, type: TableColumnType.Date })
    @Column({
        nullable: false,
        type: ColumnType.Date,
    })
    public expires?: Date = undefined;
}
