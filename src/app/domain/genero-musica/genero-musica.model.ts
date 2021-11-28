import {IsNotEmpty, IsString} from "class-validator";

export class GeneroMusica {
  id: number;

  @IsString()
  @IsNotEmpty({message: 'Debe informar el nombre del genero'})
  nombreGenero: string;

}
