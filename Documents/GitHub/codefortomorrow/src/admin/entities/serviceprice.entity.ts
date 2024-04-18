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
export class servicePrice {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', unique: true })
    ServiceID: string;

    @Column({ type: 'varchar', nullable: true })
    Duration: string;

    @Column({ nullable: true })
    Price: number;

    @Column({ type: 'varchar', nullable: true })
    Type: string;

    // @OneToOne(
    //     () => Category,
    //     (Category) => Category.servicePrice,
    //     { onDelete: 'CASCADE' },
    // )
    // @JoinColumn({ name: 'catagoryId', referencedColumnName: 'catagoryId' })
    // Category: Category;

    @CreateDateColumn()
    createdAt: Date;

}
