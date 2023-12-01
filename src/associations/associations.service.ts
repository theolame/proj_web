import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Association } from './association.entity';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Equal, Repository } from 'typeorm';


@Injectable()
export class AssociationsService {

    constructor(
        @InjectRepository(Association)
    private repository: Repository<Association>,
    private userservice: UsersService
    ) {}

    async create(idUsers: number[], name: string): Promise<Association> {
        let Users: User[];
        idUsers.forEach(async element => {Users.push(await this.userservice.getid(element))});
        const association = new Association(await this.repository.count(), Users, name);
        this.repository.save(association)
        return association
    }

    async get() : Promise<Repository<Association>>{
         return this.repository
    }

    async getid(id:number):Promise<Association>{
        return await this.repository.findOne({where: {id: Equal(id)}})
    }

    async getMembers(id: number): Promise<User[]> {
        const asso = await this.getid(id)
        if (asso==undefined){
            return undefined;
        }
        return asso.Users
        }

    async put(id:number,Users:User[],name:string):Promise<Association>{
        const association = await this.repository.findOne({where: {id: Equal(id)}})
        if ( association !== undefined){
            if (Users !== undefined){
                association.Users = Users
            }
            if (name !== undefined){
                association.name = name
            }
        }
        return association
    }

    async delete(id:number):Promise<Boolean>{
        return (await this.repository.delete(id)).affected!==0
    }
}
