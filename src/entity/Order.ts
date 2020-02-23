import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Order {

  @PrimaryGeneratedColumn()
  id: string;

  @Column({ name: "payment_method" })
  paymentMethod: string;

  @Column({ name: "order_date" })
  orderDate: string;

  @Column({ name: "platform" })
  platform: string;

  @Column({ name: "description", nullable: true })
  description: string

  // @Column({ name: "phone", nullable: true })
  // phone: number

  // @Column({ name: "receiver", nullable: true })
  // receiver: string

  // @Column({ name: "note", nullable: true })
  // note: string

};