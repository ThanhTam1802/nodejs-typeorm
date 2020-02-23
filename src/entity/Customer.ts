import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Customer {

    @PrimaryGeneratedColumn()
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

    @CreateDateColumn({ name: "create_date" })
    createDate: string

    @UpdateDateColumn({ name: "update_date" })
    updateDate: string

};
