import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Customer {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ name: "first_name" })
    firstName: string;

    @Column({ name: "last_name" })
    lastName: string;

    @Column({ name: "address" })
    address: string;

    @Column({ name: "address_description", nullable: true })
    addressDesc: string

    @Column({ name: "phone", nullable: true })
    phone: number

    @Column({ name: "receiver", nullable: true })
    receiver: string

    @Column({ name: "note", nullable: true })
    note: string
};
