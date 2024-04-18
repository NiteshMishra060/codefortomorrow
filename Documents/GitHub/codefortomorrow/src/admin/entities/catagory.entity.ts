import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { servicePrice } from "./serviceprice.entity";
@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'catagoryId', unique: true })
    catagoryId: string;

    @Column()
    CategoryName: string;

    // @OneToOne(
    //     () => servicePrice,
    //     (servicePrice) => servicePrice.Category,
    //     { onDelete: 'CASCADE' },
    // )
    // servicePrice: servicePrice;

}
