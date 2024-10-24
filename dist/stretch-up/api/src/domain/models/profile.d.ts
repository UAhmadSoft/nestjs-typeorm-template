export declare class ProfileModel {
    fullname: string;
    reminder_time: Date;
    flexibility_level: string[];
    stretching_time: string[];
    goal: string[];
    discomfort_areas: string[];
    user: number;
}
export declare class FetchProfileModel {
    id: number;
    fullname: string;
    reminder_time: Date;
    flexibility_level: string[];
    stretching_time: string[];
    goal: string[];
    discomfort_areas: string[];
    user: number;
}
export declare class UpdateProfileModel {
    fullname?: string;
    reminder_time?: Date;
    flexibility_level?: string[];
    stretching_time?: string[];
    goal?: string[];
    discomfort_areas?: string[];
    user?: number;
}
