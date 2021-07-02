import { Person } from "./Person";
import { Cours } from "./enumCours"

export class Trainer extends Person {
    private cours: Cours[];

    constructor($cours: Cours[], $surname: string, $firstname: string, $gender: string,
        $age: number, $size: number, $weight: number) {
            super($surname, $firstname, $gender, $age, $size, $weight)
            this.cours = $cours;
    }


    /**
     * Getter $cours
     * @return {Cours[]}
     */
	public get $cours(): Cours[] {
		return this.cours;
	}

    /**
     * Setter $cours
     * @param {Cours[]} value
     */
	public set $cours(value: Cours[]) {
		this.cours = value;
	}


}