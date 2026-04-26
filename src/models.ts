export class GiveItem {
    constructor(public ItemID: string, public Count: number) {
        if (!ItemID) throw new Error("ItemID must not be empty");
        if (Count <= 0) throw new Error("Count must be a positive integer");
    }

    /** @internal */
    to_dict() {
        return { "ItemID": this.ItemID, "Count": this.Count };
    }
}

export class GivePal {
    constructor(public PalID: string, public Level: number) {
        if (!PalID) throw new Error("PalID must not be empty");
        if (Level <= 0) throw new Error("Level must be a positive integer");
    }

    /** @internal */
    to_dict() {
        return { "PalID": this.PalID, "Level": this.Level };
    }
}

export class GivePalEgg {
    constructor(
        public EggID: string,
        public PalID?: string,
        public PalTemplate?: string,
        public Level?: number
    ) {
        if (!EggID) throw new Error("EggID must not be empty");
        // XOR check: exactly one must be provided [cite: 69]
        if ((PalID === undefined) === (PalTemplate === undefined)) {
            throw new Error("exactly one of PalID or PalTemplate must be provided");
        }
        if (Level !== undefined && Level <= 0) {
            throw new Error("Level must be a positive integer when provided");
        }
    }

    /** @internal */
    to_dict() {
        const payload: any = { "EggID": this.EggID };
        if (this.PalID !== undefined) payload["PalID"] = this.PalID;
        if (this.PalTemplate !== undefined) payload["PalTemplate"] = this.PalTemplate;
        if (this.Level !== undefined) payload["Level"] = this.Level;
        return payload;
    }
}

export class GiveProgressionRequest {
    constructor(
        public EXP?: number,
        public Lifmunks?: number,
        public TechnologyPoints?: number,
        public AncientTechnologyPoints?: number
    ) {
        if (!EXP && !Lifmunks && !TechnologyPoints && !AncientTechnologyPoints) {
            throw new Error("at least one progression field must be provided");
        }
        const fields = { EXP, Lifmunks, TechnologyPoints, AncientTechnologyPoints };
        for (const [name, val] of Object.entries(fields)) {
            if (val !== undefined && val <= 0) throw new Error(`${name} must be a positive integer`);
        }
    }

    /** @internal */
    to_dict() {
        const payload: any = {};
        if (this.EXP !== undefined) payload["EXP"] = this.EXP;
        if (this.Lifmunks !== undefined) payload["Lifmunks"] = this.Lifmunks;
        if (this.TechnologyPoints !== undefined) payload["TechnologyPoints"] = this.TechnologyPoints;
        if (this.AncientTechnologyPoints !== undefined) payload["AncientTechnologyPoints"] = this.AncientTechnologyPoints;
        return payload;
    }
}