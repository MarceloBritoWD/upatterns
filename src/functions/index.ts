import { generationOptions } from "../constants";

export function processAnswer(type: string) {
    const selected = generationOptions.find(item => item.name === type).shortcut;

    switch (selected) {
        case 'SMS':
            generateSMS();
            return;

        case 'SMSSB':
            generateSMSSB();
            return;

        case 'API':
            generateAPI()
            return;

        case 'SD':
            generateSD()
            return;

        case 'ECS':
            generateECS()
            return;

        case 'CBR':
            generateCBR()
            return;

        default:
            break;
    }

    return type;
}