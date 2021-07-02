import { Person } from "./Person";

class Student extends Person {
    private promo: string;

	constructor($promo: string, $surname: string, $firstname: string, $gender: string,
                 $age: number, $size: number, $weight: number) {
        super($surname, $firstname, $gender, $age, $size, $weight)
		this.promo = $promo;
	}
        


    /**
     * Getter $promo
     * @return {string}
     */
	public get $promo(): string {
		return this.promo;
	}

    /**
     * Setter $promo
     * @param {string} value
     */
	public set $promo(value: string) {
		this.promo = value;
	}

}