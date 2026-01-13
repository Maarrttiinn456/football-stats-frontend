type GoalsSplit = {
    count: number;
    average: number;
    first_goal: number;
    percentage?: number; // není u "all"
};

export type GoalsValue = {
    all: GoalsSplit;
    home: GoalsSplit;
    away: GoalsSplit;
};

export type ShotsValue = {
    total: number;
    on_target: number;
    on_target_pct: number | null;
    off_target: number;
    inside_box: number;
    outside_box: number;
    blocked: number;
    average: number;
    shot_frequency: number | null;
    shot_conversion_rate_pct: number;
};

export type PossessionValue = {
    count: number;
    average: number;
};

export type PassingValue = {
    passes_per_game: number;
    passes_per_goal: number;
    total_passes: number;
    passes_per_shot: number;
};

export type AttackingValue = {
    count: number;
    average: number;
};

export type InterceptionValue = {
    total_interceptions: number;
    interceptions_per_game: number;
};

export type TacklesValue = {
    count: number;
    average: number;
    tackles_per_foul: number;
    tackles_per_card: number;
};
