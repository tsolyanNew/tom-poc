export interface IPatientSummary {
    patientId: string;
    summaryHeader?: ISummaryHeader;
    vitals?: IVitals;
    conditions?: IConditions;
    labs?: ILabs;
    medications?: IMedications
    allergies?: IAllergies;
    notes?: any; // notes interface TBD
}

export interface ISummaryHeader {
    patient: {
        id: string;
        firstName: string;
        lastName: string;
        dob: Date;
        sex: string;
        address: {
            street: string;
            city: string;
            state: string;
            zip: number;
        };
    };
    provider: {
        id: string;
        title: string;
        firstName: string;
        lastName: string;
        status: string;
    };
    organizations: Array<{
        name: string;
        id: string;
    }>;
};

export interface IVitals {
    height: {
        date: Date;
        value: string | number;
    };
    weight: {
        date: Date;
        value: string | number;
    };
    bsa: string;
    ccdURL: string;
};

export interface IConditions {
    items: Array<{
        id: string;
        code: string;
        description: string;
        date: Date;
    }>;
    ccdURL: string;
};

export interface ILabs {
    items: Array<{
        id: string;
        date: Date;
        doctor: string;
        testType: {
            name: string;
            ccdURL: string;
        };
    }>;
};

export interface IMedications {
    items: Array<{
        id: string;
        label: string;
        items: Array<string>;
    }>; 
    ccdURL: string;
};

export interface IAllergies {
    items: Array<{
        id: string;
        activeAllergy: string;
        reaction: {
            value: string;
            severity: string
        };
    }>;
    ccdURL: string;
};

export interface IPatientSummaryStoreResponse {
    payload: {
        patientSummary: IPatientSummary;
        loading: boolean;
    };
}