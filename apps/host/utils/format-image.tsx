import TrailsIcon from "ui/assets/icons/trail-icon.svg";
import PlaylistIcon from "ui/assets/icons/playlist-icon.svg";
import FolderIcon from "ui/assets/icons/folder-icon.svg";

export const featuresImage = (id: number) => {
    let iconComponent;
    switch (id) {
        case 1:
            iconComponent = <TrailsIcon />;
            break;
        case 2:
            iconComponent = <PlaylistIcon />;
            break;
        case 3:
            iconComponent = <FolderIcon />;
            break;
    }
    return iconComponent;
};