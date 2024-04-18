import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Category } from './catagory.entity';
@Entity()
export class service {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ type: 'varchar', unique: true })
    ServiceID: string;

    @Column({ type: 'varchar', nullable: true })
    serviceName: string;

    @Column({ nullable: true })
    priceOptions: string;

    @Column({ type: 'varchar', nullable: true })
    type: string;

    // @OneToOne(
    //     () => Category,
    //     (Category) => Category.servicePrice,
    //     { onDelete: 'CASCADE' },
    // )
    // @JoinColumn({ name: 'catagoryId', referencedColumnName: 'catagoryId' })
    // category: Category;

    @CreateDateColumn()
    createdAt: Date;

}
