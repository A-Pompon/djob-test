import { PipeTransform, BadRequestException } from '@nestjs/common';
import { ObjectSchema } from 'joi';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskSchema } from './dto/task.dto';



export class CreateTaskValidatorPipe implements PipeTransform {
    constructor(private schema: ObjectSchema) { }
    public transform(value: CreateTaskDto): CreateTaskDto {
        const result = this.schema.validate(value);
        if (result.error) {
            const errorMessages = result.error.details.map((d) => d.message).join();
            throw new BadRequestException(errorMessages);
        }
        return value;
    }
}