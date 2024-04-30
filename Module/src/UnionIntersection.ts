{
    //Union Types
    // union declear -> | => any value exist

    type FrontendDeveloper = 'fakibazDeveloper' | 'juniorDeveloper'; // string literals
    type FullStackDeveloper = 'frontendDeveloper' | 'expertDeveloper';

    type Developer = FrontendDeveloper | FullStackDeveloper;

    const newDeveloper: Developer = 'juniorDeveloper';

    type User = {
        name: string;
        email?: string;
        gender: 'Male' | 'Female' | 'Other';
        BloodGroup: 'A+' | 'B+' | 'AB+' | 'A-' | 'B-' | '0+'
    }

    const user: User = {
        name: 'Rasel',
        email: 'chowdhuryrasel040@gmail.com',
        gender: 'Male',
        BloodGroup: "B-"
    }

    //Intersection
    // Intersection declear -> & = all value exist

    type FrontendDeveloperI = {
        skills: string[];
        designation1: 'Frontend Developer'
    }
    
    type BackendDeveloperI = {
        skills: string[];
        designation2: 'Backend Developer'
    }

    type FullStackDeveloperI = FrontendDeveloperI & BackendDeveloperI;

    const FullDeveloper: FullStackDeveloperI = {
        skills: ['Html', 'Css', 'Javascript','React', 'Express'],
        designation1: 'Frontend Developer',
        designation2: 'Backend Developer'
    }

}