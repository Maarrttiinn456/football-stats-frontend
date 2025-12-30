import type { ApiResponse } from '../api';
import type { Participant } from '../entities/Participant';
import type { StandingDetail } from '../entities/standings/standingDetail';
import type { StandingForm } from '../entities/standings/standingForm';
import type { StandingRule } from '../entities/standings/standingRule';

export type Standing = {
    id: number;
    position: number;
    result: 'equal' | 'up' | 'down' | null;
    points: number;

    participant?: Participant;
    rule?: StandingRule;
    details?: StandingDetail[];
    form?: StandingForm[];
};

export type StandingsTableRowBase = {
    id: number;
    position: number;
    points: number;
    goalDifference: number;
    matchesPlayed: number;

    participant: {
        name: string;
        image_path: string;
    };

    rule: {
        id: number;
        name: string;
        code: string;
    };
};

export type StandingsTableRowExtended = StandingsTableRowBase & {
    form: Array<'W' | 'D' | 'L'>;

    goalFor: number;
    goalAgainst: number;

    overallWon: number;
    overallDraw: number;
    overallLost: number;
};

export type StandingsTableRow = {
    base: StandingsTableRowBase[];
    extended: StandingsTableRowExtended[];
};

export type StandingsResponse = ApiResponse<Standing[]>;
