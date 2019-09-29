export interface GluegunQuestionType {
    type: string;
    name: string;
    message: string;
    choices?: string[];
    default?: string;
}