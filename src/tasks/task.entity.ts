import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class Task {
    @PrimaryColumn()
    public task_id: string;

    @Column()
    public first_date_of_execution: Date;

    @Column()
    public repeat: number;
}

export default Task;