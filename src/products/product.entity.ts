import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true, nullable: false})
    name: string;

    @Column({nullable: false})
    description: string;

    @Column({nullable: false})
    price: number;

    @Column()
    img: string;

    @Column({default: true})
    isAvaliable: boolean;
}