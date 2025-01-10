import { IsInt, IsPositive, IsString, Min, MinLength } from "class-validator";

export class CreatePokemonDto {
    @IsInt({ message: "The number must be integer"})
    @IsPositive({ message: "The number must be positive"})
    @Min(1)
    no: number;
    
    @IsString({ message: "The name must be string"})
    @MinLength(1)
    name: string;
}
