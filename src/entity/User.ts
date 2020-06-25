import {Entity, CreateDateColumn, ObjectIdColumn, ObjectID, Column,} from "typeorm";
import { NetworkInterfaceBase, type } from "os";
import { ColumnEnumOptions } from "typeorm/decorator/options/ColumnEnumOptions";
import * as moment from 'moment-timezone';


@Entity()
export class User {

    @CreateDateColumn()
    createdAt: Date

    @CreateDateColumn()
    updatedAt : Date;

    @CreateDateColumn()
    deletedAt : Date;
    
    @ObjectIdColumn()
    groupId: ObjectID[];

    
    @Column()
    answer:{
        type : 'enum',
        status : ['correct', 'wrong', 'partiallyCorrect'];
        text :string;
    }

    @Column()
    description : string;

    @Column()
    itemCategory : {
        categories:string,
        subCategories: {
            categories:string,
            subCategories:string
        }
    }
    

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

}
