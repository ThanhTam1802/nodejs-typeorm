import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Customer {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    firstName: string;

    // @Column()
    // lastName: string;

    // @Column()
    // address: string;

    // @Column()
    // addressDesc: string

    // @Column()
    // phone: number

    // @Column()
    // receiver: string

    // @Column()
    // note: string
};
