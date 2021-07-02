export class Person {


    /**
     * Getter $gender
     * @return {string}
     */
	public get $gender(): string {
		return this.gender;
	}

    /**
     * Setter $gender
     * @param {string} value
     */
	public set $gender(value: string) {
		this.gender = value;
	}
    private surname: string;
    private firstname: string;
    private gender: string;
    private age: number;
    private size: number;
    private weight: number;

    constructor($surname: string, $firstname: string, $gender: string, $age: number, $size: number, $weight: number) {
		this.surname = $surname;
		this.firstname = $firstname;
		this.gender = $gender;
		this.age = $age;
		this.size = $size;
		this.weight = $weight;
	}


    /**
     * Getter $surname
     * @return {string}
     */
	public get $surname(): string {
		return this.surname;
	}

    /**
     * Setter $surname
     * @param {string} value
     */
	public set $surname(value: string) {
		this.surname = value;
	}

    /**
     * Getter $firstname
     * @return {string}
     */
	public get $firstname(): string {
		return this.firstname;
	}

    /**
     * Setter $firstname
     * @param {string} value
     */
	public set $firstname(value: string) {
		this.firstname = value;
	}


    /**
     * Getter $age
     * @return {number}
     */
	public get $age(): number {
		return this.age;
	}

    /**
     * Setter $age
     * @param {number} value
     */
	public set $age(value: number) {
		this.age = value;
	}

    /**
     * Getter $size
     * @return {number}
     */
	public get $size(): number {
		return this.size;
	}

    /**
     * Setter $size
     * @param {number} value
     */
	public set $size(value: number) {
		this.size = value;
	}
    
    /**
     * Getter $weight
     * @return {number}
     */
	public get $weight(): number {
		return this.weight;
	}

    /**
     * Setter $weight
     * @param {number} value
     */
	public set $weight(value: number) {
		this.weight = value;
	}

}