import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class DatabaseService {
    constructor(private readonly datasource:DataSource){
    }
    getDataSource(){
        return this.datasource
    }
}
