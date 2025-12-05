export interface ClassSession {
    id: number;
    day: string;
    date: string;
    time: string;
    classType: string;
    duration: string;
    instructor: string;
    status: string;
}

export interface IconProps {
    className?: string;
    size?: number;
    color?: string;
}