import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

export class Cuisine {
  @Column('text')
  titre:string;

  @Column('text')
  imagePath:string;

  @Column('int')
  duree:number;

}
