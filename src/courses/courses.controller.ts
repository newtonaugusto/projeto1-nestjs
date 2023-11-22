import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('courses')
export class CoursesController {
    @Get()
    findAll() {
        return "Listagem de cursos";
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        console.log(id)
        return 'Curso com id: ' + id;
    }

    @Post()
    create(){
        return;
    }
}
