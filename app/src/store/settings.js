import Store from ":softvisio/store/settings";
import SettingsModel from "@/models/settings";

export default class extends Store {
    get model () {
        return SettingsModel;
    }
}
