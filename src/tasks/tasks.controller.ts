import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, UseInterceptors } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { CreateTaskValidatorPipe } from './validation.pipe';
import { TaskSchema } from './dto/task.dto';
import { ExceptionInterceptor } from 'src/logging.interceptor';
import { Injectable, Logger } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) { }
  private readonly logger = new Logger(TasksService.name);
  private sched: Date;

  @Post()
  @UsePipes(new CreateTaskValidatorPipe(TaskSchema))
  @UseInterceptors(ExceptionInterceptor)
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(createTaskDto);
  }
  @Get()
  findAll() {
    return this.tasksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tasksService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(+id, updateTaskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tasksService.remove(+id);
  }
}

function sched(sched: any) {
  throw new Error('Function not implemented.');
}

