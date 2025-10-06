import { SetupState } from "../types/game";

class StorageState {
    static saveSetupState(state: SetupState) {
        localStorage.setItem('setup', JSON.stringify(state));
    }

    static loadSetupState(): SetupState | null {
        const saved = localStorage.getItem('setup');
        return saved ? JSON.parse(saved) : null;
    }
} 