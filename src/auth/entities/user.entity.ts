import { Column, Entity, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate } from 'typeorm';


@Entity({ name: 'users' })
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ unique: true, type: 'text' })
    email: string;

    @Column({ type: 'text', select: false })
    password: string;

    @Column({ type: 'text' })
    fullName: string;

    @Column({ type: 'boolean', default: true })
    isActive: boolean;

    @Column({ type: 'text', array: true, default: [] })
    roles: string[];

    @BeforeInsert()
    normalizeInsertEmail() {
        this.email = this.email.toLowerCase();
    }

    @BeforeUpdate()
    normalizeUpdateEmail() {
        this.normalizeInsertEmail();
    }
}

