import {
  Table, Column, DataType, Model, PrimaryKey, Default,
  AutoIncrement,
} from "sequelize-typescript";


@Table({ tableName: "Users" })
export class User extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.BIGINT)
    id?: number;


    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    user_id!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true,
    })
    email!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        defaultValue: "USER"
    })
    role!: string;
   
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    passwordHash!: string;
 

    @Column({
        type: DataType.DATE,
        allowNull: false,
        defaultValue: DataType.NOW,
    })
    createdAt!: Date;
}